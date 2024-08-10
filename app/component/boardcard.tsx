import { Card } from "flowbite-react";
import Link from "next/link";
import React from "react";

type CardComponentProps = {
  route: string;
  title: string;
  subtitle: string;
};

export default function BoardCardComponent({
  route,
  title,
  subtitle,
}: CardComponentProps): React.ReactNode {
  return (
    <Link href={route}>
      <Card className="w-full max-w-sm lg:max-w-lg xl:max-w-xl m-auto dark:bg-white">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
          {title}
        </h5>
        <p className="font-normal text-gray-700 ">{subtitle}</p>
      </Card>
    </Link>
  );
}
