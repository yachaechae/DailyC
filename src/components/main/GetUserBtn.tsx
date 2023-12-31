"use client";
import { getUser } from "@/utils/auth";
import React from "react";
import UserImg from "../profile/UserImg";

function GetUserBtn() {
	const handleGetUserBtn = async () => {
		const profile = await getUser();
		if (!profile) return alert("로그인된 이메일이 없습니다.");
		console.log("user 정보 ", profile);
	};

	return (
		<>
			<button onClick={handleGetUserBtn}>유저정보</button>
			<UserImg />
		</>
	);
}

export default GetUserBtn;
