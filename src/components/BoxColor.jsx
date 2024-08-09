import React from "react";

const BoxColor = ({ color, width, height }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        width: width,
        height: height,
      }}
    ></div>
  );
};

export default BoxColor;
