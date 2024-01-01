"use client";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userState } from "@/recoil/state";
import { useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

function UserReturn({ children }: Props) {
  const router = useRouter();
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    if (!user.email) {
      router.push("/");
      return alert("로그인 후 이용 가능합니다.");
    }
  }, []);

  return <>{!user.email ? "" : { children }}</>;
}

export default UserReturn;
