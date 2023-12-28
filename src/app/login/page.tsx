"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabase";
import Link from "next/link";
// import styles from "./login.module.css";

function page() {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLginForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log("data : ", data);

    if (error) {
      console.log("error --- ", error);
      return alert("실패");
    }

    alert("로그인 되었습니다.");
    setIsLogin(true);
    router.push("/");
  };

  // 비밀번호 찾기 기능

  return (
    <>
      <form onSubmit={handleLginForm}>
        <div>
          <p>이메일</p>
          <input type="text" value={email} onChange={handleEmailInput} />
        </div>
        <div>
          <p>비밀번호</p>
          <input
            type="password"
            value={password}
            onChange={handlePasswordInput}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div>
        <p>소셜 로그인</p>
        <p>-------------</p>
        <div>
          <div>이미지1</div>
          <div>이미지2</div>
          <div>이미지3</div>
        </div>
        <p>-------------</p>
        <div>
          <a>비밀번호찾기</a>
          <Link href={"/signup"} legacyBehavior>
            <a>회원가입</a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default page;
