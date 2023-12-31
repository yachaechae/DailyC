import React from "react";
import styles from "./profile-info.module.css";

import UserImg from "./UserImg";
import { useRecoilState } from "recoil";
import { userState } from "@/recoil/state";
function ProfileInfo({ showModal }: any) {
  const [user, setUser] = useRecoilState(userState);
  return (
    <div className={styles.warpper}>
      <div className={styles.avatarfigure}>
        <div className=" h-[120px] w-[120px]">
          <UserImg size={120} />
        </div>
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
