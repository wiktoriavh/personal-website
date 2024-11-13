import "~/styles/globals.css";

import { type Metadata } from "next";
import { Navigation } from "~/components/Navigation";
import { LogoBlob } from "~/components/LogoBlob/LogoBlob";
import { env } from "~/env";

export const metadata: Metadata = {
  title: "Wiktoria Van Harneveldt",
  description: "Wiktoria's personal homepage",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-wi-black-50 font-sans">
        <Navigation />
        <main className="mx-auto max-w-7xl flex-1 px-4">
          {children}
          <svg
            width="836"
            height="751"
            viewBox="0 0 836 751"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-20 top-20 -z-10"
          >
            <path
              d="M145.001 293.261L145.016 293.239L145.031 293.216C158.216 273.715 170.179 254.827 181.761 236.542C199.081 209.2 215.547 183.205 233.963 158.52C264.108 118.114 298.061 83.4224 345.683 57.7758C393.304 32.2364 455.327 15.4219 517.507 12.4664C579.767 9.50707 640.936 20.4895 687.584 49.1554C781.408 106.977 822.054 238.632 823.301 375.924C823.92 444.344 814.617 512.591 793.388 570.666C772.152 628.76 739.309 675.854 693.36 703.505C646.89 731.28 585.493 740.498 516.68 737.918C448.034 735.344 373.37 721.092 301.414 703.254C229.737 685.408 162.203 664.152 110.164 638.395C57.4518 612.305 23.843 583.151 14.6413 551.191C5.77384 519.293 19.8819 480.037 47.3251 434.299C64.5297 405.625 85.648 376.397 107.199 346.57C119.886 329.012 132.723 311.245 145.001 293.261Z"
              stroke="#FADBD3"
              strokeWidth="24"
            />
          </svg>
        </main>
        <footer className="mx-auto flex w-[70ch] max-w-7xl content-center items-center gap-4 p-4 text-2xl">
          <LogoBlob height={80} />
          <div className="text-sm">
            <p>Last deployed on {env.NEXT_PUBLIC_DEPLOY_DATE}</p>
            <p>Created by Wiktoria Van Harneveldt © 2024</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
