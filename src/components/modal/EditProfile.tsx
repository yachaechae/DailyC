import React, { useEffect, useState } from "react";
import styles from "./edit-profile.module.css";
import SelectGender from "../ui/SelectGender";
import Image from "next/image";
import { TfiClose } from "react-icons/tfi";
import { supabase } from "@/lib/supabase-config";
import { getUser } from "@/utils/auth";
import { useRecoilState } from "recoil";
import { userState } from "@/recoil/state";
import UserImg from "../profile/UserImg";

function EditProfile({ closeModal }: any) {
  const [gender, setGender] = useState<string>("");
  const [file, setFile] = useState<any>({});
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
  };
  useEffect(() => {
    getProfile();
  }, []);

  const profileHeight = user.height;
  const profileNickname = user.nickname;
  const profileImg = user.userImg;

  const [tall, setTall] = useState<string>(profileHeight);
  const [nickname, setNickname] = useState<string>(profileNickname);
  const [selectedImg, setSelectedImg] = useState<any>(<UserImg />);

  const previewImg = (event: any) => {
    const imgFile = event.target.files[0];
    setFile(imgFile);
    // 프리뷰 구현
    // File -> Url 형식으로 변환
    const imgUrl: any = URL.createObjectURL(imgFile);
    setSelectedImg(imgUrl);
  };

  const updateUserData = async () => {
    const updatedHeight = tall === undefined ? profileHeight : tall;
    const updatedNickname = nickname === undefined ? profileNickname : nickname;
    const updatedImg = selectedImg !== undefined ? selectedImg : profileImg;
    // const updatedFile = file !== undefined ? file : null;
    console.log("file ------ ", file);
    if (!file) return;
    const { data, error } = await supabase.auth.updateUser({
      data: {
        // userImg: file,
        userImg: updatedImg,
        nickname: updatedNickname,
        height: updatedHeight,
        gender: gender,
      },
    });
    setUser({
      id: profile.id,
      email: profile.email,
      nickname: updatedNickname,
      height: updatedHeight,
      gender: gender,
      userImg: updatedImg,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const user = await getUser();
      setProfile(user);
      setTall(user?.user_metadata?.height || "");
      setNickname(user?.user_metadata?.nickname || "");
      setSelectedImg(user?.user_metadata?.userImg || null);
    };

    fetchData();
  }, []);

  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        if (gender === "") {
          alert("성별을 선택해 주세요!");
          return false;
        }
        const answer = window.confirm("이대로 수정하시겠습니까?");
        if (!answer) return;
        updateUserData();

        closeModal();
      }}
    >
      <div className={styles.warpper}>
      <div>
        <label className={styles.avatarfigure}>
          {!selectedImg ? (
            <UserImg />
          ) : (
            <Image
              src={selectedImg}
              alt="기본이미지"
              width={160}
              height={160}
            />
          )}
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
          textAlign={"text-center"}
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
        <button className={styles.btn}>수정 완료!</button>
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
    </form>
  )
}

export default EditProfile;
