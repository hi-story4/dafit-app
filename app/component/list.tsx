import React from "react";

type listComponentProps = {
  title: string;
  nickname: string;
  view: number;
  heart: number;
};

export default function ListComponent({
  title,
  nickname,
  heart,
}: listComponentProps): React.ReactNode {
  return (
    <li className="py-3 sm:pb-4">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <div className="flex-shrink-0"></div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-black-white truncate ">
            {title}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-300">
            {nickname}
          </p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          <div className="px-1">
            <svg
              className="w-6 h-6 mx-auto text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="var(--color-primary)"
              viewBox="0 0 24 24"
            >
              <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
            </svg>
            <div className="text-center text-black-white">{heart}11</div>
          </div>
        </div>
      </div>
    </li>
  );
}
