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

const judson = Judson({ weight: "400", subsets: ["latin"] });
const jua = Jua({ weight: "400", subsets: ["latin"] });

export default function LikeCard() {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    // 눌렀을 때 좋아요 취소 되면서 리스트에서 삭제
  };
  return (
    <Card className="rounded-[15px]" sx={{ maxWidth: 250 }}>
      <div className="relative">
        <CardMedia
          component="img"
          image="http://placekitten.com/200/300"
        ></CardMedia>
        <div className="absolute w-full bottom-0 left-0 bg-slate-50 bg-opacity-50 p-4">
          <Typography
            variant="h4"
            className={`${jua.className} text-white drop-shadow-xl`}
          >
            편안 데일리룩
          </Typography>
          <Typography variant="h6" className={`${jua.className}`}>
            #트레이닝 # 편안 #집앞
          </Typography>
        </div>
      </div>
      <CardHeader
        className="bg-gray-300 py-2 px-3"
        avatar={
          <Avatar sx={{ bgcolor: "white" }} aria-label="recipe">
            <AccountCircle className="fill-orange size-[125%]"> </AccountCircle>
          </Avatar>
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
