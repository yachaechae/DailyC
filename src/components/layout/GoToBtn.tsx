"use client";
import Link from "next/link";
import React from "react";
import LoginAndLogoutBtn from "../main/LoginAndLogoutBtn";
import { useRecoilState } from "recoil";
import { isLoginState, openLoadingState } from "@/recoil/state";

function GoToBtn() {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [openLoading, setOpenLoading] = useRecoilState(openLoadingState);

  return (
    <ul className="flex gap-8 text-2xl">
      <Link href={"/write"}>
        {isLogin ? (
          <li className="hover:text-orange">카드작성</li>
        ) : (
          <li
            className="text-neutral-400 hover:text-orange"
            onClick={() => setOpenLoading(true)}
          >
            카드작성
          </li>
        )}
      </Link>
      <Link href={"/profilepage"}>
        {isLogin ? (
          <li className="hover:text-orange">마이페이지</li>
        ) : (
          <li
            className="text-neutral-400 hover:text-orange"
            onClick={() => setOpenLoading(true)}
          >
            마이페이지
          </li>
        )}
      </Link>
      <LoginAndLogoutBtn />
    </ul>
  );
}

export default GoToBtn;
