import React, { useCallback, useRef, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Image from "next/image";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useInView } from "react-intersection-observer";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
const CircleResearch = ({ setIndexLabel }) => {
  const [percents, setPercents] = useState([0, 0, 0]);
  const [hasRun, setHasRun] = useState(false); // Để kiểm soát chỉ chạy 1 lần
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  const data = {
    labels: [[`${percents[2]}%`], [`${percents[1]}%`], [`${percents[0]}%`]],
    datasets: [
      {
        label: "3C Research",
        data: [20, 30, 50],
        backgroundColor: ["#c2c2c2", "#676767", "#dd3333"],
        hoverOffset: 3,
        borderWidth: 1,
        hoverBorderWidth: 20,
        hoverBorderColor: "white",
      },
    ],
  };
  const handleHover = useCallback(( chartElement) => {
    if (chartElement.length) {
      const { index } = chartElement[0];
      setIndexLabel(+index);
    }
  }, []);

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },

      datalabels: {
        color: "white",
        align: "center",
        font: {
          weight: "bold",
          size: "36",
          lineHeight: 1.5,
        },
        formatter: function (value, context) {
          return context.chart.data.labels[context.dataIndex];
        },
      },
    },

    onHover: handleHover,
  };
  if (inView && !hasRun) {
    setHasRun(true);

    const targetValues = [50, 30, 20];
    const duration = 2500; // Tổng thời gian chạy là 4 giây
    const steps = 50; // Số bước nhảy là 50
    const intervalTime = duration / steps; // Thời gian giữa mỗi bước nhảy

    let step = 0;

    const interval = setInterval(() => {
      step++;
      setPercents([
        Math.min(targetValues[0], step), // Tăng lên đến 50
        Math.min(targetValues[1], Math.floor((targetValues[1] / targetValues[0]) * step)), // Tăng lên đến 30
        Math.min(targetValues[2], Math.floor((targetValues[2] / targetValues[0]) * step))  // Tăng lên đến 20
      ]);

      if (step >= steps) {
        clearInterval(interval);
      }
    }, intervalTime);
  }
  return (
    <div
      style={{
        position: "relative",
      }}
      className="md:w-[30.75rem] w-[22.0625rem] h-[22.0625rem] md:h-[30.75rem] pointer-events-none md:pointer-events-auto"
      data-aos-once
      data-aos="fade-up"
      ref={ref}
    >
      <p className="hidden md:block text-sm not-italic font-semibold leading-[1.3125rem] tracking-[0.00875rem] md:w-[5.4rem] absolute left-[1.38rem]  text-white top-[16.38rem]">
        Nghiên cứu khách hàng
      </p>
      <Doughnut data={data} options={options} />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
        className="flex items-center flex-col space-y-[1.5rem] md:space-y-[1.07rem]"
      >
        <Image
          src="/images/group1.jpg"
          width={2286.986}
          height={1621.272}
          alt="Banner Logo"
          className={`md:w-[4.95075rem] w-[2.93731rem] h-[2.74181rem] md:h-[4.62081rem] bg-cover flex-shrink-0`}
        />
        <p className="text-[#FF2121] text-center text-[1.5rem] md:text-[2rem] not-italic font-semibold leading-[1.95rem] md:leading-[2.8rem] w-[7.3125rem] md:w-fit">
          3C Research
        </p>
      </div>
    </div>
  );
};

export default CircleResearch;
