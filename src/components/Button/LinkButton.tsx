import Link from "next/link";
import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  href: string;
};

export const LinkButton: FC<Props> = ({ children, ...props }) => {
  return (
    <Link
      {...props}
      className="hover:bg-wi-red-600 my-2 rounded-lg bg-wi-brown-500 px-4 py-2 font-baloo text-xl font-bold text-wi-black-50"
    >
      {children}
    </Link>
  );
};
