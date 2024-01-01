"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase-config";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { isLoginState } from "@/recoil/state";

function page() {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);

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

    if (error) {
      console.error("error : ", error);
      return alert(error.message);
    }

    alert("로그인 되었습니다.");
    setIsLogin(true);
    router.push("/");
  };

  return (
    <div className="container  flex h-[calc(100vh-75px)] items-center justify-center">
      <div className=" flex w-full flex-col rounded-lg bg-gray-100 p-8 md:w-1/2 lg:w-2/6">
        <h2 className="title-font mb-5 text-center text-lg font-medium text-gray-900">
          로그인
        </h2>
        <form onSubmit={handleLginForm}>
          <div className="relative mb-4">
            <label htmlFor="email" className="text-sm leading-7 text-gray-600">
              이메일
            </label>
            <input
              className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-deepOrange focus:ring-2 focus:ring-lightOrange"
              type="email"
              id="email"
              name="email"
              placeholder="이메일을 입력해주세요"
              value={email}
              onChange={handleEmailInput}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="password"
              className="text-sm leading-7 text-gray-600"
            >
              비밀번호
            </label>
            <input
              className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-deepOrange focus:ring-2 focus:ring-lightOrange"
              type="password"
              id="password"
              name="password"
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={handlePasswordInput}
            />
          </div>
          <button
            className="w-full rounded border-0 bg-orange px-8 py-2 text-lg text-white hover:bg-deepOrange focus:outline-none"
            type="submit"
          >
            로그인
          </button>
        </form>
        <div className="flex w-full justify-end">
          <Link href={"/signup"} legacyBehavior>
            <a className="mt-3 text-xs text-gray-500">회원가입</a>
          </Link>
        </div>
      </div>
      {/* <ScrollToTopBtn />
      <div className="h-[2500px] w-[600px] bg-orange" />
      <div className="h-[2500px] w-[600px] bg-orange" /> */}
    </div>
  );
}

export default page;
