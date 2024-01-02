import React from "react";
import Layout from "./profileLayout";
import FetchMyPosts from "@/components/profile/FetchMyPosts";
import ReturnUserIsNotLogin from "@/components/profile/ReturnUserIsNotLogin";

function ProfilePage() {
  return (
    <ReturnUserIsNotLogin>
      <Layout />
      <FetchMyPosts />
    </ReturnUserIsNotLogin>
  );
}

export default ProfilePage;
