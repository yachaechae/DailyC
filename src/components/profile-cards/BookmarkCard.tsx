"use client";

import * as React from "react";

import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import OrangeIcon from "@/icon/OrangeIcon";
import { Bookmark, BookmarkBorder } from "@mui/icons-material";
import { Jua, Judson } from "next/font/google";
import UserImg from "@/components/profile/UserImg";

const jua = Jua({ weight: "400", subsets: ["latin"] });
const judson = Judson({ weight: "400", subsets: ["latin"] });

export default function BookmarkCard() {
  const [liked, setLiked] = useState(false);
  const [bookmark, setBookmark] = useState(false);

  const handleBookmarkClick = () => {
    // 북마크 취소 기능
  };

  return (
    <Card className="w-[250px] rounded-[15px]">
      <div className={`${jua.className} relative group `}>
        <div className="absolute top-1 w-full flex justify-between flex-row-reverse">
          <div onClick={handleBookmarkClick} className="cursor-pointer ">
            {bookmark ? (
              <BookmarkBorder sx={{ fontSize: 48 }} />
            ) : (
              <Bookmark color="primary" sx={{ fontSize: 48 }} />
            )}
          </div>
        </div>
        <CardMedia
          component="img"
          image="http://placekitten.com/200/300"
        ></CardMedia>
        <div className="absolute w-full bottom-0 left-0 bg-slate-50 bg-opacity-50 p-4 hidden group-hover:block transition duration-200 ease-out group-hover:ease-in">
          <p
            className={` text-3xl text-white drop-shadow-[0_1px_5px_rgba(0,0,0,0.7)] truncate`}
          >
            편안 데일리룩 편안 데일리룩
          </p>
          <span className={` text-lg`}>#트레이닝 # 편안 #집앞</span>
        </div>
      </div>
      <CardHeader
        className="bg-gray-300 py-2 px-3"
        avatar={<UserImg />}
        title={<div className={`${judson.className}`}>유저이름</div>}
        subheader={<div className={`${judson.className}`}>180cm</div>}
      />
    </Card>
  );
}
