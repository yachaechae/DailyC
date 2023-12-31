"use client";

import React from "react";
import Layout from "../profileLayout";
import LikeCard from "@/components/profile-cards/LikeCard";

function LikeCodyPage() {
  return (
    <>
      <Layout />
      <div className="flex justify-center flex-row mt-[50px] gap-[30px] w-[1000px] ml-auto mr-auto flex-wrap ">
        <LikeCard />
        <LikeCard />
        <LikeCard />
        <LikeCard />
      </div>
    </>
  );
}

export default LikeCodyPage;
