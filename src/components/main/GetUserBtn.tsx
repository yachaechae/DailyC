"use client";
import { getUser } from "@/utils/auth";
import React from "react";

function GetUserBtn() {
  const handleGetUserBtn = async () => {
    const user = await getUser();
    if (!user) return alert("로그인된 이메일이 없습니다.");
    console.log("user 여기 ", user);
  };

  return (
    <>
      <button onClick={handleGetUserBtn}>유저정보</button>
    </>
  );
}

export default GetUserBtn;
