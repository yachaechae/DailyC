import Image from "next/image";
import Link from "next/link";
import LogoutBtn from "@/components/main/LogoutBtn";
import GetUserBtn from "@/components/main/GetUserBtn";

export default function Home() {
	return (
		<div className="container w-full items-center flex flex-col gap-5 h-[calc(100vh-75px)] justify-center">
			{/* 임시 버튼 : 로그인 화면으로 이동 */}
			<Link href="/login">
				<button>로그인화면</button>
			</Link>
			{/* 로그아웃 버튼 */}
			<LogoutBtn />
			{/* 유저정보 확인 버튼 */}
			<GetUserBtn />
		</div>
	);
}
