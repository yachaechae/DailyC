import Image from "next/image";
import React from "react";
import orangeImg from "@assets/defaultImg.png";

function page() {
  return (
    <div className="flex h-[calc(100vh-75px)] w-full flex-col items-center justify-center gap-[30px]">
      <Image className="" src={orangeImg} alt="orangeImg" width={200} />
      <h1 className="text-3xl">해당 페이지를 찾을 수 없습니다.</h1>
      <h1 className="text-3xl">
        <span className="text-orange">페이지 주소</span>를 확인해주세요!
      </h1>
    </div>
  );
}

// border-2 border-solid border-black

export default page;
