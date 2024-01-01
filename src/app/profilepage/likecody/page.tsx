"use client";

import React from "react";
import Layout from "../profileLayout";
import LikeCard from "@/components/profile-cards/LikeCard";
import ReturnUserIsNotLogin from "@/components/profile/ReturnUserIsNotLogin";

function LikeCodyPage() {
  return (
    <ReturnUserIsNotLogin>
      <Layout />
      <div className="ml-auto mr-auto mt-[50px] flex w-[1000px] flex-row flex-wrap justify-center gap-[30px] ">
        <LikeCard />
        <LikeCard />
        <LikeCard />
        <LikeCard />
      </div>
    </ReturnUserIsNotLogin>
  );
}

export default LikeCodyPage;
