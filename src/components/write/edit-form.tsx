"use client";

import "@/app/write/write.style.css";
import { RecoilRoot } from "recoil";
import EditComponentPage from "./form/edit-component";

const EditFormPage = ({
  postData,
  params,
}: {
  postData: any[] | null;
  params: number;
}) => {
  return <EditComponentPage postData={postData} params={params} />;
};

export default EditFormPage;
