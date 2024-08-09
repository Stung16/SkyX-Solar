import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../app/globals.css";

// import required modules
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import useWindowSize from "@/hooks/useScreenSize";
const OtherPages = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  return (
    <section className="md:h-[45.4375rem] h-[20.9375rem] w-full bg-[#F8F8F8]">
      <div className="md:mx-[6.25rem] mx-[0.62rem] pt-[2.5rem] md:pt-[7.94rem]">
        <h3 className="text-[rgba(0,0,0,0.60)] text-base md:text-2xl not-italic font-medium leading-[1.5rem] md:leading-[2.25rem] tracking-[0.015rem]">
          02.Các trang khác
        </h3>
      </div>

      {/* slide */}
      <div className="mt-8 md:mt-[2.5rem]">
        <Swiper
          slidesPerView={isMobile ? 1.2 : 2.5}
          spaceBetween={isMobile ? 10 : 39}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <Image
                src="/images/slide1.jpg"
                width={2286.986}
                height={1621.272}
                alt="Banner Logo"
                className={`!w-[20.375rem] md:!w-[40.0625rem]  bg-cover flex-shrink-0 bg-no-repeat `}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                src="/images/slide2.jpg"
                width={2286.986}
                height={1621.272}
                alt="Banner Logo"
                className={`!w-[20.375rem] md:!w-[40.0625rem]  bg-cover flex-shrink-0 bg-no-repeat `}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                src="/images/slide3.jpg"
                width={2286.986}
                height={1621.272}
                alt="Banner Logo"
                className={`!w-[40rem]  bg-cover flex-shrink-0 bg-no-repeat `}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                src="/images/slide1.jpg"
                width={2286.986}
                height={1621.272}
                alt="Banner Logo"
                className={`!w-[20.375rem] md:!w-[40.0625rem] bg-cover flex-shrink-0 bg-no-repeat `}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default OtherPages;
