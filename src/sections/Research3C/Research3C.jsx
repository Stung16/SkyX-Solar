import Image from "next/image";
import React, { useState } from "react";
import CircleResearch from "./CircleResearch";
import useWindowSize from "@/hooks/useScreenSize";

const Research3C = () => {
  const { width } = useWindowSize();
  const [indexLabel, setIndexLabel] = useState(2);
  return (
    <section>
      <div className="mt-[4.5rem] md:mt-[11.06rem] relative">
        <Image
          src={
            width <= 767 ? "/images/Rectangle2.jpg" : "/images/Rectangle.jpg"
          }
          width={2286.986}
          height={1621.272}
          alt="Banner Logo"
          className={`md:w-screen md:h-[48.875rem] bg-cover  flex-shrink-0 `}
        />
        <div
          className="w-[50.5625rem] h-[48.9375rem] flex-shrink-0 md:bg-[rgba(0,0,0,0.40)] absolute top-0 left-0"
          data-aos-once
          data-aos-duration="400"
          data-aos="fade-right"
        >
          <p className="md:mt-[15.75rem] mt-[32.19rem] md:ml-[6.25rem] mx-[0.75rem] md:w-[39.8125rem] w-[22.1875rem] text-white  not-italic font-medium md:leading-[3.9375rem] leading-[2.53125rem ] text-[1.6875rem] md:text-[2.5rem]">
            <span className="md:text-[2.625rem] text-[1.6875rem] uppercase">
              3C Research
            </span>{" "}
            <span className="font-semibold">-</span> giúp cho SkyX Solar có thể
            định hướng và phát triển chiến lược kinh doanh phù hợp với tình hình
            thị trường và các đối thủ cạnh tranh.
          </p>
        </div>
      </div>
      <div className="mt-[4.44rem] md:mt-[12.5rem] grid grid-cols-1 md:grid-cols-[1fr_auto] gap-y-[2.81rem] md:gap-x-[11.19rem] mx-[0.625rem] md:ml-[9rem] md:mr-[6.25rem] items-end">
        <CircleResearch setIndexLabel={setIndexLabel} />
        {/* <DonutChart segments={segments} /> */}
        <div data-aos-once data-aos-duration="400" data-aos="fade-left">
          <div className="hidden md:block">
            <div className="flex flex-col md:space-y-[1.88rem] space-y-[1.25rem]">
              <h3
                className={`md:w-[42.8125rem] w-[22.0625rem] md:h-[3.875rem] rounded-[99px] ${
                  indexLabel === 1 && "bg-[#676767]"
                } ${indexLabel === 0 && "bg-[#c2c2c2]"}  ${
                  indexLabel === 2 && "bg-[#d33]"
                } flex items-center pl-[1.5rem] md:py-[0.81rem] py-[0.5rem] md:pl-[2.5rem]`}
              >
                <span className="text-[1.125rem] md:text-2xl not-italic font-medium leading-[1.6875rem] md:leading-[2.25rem] text-white">
                  {indexLabel === 0 && "2. Nghiên cứu đối thủ cạnh tranh"}
                  {indexLabel === 1 && "3. Nghiên cứu phát triển công ty"}
                  {indexLabel === 2 && "1. nghiên cứu khách hàng"}
                </span>
              </h3>
              <p className="w-[42.75rem] text-base not-italic font-normal leading-[1.7rem] text-[#333] min-h-[6rem]">
                {indexLabel === 0 &&
                  "SkyX Solar có thể sử dụng nhiều phương pháp nghiên cứu khác nhau để tìm hiểu về đối thủ cạnh tranh trong ngành năng lượng mặt trời và đưa ra các giải pháp kinh doanh phù hợp và cạnh tranh."}
                {indexLabel === 1 &&
                  "SkyX Solar cùng nhau, chúng ta định hình và đẩy nhanh quá trình chuyển đổi hướng tới phát triển năng lượng bền vững.Là người lãnh đạo ' MEGA - M ake E arth G reen A gain'."}
                {indexLabel === 2 &&
                  "SkyX Solar là một tập đoàn chuyên về năng lượng mặt trời, do đó việc nghiên cứu khách hàng của họ tập trung vào việc tìm hiểu nhu cầu và mong muốn của khách hàng liên quan đến giải pháp năng lượng mặt trời."}
              </p>
            </div>
            <Image
              src="/images/Rectangle1.jpg"
              width={2286.986}
              height={1621.272}
              alt="Banner Logo"
              className={`md:w-[42.8125rem] md:h-[22.4375rem] rounded-2xl bg-cover flex-shrink-0 mt-4 md:mt-8  `}
            />
          </div>
          <div className="md:hidden grid grid-cols-1 gap-y-[2.75rem]">
            <div>
              <div className="flex flex-col md:space-y-[1.88rem] space-y-[1.25rem]">
                <h3
                  className={`md:w-[42.8125rem] w-[22.0625rem] md:h-[3.875rem] rounded-[99px] bg-[#d33] flex items-center pl-[1.5rem] md:py-[0.81rem] py-[0.5rem] md:pl-[2.5rem]`}
                >
                  <span className="text-[1.125rem] md:text-2xl not-italic font-medium leading-[1.6875rem] md:leading-[2.25rem] text-white">
                    1. nghiên cứu khách hàng
                  </span>
                </h3>
                <p className="w-[22.125rem] text-sm not-italic font-normal leading-[1.3125rem ] text-[#333] min-h-[6rem]">
                  SkyX Solar là một tập đoàn chuyên về năng lượng mặt trời, do
                  đó việc nghiên cứu khách hàng của họ tập trung vào việc tìm
                  hiểu nhu cầu và mong muốn của khách hàng liên quan đến giải
                  pháp năng lượng mặt trời.
                </p>
              </div>
              <Image
                src="/images/Rectangle1.jpg"
                width={2286.986}
                height={1621.272}
                alt="Banner Logo"
                className={`md:w-[42.8125rem] md:h-[22.4375rem] rounded-2xl bg-cover flex-shrink-0 mt-4 md:mt-8  `}
              />
            </div>
            <div>
              <div className="flex flex-col md:space-y-[1.88rem] space-y-[1.25rem]">
                <h3
                  className={`md:w-[42.8125rem] w-[22.0625rem] md:h-[3.875rem] rounded-[99px] bg-[#c2c2c2] flex items-center pl-[1.5rem] md:py-[0.81rem] py-[0.5rem] md:pl-[2.5rem]`}
                >
                  <span className="text-[1.125rem] md:text-2xl not-italic font-medium leading-[1.6875rem] md:leading-[2.25rem] text-white">
                    2. Nghiên cứu đối thủ cạnh tranh
                  </span>
                </h3>
                <p className="w-[22.125rem] text-sm not-italic font-normal leading-[1.3125rem ] text-[#333] min-h-[6rem]">
                  SkyX Solar có thể sử dụng nhiều phương pháp nghiên cứu khác
                  nhau để tìm hiểu về đối thủ cạnh tranh trong ngành năng lượng
                  mặt trời và đưa ra các giải pháp kinh doanh phù hợp và cạnh
                  tranh.
                </p>
              </div>
              <Image
                src="/images/Rectangle1.jpg"
                width={2286.986}
                height={1621.272}
                alt="Banner Logo"
                className={`md:w-[42.8125rem] md:h-[22.4375rem] rounded-2xl bg-cover flex-shrink-0 mt-4 md:mt-8  `}
              />
            </div>
            <div>
              <div className="flex flex-col md:space-y-[1.88rem] space-y-[1.25rem]">
                <h3
                  className={`md:w-[42.8125rem] w-[22.0625rem] md:h-[3.875rem] rounded-[99px] bg-[#676767] flex items-center pl-[1.5rem] md:py-[0.81rem] py-[0.5rem] md:pl-[2.5rem]`}
                >
                  <span className="text-[1.125rem] md:text-2xl not-italic font-medium leading-[1.6875rem] md:leading-[2.25rem] text-white">
                    3. Nghiên cứu phát triển công ty
                  </span>
                </h3>
                <p className="w-[22.125rem] text-sm not-italic font-normal leading-[1.3125rem ] text-[#333] min-h-[6rem]">
                  SkyX Solar cùng nhau, chúng ta định hình và đẩy nhanh quá
                  trình chuyển đổi hướng tới phát triển năng lượng bền vững.Là
                  người lãnh đạo MEGA - M ake E arth G reen A gain
                </p>
              </div>
              <Image
                src="/images/Rectangle1.jpg"
                width={2286.986}
                height={1621.272}
                alt="Banner Logo"
                className={`md:w-[42.8125rem] md:h-[22.4375rem] rounded-2xl bg-cover flex-shrink-0 mt-4 md:mt-8  `}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research3C;
