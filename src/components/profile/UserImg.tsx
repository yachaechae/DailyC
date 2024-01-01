"use client";
import { userState } from "@/recoil/state";
import { AccountCircle } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useRecoilState } from "recoil";

type props = {
  fontSize: number;
};

function UserImg({ fontSize }: props) {
  const [user, setUser] = useRecoilState(userState);
  const userImg = user?.userImg;

  return (
    <>
      {!userImg ? (
        <Avatar sx={{ bgcolor: "white", width: fontSize, height: fontSize }}>
          <AccountCircle color="primary" sx={{ fontSize: fontSize }} />
        </Avatar>
      ) : (
        <Image
          className="h-[fontSizepx] w-[fontSizepx] rounded-full"
          src={userImg}
          alt="테스트"
          width={fontSize}
          height={fontSize}
        />
      )}
    </>
  );
}

export default UserImg;
