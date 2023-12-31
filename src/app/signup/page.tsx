"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase-config";
import Link from "next/link";
import SelectGender from "@/components/ui/Radio";
// import defaultImg1 from "../../../public/assets/defaultImg.png";
// import styles from "./login.module.css";

function page() {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // const [checkPassword, setCheckPassword] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [height, setHeight] = useState<number>(0);
  // const defaultImg = defaultImg1;

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // const handleCheckPasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setCheckPassword(e.target.value);
  // };

  const handleNickNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleHeightInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(parseInt(e.target.value));
  };

  const handleSignupForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          nickname,
          gender,
          height,
          userImg: null,
        },
      },
    });

    if (error) {
      console.error("error : ", error);
      return alert(error.message);
    }

    alert("회원가입 성공");
    router.push("/login");
  };

  return (
    <>
      <div className="container flex h-[calc(100vh-75px)] items-center justify-center">
        <div className="flex w-full flex-col rounded-lg bg-gray-100 p-8 md:w-1/2 lg:w-2/6 ">
          <h2 className="title-font mb-5 text-center text-lg font-medium text-gray-900">
            회원가입
          </h2>
          <form onSubmit={handleSignupForm}>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="text-sm leading-7 text-gray-600"
              >
                이메일
              </label>
              <input
                className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-deepOrange focus:ring-2 focus:ring-lightOrange"
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
                className="text-sm leading-7 text-gray-600"
              >
                비밀번호
              </label>
              <input
                className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-deepOrange focus:ring-2 focus:ring-lightOrange"
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordInput}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="nickname"
                className="text-sm leading-7 text-gray-600"
              >
                닉네임
              </label>
              <input
                className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-deepOrange focus:ring-2 focus:ring-lightOrange"
                type="text"
                id="nickname"
                name="nickname"
                value={nickname}
                onChange={handleNickNameInput}
              />
            </div>
            <div className="relative mb-4">
              <SelectGender gender={gender} setGender={setGender} />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="height"
                className="text-sm leading-7 text-gray-600"
              >
                키
              </label>
              <input
                className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-deepOrange focus:ring-2 focus:ring-lightOrange"
                type="number"
                id="height"
                name="height"
                value={height}
                onChange={handleHeightInput}
              />
            </div>
            <button
              className="w-full rounded border-0 bg-orange px-8 py-2 text-lg text-white hover:bg-deepOrange focus:outline-none"
              type="submit"
            >
              회원가입
            </button>
          </form>
          <div className="flex w-full justify-end">
            <Link href={"/login"} legacyBehavior>
              <a className="mt-3 text-xs text-gray-500">로그인</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
