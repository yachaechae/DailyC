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
      <div className="container flex justify-center items-center h-[calc(100vh-75px)]">
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-full ">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5 text-center">
            회원가입
          </h2>
          <form onSubmit={handleSignupForm}>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
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
            <div className="relative mb-4">
              <label
                htmlFor="nickname"
                className="leading-7 text-sm text-gray-600"
              >
                닉네임
              </label>
              <input
                className="w-full bg-white rounded border border-gray-300 focus:border-deepOrange focus:ring-2 focus:ring-lightOrange text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                className="leading-7 text-sm text-gray-600"
              >
                키
              </label>
              <input
                className="w-full bg-white rounded border border-gray-300 focus:border-deepOrange focus:ring-2 focus:ring-lightOrange text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                type="number"
                id="height"
                name="height"
                value={height}
                onChange={handleHeightInput}
              />
            </div>
            <button
              className="text-white bg-orange border-0 py-2 px-8 focus:outline-none hover:bg-deepOrange rounded text-lg w-full"
              type="submit"
            >
              회원가입
            </button>
          </form>
          <div className="flex justify-end w-full">
            <Link href={"/login"} legacyBehavior>
              <a className="text-xs text-gray-500 mt-3">로그인</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
