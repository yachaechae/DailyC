import React from "react";
import Layout from "./profileLayout";
import FetchMyPosts from "@/components/profile/FetchMyPosts";

function ProfilePage() {
  return (
    <>
      <Layout />
      <FetchMyPosts />
    </>
  );
}

export default ProfilePage;
