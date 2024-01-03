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
import { postState, postStateArr } from "@/app/state/state";
import { getEventByPost } from "@/api/write";

const postComponents = ({
  postData,
  params,
}: {
  postData: any[] | null;
  params: number;
}) => {
  const [checkUser, setCheckUser] = useState(false);

  const [user, setUser] = useRecoilState(userState);
  const [postDataWrap, setPostDataWrap] = useRecoilState(postState);
  const [postDataSupa, setPostDataSupa] = useRecoilState(postStateArr);

  useEffect(() => {
    if (postData !== null) {
      if (postData[0].writedId === user.id) setCheckUser(true);
      setPostDataWrap(postData[0]);
    }
  }, [user, postData]);

  useEffect(() => {
    async function fetchData(params: number) {
      const data: postType[] = await getEventByPost("id", params);
      setPostDataSupa(data);
    }
    fetchData(params);
  }, [postData]);

  useEffect(() => {
    if (postDataSupa.length > 0) {
      console.log(postDataWrap);
      setPostDataWrap({
        ...postDataWrap,
        bookmarks: postDataSupa[0].bookmarks,
        content: postDataSupa[0].content,
        title: postDataSupa[0].title,
        create_at: postDataSupa[0].create_at,
        update_at: postDataSupa[0].update_at,
        gender: postDataSupa[0].gender,
        height: postDataSupa[0].height,
        likes: postDataSupa[0].likes,
        mainImg: postDataSupa[0].mainImg,
        subImg: postDataSupa[0].subImg,
        tags: postDataSupa[0].tags,
        writedId: postDataSupa[0].writedId,
        writedName: postDataSupa[0].writedName,
      });
    }
  }, [postDataSupa]);

  return (
    <>
      <Nav />
      {postData !== null ? (
        <div className="container relative mt-16 w-full">
          <PostDetailTitle title={postDataWrap.title} />
          <HrComponents mt={50} mb={20} />
          <PostDetailInfo
            writedName={postDataWrap.writedName}
            createAt={postDataWrap.create_at}
            updateAt={postDataWrap.update_at}
            gender={postDataWrap.gender}
            height={postDataWrap.height}
          />
          <HrComponents mt={20} mb={20} />
          <PostDetailImage
            main={postDataWrap.mainImg}
            sub={postDataWrap.subImg}
          />
          <PostDetailTag tags={postDataWrap.tags} />
          <HrComponents mt={50} mb={30} />
          <PostDetailContent content={postDataWrap.content} />
          <HrComponents mt={30} mb={30} />
          {checkUser ? (
            <>
              <PostEditAndDelete postId={postDataWrap.id} />
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
