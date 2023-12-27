import { Judson } from "next/font/google";
import React from "react";
import styles from "./nav.module.css";
import { Container } from "../main.styles";
import { Category, CategoryItem, NavSt } from "./st-nav";

const judson = Judson({ weight: "400", subsets: ["latin"] });
export default function Nav() {
	return (
		<NavSt className={`${judson.className}`}>
			<Container>
				<Category>
					<CategoryItem>ALL</CategoryItem>
					<CategoryItem>WOMEN</CategoryItem>
					<CategoryItem>MEN</CategoryItem>
				</Category>
			</Container>
		</NavSt>
	);
}
