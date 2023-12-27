import { Button } from "@mui/material";
import React from "react";

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
          <p>비밀번호 찾기</p>
          <p>회원가입</p>
        </div>
      </div>
      <Button variant="contained">Hello world</Button>
    </>
  );
}

export default page;
