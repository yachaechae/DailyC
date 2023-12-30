import React, { useEffect, useState } from "react";
import styles from "./edit-profile.module.css";
import SelectGender from "../ui/Radio";
import defaultImg from "../../../public/assets/defaultImg.png";
import Image from "next/image";
import { TfiClose } from "react-icons/tfi";
import { supabase } from "@/lib/supabase-config";
import uuid from "react-uuid";
import { getUser } from "@/utils/auth";

function EditProfile({ closeModal }: any) {
  const [gender, setGender] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [selectedImg, setSelectedImg] = useState(defaultImg);
  const [file, setFile] = useState(null);
  const [profile, setProfile] = useState<any>({});

  const nicknameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  const tallHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTall(e.target.value);
  };

  const getProfile = async () => {
    const user = await getUser();
    console.log(user);
    setProfile(user);
  };
  useEffect(() => {
    getProfile();
  }, []);

  const updateUserData = async (tall: string, gender: string) => {
    const updatedHeight = tall === undefined ? profileHeight : tall;
    const { data, error } = await supabase.auth.updateUser({
      data: {
        height: `${updatedHeight}`,
        gender: `${gender}`,
      },
    });
    console.log(data);
  };

  const profileHeight = profile.user_metadata?.height;
  const profileGender = profile.user_metadata?.gender;

  const [tall, setTall] = useState<string>(profileHeight);

  console.log(tall === undefined ? profileHeight : tall);

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
      <SelectGender
        gender={gender}
        setGender={setGender}
        userProfile={profile}
      />
      <div className={styles.height}>
        <label htmlFor="height">키</label>
        <input
          defaultValue={profileHeight}
          id="height"
          type="number"
          onChange={tallHandler}
          placeholder="숫자만 입력 가능합니다!"
        />
      </div>
      <button
        onClick={() => {
          if (gender === "") {
            alert("성별을 선택해 주세요!");
            return false;
          }
          const answer = window.confirm("이대로 수정하시겠습니까?");
          if (!answer) return;
          uploadFile(file);
          updateUserData(tall, gender);
          closeModal();
        }}
        className={styles.btn}
      >
        수정 완료!
      </button>
      <div
        onClick={() => {
          const answer = window.confirm(
            "수정된 내용이 저장되지 않습니다. 그래도 나가시겠습니까?"
          );
          if (!answer) return;
          closeModal();
        }}
        className={styles.closebtn}
      >
        <TfiClose size={30} />
      </div>
    </div>
  );
}

export default EditProfile;
