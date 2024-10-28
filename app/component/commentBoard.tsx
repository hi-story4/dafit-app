"use client";

import { BoardDetail, Comments } from "@/app/board/free/api";
import { useState } from "react";
import CommentBar from "./bar/commentBar";
import CommentCard from "./card/commentCard";
import CommentInput from "./input/commentInput";
import Heart from "./logo/heart";

export default function CommentBoard({
  id,
  board,
  comments,
  commentCount,
}: {
  id: string;
  board: BoardDetail;
  comments: Comments;
  commentCount: number;
}) {
  const like_num = board.like_num;
  const [likes, setLikes] = useState(board.like_num);

  const countFunction = (isLiked: boolean) => {
    console.log("isLiked", isLiked);
    setLikes(isLiked ? like_num + 1 : like_num);
  };
  return (
    <>
      <div>
        <div className="flex justify-between border-b pb-4">
          <div></div>
          <div className="flex">
            <Heart />
            <span>{likes}</span>
          </div>
        </div>
        {/* 좋아요 아래 선 */}
      </div>
      <div>
        <CommentBar count={commentCount} />
      </div>
      <div className="flex justify-center items-center mt-4">
        {commentCount != 0 ? (
          <div className="w-full flex-col justify-start items-start gap-8 flex">
            {comments.data.map((comment) => (
              <CommentCard key={comment.id} comment={comment} />
            ))}
          </div>
        ) : (
          <div className="text-gray-400">댓글을 달아주세요!</div>
        )}
      </div>
      <CommentInput id={id} countFunction={countFunction} />
    </>
  );
}
