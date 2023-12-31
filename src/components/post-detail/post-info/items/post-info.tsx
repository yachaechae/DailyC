import React from "react";

type dateType = {
  createAt: Date;
  updateAt: Date;
};

const PostDetailInfo = ({ createAt, updateAt }: dateType) => {
  const newDate = new Date(createAt);
  const createDate = newDate.toLocaleString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  let editDate;
  if (updateAt) {
    const newEditDate = new Date(updateAt);
    editDate = newEditDate.toLocaleString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  }
  return (
    <>
      {!updateAt ? (
        <div className="text-lg text-gray-500">{createDate}</div>
      ) : (
        <div className="text-lg text-gray-500">{editDate} (Edit)</div>
      )}
    </>
  );
};

export default PostDetailInfo;
