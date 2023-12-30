import * as React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Jua } from "next/font/google";

const jua = Jua({ weight: "400", subsets: ["latin"] });

export default function Mycard() {
  return (
    <>
      <Card className="rounded-[15px]" sx={{ maxWidth: 250 }}>
        <div className="relative">
          <CardMedia
            component="img"
            image="http://placekitten.com/200/300"
          ></CardMedia>
          <div className="absolute w-full bottom-0 left-0 bg-slate-50 bg-opacity-50 p-4 ">
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
      </Card>
    </>
  );
}
