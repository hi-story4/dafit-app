import RoundButton from "@/app/component/buttons/round-button";
import ListComponent from "@/app/component/card/card";

export default function localBoard() {
  return (
    <div className="w-full grid place-items-center">
      <h1>로컬 게시판</h1>
      <div className="xs:bg-white sm:bg-black md:bg-red-900 lg:bg-blue-900 xl:bg-orange-900 2xl:bg-green-900 3xl:bg-purple-900">
        color
      </div>
      <div className="w-full justify-center items-center mx-auto">
        <ul className="w-full mx-auto max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl divide-y divide-gray-200 dark:divide-gray-700">
          <ListComponent
            title="title"
            heart={12}
            id="2"
            body="body"
            created_at="created_at"
          />
          <ListComponent
            title="title"
            heart={12}
            id="1"
            body="body"
            created_at="created_at"
          />
        </ul>
      </div>
      <div className="fixed bottom-5 right-5  shadow-lg">
        <RoundButton />
      </div>
    </div>
  );
}
