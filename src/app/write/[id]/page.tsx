import { getEventByPostId } from "@/api/write";
import EditFormPage from "@/components/write/edit-form";
import { supabase } from "@/lib/supabase-config";

async function fetchData(params: { id: string }) {
  // const eventId = context;
  // console.log(context, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  const data = await getEventByPostId(params.id);
  const postData = data;
  console.log(data, "bbbbbbbbbbbbbbbbbbb");
  // const event = await getEventById(eventId);

  return data;
}

type Props = {
  params: postType[];
};

export default async function EditPage({
  params,
}: {
  params?: any;
  children?: React.ReactNode;
}) {
  const postData = await fetchData(params);
  console.log(postData, "들어옴!!");
  console.log("확인");
  return (
    <>
      <EditFormPage postData={postData} />
    </>
  );
}

// export const generateStaticParams = async () => {
//   // const eventId = context;
//   // console.log(context, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
//   const data = await getEventByPostId("40d9117a-826c-42c3-96e3-1cf87a3d4602");
//   const postData = data;
//   console.log(data, "bbbbbbbbbbbbbbbbbbb");
//   // const event = await getEventById(eventId);

//   return postData;
// };
