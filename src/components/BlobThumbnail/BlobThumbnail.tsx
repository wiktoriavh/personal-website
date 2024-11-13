import Image from "next/image";
import { FC } from "react";

type Props = {
  src: string;
  title: string;
};

export const BlobThumbnail: FC<Props> = ({ src, title }) => {
  return (
    <Image
      className="form-blob-2 aspect-video w-full object-cover"
      src={src}
      alt={title}
      width={160}
      height={90}
    />
  );
};
