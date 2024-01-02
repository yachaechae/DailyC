import type { Metadata } from "next";
import { Jua, Judson } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import RecoilProvider from "@/components/RecoilProvider";
import GetProfile from "@/components/profile/GetProfile";
import ScrollToTopBtn from "@/components/layout/ScrollToTopBtn";
import GoToBtn from "@/components/layout/GoToBtn";

const jua = Jua({ weight: "400", subsets: ["latin"] });
const judson = Judson({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DailyC",
  description: "오늘의 코디",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jua.className}>
        <RecoilProvider>
          <GetProfile>
            <header className="flex h-[75px] items-center shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
              <div className="container flex w-full items-center justify-between">
                <Link
                  href={"/"}
                  className="relative flex items-center gap-2 text-3xl text-orange"
                >
                  <Image
                    src="/logo.svg"
                    alt="Next.js Logo"
                    width={50}
                    height={50}
                    priority
                  />
                  DailyC
                </Link>
                <GoToBtn />
              </div>
            </header>
            {children}
            <ScrollToTopBtn />
          </GetProfile>
        </RecoilProvider>
      </body>
    </html>
  );
}
