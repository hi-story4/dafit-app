import React from "react";
import Link from "next/link";
import { formatDate } from "@/lib/dateFromat";
import Heart from "@/app/component/logo/heart";

type listComponentProps = {
  id: string;
  title: string;
  body: string;
  heart: number;
  created_at: string;
};

export default function ListComponent({
  id,
  title,
  body,
  heart,
  created_at,
}: listComponentProps): React.ReactNode {
  // const truncateText = (text: string, maxLength: number) => {
  //   return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  // };

  const formattedDate = formatDate(created_at);

  return (
    <Link href={`/board/free/detail/${id}`}>
      <li className="py-3 sm:pb-4">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <div className="flex-shrink-0"></div>
          <div className="flex-1 min-w-0">
            <p className="flex justify-between text-sm font-medium text-black-white truncate ">
              {title}
              <span className="text-gray-500">{formattedDate}</span>
            </p>

            <p className="text-sm text-gray-500 truncate dark:text-gray-300">
              {body}
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            <div className="px-1">
              <Heart />
              <div className="text-center text-black-white">{heart}</div>
            </div>
          </div>
        </div>
      </li>
    </Link>
  );
}
