import { atom } from "recoil";

export const isLoginState = atom({
  key: "isLoginState",
  default: false,
});

export const userState = atom({
  key: "userState",
  default: {
    id: "",
    email: "",
    nickname: "",
    height: "",
    gender: "",
    userImg: "",
  },
});
