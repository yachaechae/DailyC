import { getUser } from "@/utils/auth";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function UserImg() {
  const [profile, setProfile] = useState<any>({});

  const getProfile = async () => {
    const data = await getUser();
    setProfile(data);
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <Image
        src={profile?.user_metadata?.userImg}
        alt="테스트"
        width={120}
        height={120}
      />
    </>
  );
}

export default UserImg;
