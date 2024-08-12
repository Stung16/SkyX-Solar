import useWindowSize from "@/hooks/useScreenSize";
import Image from "next/image";

const AboutUs = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  return (
    <section className="min-h-[61.875rem] relative">
      {isMobile ? (
        <Image
          src={`/images/groupmb.png`}
          width={2286.986}
          height={1621.272}
          alt="Banner Logo"
          className={`md:w-[142.93663rem] md:h-[101.3295rem]  absolute top-0 z-[2]   w-[49.86988rem]  bg-cover flex-shrink-0`}
        />
      ) : (
        <Image
          src="/images/group.png"
          width={2286.986}
          height={1621.272}
          alt="Banner Logo"
          className={`md:w-[142.93663rem] md:h-[101.3295rem]  absolute top-[3rem] z-[2]  w-[49.86988rem]  md:rotate-[8.559deg] rotate-[3.486deg] bg-cover flex-shrink-0`}
        />
      )}
      <div
        className="flex flex-col md:flex-row relative "
        data-aos-once
        data-aos="fade-up-right"
      >
        <div className="md:mt-[17.06rem] mt-[7.81rem] max-w-[22.0625rem] md:max-w-[47.8125rem] md:ml-[7.31rem] ml-[0.75rem] ">
          <p className="text-[1.875rem] md:text-[2.5rem] not-italic font-semibold leading-[2.8125rem] tracking-[0.01875rem] text-[#333] relative z-10">
            <span className="text-[#D33]">SkyX Solar</span> là nhà cung cấp giải
            pháp năng lượng phân tán và năng lượng mặt trời áp mái đẳng cấp thế
            giới cho các khách hàng thương mại và công nghiệp (C&I) tại Việt
            Nam.
          </p>
        </div>
        {/* <div className="relative"> */}
        <div className=" translate-x-[2.5rem] -translate-y-[1.9rem]">
          <Image
            src="/images/yu_1.png"
            width={2286.986}
            height={1621.272}
            alt="Banner Logo"
            className={`md:w-[46.1875rem] md:h-[56.25rem] bg-cover flex-shrink-0 relative`}
          />
          <Image
            src="/images/pngfind3.png"
            width={2286.986}
            height={1621.272}
            alt="Banner Logo"
            className={`md:w-[26.6875rem] w-[16.3125rem] top-[5.35rem] -left-[5.6rem] md:top-[18.75rem] md:-left-[8rem] bg-cover flex-shrink-0 absolute`}
            data-aos-once
            data-aos="fade-right"
            data-aos-delay="300"
          />
          <Image
            src="/images/pngfind3.png"
            width={2286.986}
            height={1621.272}
            alt="Banner Logo"
            className={`w-[26.6875rem] -top-[3rem] md:top-[6.56rem] -right-[11.3125rem] md:right-0 bg-cover flex-shrink-0 absolute`}
            data-aos-once
            data-aos="fade-left"
            data-aos-delay="300"
          />
        </div>
        <div className="w-full h-[10.625rem] bg-[linear-gradient(180deg,rgba(255,255,255,0)0%,rgba(255,255,255,0.58)22.16%,rgba(255,255,255,0.92)51.23%,#FFF_100%)] absolute z-[1] bottom-0"></div>
      </div>

      <div className=" md:ml-[7.5rem] mx-[0.62rem] z-20 md:mt-[12.81rem] mt-[6rem]">
        <div className="grid md:grid-cols-[auto_1fr] md:grid-rows-[auto_auto] md:gap-x-[6.88rem] grid-cols-1">
          <Image
            src="/images/infor.png"
            width={2286.986}
            height={1621.272}
            alt="Banner Logo"
            className={`md:w-[36.1875rem] md:h-[36.1875rem] bg-cover flex-shrink-0 row-span-2 col-span-1 order-2 md:order-1 md:mt-0 mt-[2rem] relative z-10`}
            data-aos-once
            data-aos="fade-right"
          />

          <h3
            data-aos-once
            data-aos="fade-left"
            className="order-1 md:w-[43.1875rem] w-[22.1875rem] text-[#333] md:text-[2.5rem] text-[1.875rem] not-italic font-bold md:leading-[3.75rem] leading-[2.8125rem ] md:tracking-[0.025rem] tracking-[0.01875rem] row-span-1 col-span-1"
          >
            Là thành viên của <span className="text-[#D33]">Vinacapital</span>{" "}
            và năng lượng tái tạo <span className="text-[#D33]">EDF</span>
          </h3>
          <div
            data-aos-once
            data-aos="fade-left"
            className="flex flex-col space-y-[1rem] row-span-1 col-span-1 order-3 md:mt-0 mt-[2.02rem]"
          >
            <div className="flex items-center md:space-x-[1.63rem] space-x-[1rem] w-[22.1875rem] h-[7.75rem] md:w-[43.1875rem] md:h-[7.8125rem] border bg-[#dd33330c] border-solid border-[#c2c2c229]">
              <span className="ml-[1.56rem]">
                <Image
                  src="/images/checkicon.jpg"
                  width={2286.986}
                  height={1621.272}
                  alt="Banner Logo"
                  className={`w-[2rem] h-[2rem] rounded-full bg-cover object-contain flex-shrink-0`}
                />
              </span>
              <p className="md:text-lg text-[0.875rem] not-italic font-medium leading-[1.3125rem] md:leading-[1.6875rem] text-[#333] md:w-[30.79456rem] w-[17.25rem]">
                Hoạt động trên đầy đủ các loại tài sản - Vốn chủ sở hữu công &
                tư nhân, thu nhập cố định, vốn mạo hiểm, phát triển bất động sản
                và năng lượng sạch
              </p>
            </div>
            <div className="flex items-center md:space-x-[1.63rem] space-x-[1rem]  md:w-[43.1875rem] w-[22.1875rem] h-[7.75rem] md:h-[7.8125rem] border border-solid border-[#c2c2c229]">
              <span className="ml-[1.56rem]">
                <Image
                  src="/images/checkicon.jpg"
                  width={2286.986}
                  height={1621.272}
                  alt="Banner Logo"
                  className={`w-[2rem] h-[2rem] rounded-full bg-cover object-contain flex-shrink-0`}
                />
              </span>
              <p className="md:text-lg text-[0.875rem] not-italic font-medium leading-[1.3125rem] md:leading-[1.6875rem] text-[#333] md:w-[35.06313rem] w-[17.1875rem]">
                Tuân thủ các tiêu chuẩn quốc tế về quản trị, đạo đức, minh bạch,
                tuân thủ và quản lý
              </p>
            </div>
            <div className="flex items-center md:space-x-[1.63rem] space-x-[1rem] md:w-[43.1875rem] md:h-[7.8125rem] w-[22.1875rem] h-[7.75rem] border bg-[#dd33330c] border-solid border-[#c2c2c229]">
              <span className="ml-[1.56rem]">
                <Image
                  src="/images/checkicon.jpg"
                  width={2286.986}
                  height={1621.272}
                  alt="Banner Logo"
                  className={`w-[2rem] h-[2rem] rounded-full bg-cover object-contain flex-shrink-0`}
                />
              </span>
              <p className="md:text-lg text-[0.875rem] not-italic font-medium leading-[1.3125rem] md:leading-[1.6875rem] text-[#333] md:w-[35.06313rem] w-[17.1875rem]">
                Sở hữu khả năng tiếp cận nội địa, mạng lưới và trải nghiệm quốc
                tế tuyệt vời
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
