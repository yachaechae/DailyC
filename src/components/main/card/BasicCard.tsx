"use client";
import * as React from "react";

import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import OrangeIcon from "@/icon/OrangeIcon";
import {
  Bookmark,
  BookmarkBorder,
  WorkspacePremium,
} from "@mui/icons-material";
import { Jua, Judson } from "next/font/google";
import { brown, grey, yellow } from "@mui/material/colors";
import UserImg from "@/components/profile/UserImg";
import Link from "next/link";

const jua = Jua({ weight: "400", subsets: ["latin"] });
const judson = Judson({ weight: "400", subsets: ["latin"] });

export default function BasicCard({
  rank,
  data,
}: {
  rank?: string;
  data: postType;
}) {
  const [liked, setLiked] = useState(false);
  const [bookmark, setBookmark] = useState(false);

  const handleLikeClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setLiked(!liked);
  };

  const handleBookmarkClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setBookmark(!bookmark);
  };
  const colorData: { [key: string]: string } = {
    first: yellow["A400"],
    second: grey[300],
    third: brown["A400"],
  };

  return (
    <Link href={`/posts/${data.id}`}>
      <Card className="w-[250px]">
        <div className={`${jua.className} group relative `}>
          <div className="absolute top-1 flex w-full flex-row-reverse justify-between">
            <div onClick={handleBookmarkClick} className="cursor-pointer ">
              {bookmark ? (
                <Bookmark color="primary" sx={{ fontSize: 48 }} />
              ) : (
                <BookmarkBorder sx={{ fontSize: 48 }} />
              )}
            </div>
            {!rank ? (
              <></>
            ) : (
              <WorkspacePremium
                className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
                sx={{ color: colorData[rank], fontSize: 48 }}
              />
            )}
          </div>
          <CardMedia
            component="img"
            image={data.mainImg}
            className="h-[310px]"
          ></CardMedia>
          <div className="absolute bottom-0 left-0 hidden w-full bg-slate-50 bg-opacity-50 p-4 transition duration-200 ease-out group-hover:block group-hover:ease-in">
            <p
              className={` truncate text-3xl text-white drop-shadow-[0_1px_5px_rgba(0,0,0,0.7)]`}
            >
              {data.title}
            </p>
            <span className={` text-lg`}>#{data.tags?.join(" #")}</span>
          </div>
        </div>
        <CardHeader
          className="h-fit bg-gray-300 px-2 py-2"
          avatar={
            <div className="h-[35px]">
              <UserImg size={35} />
            </div>
          }
          action={
            <IconButton
              aria-label="add to favorites"
              onClick={handleLikeClick}
              className={liked ? "liked" : ""}
            >
              <OrangeIcon liked={liked} width={35} />
            </IconButton>
          }
          title={
            <div className={`${judson.className} w-32 truncate`}>
              {data.writedName}
            </div>
          }
          subheader={<div className={`${judson.className}`}>{data.height}</div>}
        />
      </Card>
    </Link>
  );
}
