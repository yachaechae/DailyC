import React, { useEffect, useState } from "react";

const PostDetailTag = ({ tags }: { tags: string[] }) => {
  const [detailTags, setDetailTags] = useState<string[]>([]);

  useEffect(() => {
    setDetailTags(tags);
  }, []);

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
