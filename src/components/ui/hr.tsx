import React from "react";

type Props = {
  mt: number;
  mb: number;
};

const HrComponents = ({ mt, mb }: Props) => {
  return (
    <div
      className="w-full h-px bg-gray-300"
      style={{
        marginTop: `${mt}px`,
        marginBottom: `${mb}px`,
      }}
    ></div>
  );
};

export default HrComponents;
