import { supabase } from "@/lib/supabase-config";

export const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("error --- ", error);
    return alert("로그아웃 중 오류가 발생했습니다.");
  }
};

export const getUser = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
};

// export const getIsLogin = async () => {
//   const {
//     data: { user },
//   } = await supabase.auth.getUser();
//   if (!user) {
//     return false;
//   } else {
//     return true;
//   }
// };
