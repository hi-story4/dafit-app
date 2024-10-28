"use server";
import { BoardDetailData } from "@/app/board/free/api";
import CommentBoard from "@/app/component/commentBoard";
import UserPersonProfileAccountIcon from "@/app/component/logo/user_person_profile_account_icon";

export default async function freeBoardDetail(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = await params.id;
  const { board, comments, created_at, modified_at, commentCount } =
    await BoardDetailData(id);

  return (
    <div className="w-full max-w-2xl mx-auto py-6">
      <h1 className="text-3xl font-bold mb-4">{board.title}</h1>
      <div className="flex justify-between items-center mb-2">
        <span className="flex items-center">
          <UserPersonProfileAccountIcon color="var(--color-fill)" />
          <span className="pl-1">{board.User.nick_name}</span>
        </span>

        <div className="text-sm text-gray-600">
          <span>{created_at}</span>
        </div>
      </div>

      <div className="border-t py-4 mb-4 min-h-[200px] md:min-h-[300px]">
        <p className="whitespace-pre-wrap">{board.body.toString()}</p>
      </div>
      <CommentBoard
        id={id}
        board={board}
        comments={comments}
        commentCount={commentCount}
      />
    </div>
  );
}
