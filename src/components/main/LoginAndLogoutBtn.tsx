"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { logout } from "@/utils/auth";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { isLoginState, openLoadingState, userState } from "@/recoil/state";

function LoginAndLogoutBtn() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [user, setUser] = useRecoilState(userState);
  const [openLoading, setOpenLoading] = useRecoilState(openLoadingState);

  const hendleLogout = async () => {
    if (isLogin === false) return alert("로그인된 이메일이 없습니다.");
    setOpenLoading(true);
    await logout();
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
    setOpenLoading(false);
  };

  return (
    <>
      {!isLogin ? (
        <Link href={"/login"}>
          <li className="hover:text-orange">로그인</li>
        </Link>
      ) : (
        <button
          className="hover:text-orange"
          type="button"
          onClick={hendleLogout}
        >
          로그아웃
        </button>
      )}
    </>
  );
}

export default LoginAndLogoutBtn;
