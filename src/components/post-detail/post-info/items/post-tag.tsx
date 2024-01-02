import { postStateArr } from "@/app/state/state";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const PostDetailTag = ({ tags }: { tags: string[] }) => {
  const [detailTags, setDetailTags] = useState<string[]>([]);

  useEffect(() => {
    setDetailTags(tags);
  }, []);

  const [postDataSupa, setPostDataSupa] = useRecoilState(postStateArr);

  useEffect(() => {
    if (postDataSupa.length > 0) {
      setDetailTags(postDataSupa[0].tags);
    }
  }, [postDataSupa]);

  return (
    <div className="detailTagsBtnWrap">
      {detailTags.map((tag, idx) => (
        <div className="detailTagsBtn" key={idx}>
          {tag}
        </div>
      ))}
    </div>
  );
};

export default PostDetailTag;
