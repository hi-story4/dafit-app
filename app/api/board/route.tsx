"use server";

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page") || "15", 10);
  const lastId = parseInt(searchParams.get("lastId") || "0", 10);

  const freeboards = await prisma.freeBoard.findMany({
    orderBy: {
      created_at: "desc",
    },
    take: page,
    skip: lastId ? 1 : 0,
    ...(lastId && { cursor: { id: lastId } }),
    select: {
      id: true,
      title: true,
      body: true,
      like_num: true,
      User: {
        select: {
          nick_name: true,
        },
      },
    },
  });
  console.log("freeboards" + freeboards);
  return NextResponse.json(
    JSON.stringify(
      freeboards,
      (key, value) => (typeof value === "bigint" ? value.toString() : value) // return everything else unchanged
    ),
    { status: 200 }
  );
}
export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const title = formData.get("title");
  const message = formData.get("message");

  const post = z.object({
    title: z.string(),
    message: z.string(),
  });

  const parsedData = post.parse({
    title: title,
    message: message,
  });
  try {
    const response = await prisma.freeBoard.create({
      data: {
        title: parsedData.title,
        body: parsedData.message,
        user_id: BigInt(1),
      },
    });

    revalidatePath("/board/free");
    return NextResponse.json(
      JSON.stringify(
        response,
        (key, value) => (typeof value === "bigint" ? value.toString() : value) // return everything else unchanged
      ),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}
