"use server";

import { formatDate } from "@/lib/dateFromat";

export interface BoardDetail {
  id: string;
  title: string;
  body: Text;
  created_at: string;
  modified_at: string;
  like_num: number;
  User: {
    id: string;
    nick_name: string;
  };
}
export interface Comments {
  pagination: {
    total: number;
  };
  data: Comment[];
}
export interface Comment {
  id: string;
  created_at: string;
  modified_at: string;
  User: {
    id: string;
    nick_name: string;
  };
  comment: string;
}
export async function fetchBoards(page: number, lastId: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/board?page=${page}&lastId=${lastId}`,
    {
      method: "GET",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch boards ");
  }
  return response.json();
}
export async function BoardDetailData(id: string) {
  const response = await getFreeBoardAndUser(id);
  const board: BoardDetail = JSON.parse(response);
  const json = await getComments(id);
  const comments: Comments = JSON.parse(json);

  return {
    board,
    comments,
    created_at: formatDate(board.created_at),
    modified_at: formatDate(board.modified_at),
    commentCount: comments.pagination.total,
  };
}
export async function getComments(id: string) {
  const responseComment = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/board/${id}/comment`,
    {
      method: "GET",
    }
  );
  if (!responseComment.ok) {
    throw new Error("Failed to fetch comments");
  }

  return responseComment.json();
}

export async function getFreeBoardAndUser(id: string) {
  const freeBoard = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/board/${id}`,
    {
      method: "GET",
    }
  );
  if (!freeBoard.ok) {
    throw new Error("Failed to fetch boards ");
  }

  return freeBoard.json();
}
