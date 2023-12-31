"use client";

import "@/app/write/write.style.css";
import { RecoilRoot } from "recoil";
import WriteComponentPage from "./form/write-component";

const WriteFormPage = () => {
  return (
    <RecoilRoot>
      <WriteComponentPage />
    </RecoilRoot>
  );
};

export default WriteFormPage;
