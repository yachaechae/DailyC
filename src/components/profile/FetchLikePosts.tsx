"use client";

import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "@/recoil/state";
import { getAllPosts, getEventByLike } from "@/api/write";
import LikeCard from "../profile-cards/LikeCard";

function FetchLikePosts() {
  const [posts, setPosts] = useState<any[] | null>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const user = useRecoilValue(userState);

  const getLikePosts = async () => {
    try {
      setIsLoading(true);
      const likePosts = await getAllPosts();
      console.log("like posts:", likePosts);
      setPosts(likePosts);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching my posts:", error);
    }
  };
  useEffect(() => {
    getLikePosts();
  }, []);
  if (isLoading === true) {
    return <p className="mt-[200px] text-center text-2xl">불러오는 중...</p>;
  }
  return (
    <>
      <div className="ml-auto mr-auto mt-[50px] flex w-[1200px] flex-row flex-wrap justify-center gap-[30px] ">
        {posts?.length === 0 && (
          <p className="text-2xl">좋아요한 코디가 없습니다!</p>
        )}
        {posts?.map((post) => {
          return (
            <LikeCard
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

export default FetchLikePosts;
