// "use client";
import { getUser } from "@/utils/auth";
import { AccountCircle } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function UserImg() {
	const [profile, setProfile] = useState<any>({});
	const userImg = profile?.user_metadata?.userImg;

	const getProfile = async () => {
		const data = await getUser();
		setProfile(data);
	};

	useEffect(() => {
		getProfile();
	}, []);

	return (
		<>
			{!userImg ? (
				<Avatar sx={{ bgcolor: "white" }}>
					<AccountCircle color="primary" sx={{ fontSize: 50 }}>
						{" "}
					</AccountCircle>
				</Avatar>
			) : (
				<Image src={userImg} alt="테스트" width={120} height={120} />
			)}
			<Avatar sx={{ bgcolor: "white" }}>
				<AccountCircle color="primary" sx={{ fontSize: 50 }}>
					{" "}
				</AccountCircle>
			</Avatar>
		</>
	);
}

export default UserImg;
