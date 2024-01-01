"use client";
import { userState } from "@/recoil/state";
import { AccountCircle } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useRecoilState } from "recoil";

function UserImg() {
  const [user, setUser] = useRecoilState(userState);
  const userImg = user?.userImg;

  return (
    <>
      {!userImg ? (
        <Avatar sx={{ bgcolor: "white", width: 120, height: 120 }}>
          <AccountCircle color="primary" sx={{ fontSize: 120 }} />
        </Avatar>
      ) : (
        <Image
          className="h-[120px] w-[120px] rounded-full"
          src={userImg}
          alt="테스트"
          width={120}
          height={120}
        />
      )}
    </>
  );
}

export default UserImg;
