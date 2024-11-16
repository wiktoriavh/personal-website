import Link from "next/link";

const pages = [{ name: "Home", href: "/" }];

export const Navigation = () => {
  return (
    <>
      <nav className="form-blob col-span-full mx-auto mt-10 flex h-24 w-max items-center justify-center bg-wi-brown-500 px-10 pb-8">
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
    </>
  );
};
