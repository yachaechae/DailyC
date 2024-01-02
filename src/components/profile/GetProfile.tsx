"use client";

import { isLoginState, userState } from "@/recoil/state";
import { getUser } from "@/utils/auth";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

function GetProfile() {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [user, setUser] = useRecoilState(userState);
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userProfile = await getUser();
        if (userProfile) {
          setProfile(userProfile);
          setIsLogin(true);
          setUser({
            id: userProfile.id,
            email: userProfile.email || "",
            nickname: userProfile.user_metadata?.nickname || "",
            height: userProfile.user_metadata?.height || "",
            gender: userProfile.user_metadata?.gender || "",
            userImg: userProfile.user_metadata?.userImg || "",
          });
        } else {
          setIsLogin(false);
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setIsLogin(false);
      }
    };

    fetchData();
  }, []);

  console.log("user---", user);
  console.log("profile---", profile);
  console.log("isLogin---", isLogin);

  return <></>;
}

export default GetProfile;
