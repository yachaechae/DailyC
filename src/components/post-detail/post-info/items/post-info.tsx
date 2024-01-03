import React from "react";

type dateType = {
  createAt: string;
  updateAt: string | null;
  writedName: string;
  gender: string;
  height: string;
};

const PostDetailInfo = ({
  createAt,
  updateAt,
  writedName,
  gender,
  height,
}: dateType) => {
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
      <div className="mt-1 text-sm text-gray-800">{writedName}</div>
      <div className="mt-1 text-sm text-gray-800">
        {gender === "woman" ? <span>여자</span> : <span>남자</span>} | {height}
        cm
      </div>
    </>
  );
};

export default PostDetailInfo;
