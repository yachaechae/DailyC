import React from "react";
import styles from "./login.module.css";

function page() {
  return (
    <>
      <div>
        <div>
          <p>아이디</p>
          <input type="text" />
        </div>
        <div>
          <p>비밀번호</p>
          <input type="password" />
        </div>
        <button>Login</button>
      </div>
      <div>
        <p>소셜 로그인</p>
        <p>-------------</p>
        <div>
          <div>이미지1</div>
          <div>이미지2</div>
          <div>이미지3</div>
        </div>
        <p>-------------</p>
        <div>
          <a>비밀번호찾기</a>
          <a>회원가입</a>
        </div>
      </div>
    </>
  );
}

export default page;
