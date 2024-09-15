import { LinkButton } from "~/components/Button";

export default function HomePage() {
  return (
    <>
      <h1 className="font-baloo text-8xl font-bold text-wi-brown-500">
        Moin, I'm Wiktoria
      </h1>
      <p className="max-w-[70ch] py-6 text-2xl">
        I'm a frontend software engineer at{" "}
        <span className="font-bold">Trusted Shops</span>, where I build websites
        for B2C. My tech stack includes React with Next.js, and Tailwind CSS for
        styling. With a strong interest in accessibility, I pay extra attention
        to how I build web applications to ensure they are usable by everyone.
        I'm also passionate about continuous learning—currently, I'm reading{" "}
        <span className="font-bold italic">
          A Philosophy Of Software Design
        </span>{" "}
        to expand my knowledge.
      </p>
      <div className="flex gap-6">
        <LinkButton href="https://github.com/wiktoriavh">GitHub</LinkButton>
        <LinkButton href="https://www.linkedin.com/in/wiktoria-vh/">
          LinkedIn
        </LinkButton>
      </div>
    </>
  );
}
