"use client";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userState } from "@/recoil/state";
import { useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

function ReturnUserIsLogin({ children }: Props) {
  const router = useRouter();
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    if (user.email === "") {
      router.push("/");
      return alert("이미 로그인 되어 있습니다.");
    }
  }, []);

  return <>{user.email === "" ? "" : children}</>;
}

export default ReturnUserIsLogin;
