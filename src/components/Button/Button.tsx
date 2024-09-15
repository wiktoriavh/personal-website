import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
} & JSX.IntrinsicElements["button"];

export const Button: FC<Props> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="hover:bg-wi-red-600 my-2 rounded-lg bg-wi-brown-500 px-4 py-2 font-baloo text-xl font-bold text-wi-black-50"
    >
      {children}
    </button>
  );
};
