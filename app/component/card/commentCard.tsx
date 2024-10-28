import { formatDate } from "@/lib/dateFromat";
import UserPersonProfileAccountIcon from "../logo/user_person_profile_account_icon";

interface Comment {
  id: string;
  created_at: string;
  modified_at: string;
  User: {
    id: string;
    nick_name: string;
  };
  comment: string;
}
export default function CommentCard({ comment }: { comment: Comment }) {
  return (
    <div className="w-full lg:p-8 p-4 bg-white rounded-3xl border border-gray-200 flex-col flex text-black">
      <div className="flex justify-between items-center">
        <span className="flex items-center">
          <UserPersonProfileAccountIcon color="black" />
          <span className="pl-1">{comment.User.nick_name}</span>
        </span>
        <div className="text-sm text-gray-600">
          {formatDate(comment.created_at)}
        </div>
      </div>
      <div className="p-2">{comment.comment}</div>
    </div>
  );
}
