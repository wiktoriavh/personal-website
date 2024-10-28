import Image from "next/image";
import { FC } from "react";

type Props = {
  src: string;
  title: string;
};

export const BlobThumbnail: FC<Props> = ({ src, title }) => {
  return (
    <Image
      className="form-blob-2"
      src={src}
      alt={title}
      objectFit="cover"
      width={300}
      height={300}
    />
  );
};
