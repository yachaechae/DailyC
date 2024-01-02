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

// const value = localStorage.getItem("sb-kpgqztxpkosfevreubvj-auth-token");
// const localStorageData = value ? JSON.parse(value) : null;
// const localUserData = localStorageData?.user;

// if (!!localStorageData) {
//   isLoginFetch = true;
//   userFetch = {
//     id: localUserData.id,
//     email: localUserData.email,
//     nickname: localUserData.user_metadata.nickname,
//     height: localUserData.user_metadata.height,
//     gender: localUserData.user_metadata.gender,
//     userImg: localUserData.user_metadata.userImg,
//   };
// }

export const isLoginState = atom({
  key: "isLoginState",
  default: isLoginFetch,
});

export const userState = atom({
  key: "userState",
  default: userFetch,
});
