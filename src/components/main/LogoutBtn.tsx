"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { getUser, logout } from "@/utils/auth";

function LogoutBtn() {
  const router = useRouter();

  const hendleLogout = async () => {
    const user = await getUser();
    if (!user) return alert("로그인된 이메일이 없습니다.");
    logout();
    alert(`로그아웃 되었습니다.
로그인 페이지로 이동합니다.`);
    router.push("/login");
  };

  return (
    <>
      <button onClick={hendleLogout}>로그아웃</button>
    </>
  );
}

export default LogoutBtn;
