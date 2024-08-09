import Image from "next/image";
import React from "react";

const IconGuide = ({ link, width, height }) => {
  return (
    <div>
      <Image
        src={link}
        width={2286.986}
        height={1621.272}
        alt="Banner Logo"
        style={{ width: width, height: height }}
        className={`bg-cover bg-center object-contain flex-shrink-0 `}
      />
    </div>
  );
};

export default IconGuide;
