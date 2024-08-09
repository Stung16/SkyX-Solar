import Image from "next/image";
import React from "react";

const PageWCYD = () => {
  return (
    <section className=" bg-white relative">
      <div className="mt-[4.65rem] md:mt-[9.38rem] mx-[0.62rem] md:mx-[6.75rem] md:pb-[17.25rem] pb-[24.25rem]">
        <h3 className="text-[rgba(0,0,0,0.60)] text-base md:text-2xl not-italic font-medium leading-[1.5rem] md:leading-[2.25rem] tracking-[0.015rem]">
          01.Trang what we do
        </h3>
        <Image
          src="/images/wcyd.jpg"
          width={2286.986}
          height={1621.272}
          alt="Banner Logo"
          className={`w-[72.125rem] md:h-[40.5625rem] bg-cover flex-shrink-0 bg-no-repeat mt-[2.38rem] md:mt-[2.81rem]`}
          data-aos-once
          data-aos="fade-right"
          data-aos-duration="400"

        />
        <Image
          src="/images/wcyd1.png"
          width={2286.986}
          height={1621.272}
          alt="Banner Logo"
          className={`md:w-[44.82844rem] w-[23.55594rem] flex-shrink-0 bg-center bg-no-repeat bg-cover absolute bottom-0 right-0 md:translate-x-[5rem]`}
          data-aos-once
          data-aos="fade-left"
          data-aos-duration="400"

        />
      </div>
    </section>
  );
};

export default PageWCYD;
