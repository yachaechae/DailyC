"use client";
import React, { useEffect, useState } from "react";
import styles from "./login.module.css";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabase";

type LoginType = {
  id: string;
  password: string;
};

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

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      alert("로그인 성공");
      setIsLogin(true);
      router.push("/");
    } catch (error) {
      console.error(error);
    }

    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    console.log("isLogin : ", isLogin);
  }, [isLogin]);

  return (
    <>
      <form onSubmit={handleLginForm}>
        <div>
          <p>이메일</p>
          <input
            type="text"
            value={email}
            onChange={handleEmailInput}
            min={0}
          />
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
          <a>회원가입</a>
        </div>
      </div>
    </>
  );
}

export default page;
