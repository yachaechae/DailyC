import Nav from "@/components/main/nav/Nav";
import {
  inputsState,
  postDataState,
  tagListState,
  tagsState,
} from "@/app/state/state";
import HrComponents from "@/components/ui/hr";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import PostDetailTitle from "./items/post-title";
import PostDetailInfo from "./items/post-info";
import PostDetailImage from "./items/post-image";
import PostDetailContent from "./items/post-content";
import PostDetailTag from "./items/post-tag";
import { getUser } from "@/utils/auth";
import PostLikeAndBook from "./items/post-like-and-book";
import PostEditAndDelete from "./items/post-edit-and-delete";

const postComponents = ({ postData }: { postData: any[] | null }) => {
  const [checkUser, setCheckUser] = useState(false);

  const getProfile = async () => {
    const user = await getUser();

    if (postData !== null) {
      console.log(postData[0].writedId, "비교", user?.id);
      if (postData[0].writedId === user?.id) setCheckUser(true);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <Nav />
      {postData !== null ? (
        <div className="container w-full mt-16">
          <PostDetailTitle title={postData[0].title} />
          <HrComponents mt={50} mb={20} />
          <PostDetailInfo
            createAt={postData[0].create_at}
            updateAt={postData[0].update_at}
          />
          <HrComponents mt={20} mb={20} />
          <PostDetailImage
            main={postData[0].mainImg}
            sub={postData[0].subImg}
          />
          <PostDetailTag tags={postData[0].tags} />
          <HrComponents mt={50} mb={30} />
          <PostDetailContent content={postData[0].content} />
          <HrComponents mt={30} mb={30} />
          {checkUser ? (
            <>
              <PostEditAndDelete postId={postData[0].id} />
              <PostLikeAndBook />
            </>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <>데이터가 없습니다</>
      )}
    </>
  );
};

export default postComponents;
