import { atom, selector } from "recoil";
import {
  postKey,
  inputsKey,
  postDataKey,
  tagItemKey,
  tagListKey,
  tagsKey,
  writeUserKey,
} from "./key";

// 글 정보 전체
export const postState = atom<postType>({
  key: postKey,
  default: {
    id: 0,
    gender: "",
    height: "",
    title: "",
    content: "",
    create_at: "",
    update_at: null,
    writedId: "",
    writedName: "",
    tags: [],
    mainImg: "",
    subImg: [],
    likes: [],
    bookmarks: [],
  },
});
export const postStateArr = atom<postType[]>({
  key: "postArrKey",
  default: [],
});

// 글 작성 - inputs
export const inputsState = atom<inputsType>({
  key: inputsKey,
  default: {
    id: 0,
    gender: "woman",
    height: "",
    title: "",
    content: "",
  },
});

// 글 작성 - selected tags
export const tagsState = atom<string[]>({
  key: tagsKey,
  default: [],
});

// 글 작성 - add tag
export const tagItemState = atom<string>({
  key: tagItemKey,
  default: "",
});

// 글 작성 - add tag
export const tagListState = atom<string[]>({
  key: tagListKey,
  default: ["봄", "여름", "가을", "겨울"],
});

// 글 작성 유저 정보 -
export const postDataState = atom<string>({
  key: postDataKey,
  default: "",
});

// 글 작성 유저 정보
export const writeUserState = atom<writeUserType>({
  key: writeUserKey,
  default: {
    id: "",
    email: "",
  },
});
