import Nav from "@/app/main/Nav/Nav";
import {
  inputsState,
  postDataState,
  tagListState,
  tagsState,
} from "@/app/state/state";
import HrComponents from "@/components/ui/hr";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import PostDetailTitle from "./items/post-title";
import PostDetailInfo from "./items/post-info";
import PostDetailImage from "./items/post-image";
import PostDetailContent from "./items/post-content";
import PostDetailTag from "./items/post-tag";

const postComponents = ({ postData }: { postData: any[] | null }) => {
  const [inputs, setInputs] = useRecoilState(inputsState);
  const [tags, setTags] = useRecoilState(tagsState);
  const [tagList, setTagList] = useRecoilState(tagListState);
  const [postDataId, setPostDataId] = useRecoilState(postDataState);

  useEffect(() => {
    if (postData !== null) {
      console.log(postData[0]);
      // setInputs({
      //   ...inputs,
      //   gender: postData[0].gender,
      //   height: postData[0].height,
      //   title: postData[0].title,
      //   content: postData[0].content,
      // });
      // setTags([...tags, ...postData[0].tags]);
      // for (let i = 0; i < postData[0].tags.length; i++) {
      //   if (!tagList.includes(postData[0].tags[i])) {
      //     setTagList([...tagList, postData[0].tags[i]]);
      //   }
      // }
    }
  }, []);

  return (
    <>
      <Nav />
      {postData !== null ? (
        <div className="container w-full mt-16">
          <PostDetailTitle title={postData[0].title} />
          <HrComponents mt={50} mb={20} />
          <PostDetailInfo createAt={postData[0].create_at} />
          <HrComponents mt={20} mb={20} />
          <PostDetailImage
            main={postData[0].mainImg}
            sub={postData[0].subImg}
          />
          <PostDetailTag tags={postData[0].tags} />
          <HrComponents mt={50} mb={30} />
          <PostDetailContent content={postData[0].content} />
        </div>
      ) : (
        <>데이터가 없습니다</>
      )}
    </>
  );
};

export default postComponents;
