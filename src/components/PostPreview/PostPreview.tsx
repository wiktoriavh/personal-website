import { FC } from "react";
import { BlobThumbnail } from "../BlobThumbnail/BlobThumbnail";

type PostPreviewProps = {
  src: string;
  title: string;
  blurb: string;
};

export const PostPreview: FC<PostPreviewProps> = ({ src, title, blurb }) => {
  return (
    <article className="flex">
      <BlobThumbnail src={src} title={title} />
      <div className="grid w-[70ch]" style={{ gridTemplateRows: "1fr 3fr" }}>
        <h2 className="font-baloo text-2xl font-bold">{title}</h2>
        <p className="text-base">{blurb}</p>
      </div>
    </article>
  );
};
