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
  console.log(user);

  return (
    <>
      {!userImg ? (
        <Avatar sx={{ bgcolor: "white" }}>
          <AccountCircle color="primary" sx={{ fontSize: 50 }} />
        </Avatar>
      ) : (
        <Image src={userImg} alt="테스트" width={120} height={120} />
      )}
    </>
  );
}

export default UserImg;
