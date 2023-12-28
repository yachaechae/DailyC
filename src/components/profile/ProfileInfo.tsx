import React from "react";
import styles from "./profile-info.module.css";
import Image from "next/image";
import defaultImg from "../../../public/images/defaultImg.png";

function ProfileInfo({ showModal }: any) {
  return (
    <div className={styles.warpper}>
      <div className={styles.avatarfigure}>
        <Image src={defaultImg} alt="기본이미지" />
      </div>
      <div className={styles.nickname}>홍길동</div>
      <div className={styles.email}>honggildong@hanmail.com</div>
      <button onClick={showModal} className={styles.btn}>
        수 정
      </button>
    </div>
  );
}

export default ProfileInfo;
