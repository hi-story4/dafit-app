// import RoundButton from "@/app/component/buttons/round-button";
import { getFreeBoards } from "@/app/api/board/route";
import ListComponent from "@/app/component/list";
import SearchBar from "@/app/component/searchBar";
import Link from "next/link";

export default function freeBoard() {
  async function getFreeBoard() {
    const page = 10;
    const lastId = 1;
    const boards = await getFreeBoards(page, lastId);

    
  }

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
          <ListComponent
            title="title"
            nickname="nickname"
            view={13}
            heart={12}
          />
          <ListComponent
            title="title"
            nickname="nickname"
            view={13}
            heart={12}
          />
        </ul>
      </div>
      {/* <RoundButton /> */}
      <Link href="/board/free/detail">글쓰기</Link>
    </div>
  );
}
