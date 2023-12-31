"use client";

import Nav from "@/components/main/nav/Nav";
import { inputsState, tagsState, writeUserState } from "@/app/state/state";
import "@/app/write/write.style.css";
import HrComponents from "@/components/ui/hr";
import { supabase } from "@/lib/supabase-config";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { InputContent, InputGender, InputHeight, InputTitle } from "./inputs";
import { InputTags } from "./tags";
import { getUser } from "@/utils/auth";
import { useRouter } from "next/navigation";
import { openLoadingState } from "@/recoil/state";

const WriteComponentPage = () => {
  const router = useRouter();
  const [writeUser, setWriteUser] = useRecoilState(writeUserState);
  const [inputs, setInputs] = useRecoilState(inputsState);
  const [tags, setTags] = useRecoilState(tagsState);
  const [openLoading, setOpenLoading] = useRecoilState(openLoadingState);

  const getProfile = async () => {
    const user = await getUser();
    setInputs({
      ...inputs,
      gender: user?.user_metadata?.gender,
      height: user?.user_metadata?.height,
    });
    setWriteUser({
      id: user?.id,
      email: user?.email,
    });
  };
  useEffect(() => {
    getProfile();
  }, []);

  // useEffect(()=>{

  // },[inputs])

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

  const getMainImgArr = async (id: number) => {
    if (mainImgFile !== undefined) await handleUploadMainImg(mainImgFile, id);
    else {
      if (mainImgpreview !== "") selectedMain = mainImgpreview;
    }
  };

  const handleUploadMainImg = async (selectedFile: File, id: number) => {
    let customToday = getTodayDate();
    const { error, data } = await supabase.storage
      .from("images")
      .upload(
        `posts/${writeUser.email}/${id}/mainImg_${customToday}`,
        selectedFile,
        {
          cacheControl: "3600",
          upsert: false,
        },
      );
    if (error) console.log("Error creating a Main Image", error);
    else {
      console.log("Main Image created successfully", data);
      await handleDownMainImg(id, customToday);
    }
  };

  const handleDownMainImg = async (id: number, customToday: string) => {
    const { data } = supabase.storage
      .from("images")
      .getPublicUrl(`posts/${writeUser.email}/${id}/mainImg_${customToday}`);

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
    value: number,
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
    setOpenLoading(true);
    await addPost();
  };

  const addPost = async () => {
    const { data, error } = await supabase
      .from("posts")
      .insert([
        {
          // id: inputs.id,
          gender: inputs.gender,
          height: inputs.height,
          title: inputs.title,
          content: inputs.content,
          tags: tags,
          writedId: writeUser.id,
          writedName: writeUser.email,
          mainImg: selectedMain,
          subImg: selectedSubArray,
          likes: [],
          bookmarks: [],
        },
      ])
      .select();

    if (error) console.log("Error creating a post", error);
    else {
      console.log("Post created successfully", data);
      await getMainImgArr(data[0].id);
      await getSubImgArr(data[0].id);
      await editPost(data[0].id);
    }
  };

  const editPost = async (id: number) => {
    const { data, error } = await supabase
      .from("posts")
      .update({
        mainImg: selectedMain,
        subImg: selectedSubArray,
      })
      .eq("id", id)
      .select();

    if (error) console.log("Error creating a post", error);
    else {
      console.log("Post edited successfully", data);
      alert("글 작성 완료");
      router.push(`/posts/${data[0].id}`);
    }
  };

  const getTodayDate = () => {
    let today = new Date();
    let customToday = `${today.getFullYear()}-${
      today.getMonth() + 1
    }-${today.getDate()}-${today.getHours()}-${today.getMinutes()}-${today.getSeconds()}`;
    return customToday;
  };

  const getSubImgArr = async (id: number) => {
    if (subImgFile1 !== undefined)
      await handleUploadSubImg(subImgFile1, "subImg1", id);
    else {
      if (subImgpreview1 !== null) {
        if (subImgpreview1 === undefined || subImgpreview1 === "") return;
        selectedSubArray.push(subImgpreview1);
      }
    }
    if (subImgFile2 !== undefined)
      await handleUploadSubImg(subImgFile2, "subImg2", id);
    else {
      if (subImgpreview2 !== null) {
        if (subImgpreview2 === undefined || subImgpreview2 === "") return;
        selectedSubArray.push(subImgpreview2);
      }
    }
    if (subImgFile3 !== undefined)
      await handleUploadSubImg(subImgFile3, "subImg3", id);
    else {
      if (subImgpreview3 !== null) {
        if (subImgpreview3 === undefined || subImgpreview3 === "") return;
        selectedSubArray.push(subImgpreview3);
      }
    }
    if (subImgFile4 !== undefined)
      await handleUploadSubImg(subImgFile4, "subImg4", id);
    else {
      if (subImgpreview4 !== null) {
        if (subImgpreview4 === undefined || subImgpreview4 === "") return;
        selectedSubArray.push(subImgpreview4);
      }
    }
    if (subImgFile5 !== undefined)
      await handleUploadSubImg(subImgFile5, "subImg5", id);
    else {
      if (subImgpreview5 !== null) {
        if (subImgpreview1 === undefined || subImgpreview1 === "") return;
        selectedSubArray.push(subImgpreview5);
      }
    }
  };

  const handleUploadSubImg = async (
    selectedFile: File,
    subImg: string,
    id: number,
  ) => {
    console.log(selectedFile);
    let customToday = getTodayDate();
    // const { data: dataDist, error: errorDist } = await supabase.storage
    //   .from("images")
    //   .remove([`posts/${writeUser.email}/${id}/${subImg}`]);
    const { error, data } = await supabase.storage
      .from("images")
      .upload(
        `posts/${writeUser.email}/${id}/${subImg}_${customToday}`,
        selectedFile,
        {
          cacheControl: "3600",
          upsert: false,
        },
      );
    if (error) console.log("Error creating a Sub Image", error);
    else {
      console.log("Sub Image created successfully", data);
      await handleDownSubImg(subImg, id, customToday);
    }
  };

  const handleDownSubImg = async (
    subImg: string,
    id: number,
    customToday: string,
  ) => {
    const { data } = supabase.storage
      .from("images")
      .getPublicUrl(`posts/${writeUser.email}/${id}/${subImg}_${customToday}`);

    selectedSubArray.push(data.publicUrl);
  };

  return (
    <>
      <Nav />
      <div className="container mt-16 w-full">
        <h2 className="text-3xl">코디 작성</h2>
        <HrComponents mt={50} mb={50} />
        <form className="flex flex-col gap-[30px]" onSubmit={handleSubmit}>
          <InputGender />
          <InputHeight />
          <InputTitle />
          <InputContent />
          <InputTags postData={null} />
          <div className="flex flex-col gap-[10px]">
            <label>
              메인 사진
              <span className="pl-[10px] text-xs text-red-500">* 필수</span>
            </label>
            <div className="writeFileWrap">
              <div className="writeFileList">
                <label htmlFor="mainImg" className="writeLable"></label>
                <input
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  id="mainImg"
                  ref={mainImg}
                  name="mainImg"
                  onChange={handleChangeImg}
                  className="writeFile"
                />
                {mainImgpreview ? (
                  <div className="writePreviewWrap">
                    <p>
                      <img src={mainImgpreview as string} alt="mainImg" />
                    </p>
                    <button
                      type="button"
                      onClick={previewDelete}
                      className="delBtn"
                    >
                      X
                    </button>
                  </div>
                ) : (
                  <div className="writePreviewWrap down">
                    <p className="writePreviewPlus">+</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <label>서브 사진</label>
            <div className="writeFileWrap">
              <div className="writeFileList">
                <label htmlFor="subImg1" className="writeLable"></label>
                <input
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  id="subImg1"
                  ref={subImg1}
                  name="subImg1"
                  onChange={(e) => handleChangeSubImg(e, 1)}
                  className="writeFile"
                />
                {subImgpreview1 ? (
                  <div className="writePreviewWrap">
                    <p>
                      <img src={subImgpreview1 as string} alt="subImg1" />
                    </p>
                    <button
                      type="button"
                      onClick={() => previewSubDelete(1)}
                      className="delBtn"
                    >
                      X
                    </button>
                  </div>
                ) : (
                  <div className="writePreviewWrap down">
                    <p className="writePreviewPlus">+</p>
                  </div>
                )}
              </div>
              {subImgpreview1 ? (
                <div className="writeFileList">
                  <label htmlFor="subImg2" className="writeLable"></label>
                  <input
                    type="file"
                    accept="image/png, image/jpeg, image/jpg"
                    id="subImg2"
                    ref={subImg2}
                    name="subImg"
                    onChange={(e) => handleChangeSubImg(e, 2)}
                    className="writeFile"
                  />
                  {subImgpreview2 ? (
                    <div className="writePreviewWrap">
                      <p>
                        <img src={subImgpreview2 as string} alt="subImg2" />
                      </p>{" "}
                      <button
                        type="button"
                        onClick={() => previewSubDelete(2)}
                        className="delBtn"
                      >
                        X
                      </button>
                    </div>
                  ) : (
                    <div className="writePreviewWrap down">
                      <p className="writePreviewPlus">+</p>
                    </div>
                  )}
                </div>
              ) : (
                <></>
              )}
              {subImgpreview2 ? (
                <div className="writeFileList">
                  <label htmlFor="subImg3" className="writeLable"></label>
                  <input
                    type="file"
                    accept="image/png, image/jpeg, image/jpg"
                    id="subImg3"
                    ref={subImg3}
                    name="subImg"
                    onChange={(e) => handleChangeSubImg(e, 3)}
                    className="writeFile"
                  />
                  {subImgpreview3 ? (
                    <div className="writePreviewWrap">
                      <p>
                        <img src={subImgpreview3 as string} alt="subImg3" />
                      </p>{" "}
                      <button
                        type="button"
                        onClick={() => previewSubDelete(3)}
                        className="delBtn"
                      >
                        X
                      </button>
                    </div>
                  ) : (
                    <div className="writePreviewWrap down">
                      <p className="writePreviewPlus">+</p>
                    </div>
                  )}
                </div>
              ) : (
                <></>
              )}
              {subImgpreview3 ? (
                <div className="writeFileList">
                  <label htmlFor="subImg4" className="writeLable"></label>
                  <input
                    type="file"
                    accept="image/png, image/jpeg, image/jpg"
                    id="subImg4"
                    ref={subImg4}
                    name="subImg"
                    onChange={(e) => handleChangeSubImg(e, 4)}
                    className="writeFile"
                  />
                  {subImgpreview4 ? (
                    <div className="writePreviewWrap">
                      <p>
                        <img src={subImgpreview4 as string} alt="subImg4" />
                      </p>{" "}
                      <button
                        type="button"
                        onClick={() => previewSubDelete(4)}
                        className="delBtn"
                      >
                        X
                      </button>
                    </div>
                  ) : (
                    <div className="writePreviewWrap down">
                      <p className="writePreviewPlus">+</p>
                    </div>
                  )}
                </div>
              ) : (
                <></>
              )}
              {subImgpreview4 ? (
                <div className="writeFileList">
                  <label htmlFor="subImg5" className="writeLable"></label>
                  <input
                    type="file"
                    accept="image/png, image/jpeg, image/jpg"
                    id="subImg5"
                    ref={subImg5}
                    name="subImg"
                    onChange={(e) => handleChangeSubImg(e, 5)}
                    className="writeFile"
                  />
                  {subImgpreview5 ? (
                    <div className="writePreviewWrap">
                      <p>
                        <img src={subImgpreview5 as string} alt="subImg5" />
                      </p>{" "}
                      <button
                        type="button"
                        onClick={() => previewSubDelete(5)}
                        className="delBtn"
                      >
                        X
                      </button>
                    </div>
                  ) : (
                    <div className="writePreviewWrap down">
                      <p className="writePreviewPlus">+</p>
                    </div>
                  )}
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
          <HrComponents mt={16} mb={16} />
          <div className="text-center">
            <button type="submit" className="writeSumitBtn">
              글 작성 완료
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default WriteComponentPage;
