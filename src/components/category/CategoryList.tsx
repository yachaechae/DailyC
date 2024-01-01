"use client";

import React from "react";
import Nav from "../main/nav/Nav";
import { RecoilRoot } from "recoil";

export default function CategoryList({ postData }: { postData: any[] | React.ReactNode }) {
	console.log("ListPage", postData);
	return (
		<RecoilRoot>
			<Nav />
			<div className="container mt-[5rem]">
				
			</div>
		</RecoilRoot>
	);
}
