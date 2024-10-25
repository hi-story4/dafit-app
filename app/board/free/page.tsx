// import RoundButton from "@/app/component/buttons/round-button";
import ListComponent from "@/app/component/list";
import Loading from "@/app/component/loading";
import SearchBar from "@/app/component/searchBar";
import Link from "next/link";
import { Suspense } from "react";

interface Board {
  id: string;
  title: string;
  body: string;
  User: {
    nick_name: string;
  };
  like_num: number;
}

async function fetchBoards(page: number, lastId: number) {
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

export default async function freeBoard() {
  const initialPage = 15;
  const initialLastId = 0;
  const response = await fetchBoards(initialPage, initialLastId);

  const boards: Board[] = JSON.parse(response);

  return (
    <div className="w-full grid place-items-center">
      <h1>자유 게시판</h1>

      <div className="xs:bg-white sm:bg-black md:bg-red-900 lg:bg-blue-900 xl:bg-orange-900 2xl:bg-green-900 3xl:bg-purple-900">
        color
      </div>
      <div className="w-full justify-center items-center mx-auto max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
        <div className="flex flex-row-reverse">
          <SearchBar />
        </div>
        <ul className="w-full mx-auto  divide-y divide-gray-200 dark:divide-gray-700">
          <Suspense fallback={<Loading />}>
            {boards.length > 0 ? (
              boards.map((board: Board) => (
                <ListComponent
                  id={board.id}
                  title={board.title}
                  body={board.body}
                  nickname={board.User.nick_name}
                  heart={board.like_num}
                />
              ))
            ) : (
              <p className="text-center py-4 text-gray-500">
                글을 작성해주세요!
              </p>
            )}
          </Suspense>
        </ul>
      </div>
      {/* <RoundButton /> */}
      <Link href="/board/free/detail">글쓰기</Link>
    </div>
  );
}
