"use client";
import React from "react";
import BasicCard from "../card/BasicCard";
import { ArrowBackIosRounded, ArrowForwardIosRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { getAllPosts } from "@/api/write";

export default async function Popular() {
	console.log("render");
	try {
		const postData: postType[] = await getAllPosts();
		console.log(postData);
	} catch (error) {
		return (
			<>
				<div>게시글을 불러오던 중 에러가 발생했습니다</div>
			</>
		);
	}
	// useEffect(() => {
	// 	const fetchData = getAllPosts();
	// 	fetchData.then((data ) => {
	// 		data === null;
	// 		postData = data;
	// 	});
	// }, []);

	return (
		<>
			<h2 className="mb-14 text-4xl">인기 코디</h2>

			<div className="w-full flex justify-between items-center gap-4">
				<IconButton>
					<ArrowBackIosRounded sx={{ fontSize: 40 }} color="primary" />
				</IconButton>
				<div className="w-full flex justify-between">
					<BasicCard rank="first" />
					<BasicCard rank="second" />
					<BasicCard rank="third" />
					<BasicCard rank="" />
				</div>
				<IconButton>
					<ArrowForwardIosRounded sx={{ fontSize: 40 }} color="primary" />
				</IconButton>
			</div>
		</>
	);
}
