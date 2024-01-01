import GetUserBtn from "@/components/main/GetUserBtn";
import UserImg from "@/components/profile/UserImg";

export default function Home() {
  return (
    <div className="xl container flex h-[calc(100vh-75px)] w-full flex-col items-center justify-center gap-5">
      {/* 유저정보 확인 버튼 */}
      <GetUserBtn />
      <UserImg size={120} />
    </div>
  );
}
