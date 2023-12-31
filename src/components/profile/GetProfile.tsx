"use client";

import { userState } from "@/recoil/state";
import { getUser } from "@/utils/auth";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

function GetProfile() {
  const [user, setUser] = useRecoilState(userState);
  const [profile, setProfile] = useState<any>({});
  const getUserInfo = async () => {
    const data = await getUser();
    setProfile(data);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    if (profile) {
      setUser({
        id: profile.id,
        email: profile.email,
        nickname: profile.user_metadata?.nickname,
        height: profile.user_metadata?.height,
        gender: profile.user_metadata?.gender,
        userImg: profile.user_metadata?.userImg,
      });
    } else {
      return;
    }
  }, [profile]);
  console.log(user);

  return <></>;
}

export default GetProfile;
