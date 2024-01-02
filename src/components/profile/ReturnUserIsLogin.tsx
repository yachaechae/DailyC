"use client";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isLoginState } from "@/recoil/state";
import { useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

function ReturnUserIsLogin({ children }: Props) {
  const router = useRouter();
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);

  useEffect(() => {
    if (isLogin === true) {
      router.back();
      return alert("이미 로그인 되어 있습니다.");
    }
  }, []);

  return <>{isLogin === true ? "" : children}</>;
}

export default ReturnUserIsLogin;
