"use client";
import { isLoginState, userState } from "@/recoil/state";
import { getUser } from "@/utils/auth";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import orangeImg from "@assets/defaultImg.png";
import { usePathname, useRouter } from "next/navigation";

function GetProfile({ children }: { children: React.ReactNode }) {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [user, setUser] = useRecoilState(userState);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userProfile = await getUser();
        if (userProfile) {
          setIsLogin(true);
          setIsLoading(false);
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
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setIsLogin(false);
      }
    };
    fetchData();
  }, []);

  // console.log("user---", user);
  // console.log("isLoading---", isLoading);
  // console.log("isLogin---", isLogin);

  return (
    <>
      {isLoading ? (
        <div className="flex h-[calc(100vh-75px)] w-full flex-col items-center justify-center gap-[30px]">
          <Image className="" src={orangeImg} alt="orangeImg" width={200} />
          <h1 className="text-3xl">로 딩 중 . . .</h1>
        </div>
      ) : (
        children
      )}
    </>
  );
}

export default GetProfile;
