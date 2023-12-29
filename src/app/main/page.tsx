"use client";
import React from "react";
import Banner from "./Banner/Banner";
import Nav from "./Nav/Nav";
import Popular from "./Popular/Popular";
import Recent from "./Recent/Recent";
import { Judson } from "next/font/google";

const judson = Judson({ weight: "400", subsets: ["latin"] });

export default function page() {
	return (
		<>
			<Nav />
			<Banner />
			<div className="container mt-[10rem]">
				<Popular />
				<Recent />
			</div>
		</>
	);
}
