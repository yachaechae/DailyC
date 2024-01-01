import { getEventByPost } from "@/api/write";
import PostDetailPage from "@/components/post-detail/post-detail";

async function fetchData(params: { id: number }) {
  const data = await getEventByPost("id", params.id);
  return data;
}

export default async function PostDetail({
  params,
}: {
  params: { id: number };
}) {
  const postData = await fetchData(params);

  return <PostDetailPage postData={postData} params={params.id} />;
}
