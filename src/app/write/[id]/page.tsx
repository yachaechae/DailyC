import { getEventByPost } from "@/api/write";
import EditFormPage from "@/components/write/edit-form";

async function fetchData(params: { id: number }) {
  const data = await getEventByPost("id", params.id);
  return data;
}

export default async function EditPage({ params }: { params: { id: number } }) {
  const postData = await fetchData(params);
  return <EditFormPage postData={postData} params={params.id} />;
}
