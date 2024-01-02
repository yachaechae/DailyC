"use client";

import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "@/recoil/state";
import { getAllPosts } from "@/api/write";
import BookmarkCard from "../profile-cards/BookmarkCard";

function FetchBookmarkPosts() {
  const [posts, setPosts] = useState<any[] | null>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const user = useRecoilValue(userState);

  const getBookmarkPosts = async () => {
    try {
      setIsLoading(true);
      const bookmarkPosts = await getAllPosts();
      console.log("bookmark posts:", bookmarkPosts);
      setPosts(bookmarkPosts);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching my posts:", error);
    }
  };
  useEffect(() => {
    getBookmarkPosts();
  }, []);
  if (isLoading === true) {
    return <p className="mt-[200px] text-center text-2xl">불러오는 중...</p>;
  }
  return (
    <>
      <div className="ml-auto mr-auto mt-[50px] flex w-[1200px] flex-row flex-wrap justify-center gap-[30px] ">
        {posts?.length === 0 && (
          <p className="text-2xl">저장된 코디가 없습니다!</p>
        )}
        {posts?.map((post) => {
          return (
            <BookmarkCard
              title={post.title}
              mainImg={post.mainImg}
              tags={post.tags}
              height={post.height}
              writedName={post.writedName}
              postId={post.id}
            />
          );
        })}
      </div>
    </>
  );
}

export default FetchBookmarkPosts;
