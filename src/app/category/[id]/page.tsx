import { getEventByPost } from "@/api/write";
import CategoryList from "@/components/category/CategoryList";
import BasicCard from "@/components/main/card/BasicCard";
import Nav from "@/components/main/nav/Nav";
import React from "react";

// async function fetchData(params: { id: string }) {
// 	const data = await getEventByPost("id", params.id);
// 	return data;
// }

// export default async function PostDetail({ params }: { params?: any; children?: React.ReactNode }) {
// 	const postData = await fetchData(params);

// 	return <PostDetailPage postData={postData} />;
// }

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
	console.log(postData);

	return <CategoryList postData={postData}></CategoryList>;
}
