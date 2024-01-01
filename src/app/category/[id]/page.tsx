"use client"
import { getEventByPost } from "@/api/write";
import BasicCard from "@/components/main/card/BasicCard";
import Nav from "@/components/main/nav/Nav";
import React from "react";
import { RecoilRoot } from "recoil";

async function fetchData(params: { id: string }) {
	try {
		const postData: postType[] = await getEventByPost("gender", params.id);
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

export default async function CategoryDetail({ params }: { params?: any; children?: React.ReactNode }) {
	const postData = await fetchData(params);

	return <RecoilRoot>
	<Nav />
	<div className="container mt-[5rem] flex gap-6">
		{postData}
	</div>
</RecoilRoot>;
}
