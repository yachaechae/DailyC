"use client";
import React from "react";
import BasicCard from "../card/BasicCard";
import { ArrowBackIosRounded, ArrowForwardIosRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { getAllPosts } from "@/api/write";

async function fetchData() {
	try {
		const postData: postType[] = await getAllPosts();
		return postData.map((post) => {
			return <BasicCard data={post} />;
		});
	} catch (error) {
		return (
			<>
				<div>게시글을 불러오던 중 에러가 발생했습니다</div>
			</>
		);
	}
}

export default async function Popular() {
	const postData = await fetchData();

	return (
		<>
			<h2 className="mb-14 text-4xl">인기 코디</h2>

			<div className="w-full flex justify-between items-center gap-4">
				<IconButton>
					<ArrowBackIosRounded sx={{ fontSize: 40 }} color="primary" />
				</IconButton>
				<div className="w-full flex justify-between">
					{postData}
					{/* <BasicCard rank="first" />
					<BasicCard rank="second" />
					<BasicCard rank="third" />
					<BasicCard rank="" /> */}
				</div>
				<IconButton>
					<ArrowForwardIosRounded sx={{ fontSize: 40 }} color="primary" />
				</IconButton>
			</div>
		</>
	);
}
