"use server";

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params;
  const paramId = parseInt(params.id);

  const freeboards = await getFreeBoardAndUser(paramId);
  console.log("freeboards" + freeboards);
  return NextResponse.json(
    JSON.stringify(
      freeboards,
      (key, value) => (typeof value === "bigint" ? value.toString() : value) // return everything else unchanged
    ),
    { status: 200 }
  );
}

const getFreeBoardAndUser = async (id: number) => {
  try {
    const board = await prisma.freeBoard.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        title: true,
        body: true,
        created_at: true,
        modified_at: true,
        like_num: true,
        User: {
          select: {
            id: true,
            nick_name: true,
          },
        },
      },
    });
    return board;
  } catch (error) {
    console.log("Error in get FreeBoard Detail page " + error);
  }
};
