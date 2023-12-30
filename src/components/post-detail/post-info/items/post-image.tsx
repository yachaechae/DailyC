import "@/app/posts/post-detail.style.css";
import { useState } from "react";

type postImgType = {
  main: string;
  sub: string[];
};

const PostDetailImage = ({ main, sub }: postImgType) => {
  const [imgArray, setImgArray] = useState<string[]>([main, ...sub]);
  const [selectedImg, setSelectedImg] = useState(main);
  const [countIndex, setCountIndex] = useState(0);

  const toggleActive = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    idx: number,
    img: string
  ) => {
    setCountIndex(idx);
    setSelectedImg(img);
  };
  return (
    <div className="detailImgWrap">
      <div className="detailSelectedImg">
        <img src={selectedImg} alt="mainImg" />
      </div>
      <div className="detailImgList">
        {imgArray.map((item, idx) => (
          <button
            key={idx}
            type="button"
            className={countIndex === idx ? "active detailImg" : "detailImg"}
            onClick={(e) => toggleActive(e, idx, item)}
          >
            <img src={item} alt="subImg" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default PostDetailImage;
