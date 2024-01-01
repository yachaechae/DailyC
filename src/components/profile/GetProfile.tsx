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

  return <></>;
}

export default GetProfile;
