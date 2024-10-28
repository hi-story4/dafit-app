"use client";

import { useState } from "react";
import HeartToggle from "../logo/heartToggle";
import SubmitRound from "../buttons/submit-round";
import { useRouter } from "next/navigation";

export default function CommentInput({
  id,
  countFunction,
}: {
  id: string;
  countFunction: (isLiked: boolean) => void;
}) {
  const [comment, setComment] = useState("");
  const [liked, setLiked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const handleLike = () => {
    const toggled = !liked;
    setLiked(toggled);
    countFunction(toggled);
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = async (formData: FormData) => {
    if (isSubmitting || comment.trim() === "") return;

    try {
      setIsSubmitting(true);
      // API 호출 로직

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/board/${id}/comment`,
        {
          method: "POST",
          body: formData,
        }
      );

      setComment("");
      router.refresh();
    } catch (error) {
      console.error("댓글 제출 중 오류 발생:", error);
    } finally {
      setIsSubmitting(false);
    }
    setComment("");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 flex items-center justify-between max-w-2xl mx-auto">
      {/* 좋아요 버튼 */}
      <button onClick={handleLike} className="flex items-center">
        <HeartToggle
          color={liked ? "var(--color-primary)" : "var(--color-fill)"}
        />
      </button>

      {/* 댓글 입력창 */}
      <form action={handleCommentSubmit} className="flex-1 ml-4 text-black">
        <div className="flex">
          <input
            type="text"
            name="comment"
            value={comment}
            onChange={handleCommentChange}
            placeholder="댓글을 입력해주세요."
            className="w-full rounded-full py-2 px-4 border-none focus:border-solid focus:border-gray-400 focus:ring-0 focus:outline-none"
          />
          <div className="flex items-center ml-3">
            <SubmitRound />
          </div>
        </div>
      </form>

      {/* 댓글 아이콘 (예: 전송 버튼) */}
    </div>
  );
}
