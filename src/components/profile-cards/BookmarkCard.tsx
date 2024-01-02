"use client";

import * as React from "react";

import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { Bookmark, BookmarkBorder } from "@mui/icons-material";
import { Jua, Judson } from "next/font/google";
import UserImg from "@/components/profile/UserImg";

const jua = Jua({ weight: "400", subsets: ["latin"] });
const judson = Judson({ weight: "400", subsets: ["latin"] });

type Props = {
  title: string;
  mainImg: string;
  tags: [];
  height: string;
  writedName: string;
};

export default function BookmarkCard({
  title,
  mainImg,
  tags,
  height,
  writedName,
}: Props) {
  const [bookmark, setBookmark] = useState(false);

  return (
    <Card className="relative w-[250px] rounded-[15px]">
      <div className={`${jua.className} group relative `}>
        <div className=" absolute top-1 flex w-full flex-row-reverse justify-between">
          <div className="cursor-pointer">
            {bookmark ? (
              <BookmarkBorder sx={{ fontSize: 48 }} />
            ) : (
              <Bookmark color="primary" sx={{ fontSize: 48 }} />
            )}
          </div>
        </div>

        <CardMedia
          className="w-[250]px h-[370px]"
          component="img"
          image={mainImg}
        ></CardMedia>

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
          <div className="h-[35px]">
            <UserImg size={35} />
          </div>
        }
        title={<div className={`${judson.className}`}>{writedName}</div>}
        subheader={<div className={`${judson.className}`}>{height}cm</div>}
      />
    </Card>
  );
}
