"use client";

import React from "react";
import Layout from "./profileLayout";
import Mycard from "@/components/profile-cards/Mycard";

function ProfilePage() {
  return (
    <>
      <Layout />
      <div className="flex justify-center flex-row mt-[50px] gap-[30px] w-[1000px] ml-auto mr-auto flex-wrap ">
        <Mycard />
        <Mycard />
        <Mycard />
        <Mycard />
      </div>
    </>
  );
}

export default ProfilePage;
