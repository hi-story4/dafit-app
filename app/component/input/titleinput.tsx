export default function TitleInput() {
  return (
    <div className="mb-6">
      <label
        htmlFor="title"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        제목
      </label>
      <input
        type="text"
        name="title"
        id="title"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
        minLength={2}
        maxLength={40}
        placeholder="제목 작성하기"
      />
    </div>
  );
}
