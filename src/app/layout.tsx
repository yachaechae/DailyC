import type { Metadata } from "next";
import { Jua, Judson } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import styles from "./page.module.css";

const jua = Jua({ weight: "400", subsets: ["latin"] });
const judson = Judson({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
	title: "DaliyC",
	description: "오늘의 코디",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={jua.className}>
				<header className={styles.header}>
					<div className={`${judson.className} ${styles.container}`}>
						<div className={styles.logo}>
							<Image
								className={styles.logo}
								src="/logo.svg"
								alt="Next.js Logo"
								width={50}
								height={50}
								priority
							/>
							DaliyC
						</div>
						<ul className={styles.menu}>
							<li>마이페이지</li>
							<li>로그인</li>
						</ul>
					</div>
				</header>
				{children}
			</body>
		</html>
	);
}
