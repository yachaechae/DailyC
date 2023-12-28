"use client";

import { supabase } from "@/lib/supabase-config";
import { v4 as uuidv4 } from "uuid";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";

declare type inputsType = {
  id: string;
  gender: string;
  height: string;
  title: string;
  content: string;
};

declare type subImgType = {
  name: string;
  url: string;
};

const WritePage = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log(session);
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    // return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
    console.log("login out");
  } else {
    console.log("login in");
  }

  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: "tjdsksro90@gmail.com",
      password: "1234",
    });
  }
  // TODO: 유저 아이디랑 아이디 받을것
  const [writedId, setWritedId] = useState("123");
  const [writedName, setWritedName] = useState("tjdsksro90@gmail.com");
  const [inputs, setInputs] = useState<inputsType>({
    id: uuidv4(),
    gender: "woman",
    height: "",
    title: "",
    content: "",
  });
  const [tags, setTags] = useState<string[]>([]);
  const [tagItem, setTagItem] = useState("");
  const [tagList, setTagList] = useState(["봄", "여름", "가을", "겨울"]);

  const toggleActive = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const selectTag = e.currentTarget.innerText;

    if (e.currentTarget.classList.contains("active")) {
      e.currentTarget.classList.remove("active");
      setTags((tag) => tag.filter((item) => item !== selectTag));
    } else {
      if (tags.length >= 5) return alert("최대 선택 태그는 5개입니다");
      e.currentTarget.classList.add("active");
      setTags([...tags, selectTag]);
    }
  };

  const onKeyPress = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (tagItem.length === 0) return alert("1글자 이상 입력하세요.");
    else if (tagList.includes(tagItem))
      return alert("동일한 태그가 존재합니다.");

    submitTagItem();
  };

  const submitTagItem = () => {
    let updatedTagList = [...tagList];
    updatedTagList.push(tagItem);
    setTagList(updatedTagList);
    setTagItem("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  // supabase 로그인
  // const [userId, setUserId] = useState("");

  // const getUser = async () => {
  //   try {
  //     const {data} = await supabase.auth.getUser()
  //     if(data !== null){
  //       setUserId(data.id)
  //     } else {
  //       setUserId('')
  //     }
  //   }
  // }

  const [mainImg, setMainImg] = useState<string>("");

  const handleChangeImg = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "mainImg") {
      let selectedFile: File = (e.target.files as FileList)[0];

      const { error, data } = await supabase.storage
        .from("images")
        .upload(`posts/${writedName}/${inputs.id}/mainImg`, selectedFile, {
          cacheControl: "3600",
          upsert: false,
        });
      if (error) console.log("Error creating a Main Image", error);
      else {
        console.log("Main Image created successfully", data);
        await previewMainImg();
      }
    }
  };

  // 올린 이미지 가져오기
  const previewMainImg = async () => {
    const { data } = supabase.storage
      .from("images")
      .getPublicUrl(`posts/${writedName}/${inputs.id}/mainImg`);

    setMainImg(data.publicUrl);
    console.log(mainImg);
  };

  const previewDelete = async () => {
    const { data, error } = await supabase.storage
      .from("avatars")
      .remove([`posts/${writedName}/${inputs.id}/mainImg`]);

    if (error) console.log("Error deleting a Main Image", error);
    else {
      console.log("Main Image deleted successfully", data);
      setMainImg("");
    }
  };

  //TODO: 서브 이미지쪽
  const [subImgObject, setSubImgObject] = useState<subImgType[]>([
    { name: "subImg1", url: "" },
    { name: "subImg2", url: "" },
    { name: "subImg3", url: "" },
    { name: "subImg4", url: "" },
    { name: "subImg5", url: "" },
  ]);

  const handleChangeSubImg = async (
    e: ChangeEvent<HTMLInputElement>,
    subImg: string
  ) => {
    if (e.target.name === "subImg") {
      let selectedFile: File = (e.target.files as FileList)[0];

      const { error, data } = await supabase.storage
        .from("images")
        .upload(`posts/${writedName}/${inputs.id}/${subImg}`, selectedFile, {
          cacheControl: "3600",
          upsert: false,
        });
      if (error) console.log("Error creating a Main Image", error);
      else {
        console.log("Main Image created successfully", data);
        await previewSubImg(subImg, true);
      }
    }
  };

  // 올린 이미지 가져오기
  const previewSubImg = async (subImg: string, check: boolean) => {
    const { data } = supabase.storage
      .from("images")
      .getPublicUrl(`posts/${writedName}/${inputs.id}/${subImg}`);

    let findIndex = subImgObject.findIndex((item) => item.name === subImg);
    let copiedItems = [...subImgObject];
    if (check) {
      copiedItems[findIndex].url = data.publicUrl;
      setSubImgObject(copiedItems);
    } else {
      copiedItems[findIndex].url = "";
      setSubImgObject(copiedItems);
    }
  };

  const previewSubDelete = async (subImg: string) => {
    const { data, error } = await supabase.storage
      .from("avatars")
      .remove([`posts/${writedName}/${inputs.id}/${subImg}`]);

    if (error) console.log("Error deleting a Main Image", error);
    else {
      console.log("Main Image deleted successfully", data);
      await previewSubImg(subImg, false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addPost();
  };

  const addPost = async () => {
    const { data, error } = await supabase
      .from("posts")
      .insert([
        {
          id: inputs.id,
          gender: inputs.gender,
          height: inputs.height,
          title: inputs.title,
          content: inputs.content,
          tags: tags,
          writedId: writedId,
          writedName: writedName,
          mainImg: mainImg,
          subImg: subImgObject,
        },
      ])
      .select();

    if (error) console.log("Error creating a post", error);
    else {
      console.log("Post created successfully", data);
    }
  };

  return (
    <div>
      <h2>코디 작성</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="woman">성별</label>
          <input
            type="radio"
            name="gender"
            id="woman"
            value="woman"
            checked={inputs.gender === "woman"}
            onChange={handleChange}
          />
          <label htmlFor="woman">여자</label>
          <input
            type="radio"
            name="gender"
            id="man"
            value="man"
            checked={inputs.gender === "man"}
            onChange={handleChange}
          />
          <label htmlFor="man">남자</label>
        </div>
        <div>
          <label htmlFor="height">키</label>
          <input
            onChange={handleChange}
            type="number"
            id="height"
            name="height"
            placeholder="키를 입력해주세요(ex:170)"
            required
          />
        </div>
        <div>
          <label htmlFor="title">제목</label>
          <input
            onChange={handleChange}
            type="text"
            id="title"
            name="title"
            placeholder="제목을 입력해주세요"
            required
          />
        </div>
        <div>
          <label htmlFor="content">내용</label>
          <input
            onChange={handleChange}
            type="text"
            id="content"
            name="content"
            placeholder="내용을 입력해주세요"
            required
          />
        </div>
        <div>
          <label htmlFor="tags">태그</label>
          {tagList.map((tag, idx) => (
            <button key={idx} type="button" onClick={toggleActive}>
              {tag}
            </button>
          ))}
          <input
            type="text"
            id="tags"
            name="tags"
            placeholder="원하는 태그를 추가해보세요"
            onChange={(e) => setTagItem(e.target.value)}
            value={tagItem}
          />
          <button type="button" onClick={onKeyPress}>
            +
          </button>
        </div>
        <div>
          <label htmlFor="mainImg">메인 사진</label>* 필수
          <input
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            id="mainImg"
            name="mainImg"
            onChange={handleChangeImg}
            required
          />
          {mainImg && mainImg !== "" ? (
            <div>
              <img src={mainImg} alt="mainImg" />
              <button type="button" onClick={previewDelete}>
                삭제
              </button>
            </div>
          ) : (
            <div>
              <p>미리보기 없음</p>
            </div>
          )}
        </div>
        <div>
          <label htmlFor="subImg">서브 사진</label>* 최대 5장
          {subImgObject.map((item, index) => (
            <div key={index}>
              <input
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                id={item.name}
                name="subImg"
                onChange={(e) => handleChangeSubImg(e, item.name)}
              />
              {item.url !== "" ? (
                <div>
                  <img src={item.url} alt="subImg" />
                  <button
                    type="button"
                    onClick={() => previewSubDelete(item.name)}
                  >
                    삭제
                  </button>
                </div>
              ) : (
                <div>
                  <p>미리보기 없음</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <button type="submit">글 작성 완료</button>
        <button type="button" onClick={signInWithEmail}>
          로그인
        </button>
        <button
          type="button"
          onClick={async () => {
            await supabase.auth.signOut();
          }}
        >
          로그아웃
        </button>
      </form>
    </div>
  );
};

export default WritePage;
