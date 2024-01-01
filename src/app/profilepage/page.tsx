"use client";

import React, { useEffect } from "react";
import Layout from "./profileLayout";
import { useRecoilValue } from "recoil";
import { userState } from "@/recoil/state";
import { getEventByPost } from "@/api/write";

function ProfilePage() {
  const user = useRecoilValue(userState);

  const myPosts = getEventByPost("writedId", user.id);
  console.log("userID", user.id);
  console.log("myposts", myPosts);
  return (
    <>
      <Layout />
      <div className="flex justify-center flex-row mt-[50px] gap-[30px] w-[1000px] ml-auto mr-auto flex-wrap ">
        {/* {myPosts?.map(() => {})} */}
      </div>
    </>
  );
}

export default ProfilePage;
