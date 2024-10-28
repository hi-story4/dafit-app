interface CommentBarProps {
  count: number;
}

export default function CommentBar({ count }: CommentBarProps) {
  return (
    <div className="px-2 py-2 text-gray-500">
      <span>댓글 </span>
      <span>{count.toString()}</span>
    </div>
  );
}
