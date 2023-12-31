"use client";
import { userState } from "@/recoil/state";
import { AccountCircle } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useRecoilState } from "recoil";

type props = {
  size: number;
};

function UserImg({ size }: props) {
  const [user, setUser] = useRecoilState(userState);
  const userImg = user?.userImg;

  return (
    <>
      {!userImg ? (
        <Avatar sx={{ bgcolor: "white", width: size, height: size }}>
          <AccountCircle color="primary" sx={{ fontSize: size }} />
        </Avatar>
      ) : (
        <Image
          className={`h-full overflow-hidden rounded-full object-cover`}
          src={userImg}
          alt="테스트"
          width={size}
          height={size}
        />
      )}
    </>
  );
}

export default UserImg;
