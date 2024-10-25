interface BoardDetail {
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

export default async function freeBoardDetail({
  params,
}: {
  params: { id: string };
}) {
  const id = await params.id;
  const response = await getFreeBoardAndUser(id);
  const board: BoardDetail = JSON.parse(response);

  // created_at = modified_at이면 그냥 보여주고 다르면 수정됨 표시

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{board.title}</h1>
      <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
        <span>작성자: {board.User.nick_name}</span>
        <span>작성일: {new Date(board.created_at).toLocaleDateString()}</span>
      </div>
      <div className="border-t border-b py-4 mb-4">
        <p className="whitespace-pre-wrap">{board.body.toString()}</p>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600">
          수정일: {new Date(board.modified_at).toLocaleDateString()}
        </span>
        <div className="flex items-center">
          <svg
            className="w-5 h-5 text-red-500 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
          <span>{board.like_num}</span>
        </div>
      </div>
    </div>
  );
}

async function getFreeBoardAndUser(id: string) {
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
