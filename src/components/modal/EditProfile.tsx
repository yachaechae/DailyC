import React, { useState } from "react";
import styles from "./edit-profile.module.css";
import SelectGender from "../ui/Radio";
import defaultImg from "../../../public/images/defaultImg.png";
import Image from "next/image";
import { TfiClose } from "react-icons/tfi";
import uuid from "react-uuid";
import { supabase } from "@/lib/supabase-config";

function EditProfile({ closeModal }: any) {
  const [gender, setGender] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [tall, setTall] = useState<string>("");
  const [selectedImg, setSelectedImg] = useState(defaultImg);
  const [file, setFile] = useState(null);

  const nicknameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  const tallHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTall(e.target.value);
  };

  async function uploadFile(file: any) {
    if (file) {
      const { data, error } = await supabase.storage
        .from("profileImage")
        .upload(`/users/user1/${uuid()}`, file);
    } else {
      return null;
    }
  }

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
          <Image src={selectedImg} alt="기본이미지" width={160} height={160} />
          <input type="file" onChange={previewImg} />
        </label>
      </div>
      <div className={styles.nickname}>
        <input value={nickname} type="text" onChange={nicknameHandler} />
      </div>
      <SelectGender gender={gender} setGender={setGender} />
      <div className={styles.height}>
        <label htmlFor="height">키</label>
        <input
          value={tall}
          id="height"
          type="number"
          onChange={tallHandler}
          placeholder="숫자만 입력 가능합니다!"
        />
      </div>
      <button
        onClick={() => {
          uploadFile(file);
          closeModal();
        }}
        className={styles.btn}
      >
        수정완료!
      </button>
      <div onClick={closeModal} className={styles.closebtn}>
        <TfiClose size={30} />
      </div>
    </div>
  );
}

export default EditProfile;
