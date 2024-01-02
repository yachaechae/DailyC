import React from "react";
import Layout from "../profileLayout";
import FetchLikePosts from "@/components/profile/FetchLikePosts";
import ReturnUserIsNotLogin from "@/components/profile/ReturnUserIsNotLogin";

function LikeCodyPage() {
  return (
    <ReturnUserIsNotLogin>
      <Layout />
      <FetchLikePosts />
    </ReturnUserIsNotLogin>
  );
}

export default LikeCodyPage;
