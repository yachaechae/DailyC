import React from "react";
import Layout from "../profileLayout";
import FetchLikePosts from "@/components/profile/FetchLikePosts";

function LikeCodyPage() {
  return (
    <>
      <Layout />
      <FetchLikePosts />
    </>
  );
}

export default LikeCodyPage;
