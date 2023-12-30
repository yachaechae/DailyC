import React from "react";

const PostDetailInfo = ({ createAt }: { createAt: Date }) => {
  const newDate = new Date(createAt);
  const createDate = newDate.toLocaleString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <>
      <div className="text-lg text-gray-500">{createDate}</div>
    </>
  );
};

export default PostDetailInfo;
