import React, { useState } from "react";
import styles from "./edit-profile.module.css";
import SelectGender from "../ui/Radio";
import defaultImg from "../../../public/images/defaultImg.png";
import Image from "next/image";
import { TfiClose } from "react-icons/tfi";

function EditProfile({ closeModal }: any) {
  const [gender, setGender] = useState<string>("");
  const [selecterImg, setSelectedImg] = useState(defaultImg);
  const [file, setFile] = useState(null);

  const previewImg = (event: any) => {
    const imgFile = event.target.files[0];

    setFile(imgFile);
    // 프리뷰 구현
    // File -> Url 형식으로 변환
    const imgUrl: any = URL.createObjectURL(imgFile);
    setSelectedImg(imgUrl);
  };
  return (
    <div className={styles.warpper}>
      <div>
        <label className={styles.avatarfigure}>
          <Image src={selecterImg} alt="기본이미지" width={160} height={160} />
          <input type="file" onChange={previewImg} />
        </label>
      </div>
      <div className={styles.nickname}>
        <input defaultValue="홍길동" type="text" />
      </div>
      <SelectGender gender={gender} setGender={setGender} />
      <div className={styles.height}>
        <label htmlFor="height">키</label>
        <input id="height" type="number" />
      </div>
      <button className={styles.btn}>수정완료!</button>
      <div onClick={closeModal} className={styles.closebtn}>
        <TfiClose size={30} />
      </div>
    </div>
  );
}

export default EditProfile;
