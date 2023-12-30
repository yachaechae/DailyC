import React, { useEffect, useState } from "react";
import styles from "./profile-info.module.css";
import Image from "next/image";
import defaultImg from "../../../public/assets/defaultImg.png";
import { supabase } from "@/lib/supabase-config";
import UserImg from "./UserImg";
import { getUser } from "@/utils/auth";
import { useRecoilState } from "recoil";
import { userState } from "@/recoil/state";
function ProfileInfo({ showModal }: any) {
  const [user, setUser] = useRecoilState(userState);

  return (
    <div className={styles.warpper}>
      <div className={styles.avatarfigure}>
        <UserImg />
      </div>
      <div className={styles.nickname}>{user.nickname}</div>
      <div className={styles.email}>{user.email}</div>
      <button onClick={showModal} className={styles.btn}>
        수 정
      </button>
    </div>
  );
}

export default ProfileInfo;
