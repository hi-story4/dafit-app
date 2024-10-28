"use server";

import { NextRequest, NextResponse } from "next/server";
import { PrismaClient, Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export async function POST(
  request: NextRequest,
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params;
  const boardId = parseInt(params.id);

  const formData = await request.formData();
  const comment = formData.get("comment");

  // Check if comment exists and is a string
  if (typeof comment !== "string") {
    return NextResponse.json(
      { error: "Comment must be a string" },
      { status: 400 }
    );
  }

  // Set maximum character limit (adjust as needed)
  const MAX_COMMENT_LENGTH = 500;

  // Check comment length
  if (comment.length > MAX_COMMENT_LENGTH) {
    return NextResponse.json(
      {
        error: `Comment exceeds maximum length of ${MAX_COMMENT_LENGTH} characters`,
      },
      { status: 400 }
    );
  }

  try {
    const newComment = await prisma.$transaction([
      prisma.comment.create({
        data: {
          comment: comment,
          board_id: boardId,
          user_id: BigInt(1), // Assuming a default user ID, adjust as needed
        },
      }),
    ]);

    // revalidatePath(`/board/free/detail/${boardId}`, "page");

    return NextResponse.json(
      JSON.stringify(newComment, (key, value) =>
        typeof value === "bigint" ? value.toString() : value
      ),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating comment:", error);
    return NextResponse.json(
      { error: "Failed to create comment" },
      { status: 500 }
    );
  }
}

export async function GET(
  request: NextRequest,
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params;
  const paramId = parseInt(params.id);

  const comments = await getComments(paramId);

  return NextResponse.json(
    JSON.stringify(
      comments,
      (key, value) => (typeof value === "bigint" ? value.toString() : value) // return everything else unchanged
    ),
    { status: 200 }
  );
}

const getComments = async (id: number) => {
  const query: Prisma.CommentFindManyArgs = {
    where: {
      board_id: id,
    },
    include: {
      User: {
        select: {
          id: true,
          nick_name: true,
        },
      },
    },
    orderBy: {
      created_at: "asc",
    },
  };
  const [comments, count] = await prisma.$transaction([
    prisma.comment.findMany(query),
    prisma.comment.count({ where: query.where }),
  ]);
  // count는 number 타입입니다 (int 값)
  // https://stackoverflow.com/questions/74328100/prisma-find-many-and-count-in-one-request/74334140#74334140

  return {
    pagination: {
      total: count,
    },
    data: comments,
  };
};
