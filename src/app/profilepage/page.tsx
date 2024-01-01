"use client";

import React, { useEffect, useState } from "react";
import Layout from "./profileLayout";
import { useRecoilValue } from "recoil";
import { userState } from "@/recoil/state";
import { getEventByPost } from "@/api/write";
import Mycard from "@/components/profile-cards/Mycard";
import Link from "next/link";

function ProfilePage() {
  const [posts, setPosts] = useState<any[] | null>([])
  const user = useRecoilValue(userState);
 
  const fetchMyPosts = async () => {
    try {
      const myPosts = await getEventByPost('writedId', user.id);
      console.log('My posts:', myPosts);
      setPosts(myPosts)
    } catch (error) {
      console.error('Error fetching my posts:', error);
    }
  };
  useEffect(() => {
    fetchMyPosts()
  }, [])
  return (
    <>
      <Layout />
      <div className="flex justify-center flex-row mt-[50px] gap-[30px] w-[1000px] ml-auto mr-auto flex-wrap ">
        {posts?.length === 0 && <p className="text-2xl">등록된 코디가 없습니다!</p>}
        {posts?.map((post) => {
          return (
            <Link href={`/posts/${post.id}`}>
            <Mycard title={post.title} mainImg={post.mainImg} tags={post.tags}/>
            </Link>
          )
        })}
      </div>
    </>
  );
}

export default ProfilePage;
