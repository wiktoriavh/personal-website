import Image from "next/image";
import { FC } from "react";

type Props = {
  src: string;
  title: string;
  className?: string;
};

export const BlobThumbnail: FC<Props> = ({ src, title, className }) => {
  return (
    <Image
      className={[
        "form-blob-2 aspect-video w-full object-cover",
        className ?? "",
      ].join(" ")}
      src={src}
      alt={title}
      width={160}
      height={90}
    />
  );
};
