import { Button } from "@nextui-org/button";
import Link from "next/link";

type ButtonBlackProps = {
  text: string;
  route: string;
};

export default function ButtonBlack({
  text,
  route,
}: ButtonBlackProps): React.ReactNode {
  return (
    <Link href={route}>
      <Button
        className="
  px-5 py-2.5
  ml-5
  rounded-full
  border-0
  bg-black
  text-white
  text-base
  cursor-pointer
  transition-transform duration-300
  transition-colors duration-300
  transition-shadow duration-300
  hover:scale-105
  hover:bg-primary
  hover:text-black
  hover:shadow-lg
  active:scale-100
  active:bg-green-600
  active:shadow-none
  dark:bg-white
  dark:text-black
  dark:hover:bg-primary
  dark:active:bg-green-300
"
      >
        {text}
      </Button>
    </Link>
  );
}
