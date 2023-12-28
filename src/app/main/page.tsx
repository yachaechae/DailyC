"use client";
import React from "react";
import Banner from "./Banner/Banner";
import Nav from "./Nav/Nav";
import Popular from "./Popular/Popular";
import Recent from "./Recent/Recent";
import { Judson } from "next/font/google";
import { Container } from "./main.styles";

const judson = Judson({ weight: "400", subsets: ["latin"] });

export default function page() {
	return (
		<>
			<Nav />
			<Banner />
			<Container marginTop="10rem" className={`${judson.className}`}>
				<Popular />
				<Recent />
			</Container>
		</>
	);
}
