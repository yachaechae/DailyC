import React from "react";
import Layout from "../profileLayout";
import BookmarkCard from "@/components/profile-cards/BookmarkCard";

function SaveCodyPage() {
  return (
    <>
      <Layout />
      <div className="flex justify-center flex-row mt-[50px] gap-[30px] w-[1000px] ml-auto mr-auto flex-wrap ">
        <BookmarkCard />
        <BookmarkCard />
        <BookmarkCard />
        <BookmarkCard />
      </div>
    </>
  );
}

export default SaveCodyPage;
