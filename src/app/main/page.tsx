"use client";
import React from "react";
import Banner from "../../components/main/Banner/Banner";
import Nav from "../../components/main/Nav/Nav";
import Popular from "../../components/main/Popular/Popular";
import Recent from "../../components/main/Recent/Recent";
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
