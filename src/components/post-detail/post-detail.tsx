"use client";

import PostComponentPage from "./post-info/post-components";

const PostDetailPage = ({
  postData,
  params,
}: {
  postData: any[] | null;
  params: number;
}) => {
  return <PostComponentPage postData={postData} params={params} />;
};

export default PostDetailPage;
