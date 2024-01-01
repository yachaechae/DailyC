import { Judson } from "next/font/google";
import React from "react";
import "@/app/main/custom.styles.css";
import Link from "next/link";

const judson = Judson({ weight: "400", subsets: ["latin"] });
export default function Nav() {
	return (
		<nav className={`${judson.className} border-b border-solid border-b-gray-300`}>
			<div className="container xl w-full flex justify-between items-center">
				<ul className="w-full h-[75px] text-3xl flex items-center justify-center gap-12 last:after:bg-transparent">
					<Link href={"/category"} className="custom-category-item">
						<li>ALL</li>
					</Link>
					<Link href={"/category/women"} className="custom-category-item">
						<li>WOMEN</li>
					</Link>
					<Link href={"/category/men"} className="custom-category-item">
						<li>MEN</li>
					</Link>
				</ul>
			</div>
		</nav>
	);
}
