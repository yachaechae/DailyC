import React from "react";
import Layout from "../profileLayout";
import ReturnUserIsNotLogin from "@/components/profile/ReturnUserIsNotLogin";
import FetchBookmarkPosts from "@/components/profile/FetchBookmarkPosts";

function SaveCodyPage() {
  return (
    <ReturnUserIsNotLogin>
      <Layout />
      <FetchBookmarkPosts />
    </ReturnUserIsNotLogin>
  );
}

export default SaveCodyPage;
