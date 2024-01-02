"use client";
import React, { useEffect, useState } from "react";
import BasicCard from "../card/BasicCard";
import { ArrowBackIosRounded, ArrowForwardIosRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { getAllPosts } from "@/api/write";

export default function Popular() {
	const [postData, setPostData] = useState<postType[]>([]);
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		async function fetchData() {
			try {
				const data: postType[] = await getAllPosts();

				setPostData(data);
			} catch (error) {
				return (
					<>
						<div>게시글을 불러오던 중 에러가 발생했습니다</div>
					</>
				);
			}
		}
		fetchData();
	}, []);
	useEffect(() => {
		setCurrentIndex(0);
	}, [postData]);

	const onNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % postData.length);
	};

	const onPrev = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + postData.length) % postData.length);
	};

	return (
		<>
			<h2 className="mb-14 text-4xl">인기 코디</h2>

			<div className="w-full flex justify-between items-center overflow-hidden">
				<div className="h-[370px] flex items-center z-10 bg-white ">
					<IconButton onClick={onPrev} className="z-10 ">
						<ArrowBackIosRounded sx={{ fontSize: 40 }} color="primary" />
					</IconButton>
				</div>
				<div
					className="w-full flex overflow-hidden"
					style={{
						transform: `translateX(${-currentIndex * 25}%)`,
						transition: "transform 0.5s ease-in-out",
					}}
				>
					{postData.map((post, index) => (
						<div key={index} className="flex-none" style={{ width: "25%" }}>
							<BasicCard data={post} />
						</div>
					))}
				</div>
				<div className="h-[370px] flex items-center z-10 bg-white ">
					<IconButton onClick={onNext}>
						<ArrowForwardIosRounded sx={{ fontSize: 40 }} color="primary" />
					</IconButton>
				</div>
			</div>
		</>
	);
}
