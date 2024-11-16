import Link from "next/link";

const pages = [{ name: "Home", href: "/" }];

export const Navigation = () => {
  return (
    <>
      <nav className="form-blob mx-auto mb-12 mt-4 flex h-24 w-max items-center justify-center bg-wi-brown-500 px-10 pb-8">
        <ul className="flex justify-center gap-4">
          {pages.map((page) => (
            <li
              key={page.href}
              className="font-baloo text-xl font-medium text-wi-black-50 decoration-wavy underline-offset-4 hover:underline"
            >
              <Link href={page.href}>{page.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <svg width="0" height="0">
        <clipPath id="blob" clipPathUnits="objectBoundingBox">
          <path d="M0.05 0.1C0.127 0.043 0.304 0.017 0.483 0.017C0.662 0.017 0.844 0.038 0.935 0.107C1.027 0.176 1.026 0.432 0.933 0.55C0.838 0.668 0.656 0.661 0.49 0.652C0.324 0.643 0.163 0.643 0.077 0.522C-0.01 0.399 -0.029 0.175 0.05 0.1Z" />
        </clipPath>
      </svg>
    </>
  );
};
