import { getEventByLike } from "@/api/write";
import OrangeIcon from "@/icon/OrangeIcon";
import { Bookmark, BookmarkBorder } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

type likeAndBookType = {
  params: number;
  userId: string;
};

const PostLikeAndBook = ({ params, userId }: likeAndBookType) => {
  const [liked, setLiked] = useState(false);
  const [bookmark, setBookmark] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
    getEventByLike(params, userId);
  };
  const handleBookmarkClick = () => {
    setBookmark(!bookmark);
  };

  return (
    <div>
      {/* 좋아요 */}
      <div>
        <IconButton
          aria-label="add to favorites"
          onClick={handleLikeClick}
          className={liked ? "liked" : ""}
        >
          {/* <OrangeIcon width={35} liked={liked}></OrangeIcon> */}
        </IconButton>
      </div>
      {/* 북마크 */}
      <div>
        <div onClick={handleBookmarkClick} className="cursor-pointer ">
          {bookmark ? (
            <Bookmark color="primary" sx={{ fontSize: 48 }} />
          ) : (
            <BookmarkBorder sx={{ fontSize: 48 }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PostLikeAndBook;
