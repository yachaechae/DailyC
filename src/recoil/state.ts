import { atom } from "recoil";

let isLoginFetch: boolean = false;
let userFetch = {
  id: "",
  email: "",
  nickname: "",
  height: "",
  gender: "",
  userImg: "",
};

export const isLoginState = atom({
  key: "isLoginState",
  default: isLoginFetch,
});

export const userState = atom({
  key: "userState",
  default: userFetch,
});

export const openLoadingState = atom({
  key: "openLoadingState",
  default: false,
});
