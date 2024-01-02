"use client";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isLoginState } from "@/recoil/state";
import { useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

function ReturnUserIsNotLogin({ children }: Props) {
  const router = useRouter();
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);

  useEffect(() => {
    if (isLogin === false) {
      alert("로그인 후 이용 가능합니다.");
      if (confirm("로그인 페이지로 이동하시겠습니까?")) {
        return router.push("/login");
      } else {
        return router.back();
      }
    }
  }, []);

  return <>{isLogin === false ? "" : children}</>;
}

export default ReturnUserIsNotLogin;
