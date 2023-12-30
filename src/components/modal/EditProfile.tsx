import React, { useEffect, useState } from "react";
import styles from "./edit-profile.module.css";
import SelectGender from "../ui/Radio";
import defaultImg from "../../../public/assets/defaultImg.png";
import Image from "next/image";
import { TfiClose } from "react-icons/tfi";
import { supabase } from "@/lib/supabase-config";
import { getUser } from "@/utils/auth";
import { useRecoilState } from "recoil";
import { userState } from "@/recoil/state";

function EditProfile({ closeModal }: any) {
  const [gender, setGender] = useState<string>("");
  const [file, setFile] = useState(null);
  const [profile, setProfile] = useState<any>({});
  const [user, setUser] = useRecoilState(userState);

  const nicknameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  const tallHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTall(e.target.value);
  };

  const getProfile = async () => {
    const user = await getUser();
    setProfile(user);
    console.log(user);
  };
  useEffect(() => {
    getProfile();
  }, []);

  const profileHeight = user.height;
  const profileNickname = user.nickname;
  const profileImg = user.userImg;

  const [tall, setTall] = useState<string>(profileHeight);
  const [nickname, setNickname] = useState<string>(profileNickname);
  const [selectedImg, setSelectedImg] = useState<string>(profileImg);

  const previewImg = (event: any) => {
    const imgFile = event.target.files[0];

    setFile(imgFile);
    // 프리뷰 구현
    // File -> Url 형식으로 변환
    const imgUrl: any = URL.createObjectURL(imgFile);
    setSelectedImg(imgUrl);
  };

  const updateUserData = async () => {
    const updatedHeight =
      user.height === undefined ? profileHeight : user.height;
    const updatedNickname =
      user.nickname === undefined ? profileNickname : user.nickname;
    const updatedImg = user.userImg !== undefined ? user.userImg : profileImg;
    const { data, error } = await supabase.auth.updateUser({
      data: {
        userImg: `${updatedImg}`,
        nickname: `${updatedNickname}`,
        height: `${updatedHeight}`,
        gender: `${gender}`,
      },
    });
    setUser({
      id: profile.id,
      email: profile.email,
      nickname: profile.user_metadata?.nickname,
      height: profile.user_metadata?.height,
      gender: profile.user_metadata?.gender,
      userImg: profile.user_metadata?.userImg,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const user = await getUser();
      setProfile(user);
      setTall(user?.user_metadata?.height || "");
      setNickname(user?.user_metadata?.nickname || "");
      setSelectedImg(user?.user_metadata?.userImg || defaultImg);
    };

    fetchData();
  }, []);
  return (
    <div className={styles.warpper}>
      <div>
        <label className={styles.avatarfigure}>
          <Image src={selectedImg} alt="기본이미지" width={160} height={160} />
          <input type="file" onChange={previewImg} />
        </label>
      </div>
      <div className={styles.nickname}>
        <input
          defaultValue={profileNickname}
          type="text"
          onChange={nicknameHandler}
        />
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
          updateUserData();

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
