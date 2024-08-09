import Image from "next/image";

const ResultProject = () => {
  return (
    <section className="w-full  flex-shrink-0 relative">
      <div className="absolute left-0 right-0 w-full bg-[#FBF0F0] top-0 h-[77.25rem] md:h-[239.8125rem]"></div>
      <div className="mx-[0.62rem] md:mx-[6.25rem] pt-[4.12rem] md:pt-[7rem] flex md:flex-row flex-col space-y-[0.69rem] justify-between relative">
        <h2 className="text-[2rem] md:text-[2.5rem] not-italic font-semibold leading-[3rem] md:leading-[3.75rem ] tracking-[0.02rem] md:tracking-[0.025rem]">
          Kết Quả Dự Án
        </h2>
        <p className="w-[22.25rem] md:w-[39rem] text-base not-italic font-normal leading-[1.7rem] text-[#333]">
          Nhằm tạo ra một sản phẩm tốt nhất cho người dùng. Là một trang web có
          tính di động và có khả năng tương tác cao, cung cấp trải nghiệm tiện
          ích cho khách hàng.
        </p>
      </div>
      <div className="mx-[0.62rem] md:ml-[8.69rem] relative md:mt-[3.75rem] mt-[2.44rem]">
        <Image
          src="/images/result1.jpg"
          width={2286.986}
          height={1621.272}
          alt="Banner Logo"
          className={`w-[82.67325rem] rounded-[0.625rem] bg-contain flex-shrink-0 bg-no-repeat border-[6px] relative z-10 border-[#d33]`}
        />
        <Image
          src="/images/result2.jpg"
          width={2286.986}
          height={1621.272}
          alt="Banner Logo"
          className={`md:w-[82.67325rem] w-[21.79381rem] h-[79.34769rem] md:h-[301rem] md:rounded-[0.625rem] bg-cover flex-shrink-0 relative bg-no-repeat z-0 md:-translate-y-2 ml-[6px]`}
        />
      </div>
    </section>
  );
};

export default ResultProject;
