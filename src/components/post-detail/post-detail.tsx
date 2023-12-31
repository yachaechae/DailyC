"use client";

import { RecoilRoot } from "recoil";
import PostComponentPage from "./post-info/post-components";

const PostDetailPage = ({ postData }: { postData: any[] | null }) => {
  return (
    <RecoilRoot>
      <PostComponentPage postData={postData} />
    </RecoilRoot>
  );
};

export default PostDetailPage;
