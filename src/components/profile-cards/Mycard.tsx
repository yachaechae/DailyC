import * as React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Jua } from "next/font/google";

const jua = Jua({ weight: "400", subsets: ["latin"] });

type Props = {
  title: string;
  mainImg: string;
  tags: [];
};

export default function Mycard({ title, mainImg, tags }: Props) {
  return (
    <>
      <Card className="w-[250px] rounded-[15px]">
        <div className="group relative">
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
              {tags.map((tag) => {
                return ` #${tag}`;
              })}
            </span>
          </div>
        </div>
      </Card>
    </>
  );
}
