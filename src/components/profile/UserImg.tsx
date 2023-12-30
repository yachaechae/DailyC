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

  console.log("userImg : ", userImg);
  console.log("정상인가 : ", !userImg);

  return (
    <>
      {!userImg ? (
        <Avatar sx={{ bgcolor: "white" }}>
          <AccountCircle className="fill-orange size-[125%]"> </AccountCircle>
        </Avatar>
      ) : (
        <Image src={userImg} alt="테스트" width={120} height={120} />
      )}
      <Avatar sx={{ bgcolor: "white" }}>
        <AccountCircle className="fill-orange size-[125%]"> </AccountCircle>
      </Avatar>
    </>
  );
}

export default UserImg;
