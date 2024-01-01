import React from "react";
import Layout from "../profileLayout";
import BookmarkCard from "@/components/profile-cards/BookmarkCard";
import ReturnUserIsNotLogin from "@/components/profile/ReturnUserIsNotLogin";

function SaveCodyPage() {
  return (
    <ReturnUserIsNotLogin>
      <Layout />
      <div className="ml-auto mr-auto mt-[50px] flex w-[1000px] flex-row flex-wrap justify-center gap-[30px] ">
        <BookmarkCard />
        <BookmarkCard />
        <BookmarkCard />
        <BookmarkCard />
      </div>
    </ReturnUserIsNotLogin>
  );
}

export default SaveCodyPage;
