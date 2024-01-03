"use client";

import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "@/recoil/state";
import { getEventByPost } from "@/api/write";
import Mycard from "@/components/profile-cards/Mycard";
import Link from "next/link";

type Post = {
  id: number;
  title: string;
  mainImg: string;
  tags: any;
};

function FetchMyPosts() {
  const [posts, setPosts] = useState<Post[] | null>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const user = useRecoilValue(userState);

  const getMyPosts = async () => {
    try {
      setIsLoading(true);
      const myPosts = await getEventByPost("writedId", user.id);
      console.log("My posts:", myPosts);
      setPosts(myPosts);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching my posts:", error);
      alert("불러오는 도중 문제가 발생하였습니다.");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getMyPosts();
  }, []);
  if (isLoading === true) {
    return <p className="mt-[200px] text-center text-2xl">불러오는 중...</p>;
  }
  return (
    <>
      <div className="my-[50px] ml-auto mr-auto flex w-[1200px] flex-row flex-wrap justify-center gap-[30px] ">
        {posts?.length === 0 && (
          <p className="text-2xl">등록된 코디가 없습니다!</p>
        )}
        {posts?.map((post) => {
          return (
            <Link key={post.id} href={`/posts/${post.id}`}>
              <Mycard
                title={post.title}
                mainImg={post.mainImg}
                tags={post.tags}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default FetchMyPosts;
