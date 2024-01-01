import * as React from "react";

import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import OrangeIcon from "@/icon/OrangeIcon";
import {
  AccountCircle,
  Bookmark,
  BookmarkBorder,
  WorkspacePremium,
} from "@mui/icons-material";
import { Jua, Judson } from "next/font/google";
import { brown, grey, yellow } from "@mui/material/colors";
import UserImg from "@/components/profile/UserImg";

const jua = Jua({ weight: "400", subsets: ["latin"] });
const judson = Judson({ weight: "400", subsets: ["latin"] });

export default function BasicCard({ rank }: { rank: string }) {
  const [liked, setLiked] = useState(false);
  const [bookmark, setBookmark] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };
  const handleBookmarkClick = () => {
    setBookmark(!bookmark);
  };
  const colorData: { [key: string]: string } = {
    first: yellow["A400"],
    second: grey[300],
    third: brown["A400"],
  };

  return (
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
          image="http://placekitten.com/200/300"
        ></CardMedia>
        <div className="absolute bottom-0 left-0 hidden w-full bg-slate-50 bg-opacity-50 p-4 transition duration-200 ease-out group-hover:block group-hover:ease-in">
          <p
            className={` truncate text-3xl text-white drop-shadow-[0_1px_5px_rgba(0,0,0,0.7)]`}
          >
            편안 데일리룩 편안 데일리룩
          </p>
          <span className={` text-lg`}>#트레이닝 # 편안 #집앞</span>
        </div>
      </div>
      <CardHeader
        className="bg-gray-300 px-3 py-2"
        avatar={<UserImg size={35} />}
        action={
          <IconButton
            aria-label="add to favorites"
            onClick={handleLikeClick}
            className={liked ? "liked" : ""}
          >
            <OrangeIcon width={35} liked={liked}></OrangeIcon>
          </IconButton>
        }
        title={<div className={`${judson.className}`}>유저이름</div>}
        subheader={<div className={`${judson.className}`}>180cm</div>}
      />
    </Card>
  );
}
