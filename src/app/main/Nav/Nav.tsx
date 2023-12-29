import { Judson } from "next/font/google";
import React from "react";
import "../custom.styles.css";

const judson = Judson({ weight: "400", subsets: ["latin"] });
export default function Nav() {
	return (
		<nav className={`${judson.className} border-b border-solid border-b-gray-300`}>
			<div className="container xl w-full flex justify-between items-center">
				<ul className="w-full h-[75] text-3xl flex items-center justify-center gap-12 last:after:bg-transparent">
					<li className="custom-category-item">ALL</li>
					<li className="custom-category-item">WOMEN</li>
					<li className="custom-category-item">MEN</li>
				</ul>
			</div>
		</nav>
	);
}
