import { getEventByPostId } from "@/api/write";
import EditFormPage from "@/components/write/edit-form";

async function fetchData(params: { id: string }) {
  const data = await getEventByPostId(params.id);
  return data;
}

export default async function EditPage({
  params,
}: {
  params?: any;
  children?: React.ReactNode;
}) {
  const postData = await fetchData(params);
  return <EditFormPage postData={postData} />;
}
