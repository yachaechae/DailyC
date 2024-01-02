"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { logout } from "@/utils/auth";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { isLoginState, userState } from "@/recoil/state";

function LoginAndLogoutBtn() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [user, setUser] = useRecoilState(userState);

  const hendleLogout = () => {
    if (isLogin === false) return alert("로그인된 이메일이 없습니다.");
    logout();
    setIsLogin(false);
    setUser({
      id: "",
      email: "",
      nickname: "",
      height: "",
      gender: "",
      userImg: "",
    });
    alert(`로그아웃 되었습니다.
로그인 페이지로 이동합니다.`);
    router.push("/login");
  };

  return (
    <>
      {!isLogin ? (
        <Link href={"/login"}>
          <li>로그인</li>
        </Link>
      ) : (
        <button onClick={hendleLogout}>로그아웃</button>
      )}
    </>
  );
}

export default LoginAndLogoutBtn;
