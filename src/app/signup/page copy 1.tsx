"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase-config";
import Link from "next/link";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
// import styles from "./login.module.css";

function page() {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // const [checkPassword, setCheckPassword] = useState<string>("");
  const [nickName, setNickName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [height, setHeight] = useState<number>(0);

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // const handleCheckPasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setCheckPassword(e.target.value);
  // };

  const handleGenderSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
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
          gender,
          height,
        },
      },
    });
    console.log("data : ", data);

    if (error) {
      console.error("error : ", error);
      return alert("실패");
    }

    alert("회원가입 성공");
    router.push("/login");
  };

  return (
    <>
      <form onSubmit={handleSignupForm}>
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
        {/* <div>
          <p>비밀번호 확인</p>
          <input
            type="password"
            value={checkPassword}
            onChange={handleCheckPasswordInput}
          />
        </div> */}
        <div>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">성별</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={gender}
              onChange={handleGenderSelect}
            >
              <FormControlLabel value="Man" control={<Radio />} label="Man" />
              <FormControlLabel
                value="Woman"
                control={<Radio />}
                label="Woman"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div>
          <p>키</p>
          <input type="number" value={height} onChange={handleHeightInput} />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <div>
        <Link href={"/login"} legacyBehavior>
          <a>로그인</a>
        </Link>
      </div>
    </>
  );
}

export default page;
