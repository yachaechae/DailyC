import GetUserBtn from "@/components/main/GetUserBtn";
import GetProfile from "@/components/profile/GetProfile";

export default function Home() {
  return (
    <div className="container xl w-full items-center flex flex-col gap-5 h-[calc(100vh-75px)] justify-center">
      {/* 유저정보 확인 버튼 */}
      <GetUserBtn />
    </div>
  );
}
