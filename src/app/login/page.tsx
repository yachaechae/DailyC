"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase-config";
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
    console.log(process.env.NEXT_PUBLIC_SERVICE_KEY);
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
    <div className="container flex justify-center items-center h-[calc(100vh-75px)]">
      <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-full ">
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5 text-center">
          로그인
        </h2>
        <form onSubmit={handleLginForm}>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              이메일
            </label>
            <input
              className="w-full bg-white rounded border border-gray-300 focus:border-deepOrange focus:ring-2 focus:ring-lightOrange text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailInput}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="password"
              className="leading-7 text-sm text-gray-600"
            >
              비밀번호
            </label>
            <input
              className="w-full bg-white rounded border border-gray-300 focus:border-deepOrange focus:ring-2 focus:ring-lightOrange text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordInput}
            />
          </div>
          {/* <div className="relative mb-4">
          <label htmlFor="nickname" className="leading-7 text-sm text-gray-600">
            닉네임
          </label>
          <input
            type="text"
            id="nickname"
            name="nickname"
            className="w-full bg-white rounded border border-gray-300 focus:border-deepOrange focus:ring-2 focus:ring-lightOrange text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div> */}
          <button
            className="text-white bg-orange border-0 py-2 px-8 focus:outline-none hover:bg-deepOrange rounded text-lg w-full"
            type="submit"
          >
            로그인
          </button>
        </form>
        <div className="flex justify-end w-full">
          <Link href={"/signup"} legacyBehavior>
            <a className="text-xs text-gray-500 mt-3 w-12">회원가입</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page;
