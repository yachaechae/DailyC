import * as React from "react";

import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import OrangeIcon from "@/icon/OrangeIcon";
import { Jua, Judson } from "next/font/google";
import UserImg from "../profile/UserImg";

const judson = Judson({ weight: "400", subsets: ["latin"] });
const jua = Jua({ weight: "400", subsets: ["latin"] });

type Props = {
  title: string;
  mainImg: string;
  tags: [];
  height: string;
  writedName: string;
};

export default function LikeCard({
  title,
  mainImg,
  tags,
  height,
  writedName,
}: Props) {
  const [liked, setLiked] = useState(false);

  return (
    <Card className="w-[270px] rounded-[15px]">
      <div className="group relative">
        <CardMedia
          className="w-[270]px h-[370px]"
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
          <div className="h-[35px] w-[35px]">
            <UserImg size={35} />
          </div>
        }
        action={
          <IconButton
            aria-label="add to favorites"
            className={liked ? "liked" : ""}
          >
            <OrangeIcon width={35} liked={!liked}></OrangeIcon>
          </IconButton>
        }
        title={<div className={`${judson.className}`}>{writedName}</div>}
        subheader={<div className={`${judson.className}`}>{height}cm</div>}
      />
    </Card>
  );
}
