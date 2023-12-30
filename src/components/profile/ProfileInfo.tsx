import React from "react";
import styles from "./profile-info.module.css";

import UserImg from "./UserImg";
import { useRecoilState } from "recoil";
import { userState } from "@/recoil/state";
function ProfileInfo({ showModal }: any) {
  const [user, setUser] = useRecoilState(userState);
  console.log(user);
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
