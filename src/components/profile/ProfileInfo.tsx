import React, { useEffect, useState } from "react";
import styles from "./profile-info.module.css";
import Image from "next/image";
import defaultImg from "../../../public/assets/defaultImg.png";
import { supabase } from "@/lib/supabase-config";
function ProfileInfo({ showModal }: any) {
  const [profile, setProfile] = useState<any>({});

  const getProfile = async () => {
    const { data } = await supabase.auth.getUser();
    setProfile(data);
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className={styles.warpper}>
      <div className={styles.avatarfigure}>
        <Image src={defaultImg} alt="기본이미지" />
      </div>
      <div className={styles.nickname}>홍길동</div>
      <div className={styles.email}>
        {profile.user == null ? "로딩중..." : profile.user.email}
      </div>
      <button onClick={showModal} className={styles.btn}>
        수 정
      </button>
    </div>
  );
}

export default ProfileInfo;
