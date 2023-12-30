import React, { useEffect, useState } from "react";

const PostDetailTag = ({ tags }: { tags: string[] }) => {
  const [detailTags, setDetailTags] = useState<string[]>([]);

  useEffect(() => {
    setDetailTags(tags);
    console.log(tags);
  }, []);

  return (
    <div className="detailTagsBtnWrap">
      {detailTags.map((tag) => (
        <div className="detailTagsBtn">{tag}</div>
      ))}
    </div>
  );
};

export default PostDetailTag;
