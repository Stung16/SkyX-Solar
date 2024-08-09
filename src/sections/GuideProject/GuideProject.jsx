import BoxColor from "@/components/BoxColor";
import BoxColorBorder from "@/components/BoxColorBorder";
import IconGuide from "@/components/IconGuide";
import useWindowSize from "@/hooks/useScreenSize";
import Image from "next/image";

const GuideProject = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  return (
    <section className="md:mt-[9.37rem] mt-[4.63rem] ">
      {/* 01 */}
      <div className="md:mx-[6.25rem] mx-[0.62rem] ">
        <div
          className="mx-auto grid grid-cols-1 gap-y-[1rem] md:w-[42.75rem] w-[22.1875rem]"
          data-aos-once
          data-aos-duration="500"
          data-aos="fade-up"
        >
          <h2 className="text-center text-[#333] text-[1.875rem] md:text-[2.5rem] not-italic font-semibold leading-[2.8125rem ] md:leading-[3.75rem] tracking-[0.01875rem] md:tracking-[0.025rem] capitalize">
            Guide dự án
          </h2>
          <p className="text-center text-[0.875rem] md:text-base not-italic font-normal leading-[1.3125rem ] md:leading-[1.7rem] text-[#333]">
            SkyX Solar là một tập đoàn chuyên về năng lượng mặt trời, do đó việc
            nghiên cứu khách hàng của họ tập trung vào việc tìm hiểu nhu cầu và
            mong muốn của khách hàng liên quan
          </p>
        </div>

        <div className="mt-[2.88rem] md:mt-[3.12rem]">
          <h3
            data-aos-once
            data-aos-duration="500"
            data-aos="fade-up"
            className="text-[rgba(0,0,0,0.60)] text-center text-base md:text-2xl not-italic font-medium leading-[1.5rem ] md:leading-[2.25rem] tracking-[0.01rem] md:tracking-[0.015rem]"
          >
            01. Sitemap & Key content
          </h3>
          <div className=" md:w-[87.375rem] w-[22.1875rem] h-[0.0625rem] bg-[rgba(224,56,56,0.33)] mt-6"></div>

          <div className="grid md:grid-cols-6 md:gap-x-[3.69rem] gap-y-[3.13rem] gap-x-[3.96rem] grid-cols-2  md:mt-[3.38rem] mt-8">
            <div
              data-aos-once
              data-aos-duration="500"
              data-aos="fade-right"
              className="flex flex-col order-1 md:order-1"
            >
              <div className="flex md:w-[10.5rem] w-[8.3125rem] h-[3.8125rem] md:h-[5.5625rem] items-start shrink-0 p-4 bg-[#E03838]">
                <span className="text-white text-base md:text-xl not-italic font-normal md:font-bold leading-[1.75rem]">
                  HOME
                </span>
              </div>
              <ul className="flex flex-col space-y-[1.5rem] mt-[1.94rem] md:mt-[3.38rem]">
                <li className="flex h-[3.5rem] md:w-[10.2875rem] md:h-[5.5625rem] items-center md:items-start pl-2.5  pt-4 pb-[1.4375rem] md:p-4 bg-[#AFBCCF]">
                  <span className="text-xs md:text-base not-italic font-medium leading-[1.05rem] md:leading-[1.4rem] text-[#333]">
                    What we do
                  </span>
                </li>
                <li className="flex h-[3.5rem] md:w-[10.2875rem] md:h-[5.5625rem] items-center md:items-start pl-2.5  pt-4 pb-[1.4375rem] md:p-4 bg-[#AFBCCF]">
                  <span className="text-xs md:text-base not-italic font-medium leading-[1.05rem] md:leading-[1.4rem] text-[#333]">
                    Our Project
                  </span>
                </li>
                <li className="flex h-[3.5rem] md:w-[10.2875rem] md:h-[5.5625rem] items-center md:items-start pl-2.5  pt-4 pb-[1.4375rem] md:p-4 bg-[#AFBCCF]">
                  <span className="text-xs md:text-base not-italic font-medium leading-[1.05rem] md:leading-[1.4rem] text-[#333]">
                    Why Choose Us{" "}
                  </span>
                </li>
                <li className="flex h-[3.5rem] md:w-[10.2875rem] md:h-[5.5625rem] items-center md:items-start pl-2.5  pt-4 pb-[1.4375rem] md:p-4 bg-[#AFBCCF]">
                  <span className="text-xs md:text-base not-italic font-medium leading-[1.05rem] md:leading-[1.4rem] text-[#333]">
                    Our Recognitions
                  </span>
                </li>
                <li className="flex h-[3.5rem] md:w-[10.2875rem] md:h-[5.5625rem] items-center md:items-start pl-2.5  pt-4 pb-[1.4375rem] md:p-4 bg-[#AFBCCF]">
                  <span className="text-xs md:text-base not-italic font-medium leading-[1.05rem] md:leading-[1.4rem] text-[#333]">
                    Company News
                  </span>
                </li>
                <li className="flex h-[3.5rem] md:w-[10.2875rem] md:h-[5.5625rem] items-center md:items-start pl-2.5  pt-4 pb-[1.4375rem] md:p-4 bg-[#AFBCCF]">
                  <span className="text-xs md:text-base not-italic font-medium leading-[1.05rem] md:leading-[1.4rem] text-[#333]">
                    Contact Form
                  </span>
                </li>
              </ul>
            </div>
            <div
              data-aos-once
              data-aos-duration="500"
              data-aos="fade-right"
              className="flex flex-col order-2 md:order-2"
            >
              {/* <div className="flex md:w-[10.5rem] w-[8.3125rem] h-[3.8125rem] md:h-[5.5625rem] items-start shrink-0 p-4 bg-[#E03838]"> */}
              <div className="flex w-full md:w-[10.5rem] md:h-[5.5625rem] h-[3.8125rem] items-start shrink-0 p-4 bg-[#E03838]">
                <span className="text-white  text-base md:text-xl not-italic font-normal md:font-bold leading-[1.4rem] md:leading-[1.75rem]">
                  ABOUT US
                </span>
              </div>
              <div className="flex">
                <Image
                  src="/images/listArrow1.png"
                  width={2286.986}
                  height={1621.272}
                  alt="Banner Logo"
                  className={`md:w-[1.875rem] w-[1.25rem] md:h-[35.03125rem] h-[24rem] bg-cover   flex-shrink-0 ml-[0.37rem] md:ml-[1.06rem]`}
                />

                <ul className="flex flex-col space-y-[1.5rem] mt-[1.94rem] md:mt-[3.38rem]">
                  <li className="flex h-[3.5rem] md:w-[10.2875rem] md:h-[5.5625rem] items-center md:items-start pl-2.5 pt-4 pb-[1.4375rem] md:p-4 bg-[#D9D9D9]">
                    <span className="text-xs md:text-base not-italic font-medium leading-[1.05rem] md:leading-[1.4rem] text-[#333]">
                      Introduction
                    </span>
                  </li>
                  <li className="flex h-[3.5rem] md:w-[10.2875rem] md:h-[5.5625rem] items-center md:items-start pl-2.5 pt-4 pb-[1.4375rem] md:p-4 bg-[#D9D9D9]">
                    <span className="text-xs md:text-base not-italic font-medium leading-[1.05rem] md:leading-[1.4rem] text-[#333]">
                      Shareholders
                    </span>
                  </li>
                  <li className="flex h-[3.5rem] md:w-[10.2875rem] md:h-[5.5625rem] items-center md:items-start pl-2.5 pt-4 pb-[1.4375rem] md:p-4 bg-[#D9D9D9]">
                    <span className="text-xs md:text-base not-italic font-medium leading-[1.05rem] md:leading-[1.4rem] text-[#333]">
                      Board Members
                    </span>
                  </li>
                  <li className="flex h-[3.5rem] md:w-[10.2875rem] md:h-[5.5625rem] items-center md:items-start pl-2.5 pt-4 pb-[1.4375rem] md:p-4 bg-[#D9D9D9]">
                    <span className="text-xs md:text-base not-italic font-medium leading-[1.05rem] md:leading-[1.4rem] text-[#333]">
                      Clients and Testimonials
                    </span>
                  </li>
                  <li className="flex h-[3.5rem] md:w-[10.2875rem] md:h-[5.5625rem] items-center md:items-start pl-2.5 pt-4 pb-[1.4375rem] md:p-4 bg-[#D9D9D9]">
                    <span className="text-xs md:text-base not-italic font-medium leading-[1.05rem] md:leading-[1.4rem] text-[#333]">
                      Awards
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              data-aos-once
              data-aos-duration="500"
              data-aos="fade-right"
              className="flex flex-col order-4 md:order-3"
            >
              <div className="flex md:w-[10.5rem] w-full h-[3.8125rem] md:h-[5.5625rem] items-start shrink-0 p-4 bg-[#E03838]">
                <span className="text-white text-[0.953rem]  md:text-xl not-italic md:font-bold font-normal leading-[1.4rem] md:leading-[1.75rem]">
                  WHAT WE DO
                </span>
              </div>
              <ul className="flex flex-col space-y-[1.5rem] mt-[1.94rem] md:mt-[3.38rem]">
                <li className="flex h-[3.5rem] md:w-[10.2875rem] md:h-[5.5625rem] items-center md:items-start pl-2.5  pt-4 pb-[1.4375rem] md:p-4 bg-[#AFBCCF]">
                  <span className="text-xs md:text-base not-italic font-medium leading-[1.05rem] md:leading-[1.4rem] text-[#333]">
                    Why choose us
                  </span>
                </li>
                <li className="flex h-[3.5rem] md:w-[10.2875rem] md:h-[5.5625rem] items-center md:items-start pl-2.5  pt-4 pb-[1.4375rem] md:p-4 bg-[#AFBCCF]">
                  <span className="text-xs md:text-base not-italic font-medium leading-[1.05rem] md:leading-[1.4rem] text-[#333]">
                    We Offer You
                  </span>
                </li>
                <li className="flex h-[3.5rem] md:w-[10.2875rem] md:h-[5.5625rem] items-center md:items-start pl-2.5  pt-4 pb-[1.4375rem] md:p-4 bg-[#AFBCCF]">
                  <span className="text-xs md:text-base not-italic font-medium leading-[1.05rem] md:leading-[1.4rem] text-[#333]">
                    EACs
                  </span>
                </li>
                <li className="flex h-[3.5rem] md:w-[10.2875rem] md:h-[5.5625rem] items-center md:items-start pl-2.5  pt-4 pb-[1.4375rem] md:p-4 bg-[#AFBCCF]">
                  <span className="text-xs md:text-base not-italic font-medium leading-[1.05rem] md:leading-[1.4rem] text-[#333]">
                    Key Benefits
                  </span>
                </li>
                <li className="flex h-[3.5rem] md:w-[10.2875rem] md:h-[5.5625rem] items-center md:items-start pl-2.5 pr-[1.81rem] pt-4 pb-[1.4375rem] md:p-4 bg-[#AFBCCF]">
                  <span className="text-xs md:text-base not-italic font-medium leading-[1.05rem] md:leading-[1.4rem] text-[#333]">
                    Our Installation Process
                  </span>
                </li>
              </ul>
            </div>
            <div
              data-aos-once
              data-aos-duration="500"
              data-aos="fade-left"
              className="flex flex-col order-5 md:order-4"
            >
              <div className="flex md:w-[11.9375rem] w-full h-[3.8125rem] md:h-[5.5625rem] items-start shrink-0 p-4 bg-[#E03838]">
                <span className="text-white text-base md:text-xl not-italic font-normal md:font-bold  md:leading-[1.75rem] leading-[1.4rem]">
                  {isMobile ? "About us" : "OUR PROJECTS"}
                </span>
              </div>
              <div className="flex">
                <Image
                  src="/images/listArrow2.png"
                  width={2286.986}
                  height={1621.272}
                  alt="Banner Logo"
                  className={`md:w-[1.875rem] w-[1.25rem] h-[8.875rem]  md:h-[12.5625rem] bg-cover flex-shrink-0 ml-[1.06rem]`}
                />

                <ul className="flex flex-col w-full space-y-[1.5rem] mt-[1.94rem] md:mt-[3.38rem]">
                  <li className="flex h-[3.5rem] md:w-[10.2875rem] md:h-[5.5625rem] items-center md:items-start pl-2.5 pt-4 pb-[1.4375rem] md:p-4 bg-[#D9D9D9]">
                    <span className="text-xs md:text-base not-italic font-medium leading-[1.05rem] md:leading-[1.4rem] text-[#333]">
                      Project List
                    </span>
                  </li>
                  <li className="flex h-[3.5rem] md:w-[10.2875rem] md:h-[5.5625rem] items-center md:items-start pl-2.5 pt-4 pb-[1.4375rem] md:p-4 bg-[#D9D9D9]">
                    <span className="text-xs md:text-base not-italic font-medium leading-[1.05rem] md:leading-[1.4rem] text-[#333]">
                      Project Single
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              data-aos-once
              data-aos-duration="500"
              data-aos="fade-left"
              className="flex flex-col order-6 md:order-5"
            >
              <div className="flex md:w-[12.7375rem] w-full h-[3.8125rem] md:h-[5.5625rem] items-start shrink-0 p-4 bg-[#E03838]">
                <span className="text-white text-[0.8529rem] md:text-xl not-italic font-normal md:font-bold leading-[1.4rem] md:leading-[1.75rem]">
                  COMPANY NEWS
                </span>
              </div>
              <div className="flex">
                <Image
                  src="/images/listArrow2.png"
                  width={2286.986}
                  height={1621.272}
                  alt="Banner Logo"
                  className={`md:w-[1.875rem] w-[1.25rem] h-[8.875rem]  md:h-[12.5625rem]bg-cover flex-shrink-0 ml-[1.06rem]`}
                />

                <ul className="flex flex-col w-full space-y-[1.5rem] mt-[1.94rem] md:mt-[3.38rem]">
                  <li className="flex h-[3.5rem]  md:w-[10.2875rem] md:h-[5.5625rem] items-center md:items-start pl-2.5 pt-4 pb-[1.4375rem] md:p-4 bg-[#D9D9D9]">
                    <span className="text-xs md:text-base not-italic font-medium leading-[1.4rem] text-[#333]">
                      Project List
                    </span>
                  </li>
                  <li className="flex h-[3.5rem]  md:w-[10.2875rem] md:h-[5.5625rem] items-center md:items-start pl-2.5 pt-4 pb-[1.4375rem] md:p-4 bg-[#D9D9D9]">
                    <span className="text-xs md:text-base not-italic font-medium leading-[1.4rem] text-[#333]">
                      Project Single
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              data-aos-once
              data-aos-duration="500"
              data-aos="fade-left"
              className="flex flex-col order-3 md:order-6"
            >
              <div className="flex md:w-[10.5rem] w-[9.0625rem] h-[3.8125rem] md:h-[5.5625rem] items-start shrink-0 p-4 bg-[#E03838]">
                <span className="text-white text-base md:text-xl not-italic font-normal md:font-bold leading-[1rem] md:leading-[1.75rem] md:w-[9.25rem] w-[7.3125rem]">
                  KNOWLEDGE HUBS
                </span>
              </div>
              <ul className="flex flex-col space-y-[1.5rem] mt-[1.94rem] md:mt-[3.38rem]">
                <li className="flex h-[3.5rem] md:w-[10.2875rem] md:h-[5.5625rem] items-center md:items-start pl-2.5  pt-4 pb-[1.4375rem] md:p-4 bg-[#AFBCCF]">
                  <span className="text-[0.7rem] md:text-base not-italic  font-medium leading-[1.05rem] md:leading-[1.4rem] text-[#333] w-[6.625rem] md:w-[8.625rem]">
                    How Solar Power Works​
                  </span>
                </li>
                <li className="flex h-[3.5rem] md:w-[10.2875rem] md:h-[5.5625rem] items-center md:items-start pl-2.5  pt-4 pb-[1.4375rem] md:p-4 bg-[#AFBCCF]">
                  <span className="text-[0.7rem] md:text-base not-italic w-fit font-medium leading-[1.05rem] md:leading-[1.4rem] text-[#333]">
                    FAQs
                  </span>
                </li>
                <li className="flex h-[3.5rem] md:w-[10.2875rem] md:h-[5.5625rem] items-center md:items-start pl-2.5  pt-4 pb-[1.4375rem] md:p-4 bg-[#AFBCCF]">
                  <span className="text-[0.7rem] md:text-base not-italic w-fit font-medium leading-[1.05rem] md:leading-[1.4rem] text-[#333]">
                    Market News
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* 02 */}
      <div className="mt-[4.63rem] md:mt-[11.06rem] bg-[#F9F9F9]">
        <div className="md:mx-[6.25rem] mx-[0.62rem] pt-[3.12rem] md:pt-[3.94rem] pb-[4.63rem] md:pb-[3.94rem]">
          <h3
            data-aos-once
            data-aos-duration="500"
            data-aos="fade-up"
            className="text-[rgba(0,0,0,0.60)]  text-base md:text-2xl not-italic font-medium leading-[1.5rem ] md:leading-[2.25rem] md:tracking-[0.015rem] tracking-[0.01rem]"
          >
            02. Grid system
          </h3>
          <div className=" w-[22.1875rem] md:w-[87.375rem] h-[0.0625rem] bg-[rgba(224,56,56,0.33)] mt-6"></div>

          <div className="mt-[1.69rem] md:mt-[2.31rem] grid grid-cols-1 md:grid-cols-[auto_auto] md:gap-x-[9.5rem] gap-y-[2.5rem]">
            <div className="relative md:order-1 order-2 ml-[2.32rem] md:ml-0">
              <Image
                src="/images/gridsmall.png"
                width={2286.986}
                height={1621.272}
                alt="Banner Logo"
                className={`md:w-[19rem] w-[11.375rem]   md:h-[39.1875rem] rounded-lg md:rounded-2xl bg-cover flex-shrink-0 bg-no-repeat`}
                data-aos="flip-left"
              />
              <Image
                src="/images/boxstyle1.jpg"
                width={2286.986}
                height={1621.272}
                alt="Banner Logo"
                className={`md:w-[13.8125rem] w-[6.25rem]  bg-cover flex-shrink-0 bg-no-repeat absolute top-[6.56rem] right-[3.81rem] md:-right-[4.31rem]`}
                data-aos="fade-left"
                data-aos-delay="100"
              />
            </div>
            <div className="relative md:order-2 order-1">
              <Image
                src="/images/gridbig.png"
                width={2286.986}
                height={1621.272}
                alt="Banner Logo"
                className={`md:w-[52.125rem] w-[20.8125rem] md:h-[39.1875rem] rounded-lg md:rounded-2xl bg-contain flex-shrink-0 bg-no-repeat`}
                data-aos="flip-right"
              />
              <Image
                src="/images/boxstyle2.jpg"
                width={2286.986}
                height={1621.272}
                alt="Banner Logo"
                className={`md:w-[13.8125rem] w-[6.25rem] bg-cover flex-shrink-0 bg-no-repeat absolute top-[3.38rem] md:top-[8.5rem] left-[15.94rem] md:left-[45.19rem]`}
                data-aos="fade-left"
                data-aos-delay="100"
              />
            </div>
          </div>
        </div>
      </div>
      {/* 03 */}
      <div className="mx-[0.62rem] md:mx-[6.25rem] mt-[4.62rem] md:mt-[4.88rem]">
        {/* 3 + 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-[1.88rem] gap-y-[3.75rem]">
          <div data-aos-once data-aos-duration="500" data-aos="fade-right">
            <h3 className="text-[rgba(0,0,0,0.60)] text-base md:text-2xl not-italic font-medium leading-[1.5rem] md:leading-[2.25rem] tracking-[0.01rem] md:tracking-[0.015rem]">
              03. Màu sắc
            </h3>
            <div className=" w-[22.1875rem ] md:w-[42.8125rem] h-[0.0625rem] bg-[rgba(224,56,56,0.33)] mt-6"></div>

            <div className="flex flex-col">
              <div className="flex flex-col space-y-[0.75rem] md:space-y-[1rem] md:mt-8 mt-6">
                <h4 className="text-xs md:text-base not-italic font-bold leading-[1.625rem] text-[#C2CEDB]">
                  BRAND
                </h4>
                <div className="flex">
                  <BoxColor color={"#D33"} width={"6rem"} height={"2.625rem"} />
                  <BoxColor color={"#000"} width={"6rem"} height={"2.625rem"} />
                  <BoxColor color={"#333"} width={"6rem"} height={"2.625rem"} />
                  <BoxColor
                    color={"#676767"}
                    width={"6rem"}
                    height={"2.625rem"}
                  />
                  <BoxColor
                    color={"#C2C2C2"}
                    width={"6rem"}
                    height={"2.625rem"}
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-[0.75rem] md:space-y-[1rem] md:mt-10 mt-6">
                <h4 className="text-xs md:text-base not-italic font-bold leading-[1.625rem] text-[#C2CEDB]">
                  TEXT
                </h4>
                <div className="flex">
                  <BoxColor
                    color={"#000"}
                    width={"6.25rem"}
                    height={"2.625rem"}
                  />
                  <BoxColor
                    color={"#333"}
                    width={"6.25rem"}
                    height={"2.625rem"}
                  />
                  <BoxColor
                    color={"#676767"}
                    width={"6.25rem"}
                    height={"2.625rem"}
                  />
                  <BoxColorBorder
                    color={"#fff"}
                    width={"6.25rem"}
                    height={"2.625rem"}
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-[0.75rem] md:space-y-[1rem] mt-6 md:mt-8">
                <h4 className="text-xs md:text-base not-italic font-bold leading-[1.625rem] text-[#C2CEDB]">
                  BACKGROUND
                </h4>
                <div className="flex border-l border-[#CECECE]">
                  <BoxColorBorder
                    color={"#FEFEFE"}
                    width={"6.25rem"}
                    height={"2.625rem"}
                  />
                  <BoxColorBorder
                    color={"#FBFBFB"}
                    width={"6.25rem"}
                    height={"2.625rem"}
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos-once
            data-aos-duration="500"
            data-aos="fade-right"
            data-aos-delay="250"
          >
            <h3 className="text-[rgba(0,0,0,0.60)] text-base md:text-2xl not-italic font-medium leading-[1.5rem] md:leading-[2.25rem] tracking-[0.01rem] md:tracking-[0.015rem]">
              04. Typography
            </h3>
            <div className=" w-[22.1875rem ] md:w-[42.8125rem] h-[0.0625rem] bg-[rgba(224,56,56,0.33)] mt-6"></div>

            <div className="grid grid-cols-1 gap-y-[2.81rem] md:mt-10 mt-6">
              <div className="felx flex-col space-y-[1rem]">
                <span className="text-[3.75rem] md:text-[5.625rem] not-italic font-semibold leading-[4.5rem ] md:leading-[6.75rem] text-[#d33] tracking-[0.0375rem] md:tracking-[0.05625rem]">
                  Inter
                </span>
                <p className="text-[1.25rem] md:text-[2.5rem] not-italic font-bold leading-[1.5rem ] md:leading-[3rem] tracking-[0.0125rem] md:tracking-[0.025rem]">
                  Bold/ <span className="font-semibold">SemiBold</span> /{" "}
                  <span className="font-medium">Medium</span>/{" "}
                  <span className="font-normal">Regular</span>
                </p>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-[2.06rem] gap-y-[1.63rem]">
                <div className="grid grid-cols-[auto_auto_auto] gap-x-[2.06rem] ">
                  <div className="flex flex-col justify-end">
                    <span className="text-[#333] text-[2.625rem] not-italic font-light leading-[4.0625rem] tracking-[0.0525rem]">
                      Aa
                    </span>
                    <span className="w-[5rem] h-[0.0625rem] bg-[#333]"></span>
                    <span className="mt-[0.56rem] font-no-liga-clig text-sm not-italic font-medium leading-[normal] capitalize font-lexend_Deca">
                      42px
                    </span>
                  </div>

                  <div className="flex flex-col justify-end">
                    <span className="text-[#333] text-[2.125rem] not-italic font-light leading-[3.375rem] ">
                      Aa
                    </span>
                    <span className="w-[5rem] h-[0.0625rem] bg-[#333]"></span>
                    <span className="mt-[0.56rem] font-no-liga-clig text-sm not-italic font-medium leading-[normal] capitalize font-lexend_Deca">
                      34px
                    </span>
                  </div>

                  <div className="flex flex-col justify-end">
                    <span className="text-[#333] text-[1.75rem] not-italic font-light leading-[2.625rem] ">
                      Aa
                    </span>
                    <span className="w-[5rem] h-[0.0625rem] bg-[#333]"></span>
                    <span className="mt-[0.56rem] font-no-liga-clig text-sm not-italic font-medium leading-[normal] capitalize font-lexend_Deca">
                      28px
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-[auto_auto_auto] gap-x-[2.06rem]">
                  <div className="flex flex-col justify-end">
                    <span className="text-[#333] text-[1.25rem] not-italic font-light leading-[2.625rem] ">
                      Aa
                    </span>
                    <span className="w-[5rem] h-[0.0625rem] bg-[#333]"></span>
                    <span className="mt-[0.56rem] font-no-liga-clig text-sm not-italic font-medium leading-[normal] capitalize font-lexend_Deca">
                      20px
                    </span>
                  </div>

                  <div className="flex flex-col justify-end">
                    <span className="text-[#333] text-[1.25rem] not-italic font-light leading-[2.625rem]">
                      Aa
                    </span>
                    <span className="w-[5rem] h-[0.0625rem] bg-[#333]"></span>
                    <span className="mt-[0.56rem] font-no-liga-clig text-sm not-italic font-medium leading-[normal] capitalize font-lexend_Deca">
                      18px
                    </span>
                  </div>

                  <div className="flex flex-col justify-end">
                    <span className="text-[#333] text-[1.25rem] not-italic font-normal leading-[2rem]">
                      Aa
                    </span>
                    <span className="w-[5rem] h-[0.0625rem] bg-[#333]"></span>
                    <span className="mt-[0.56rem] font-no-liga-clig text-sm not-italic font-medium leading-[normal] capitalize font-lexend_Deca">
                      16px
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 5 */}
        <div className="mt-20 pb-[8.75rem] md:pb-[16.56rem]">
          <h3 className="text-[rgba(0,0,0,0.60)] text-base md:text-2xl not-italic font-medium leading-[1.5rem] md:leading-[2.25rem] tracking-[0.01rem] md:tracking-[0.015rem]">
            05. Icon
          </h3>
          <div className="w-[22.1875rem ] md:w-[87.5rem] h-[0.0625rem] bg-[rgba(224,56,56,0.33)] mt-6"></div>

          <div className="mt-8 md:mt-[1.62rem] grid grid-cols-1 md:grid-rows-[3rem_3rem] gap-y-[2.5rem]">
            <div className="grid grid-cols-5 md:grid-cols-17 gap-x-[1.5rem] md:gap-x-[2.25rem] gap-y-[2.5rem]">
              <div className="md:flex hidden items-center max-w-12 max-h-12 justify-center ">
                <IconGuide
                  link={"/images/icon1.jpg"}
                  width={"3rem"}
                  height={"3rem"}
                />
              </div>
              <div className="md:flex hidden items-center max-w-12 max-h-12 justify-center">
                <IconGuide
                  link={"/images/icon2.jpg"}
                  width={"3rem"}
                  height={"3rem"}
                />
              </div>
              <div className="flex items-center max-w-12 max-h-12 justify-center">
                <IconGuide
                  link={"/images/icon3.jpg"}
                  width={"3rem"}
                  height={"3rem"}
                />
              </div>
              <div className="flex items-center max-w-12 max-h-12 justify-center">
                <IconGuide
                  link={"/images/icon4.jpg"}
                  width={"3rem"}
                  height={"3rem"}
                />
              </div>
              <div className="flex items-center max-w-12 max-h-12 justify-center">
                <IconGuide
                  link={"/images/icon5.jpg"}
                  width={"3rem"}
                  height={"3rem"}
                />
              </div>
              <div className="flex items-center max-w-12 max-h-12 justify-center ">
                <IconGuide
                  link={"/images/icon6.jpg"}
                  width={"3rem"}
                  height={"3rem"}
                />
              </div>
              <div className="flex items-center max-w-12 max-h-12 justify-center">
                <IconGuide
                  link={"/images/icon7.jpg"}
                  width={"3rem"}
                  height={"3rem"}
                />
              </div>
              <div className="flex items-center max-w-12 max-h-12 justify-center">
                <IconGuide
                  link={"/images/icon8.jpg"}
                  width={"3rem"}
                  height={"3rem"}
                />
              </div>
              <div className="flex items-center max-w-12 max-h-12 justify-center">
                <IconGuide
                  link={"/images/icon9.jpg"}
                  width={"3rem"}
                  height={"3rem"}
                />
              </div>
              <div className="flex items-center max-w-12 max-h-12 justify-center">
                <IconGuide
                  link={"/images/icon10.jpg"}
                  width={"3rem"}
                  height={"3rem"}
                />
              </div>
              <div className="flex items-center max-w-12 max-h-12 justify-center">
                <IconGuide
                  link={"/images/icon11.jpg"}
                  width={"3rem"}
                  height={"3rem"}
                />
              </div>
              <div className="flex items-center max-w-12 max-h-12 justify-center">
                <IconGuide
                  link={"/images/icon12.jpg"}
                  width={"3rem"}
                  height={"3rem"}
                />
              </div>
              <div className="flex items-center max-w-12 max-h-12 justify-center">
                <IconGuide
                  link={"/images/icon13.jpg"}
                  width={"3rem"}
                  height={"3rem"}
                />
              </div>
              <div className="flex items-center max-w-12 max-h-12 justify-center">
                <IconGuide
                  link={"/images/icon14.jpg"}
                  width={"3rem"}
                  height={"3rem"}
                />
              </div>
              <div className="flex items-center max-w-12 max-h-12 justify-center">
                <IconGuide
                  link={"/images/icon15.jpg"}
                  width={"3rem"}
                  height={"3rem"}
                />
              </div>
              <div className="flex items-center max-w-12 max-h-12 justify-center">
                <IconGuide
                  link={"/images/icon3.jpg"}
                  width={"3rem"}
                  height={"3rem"}
                />
              </div>
              <div className="flex items-center max-w-12 max-h-12 justify-center">
                <IconGuide
                  link={"/images/icon16.jpg"}
                  width={"3rem"}
                  height={"3rem"}
                />
              </div>
            </div>
            <div className="grid grid-cols-5 md:grid-cols-17 gap-x-[1.5rem] md:gap-x-[2.25rem] gap-y-[2.5rem]">
              <div className="hidden md:flex items-center max-w-12 max-h-12 justify-center ">
                <IconGuide
                  link={"/images/iconn1.jpg"}
                  width={"3rem"}
                  height={"3rem"}
                />
              </div>
              <div className="flex items-center max-w-12 max-h-12 justify-center">
                <IconGuide
                  link={"/images/iconn2.jpg"}
                  width={"3rem"}
                  height={"3rem"}
                />
              </div>
              <div className="flex items-center max-w-12 max-h-12 justify-center">
                <IconGuide
                  link={"/images/iconn3.jpg"}
                  width={"3rem"}
                  height={"3rem"}
                />
              </div>
              <div className="flex items-center max-w-12 max-h-12 justify-center">
                <IconGuide
                  link={"/images/iconn4.jpg"}
                  width={"4.28675rem"}
                  height={"2.5625rem"}
                />
              </div>
              <div className="flex items-center max-w-12 max-h-12 justify-center">
                <IconGuide
                  link={"/images/iconn2.jpg"}
                  width={"3rem"}
                  height={"3rem"}
                />
              </div>
              <div className="flex items-center max-w-12 max-h-12 justify-center">
                <IconGuide
                  link={"/images/iconn5.jpg"}
                  width={"3rem"}
                  height={"3rem"}
                />
              </div>
              <div className="flex items-center max-w-12 max-h-12 justify-center ">
                <IconGuide
                  link={"/images/iconn6.jpg"}
                  width={"3rem"}
                  height={"3rem"}
                />
              </div>
              <div className="flex items-center max-w-12 max-h-12 justify-center">
                <IconGuide
                  link={"/images/iconn7.jpg"}
                  width={"3rem"}
                  height={"3rem"}
                />
              </div>
              <div className="flex items-center max-w-12 max-h-12 justify-center">
                <IconGuide
                  link={"/images/iconn8.jpg"}
                  width={"3rem"}
                  height={"3rem"}
                />
              </div>
              <div className="flex items-center max-w-12 max-h-12 justify-center">
                <IconGuide
                  link={"/images/iconn9.jpg"}
                  width={"3rem"}
                  height={"3rem"}
                />
              </div>
              <div className="flex items-center max-w-12 max-h-12 justify-center">
                <IconGuide
                  link={"/images/iconn10.jpg"}
                  width={"3rem"}
                  height={"3rem"}
                />
              </div>
              <div className="flex items-center max-w-12 max-h-12 justify-center">
                <IconGuide
                  link={"/images/icon11.jpg"}
                  width={"3rem"}
                  height={"3rem"}
                />
              </div>
              <div className="flex items-center max-w-12 max-h-12 justify-center">
                <IconGuide
                  link={"/images/icon4.jpg"}
                  width={"3rem"}
                  height={"3rem"}
                />
              </div>
              <div className="flex items-center max-w-12 max-h-12 justify-center">
                <IconGuide
                  link={"/images/iconn11.jpg"}
                  width={"3rem"}
                  height={"3rem"}
                />
              </div>
              <div className="flex items-center max-w-12 max-h-12 justify-center">
                <IconGuide
                  link={"/images/icon4.jpg"}
                  width={"3rem"}
                  height={"3rem"}
                />
              </div>
              <div className="flex items-center max-w-12 max-h-12 justify-center">
                <IconGuide
                  link={"/images/suppliers.jpg"}
                  width={"3rem"}
                  height={"3rem"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideProject;
