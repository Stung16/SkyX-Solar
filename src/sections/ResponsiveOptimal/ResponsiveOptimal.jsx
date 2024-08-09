import Image from "next/image";
import React from "react";

const ResponsiveOptimal = () => {
  return (
    <section className="bg-white pb-[10rem]">
      <div className="mx-[0.62rem] md:mx-[6.25rem] mt-[4.62rem] md:mt-[9.37rem]">
        <h2 className="text-[#333] text-[2rem] md:text-[2.5rem] not-italic font-semibold leading-[3rem] md:leading-[3.75rem ] tracking-[0.025rem]">
          Tối Ưu Responsive
        </h2>
        <div className="mt-[2.5rem]">
          <div className="grid md:grid-cols-4 grid-cols-2 grid-rows-2 md:gap-x-[3.56rem] gap-x-[1.25rem] md:gap-y-[3.26rem] gap-y-[1.25rem]">
            <div>
              <Image
                src="/images/res2.jpg"
                width={2286.986}
                height={1621.272}
                alt="Banner Logo"
                className={`w-[10.4375rem] md:w-[19.1875rem] bg-cover flex-shrink-0 bg-no-repeat rounded-[]`}
                data-aos-duration="400"
                data-aos="flip-right"
                
              />
            </div>
            <div>
              <Image
                src="/images/res3.jpg"
                width={2286.986}
                height={1621.272}
                alt="Banner Logo"
                className={`w-[10.4375rem] md:w-[19.1875rem] bg-cover flex-shrink-0 bg-no-repeat rounded-[]`}
                data-aos-duration="400"
                data-aos="flip-right"
              />
            </div>
            <div>
              <Image
                src="/images/res4.jpg"
                width={2286.986}
                height={1621.272}
                alt="Banner Logo"
                className={`w-[10.4375rem] md:w-[19.1875rem] bg-cover flex-shrink-0 bg-no-repeat rounded-[]`}
                data-aos-duration="400"
                data-aos="flip-right"
              />
            </div>
            <div>
              <Image
                src="/images/res5.jpg"
                width={2286.986}
                height={1621.272}
                alt="Banner Logo"
                className={`w-[10.4375rem] md:w-[19.1875rem] bg-cover flex-shrink-0 bg-no-repeat rounded-[]`}
                data-aos-duration="400"
                data-aos="flip-right"
              />
            </div>
            <div>
              <Image
                src="/images/res6.jpg"
                width={2286.986}
                height={1621.272}
                alt="Banner Logo"
                className={`w-[10.4375rem] md:w-[19.1875rem] bg-cover flex-shrink-0 bg-no-repeat rounded-[]`}
                data-aos-duration="400"
                data-aos="flip-right"
              />
            </div>
            <div>
              <Image
                src="/images/res7.jpg"
                width={2286.986}
                height={1621.272}
                alt="Banner Logo"
                className={`w-[10.4375rem] md:w-[19.1875rem] bg-cover flex-shrink-0 bg-no-repeat rounded-[]`}
                data-aos-duration="400"
                data-aos="flip-right"
              />
            </div>
            <div>
              <Image
                src="/images/res8.jpg"
                width={2286.986}
                height={1621.272}
                alt="Banner Logo"
                className={`w-[10.4375rem] md:w-[19.1875rem] bg-cover flex-shrink-0 bg-no-repeat rounded-[]`}
                data-aos-duration="400"
                data-aos="flip-right"
              />
            </div>
            <div>
              <Image
                src="/images/res9.jpg"
                width={2286.986}
                height={1621.272}
                alt="Banner Logo"
                className={`w-[10.4375rem] md:w-[19.1875rem] bg-cover flex-shrink-0 bg-no-repeat rounded-[]`}
                data-aos-duration="400"
                data-aos="flip-right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponsiveOptimal;
