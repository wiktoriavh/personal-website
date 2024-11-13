import { PostPreview } from "~/components/PostPreview/PostPreview";

const content = [
  {
    title:
      "This is a really long title that should be truncated This is a really long title that should be truncated",
    src: "https://placedog.net/640/480?random",
    blurb:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. width = 70char",
  },
  {
    title:
      "This is a really long title that should be truncated This is a really long title that should be truncated",
    src: "https://placedog.net/640/480?random",
    blurb:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. width = 70char",
  },
  {
    title:
      "This is a really long title that should be truncated This is a really long title that should be truncated",
    src: "https://placedog.net/640/480?random",
    blurb:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. width = 70char",
  },
  {
    title:
      "This is a really long title that should be truncated This is a really long title that should be truncated",
    src: "https://placedog.net/640/480?random",
    blurb:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. width = 70char",
  },
];

const Page = () => {
  return (
    <>
      {content.map((post) => (
        <PostPreview key={post.title} {...post} />
      ))}

      <svg width="0" height="0">
        <defs>
          <clipPath id="blob2" clipPathUnits="objectBoundingBox">
            <path d="M0.096,0.81 C0.009,0.682,-0.025,0.469,0.021,0.307 C0.067,0.146,0.192,0.036,0.308,0.009 C0.425,-0.019,0.532,0.036,0.659,0.102 C0.786,0.169,0.933,0.248,0.982,0.397 C1,0.547,0.98,0.767,0.878,0.883 C0.776,0.999,0.623,1,0.475,0.996 C0.327,0.981,0.184,0.938,0.096,0.81"></path>
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default Page;
