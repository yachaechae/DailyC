import "@/app/posts/post-detail.style.css";
import { useCallback, useEffect, useState } from "react";
import ModalPost from "@/components/modal/ModalPost";
import { useRecoilState } from "recoil";
import { postState, postStateArr } from "@/app/state/state";

type postImgType = {
  main: string;
  sub: string[];
};

const PostDetailImage = ({ main, sub }: postImgType) => {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const showModalHandler = () => {
    setModalIsVisible(true);
  };

  const hideModalHandler = () => {
    setModalIsVisible(false);
  };

  const [imgArray, setImgArray] = useState<string[]>([main, ...sub]);
  const [selectedImg, setSelectedImg] = useState(main);
  const [countIndex, setCountIndex] = useState(0);

  const [postDataSupa, setPostDataSupa] = useRecoilState(postStateArr);

  const toggleActive = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    idx: number,
    img: string
  ) => {
    setCountIndex(idx);
    setSelectedImg(img);
  };

  useEffect(() => {
    if (postDataSupa.length > 0) {
      setImgArray([postDataSupa[0].mainImg, ...postDataSupa[0].subImg]);
      setSelectedImg(postDataSupa[0].mainImg);
    }
  }, [postDataSupa]);

  return (
    <div className="detailImgWrap">
      {modalIsVisible && (
        <ModalPost>
          <button
            onClick={hideModalHandler}
            className="w-[25px] absolute top-[15px] right-[15px] h-[25px] rounded-full bg-[#f49508] text-white text-[0.9rem]"
          >
            X
          </button>
          <p>
            <img src={selectedImg} alt="mainImg" />
          </p>
        </ModalPost>
      )}
      <button className="detailSelectedImg" onClick={showModalHandler}>
        <img src={selectedImg} alt="mainImg" />
      </button>
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
