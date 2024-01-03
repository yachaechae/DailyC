"use client";

import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "@/recoil/state";
import { getAllPosts, getEventByTable } from "@/api/write";
import LikeCard from "../profile-cards/LikeCard";
import Link from "next/link";

type Post = {
  id: number;
  title: string;
  mainImg: string;
  tags: any;
  height: string;
  writedName: string;
};

function FetchLikePosts() {
  const [posts, setPosts] = useState<Post[] | null>([]);
  const [likePosts, setLikePosts] = useState<any[] | null>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const user = useRecoilValue(userState);

  const getLikePosts = async () => {
    try {
      setIsLoading(true);
      const likePosts = await getEventByTable("likes", "user_id", user.id);
      const allPosts = await getAllPosts();
      console.log("like posts:", likePosts);
      setLikePosts(likePosts);
      setPosts(allPosts);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching my posts:", error);
      alert("불러오는 도중 문제가 발생하였습니다.");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getLikePosts();
  }, []);

  const likePostId = likePosts?.map((post) => post.post_id);

  console.log("likePostId", likePostId);
  if (isLoading === true) {
    return <p className="mt-[200px] text-center text-2xl">불러오는 중...</p>;
  }

  return (
    <>
      <div className="my-[50px] ml-auto mr-auto flex w-[1200px] flex-row flex-wrap justify-center gap-[30px] ">
        {likePosts?.length === 0 && (
          <p className="text-2xl">좋아요한 코디가 없습니다!</p>
        )}
        {posts?.map((post) => {
          if (likePostId?.includes(post.id)) {
            return (
              <Link key={post.id} href={`/posts/${post.id}`}>
                <LikeCard
                  title={post.title}
                  mainImg={post.mainImg}
                  tags={post.tags}
                  height={post.height}
                  writedName={post.writedName}
                />
              </Link>
            );
          }
        })}
      </div>
    </>
  );
}

export default FetchLikePosts;
