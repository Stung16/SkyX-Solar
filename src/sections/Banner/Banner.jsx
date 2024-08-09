import useWindowSize from "@/hooks/useScreenSize";
import Image from "next/image";
import React from "react";

const Banner = () => {
  const { width } = useWindowSize();
  return (
    <section className="w-full relative z-10 ">
      <Image
        src={`${width <= 767 ? '/images/bannermb.jpg' : '/images/bannerpc.jpg'}`}
        width={2286.986}
        height={1621.272}
        alt="Banner Logo"
        className={`md:h-[53.125rem] h-[50.75rem] absolute  bg-cover  bg-no-repeat flex-shrink-0 bg-banner-gradient`}
      />
      <div
        className="relative grid grid-cols-1 mx-[0.62rem] md:mx-[6.25rem] gap-y-[3.69rem] md:gap-y-[5.25rem]"
        data-aos-once
        data-aos="fade-up"
      >
        {/* slogan */}
        <div className="w-[22.1875rem] mt-[16.13rem] md:mt-[18.81rem] md:w-[50.25rem]  ">
          <h1 className="text-white text-[2rem] md:text-[3.9rem] font-extrabold leading-[3rem] md:leading-[6rem] w-full">
            SkyX Solar - GIẢI PHÁP NĂNG LƯỢNG MẶT TRỜI
          </h1>
        </div>

        {/* infomation */}
        <div
          className="flex md:justify-between md:items-center md:flex-row flex-col space-y-[1.88rem]"
          data-aos-once
          data-aos="fade-up"
        data-aos-delay="200"
        >
          <div className="flex flex-col space-y-[0.625rem] ">
            <h2 className="text-white text-xl md:text-4xl font-semibold md:font-bold leading-[1.875rem] md:leading-[3.15rem] md:tracking-[0.0225rem]">
              BỐI CẢNH DỰ ÁN
            </h2>
            <p className="w-[22.1875rem] md:w-[37.3125rem] text-white text-sm md:text-base font-normal leading-[1.3125rem] md:leading-[1.7rem]">
              Kể từ khi bắt đầu, SkyX Solar đã chuyển động liên tục để trở thành
              nhà cung cấp dịch vụ phân phối chuyên nghiệp hàng đầu trong các
              lĩnh vực Viễn thông và Công nghệ thông tin tại Việt Nam.
            </p>
          </div>

          <ul className="grid grid-cols-[auto_auto] md:gap-x-[3.69rem] md:gap-y-[1.88rem] gap-x-[0.94rem] gap-y-[1.5rem]">
            <li className="flex flex-col space-y-2">
              <h3 className="text-thanh-Minh-duc-tax-xm text-xs md:text-sm leading-[1.375rem] uppercase font-normal">
                Khách hàng
              </h3>
              <div className="max-w-[10.5rem] md:min-w-[19rem]">
                <span className="text-white text-[0.875rem] md:text-[1.25rem] font-medium leading-[1.1375rem] md:leading-[1.65625rem]">
                  Công ty năng lượng SkyX Solar
                </span>
              </div>
            </li>
            <li className=" flex flex-col space-y-2">
              <h3 className="text-thanh-Minh-duc-tax-xm text-xs md:text-sm leading-[1.375rem] uppercase font-normal">
                dịch vụ
              </h3>
              <div className="grid gap-y-[0.13rem]">
                <span className="text-white text-[0.875rem] md:text-[1.25rem] font-medium leading-[1.3125rem] md:leading-[1.65625rem]">
                  UI/UX Design
                </span>
                <span className="text-white text-[0.875rem] md:text-[1.25rem] font-medium leading-[1.3125rem] md:leading-[1.65625rem]">
                  Development
                </span>
              </div>
            </li>
            <li className=" flex flex-col space-y-2">
              <h3 className="text-thanh-Minh-duc-tax-xm text-xs md:text-sm leading-[1.375rem] uppercase font-normal">
                Thời gian
              </h3>
              <div>
                <span className="text-white text-[0.875rem] md:text-[1.25rem] font-medium leading-[1.40625rem] md:leading-[1.65625rem]">
                  19/10/2022
                </span>
              </div>
            </li>
            <li className=" flex flex-col space-y-2">
              <h3 className="text-thanh-Minh-duc-tax-xm text-xs md:text-sm leading-[1.375rem] uppercase font-normal">
                thành viên
              </h3>
              {width <= 767 ? (
                <div className="flex flex-col md:space-y-[0.5rem] space-y-[0.12rem]">
                  <span className="text-white text-sm not-italic font-medium leading-[1.3125rem ]">
                    Xuân Trinh, Trang nguyễn
                  </span>
                  <span className="text-white text-sm not-italic font-medium leading-[1.3125rem ]">
                    Chương Phạm
                  </span>
                </div>
              ) : (
                <div className="flex flex-col md:space-y-[0.5rem] space-y-[0.12rem]">
                  <span className="text-white text-[1.25rem] font-medium leading-[1.312rem]">
                    Xuân Trinh
                  </span>
                  <span className="text-white text-[1.25rem] font-medium leading-[1.312rem]">
                    Trang Nguyễn
                  </span>
                  <span className="text-white text-[1.25rem] font-medium leading-[1.312rem]">
                    Chương Phạm
                  </span>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Banner;
