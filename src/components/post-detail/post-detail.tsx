"use client";

import { RecoilRoot } from "recoil";
import PostComponentPage from "./post-info/post-components";

const PostDetailPage = ({
  postData,
  params,
}: {
  postData: any[] | null;
  params: number;
}) => {
  return (
    <RecoilRoot>
      <PostComponentPage postData={postData} params={params} />
    </RecoilRoot>
  );
};

export default PostDetailPage;
