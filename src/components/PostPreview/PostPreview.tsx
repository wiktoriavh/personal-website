import { FC } from "react";
import { BlobThumbnail } from "../BlobThumbnail/BlobThumbnail";

type PostPreviewProps = {
  src: string;
  title: string;
  blurb: string;
};

export const PostPreview: FC<PostPreviewProps> = ({ src, title, blurb }) => {
  return (
    <article
      className="grid grid-rows-subgrid gap-4"
      style={{ gridTemplateColumns: "1fr 3fr" }}
    >
      <BlobThumbnail src={src} title={title} />
      <div className="grid h-36 w-[70ch] grid-rows-5 gap-4">
        <h2 className="row-span-2 font-baloo text-2xl font-bold">{title}</h2>
        <p className="row-span-3 line-clamp-3 self-start text-base">{blurb}</p>
      </div>
    </article>
  );
};
