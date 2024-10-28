// import RoundButton from "@/app/component/buttons/round-button";
import FloatButton from "@/app/component/buttons/floatButton";
import Loading from "@/app/component/tool/loading";
import ListComponent from "@/app/component/card/card";
import SearchBar from "@/app/component/input/searchBar";
import Link from "next/link";
import { Suspense } from "react";
import { fetchBoards } from "./api";

interface Board {
  id: string;
  title: string;
  body: string;
  like_num: number;
  created_at: string;
}

export default async function freeBoard() {
  const initialPage = 15;
  const initialLastId = 0;
  const response = await fetchBoards(initialPage, initialLastId);

  const boards: Board[] = JSON.parse(response);

  return (
    <div className="w-full grid place-items-center">
      <h1>자유 게시판</h1>

      <div className="w-full justify-center items-center mx-auto max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
        <div className="relative w-full flex justify-end sticky top-20">
          <div className="w-64 ">
            <SearchBar />
          </div>
        </div>
        <ul className="w-full mx-auto  divide-y divide-gray-200 dark:divide-gray-700">
          <Suspense fallback={<Loading />}>
            {boards.length > 0 ? (
              boards.map((board: Board) => (
                <ListComponent
                  key={board.id}
                  id={board.id}
                  title={board.title}
                  body={board.body}
                  heart={board.like_num}
                  created_at={board.created_at}
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

      <Link href="/board/free/detail">
        <FloatButton name="글쓰기" />
      </Link>
    </div>
  );
}
