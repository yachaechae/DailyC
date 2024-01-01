// "use client";
import { userState } from "@/recoil/state";
import { AccountCircle } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useRecoilState } from "recoil";

function UserImg() {
  const [user, setUser] = useRecoilState(userState);
  const userImg = user.userImg;

  return (
    <>
      {!userImg ? (
        <Avatar sx={{ bgcolor: "white", width: 105, height: 120 }}>
          <AccountCircle color="primary" sx={{ fontSize: 120 }}></AccountCircle>
        </Avatar>
      ) : (
        <Image
          src={userImg}
          className="rounded-[50px]"
          alt="테스트"
          width={60}
          height={60}
        />
      )}
      {/* <Avatar sx={{ bgcolor: "white" }}>
        <AccountCircle className="fill-orange size-[125%]"> </AccountCircle>
      </Avatar> */}
    </>
  );
}

export default UserImg;
