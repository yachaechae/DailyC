"use client";

import * as React from "react";

import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { Bookmark, BookmarkBorder } from "@mui/icons-material";
import { Jua, Judson } from "next/font/google";
import UserImg from "@/components/profile/UserImg";
import Link from "next/link";

const jua = Jua({ weight: "400", subsets: ["latin"] });
const judson = Judson({ weight: "400", subsets: ["latin"] });

type Props = {
  title: string;
  mainImg: string;
  tags: [];
  height: string;
  writedName: string;
  postId: number;
};

export default function BookmarkCard({
  title,
  mainImg,
  tags,
  height,
  writedName,
  postId,
}: Props) {
  const [liked, setLiked] = useState(false);
  const [bookmark, setBookmark] = useState(false);

  const handleBookmarkClick = () => {
    const answer = window.confirm("취소 하시겠습니까?");
    if (!answer) return null;
    // 눌렀을 때 취소
  };

  return (
    <Card className="relative w-[250px] rounded-[15px]">
      <div className={`${jua.className} group relative `}>
        <div className=" absolute top-1 flex w-full flex-row-reverse justify-between">
          <div onClick={handleBookmarkClick} className="cursor-pointer">
            {bookmark ? (
              <BookmarkBorder sx={{ fontSize: 48 }} />
            ) : (
              <Bookmark color="primary" sx={{ fontSize: 48 }} />
            )}
          </div>
        </div>
        <Link href={`/posts/${postId}`}>
          <CardMedia
            className="w-[250]px h-[370px]"
            component="img"
            image={mainImg}
          ></CardMedia>
        </Link>
        <div className="absolute bottom-0 left-0 hidden w-full bg-slate-50 bg-opacity-50 p-4 transition duration-200 ease-out group-hover:block group-hover:ease-in">
          <p
            className={` truncate text-3xl text-white drop-shadow-[0_1px_5px_rgba(0,0,0,0.7)]`}
          >
            {title}
          </p>
          <span className={` text-lg`}>
            {!tags && ""}
            {tags?.map((tag) => {
              return ` #${tag}`;
            })}
          </span>
        </div>
      </div>
      <CardHeader
        className="bg-gray-300 px-3 py-2"
        avatar={
          <div className="h-[35px] w-[35px]">
            <UserImg size={35} />
          </div>
        }
        title={<div className={`${judson.className}`}>{writedName}</div>}
        subheader={<div className={`${judson.className}`}>{height}cm</div>}
      />
    </Card>
  );
}
