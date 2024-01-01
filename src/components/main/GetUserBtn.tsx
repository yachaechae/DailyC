"use client";
import { getUser } from "@/utils/auth";
import React from "react";
import { useRecoilState } from "recoil";
import { userState } from "@/recoil/state";

function GetUserBtn() {
  const [user, setUser] = useRecoilState(userState);

  const handleGetUserBtn = async () => {
    const profile = await getUser();
    if (!profile) return alert("로그인된 이메일이 없습니다.");
    console.log("getUser 정보 ", profile);
    console.log("recoil 정보", user);
  };

  return (
    <>
      <button onClick={handleGetUserBtn}>유저정보</button>
    </>
  );
}

export default GetUserBtn;
