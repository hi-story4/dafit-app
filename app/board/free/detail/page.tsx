"use client";
import PostButton from "@/app/component/buttons/post-button";
import TextArea from "@/app/component/input/textarea";
import TitleInput from "@/app/component/input/titleinput";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function freeBoardDetail() {
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  async function postBoard(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    if (window.confirm("등록하시겠습니까?")) {
      try {
        setSubmitting(true);

        const formData = new FormData(event.currentTarget);
        const response = await fetch("/api/board", {
          method: "POST",
          body: formData,
        });
      } catch (error) {
        console.log(error);
      } finally {
        setSubmitting(false);
        router.push("/board/free");
      }
    }
  }

  return (
    <form onSubmit={postBoard} className="flex flex-col w-full">
      <TitleInput />
      <TextArea />
      <div className="my-5">
        <PostButton disabled={submitting} />
      </div>
    </form>
  );
}
