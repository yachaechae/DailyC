import Nav from "@/components/main/nav/Nav";
import HrComponents from "@/components/ui/hr";
import { userState } from "@/recoil/state";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import PostDetailContent from "./items/post-content";
import PostEditAndDelete from "./items/post-edit-and-delete";
import PostDetailImage from "./items/post-image";
import PostDetailInfo from "./items/post-info";
import PostLikeAndBook from "./items/post-like-and-book";
import PostDetailTag from "./items/post-tag";
import PostDetailTitle from "./items/post-title";

const postComponents = ({
  postData,
  params,
}: {
  postData: any[] | null;
  params: number;
}) => {
  const [checkUser, setCheckUser] = useState(false);

  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    if (postData !== null) {
      if (postData[0].writedId === user.id) setCheckUser(true);
    }
  }, [user, postData]);

  return (
    <>
      <Nav />
      {postData !== null ? (
        <div className="container relative w-full mt-16">
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
              <PostLikeAndBook params={params} />
            </>
          ) : (
            <>
              <PostLikeAndBook params={params} />
            </>
          )}
        </div>
      ) : (
        <>데이터가 없습니다</>
      )}
    </>
  );
};

export default postComponents;
