export default function TextArea() {
  return (
    <div>
      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        글 작성
      </label>
      <textarea
        id="message"
        name="message"
        rows={7}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
        minLength={5}
        maxLength={500}
        placeholder="글 작성하기"
      ></textarea>
    </div>
  );
}
