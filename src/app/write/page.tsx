"use client";

import { supabase } from "@/lib/supabase-config";
import { Session } from "@supabase/supabase-js";
import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import uuid from "react-uuid";

declare type inputsType = {
  id: string;
  gender: string;
  height: string;
  title: string;
  content: string;
};

const WritePage = () => {
  // TODO: 유저 아이디랑 아이디 받을것
  const [writedId, setWritedId] = useState("123");
  const [writedName, setWritedName] = useState("tjdsksro90@gmail.com");
  const [inputs, setInputs] = useState<inputsType>({
    id: uuid(),
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

  let selectedSubArray: string[] = [];

  const subImg1 = useRef<any>(null);
  const subImg2 = useRef<any>(null);
  const subImg3 = useRef<any>(null);
  const subImg4 = useRef<any>(null);
  const subImg5 = useRef<any>(null);
  const [subImgFile1, setSubImgFile1] = useState<File>();
  const [subImgFile2, setSubImgFile2] = useState<File>();
  const [subImgFile3, setSubImgFile3] = useState<File>();
  const [subImgFile4, setSubImgFile4] = useState<File>();
  const [subImgFile5, setSubImgFile5] = useState<File>();
  const [subImgpreview1, setSubImgPreview1] = useState<string | null>("");
  const [subImgpreview2, setSubImgPreview2] = useState<string | null>("");
  const [subImgpreview3, setSubImgPreview3] = useState<string | null>("");
  const [subImgpreview4, setSubImgPreview4] = useState<string | null>("");
  const [subImgpreview5, setSubImgPreview5] = useState<string | null>("");

  const handleChangeSubImg = async (
    e: ChangeEvent<HTMLInputElement>,
    value: number
  ) => {
    if (e.target.files !== null) {
      const file = e.target.files[0];
      if (file && file.type.substring(0, 5) === "image") {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        switch (value) {
          case 1:
            setSubImgFile1(file);
            reader.onloadend = () => {
              setSubImgPreview1(reader.result as string);
            };
            break;
          case 2:
            setSubImgFile2(file);
            reader.onloadend = () => {
              setSubImgPreview2(reader.result as string);
            };
            break;
          case 3:
            setSubImgFile3(file);
            reader.onloadend = () => {
              setSubImgPreview3(reader.result as string);
            };
            break;
          case 4:
            setSubImgFile4(file);
            reader.onloadend = () => {
              setSubImgPreview4(reader.result as string);
            };
            break;
          case 5:
            setSubImgFile5(file);
            reader.onloadend = () => {
              setSubImgPreview5(reader.result as string);
            };
            break;
          default:
            console.log("default");
            break;
        }
      } else {
        e.target.value = "";
        previewSubDelete(value);
      }
    }
  };

  const previewSubDelete = (value: number) => {
    switch (value) {
      case 1:
        if (subImgpreview2 !== null) {
          setSubImgFile1(subImgFile2);
          setSubImgPreview1(subImgpreview2);
          subImg1.current.value = "";
          subImg2.current.value = "";
          if (subImgFile2 === null || subImgFile2 === undefined) return;
          if (subImgpreview3 !== null) {
            setSubImgFile2(subImgFile3);
            setSubImgPreview2(subImgpreview3);
            subImg2.current.value = "";
            subImg3.current.value = "";
            if (subImgFile3 === null || subImgFile3 === undefined) return;
            if (subImgpreview4 !== null) {
              setSubImgFile3(subImgFile4);
              setSubImgPreview3(subImgpreview4);
              subImg3.current.value = "";
              subImg4.current.value = "";
              if (subImgFile4 === null || subImgFile4 === undefined) return;
              if (subImgpreview5 !== null) {
                setSubImgFile4(subImgFile5);
                setSubImgPreview4(subImgpreview5);
                setSubImgFile5(undefined);
                setSubImgPreview5(null);
                subImg4.current.value = "";
                subImg5.current.value = "";
                if (subImgFile5 === null || subImgFile5 === undefined) return;
              }
            }
          }
        } else {
          subImg1.current.value = "";
          setSubImgFile1(undefined);
          setSubImgPreview1(null);
        }
        break;
      case 2:
        if (subImgpreview3 !== null) {
          setSubImgFile2(subImgFile3);
          setSubImgPreview2(subImgpreview3);
          subImg2.current.value = "";
          subImg3.current.value = "";
          if (subImgFile3 === null || subImgFile3 === undefined) return;
          if (subImgpreview4 !== null) {
            setSubImgFile3(subImgFile4);
            setSubImgPreview3(subImgpreview4);
            subImg3.current.value = "";
            subImg4.current.value = "";
            if (subImgFile4 === null || subImgFile4 === undefined) return;
            if (subImgpreview5 !== null) {
              setSubImgFile4(subImgFile5);
              setSubImgPreview4(subImgpreview5);
              setSubImgFile5(undefined);
              setSubImgPreview5(null);
              subImg4.current.value = "";
              subImg5.current.value = "";
              if (subImgFile5 === null || subImgFile5 === undefined) return;
            }
          }
        } else {
          subImg2.current.value = "";
          setSubImgFile2(undefined);
          setSubImgPreview2(null);
        }
        break;
      case 3:
        if (subImgpreview4 !== null) {
          setSubImgFile3(subImgFile4);
          setSubImgPreview3(subImgpreview4);
          subImg3.current.value = "";
          subImg4.current.value = "";
          if (subImgFile4 === null || subImgFile4 === undefined) return;
          if (subImgpreview5 !== null) {
            setSubImgFile4(subImgFile5);
            setSubImgPreview4(subImgpreview5);
            setSubImgFile5(undefined);
            setSubImgPreview5(null);
            subImg4.current.value = "";
            subImg5.current.value = "";
            if (subImgFile5 === null || subImgFile5 === undefined) return;
          }
        } else {
          subImg3.current.value = "";
          setSubImgFile3(undefined);
          setSubImgPreview3(null);
        }
        break;
      case 4:
        if (subImgpreview5 !== null) {
          setSubImgFile4(subImgFile5);
          setSubImgPreview4(subImgpreview5);
          setSubImgFile5(undefined);
          setSubImgPreview5(null);
          subImg4.current.value = "";
          subImg5.current.value = "";
          if (subImgFile5 === null || subImgFile5 === undefined) return;
        } else {
          subImg4.current.value = "";
          setSubImgFile4(undefined);
          setSubImgPreview4(null);
        }
        break;
      case 5:
        subImg5.current.value = "";
        setSubImgFile5(undefined);
        setSubImgPreview5(null);
        break;
      default:
        console.log("default");
        break;
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await getSubImgArr();
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
          subImg: selectedSubArray,
        },
      ])
      .select();

    if (error) console.log("Error creating a post", error);
    else {
      console.log("Post created successfully", data);
    }
  };

  const getSubImgArr = async () => {
    if (subImgFile1 !== undefined)
      await handleUploadSubImg(subImgFile1, "subImg1");
    if (subImgFile2 !== undefined)
      await handleUploadSubImg(subImgFile2, "subImg2");
    if (subImgFile3 !== undefined)
      await handleUploadSubImg(subImgFile3, "subImg3");
    if (subImgFile4 !== undefined)
      await handleUploadSubImg(subImgFile4, "subImg4");
    if (subImgFile5 !== undefined)
      await handleUploadSubImg(subImgFile5, "subImg5");
  };

  const handleUploadSubImg = async (selectedFile: File, subImg: string) => {
    console.log(selectedFile);
    const { error, data } = await supabase.storage
      .from("images")
      .upload(`posts/${writedName}/${inputs.id}/${subImg}`, selectedFile, {
        cacheControl: "3600",
        upsert: false,
      });
    if (error) console.log("Error creating a Sub Image", error);
    else {
      console.log("Sub Image created successfully", data);
      await handleDownSubImg(subImg);
    }
  };

  const handleDownSubImg = async (subImg: string) => {
    const { data } = supabase.storage
      .from("images")
      .getPublicUrl(`posts/${writedName}/${inputs.id}/${subImg}`);

    selectedSubArray.push(data.publicUrl);
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
          <div>
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              id="subImg1"
              ref={subImg1}
              name="subImg"
              onChange={(e) => handleChangeSubImg(e, 1)}
            />
            {subImgFile1 ? (
              <div>
                <img src={subImgpreview1 as string} alt="subImg" />
                <button type="button" onClick={() => previewSubDelete(1)}>
                  삭제
                </button>
              </div>
            ) : (
              <>프리뷰 없음</>
            )}
          </div>
          {subImgFile1 ? (
            <div>
              <input
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                id="subImg2"
                ref={subImg2}
                name="subImg"
                onChange={(e) => handleChangeSubImg(e, 2)}
              />
              {subImgFile2 ? (
                <div>
                  <img src={subImgpreview2 as string} alt="subImg" />
                  <button type="button" onClick={() => previewSubDelete(2)}>
                    삭제
                  </button>
                </div>
              ) : (
                <>프리뷰 없음</>
              )}
            </div>
          ) : (
            <></>
          )}
          {subImgFile2 ? (
            <div>
              <input
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                id="subImg3"
                ref={subImg3}
                name="subImg"
                onChange={(e) => handleChangeSubImg(e, 3)}
              />
              {subImgFile3 ? (
                <div>
                  <img src={subImgpreview3 as string} alt="subImg" />
                  <button type="button" onClick={() => previewSubDelete(3)}>
                    삭제
                  </button>
                </div>
              ) : (
                <>프리뷰 없음</>
              )}
            </div>
          ) : (
            <></>
          )}
          {subImgFile3 ? (
            <div>
              <input
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                id="subImg4"
                ref={subImg4}
                name="subImg"
                onChange={(e) => handleChangeSubImg(e, 4)}
              />
              {subImgFile4 ? (
                <div>
                  <img src={subImgpreview4 as string} alt="subImg" />
                  <button type="button" onClick={() => previewSubDelete(4)}>
                    삭제
                  </button>
                </div>
              ) : (
                <>프리뷰 없음</>
              )}
            </div>
          ) : (
            <></>
          )}
          {subImgFile4 ? (
            <div>
              <input
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                id="subImg5"
                ref={subImg5}
                name="subImg"
                onChange={(e) => handleChangeSubImg(e, 5)}
              />
              {subImgFile5 ? (
                <div>
                  <img src={subImgpreview5 as string} alt="subImg" />
                  <button type="button" onClick={() => previewSubDelete(5)}>
                    삭제
                  </button>
                </div>
              ) : (
                <>프리뷰 없음</>
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
        <button type="submit">글 작성 완료</button>
      </form>
    </div>
  );
};

export default WritePage;
