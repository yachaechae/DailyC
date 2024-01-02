import { getAllPosts } from "@/api/write";
import BasicCard from "@/components/main/card/BasicCard";
import Nav from "@/components/main/nav/Nav";
import React from "react";

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

export default async function categoryPage() {
	const postData = await fetchData();

	return (
		<>
			<Nav />
			<div className="container mt-[5rem] flex gap-6">{postData}</div>
		</>
	);
}
