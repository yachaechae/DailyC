"use client";

import React, { useEffect, useState } from "react";
import Layout from "./profileLayout";
import { useRecoilValue } from "recoil";
import { userState } from "@/recoil/state";
import { getEventByPost } from "@/api/write";
import Mycard from "@/components/profile-cards/Mycard";

function ProfilePage() {
  const [posts, setPosts] = useState<any[] | null>([])
  const user = useRecoilValue(userState);
 
  const fetchMyPosts = async () => {
    try {
      const myPosts = await getEventByPost('writedId', +user.id);
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
        {posts?.map((post) => {
          return (
            <Mycard title={post.title} mainImg={post.mainImg} tags={post.tags}/>
          )
        })}
      </div>
    </>
  );
}

export default ProfilePage;
