"use client";

import { supabase } from "@/lib/supabase-config";
import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import uuid from "react-uuid";

const WriteFormPage = ({ postData }: { postData: any[] | null }) => {
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
  // ------------- 새로 추가 ----------------
  const [postDataId, setPostDataId] = useState("");

  useEffect(() => {
    if (postData !== null) {
      console.log(postData[0]);
      setPostDataId(postData[0].id);
      console.log(postDataId);
      setInputs({
        ...inputs,
        gender: postData[0].gender,
        height: postData[0].height,
        title: postData[0].title,
        content: postData[0].content,
      });
      setTags([...tags, ...postData[0].tags]);
      for (let i = 0; i < postData[0].tags.length; i++) {
        if (!tagList.includes(postData[0].tags[i])) {
          setTagList([...tagList, postData[0].tags[i]]);
        }
      }
    }
  }, []);

  const userToClass = (item: string) => {
    let userClass: boolean = false;
    if (postData !== null) {
      if (postData[0].tags.includes(item)) {
        return (userClass = true);
      }
    }

    return userClass;
  };

  // ------------- 새로 추가 ----------------

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

  // const [mainImg, setMainImg] = useState<string>("");

  const mainImg = useRef<any>(null);
  const [mainImgFile, setMainImgFile] = useState<File>();
  const [mainImgpreview, setMainImgPreview] = useState<string | null>("");
  let selectedMain: string | null = "";

  const handleChangeImg = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const file = e.target.files[0];
      if (file && file.type.substring(0, 5) === "image") {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        setMainImgFile(file);
        reader.onloadend = () => {
          setMainImgPreview(reader.result as string);
        };
      } else {
        e.target.value = "";
        previewDelete();
      }
    }
  };

  const previewDelete = async () => {
    mainImg.current.value = "";
    setMainImgFile(undefined);
    setMainImgPreview("");
  };

  const getMainImgArr = async (check: boolean) => {
    if (mainImgFile !== undefined)
      await handleUploadMainImg(mainImgFile, check);
    else {
      if (mainImgpreview !== "") selectedMain = mainImgpreview;
    }
  };

  const handleUploadMainImg = async (selectedFile: File, check: boolean) => {
    const { error, data } = await supabase.storage
      .from("images")
      .upload(`posts/${writedName}/${postDataId}/mainImg`, selectedFile, {
        cacheControl: "3600",
        upsert: check,
      });
    if (error) console.log("Error creating a Main Image", error);
    else {
      console.log("Main Image created successfully", data);
      await handleDownMainImg();
    }
  };

  const handleDownMainImg = async () => {
    const { data } = supabase.storage
      .from("images")
      .getPublicUrl(`posts/${writedName}/${postDataId}/mainImg`);

    setMainImgPreview(data.publicUrl);
    selectedMain = data.publicUrl;
    console.log(selectedMain, "selectedMain");
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
    if (mainImgpreview === "") return alert("메인 사진은 필수입니다.");
    await getMainImgArr(true);
    await getSubImgArr();
    editPost();
  };
  // editPOst 다른 부분
  const editPost = async () => {
    const date = new Date(Date.now());
    console.log(selectedMain, "selectedMain");
    const { data, error } = await supabase
      .from("posts")
      .update({
        // id: postDataId,
        gender: inputs.gender,
        height: inputs.height,
        title: inputs.title,
        content: inputs.content,
        tags: tags,
        writedId: writedId,
        writedName: writedName,
        mainImg: selectedMain,
        subImg: selectedSubArray,
        update_at: date,
      })
      .eq("id", postDataId)
      .select();

    if (error) console.log("Error creating a post", error);
    else {
      console.log("Post created successfully", data);
    }
  };

  const getSubImgArr = async () => {
    if (subImgFile1 !== undefined)
      await handleUploadSubImg(subImgFile1, "subImg1");
    else {
      if (subImgpreview1 !== null) {
        if (subImgpreview1 === undefined || subImgpreview1 === "") return;
        selectedSubArray.push(subImgpreview1);
      }
    }
    if (subImgFile2 !== undefined)
      await handleUploadSubImg(subImgFile2, "subImg2");
    else {
      if (subImgpreview2 !== null) {
        if (subImgpreview2 === undefined || subImgpreview2 === "") return;
        selectedSubArray.push(subImgpreview2);
      }
    }
    if (subImgFile3 !== undefined)
      await handleUploadSubImg(subImgFile3, "subImg3");
    else {
      if (subImgpreview3 !== null) {
        if (subImgpreview3 === undefined || subImgpreview3 === "") return;
        selectedSubArray.push(subImgpreview3);
      }
    }
    if (subImgFile4 !== undefined)
      await handleUploadSubImg(subImgFile4, "subImg4");
    else {
      if (subImgpreview4 !== null) {
        if (subImgpreview4 === undefined || subImgpreview4 === "") return;
        selectedSubArray.push(subImgpreview4);
      }
    }
    if (subImgFile5 !== undefined)
      await handleUploadSubImg(subImgFile5, "subImg5");
    else {
      if (subImgpreview5 !== null) {
        if (subImgpreview1 === undefined || subImgpreview1 === "") return;
        selectedSubArray.push(subImgpreview5);
      }
    }
  };

  const handleUploadSubImg = async (selectedFile: File, subImg: string) => {
    console.log(selectedFile);
    const { data: dataDist, error: errorDist } = await supabase.storage
      .from("images")
      .remove([`posts/${writedName}/${postDataId}/${subImg}`]);
    const { error, data } = await supabase.storage
      .from("images")
      .upload(`posts/${writedName}/${postDataId}/${subImg}`, selectedFile, {
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
      .getPublicUrl(`posts/${writedName}/${postDataId}/${subImg}`);

    selectedSubArray.push(data.publicUrl);
  };

  // ------------- 새로 추가 ----------------
  useEffect(() => {
    if (postData !== null) {
      setMainImgPreview(postData[0].mainImg);
      if (postData[0].subImg.length > 0) {
        if (postData[0].subImg[0]) setSubImgPreview1(postData[0].subImg[0]);
        if (postData[0].subImg[1]) setSubImgPreview2(postData[0].subImg[1]);
        if (postData[0].subImg[2]) setSubImgPreview3(postData[0].subImg[2]);
        if (postData[0].subImg[3]) setSubImgPreview4(postData[0].subImg[3]);
        if (postData[0].subImg[4]) setSubImgPreview5(postData[0].subImg[4]);
      }
    }
  }, []);

  // ------------- 새로 추가 ----------------

  return (
    <>
      {postData !== null ? (
        <div className="container w-full">
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
                value={inputs.height}
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
                value={inputs.title}
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
                value={inputs.content}
              />
            </div>
            <div>
              <label htmlFor="tags">태그</label>
              {tagList.map((tag, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={toggleActive}
                  className={userToClass(tag) ? "active" : ""}
                >
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
                ref={mainImg}
                name="mainImg"
                onChange={handleChangeImg}
              />
              {mainImgpreview ? (
                <div>
                  <img src={mainImgpreview as string} alt="mainImg" />
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
                {subImgpreview1 ? (
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
              {subImgpreview1 ? (
                <div>
                  <input
                    type="file"
                    accept="image/png, image/jpeg, image/jpg"
                    id="subImg2"
                    ref={subImg2}
                    name="subImg"
                    onChange={(e) => handleChangeSubImg(e, 2)}
                  />
                  {subImgpreview2 ? (
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
              {subImgpreview2 ? (
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
              {subImgpreview3 ? (
                <div>
                  <input
                    type="file"
                    accept="image/png, image/jpeg, image/jpg"
                    id="subImg4"
                    ref={subImg4}
                    name="subImg"
                    onChange={(e) => handleChangeSubImg(e, 4)}
                  />
                  {subImgpreview4 ? (
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
              {subImgpreview4 ? (
                <div>
                  <input
                    type="file"
                    accept="image/png, image/jpeg, image/jpg"
                    id="subImg5"
                    ref={subImg5}
                    name="subImg"
                    onChange={(e) => handleChangeSubImg(e, 5)}
                  />
                  {subImgpreview5 ? (
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
      ) : (
        <>데이터가 없습니다</>
      )}
    </>
  );
};

export default WriteFormPage;
