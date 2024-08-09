import React from "react";

const BoxColorBorder = ({ color, width, height }) => {
  return (
    <div
      className="border-r border-[#C2C2C2] border-t border-b"
      style={{
        backgroundColor: color,
        width: width,
        height: height,
      }}
    ></div>
  );
};

export default BoxColorBorder;
