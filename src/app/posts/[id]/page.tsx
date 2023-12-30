import { getEventByPostId } from "@/api/write";
import PostDetailPage from "@/components/post-detail/post-detail";

async function fetchData(params: { id: string }) {
  const data = await getEventByPostId(params.id);
  return data;
}

export default async function PostDetail({
  params,
}: {
  params?: any;
  children?: React.ReactNode;
}) {
  const postData = await fetchData(params);

  return <PostDetailPage postData={postData} />;
}
