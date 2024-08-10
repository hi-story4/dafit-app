import BoardCardComponent from "./component/boardcard";
import WideLogo from "./component/logo/logo2:1";

export default function Home() {
  return (
    <div className="w-full">
      <div className="w-full  max-w-[1180px] h-full mx-auto flex flex-col justify-center text-center">
        <div className="flex justify-center py-10">
          <WideLogo width={200} />
        </div>
        {/* <h1>로컬 헬스 커뮤니티 - 다핏</h1> */}
      </div>

      <div className="w-full  grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <BoardCardComponent
          route={"/board/free"}
          title={"자유 게시판"}
          subtitle={"전국 헬창 게시판"}
        />
        <BoardCardComponent
          route={"/board/local"}
          title={"지역 게시판"}
          subtitle={"우리집 근처 헬창"}
        />
        <BoardCardComponent
          route={"/board/gymmate"}
          title={"운동 메이트"}
          subtitle={"나와 맞는 운동메이트 찾기"}
        />
        <BoardCardComponent
          route={"/board/challenge"}
          title={"챌린지"}
          subtitle={"챌린지 성공 후 상금까지!"}
        />
      </div>
    </div>
  );
}
