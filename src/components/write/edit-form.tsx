"use client";

import "@/app/write/write.style.css";
import { RecoilRoot } from "recoil";
import EditComponentPage from "./form/edit-component";

const EditFormPage = ({ postData }: { postData: any[] | null }) => {
  return (
    <RecoilRoot>
      <EditComponentPage postData={postData} />
    </RecoilRoot>
  );
};

export default EditFormPage;
