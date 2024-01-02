import {
  getEventByTable,
  getEventByTableAdd,
  getEventByTableBookmarksUpdate,
  getEventByTableDelete,
  getEventByTableFetch,
  getEventByTableLikesUpdate,
} from "@/api/write";
import OrangeIcon from "@/icon/OrangeIcon";
import { userState } from "@/recoil/state";
import { Bookmark, BookmarkBorder } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const PostLikeAndBook = ({ params }: { params: number }) => {
  const [user, setUser] = useRecoilState(userState);

  const [liked, setLiked] = useState(false);
  const [likedNum, setLikedNum] = useState(0);
  const [likeId, setLikeId] = useState(0);
  const [likedArr, setLikedArr] = useState<string[]>([]);
  const [likeCheck, setLikeCheck] = useState(false);

  const [bookmark, setBookmark] = useState(false);
  const [bookmarkNum, setBookmarkNum] = useState(0);
  const [bookmarkId, setBookmarkId] = useState(0);
  const [bookmarkArr, setBookmarkArr] = useState<string[]>([]);
  const [bookCheck, setBookCheck] = useState(false);

  useEffect(() => {
    getByLikeAndBookAll(params);
  }, [user]);

  useEffect(() => {
    if (likeCheck) getByLikeArr();
  }, [likedArr]);

  useEffect(() => {
    if (bookCheck) getByBookArr();
  }, [bookmarkArr]);

  const handleLikeClick = async () => {
    if (likeCheck) {
      setLikeCheck(false);
      setLiked(!liked);
      if (liked) {
        const data = await getEventByTableDelete("likes", "id", likeId);
        setLikedNum((prev) => prev - 1);
        if (data === "실패") {
          setLiked(!liked);
          setLikedNum((prev) => prev + 1);
        } else {
          setLikedArr(likedArr.filter((prev) => prev !== user.id));
        }
      } else {
        const data: any = await getEventByTableAdd("likes", params, user.id);
        setLikedNum((prev) => prev + 1);
        if (data === "실패") {
          setLiked(!liked);
          setLikedNum((prev) => prev - 1);
        } else {
          setLikeId(data[0].id);
          setLikedArr((prev) => [...prev, user.id]);
        }
      }
      setLikeCheck(true);
    }
  };

  const handleBookmarkClick = async () => {
    if (bookCheck) {
      setBookCheck(false);
      setBookmark(!bookmark);
      if (bookmark) {
        const data = await getEventByTableDelete("bookmarks", "id", bookmarkId);
        setBookmarkNum((prev) => prev - 1);
        if (data === "실패") {
          setBookmark(!bookmark);
          setBookmarkNum((prev) => prev + 1);
        } else {
          setBookmarkArr(bookmarkArr.filter((prev) => prev !== user.id));
        }
      } else {
        const data: any = await getEventByTableAdd(
          "bookmarks",
          params,
          user.id
        );
        setBookmarkNum((prev) => prev + 1);
        if (data === "실패") {
          setBookmark(!bookmark);
          setBookmarkNum((prev) => prev - 1);
        } else {
          setLikeId(data[0].id);
          setBookmarkArr((prev) => [...prev, user.id]);
        }
      }
      setBookCheck(true);
    }
  };

  const getByLikeAndBookAll = async (params: number) => {
    const likesData = await getEventByTable("likes", "post_id", params);
    const bookData = await getEventByTable("bookmarks", "post_id", params);
    const likedArrData: any = await getEventByTableFetch(
      "posts",
      "likes",
      "id",
      params
    );
    const bookmarkArrData: any = await getEventByTableFetch(
      "posts",
      "bookmarks",
      "id",
      params
    );

    if (likedArrData !== null) setLikedArr(likedArrData[0].likes);
    if (bookmarkArrData !== null) setBookmarkArr(bookmarkArrData[0].bookmarks);
    if (likesData !== null) {
      setLikedNum(likesData.length);
      setLikeCheck(true);
      for (let i = 0; i < likesData.length; i++) {
        if (likesData[i].user_id === user.id) {
          setLiked(true);
          setLikeId(likesData[i].id);
        }
      }
    }
    if (bookData !== null) {
      setBookmarkNum(bookData.length);
      setBookCheck(true);
      for (let i = 0; i < bookData.length; i++) {
        if (bookData[i].user_id === user.id) {
          setBookmark(true);
          setBookmarkId(bookData[i].id);
        }
      }
    }
  };

  const getByLikeArr = async () => {
    await getEventByTableLikesUpdate("posts", likedArr, "id", params);
  };
  const getByBookArr = async () => {
    await getEventByTableBookmarksUpdate("posts", bookmarkArr, "id", params);
  };

  return (
    <div className="absolute top-0 right-0 flex gap-3">
      {/* 좋아요 */}
      <div className="flex flex-col items-center justify-center gap-1">
        <IconButton
          aria-label="add to favorites"
          onClick={handleLikeClick}
          className={liked ? "liked" : ""}
        >
          <OrangeIcon width={35} liked={liked}></OrangeIcon>
        </IconButton>
        {likedNum}
      </div>
      {/* 북마크 */}
      <div className="flex flex-col items-center justify-center gap-1">
        <div onClick={handleBookmarkClick} className="cursor-pointer ">
          {bookmark ? (
            <Bookmark color="primary" sx={{ fontSize: 48 }} />
          ) : (
            <BookmarkBorder sx={{ fontSize: 48 }} />
          )}
        </div>
        {bookmarkNum}
      </div>
    </div>
  );
};

export default PostLikeAndBook;
