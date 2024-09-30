import DangerAlert from "@/app/component/alert/danger-alert";
import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const prisma = new PrismaClient();

const post = z.object({
  title: z.string(),
  message: z.string(),
});

export async function getFreeBoards(page: number, lastId: number) {
  const freeboards = await prisma.freeBoard.findMany({
    orderBy: {
      created_at: "desc",
    },
    take: page,
    skip: lastId ? 1 : 0,
    ...(lastId && { cursor: { id: lastId } }),
  });
  return freeboards;
}

export async function POST(request: Request) {
  // const { title, message } = schema.parse(await request.body);
  // const { title, message } = await request.formData;
  const formData = await request.formData();
  const title = formData.get("title");
  const message = formData.get("message");
  const parsedData = post.parse({
    title: title,
    message: message,
  });

  const response = await prisma.freeBoard.create({
    data: {
      title: parsedData.title,
      body: parsedData.message,
      user_id: BigInt(1),
    },
  });

  return NextResponse.json(
    JSON.stringify(
      response,
      (key, value) => (typeof value === "bigint" ? value.toString() : value) // return everything else unchanged
    ),
    { status: 200 }
  );
}
