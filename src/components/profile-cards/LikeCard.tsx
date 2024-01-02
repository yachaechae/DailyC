import * as React from "react";

import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import OrangeIcon from "@/icon/OrangeIcon";
import { AccountCircle } from "@mui/icons-material";
import { Jua, Judson } from "next/font/google";
import UserImg from "../profile/UserImg";

const judson = Judson({ weight: "400", subsets: ["latin"] });
const jua = Jua({ weight: "400", subsets: ["latin"] });

export default function LikeCard() {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    // 눌렀을 때 좋아요 취소 되면서 리스트에서 삭제
  };
  return (
    <Card className="w-[250px] rounded-[15px]">
      <div className="group relative">
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
        title={
          <Typography className={`${judson.className}`}>유저이름</Typography>
        }
        subheader={
          <Typography className={`${judson.className}`}>180cm</Typography>
        }
      />
    </Card>
  );
}
