"use client";

import { isLoginState, userState } from "@/recoil/state";
import { getUser } from "@/utils/auth";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

function GetProfile() {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [user, setUser] = useRecoilState(userState);
  const [profile, setProfile] = useState<any>(null);

  const getUserInfo = async () => {
    const data = await getUser();
    setProfile(data);
  };

  useEffect(() => {
    getUserInfo();
  }, [isLogin]);

  useEffect(() => {
    if (!!profile) {
      setIsLogin(true);
      setUser({
        id: profile.id,
        email: profile.email,
        nickname: profile.user_metadata?.nickname,
        height: profile.user_metadata?.height,
        gender: profile.user_metadata?.gender,
        userImg: profile.user_metadata?.userImg,
      });
    } else {
      setIsLogin(false);
      return;
    }
  }, [profile]);

  // EditProfile.tsx
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const user = await getUser();
  //     setProfile(user);
  //     setTall(user?.user_metadata?.height || "");
  //     setNickname(user?.user_metadata?.nickname || "");
  //     setSelectedImg(user?.user_metadata?.userImg || null);
  //   };

  //   fetchData();
  // }, []);

  return <></>;
}

export default GetProfile;
