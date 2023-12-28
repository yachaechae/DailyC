"use client";
import React from "react";
import { supabase } from "@/utils/supabase";
import { useRouter } from "next/navigation";

function LogoutBtn() {
  const router = useRouter();

  const hendleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log("error --- ", error);
      return alert("실패");
    }
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
