import React from "react";
import Layout from "./profileLayout";
import Mycard from "@/components/profile-cards/Mycard";
import UserReturn from "@/components/profile/ReturnUserIsNotLogin";

function ProfilePage() {
  return (
    <>
      <UserReturn>
        <Layout />
        <div className="ml-auto mr-auto mt-[50px] flex w-[1000px] flex-row flex-wrap justify-center gap-[30px] ">
          <Mycard />
          <Mycard />
          <Mycard />
          <Mycard />
        </div>
      </UserReturn>
    </>
  );
}

export default ProfilePage;
