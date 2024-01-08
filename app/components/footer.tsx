"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore from "swiper";

interface FooterProps {
  className?: string;
  onToggleCircleMask: () => void;
}

export default ({
  className,
  onToggleCircleMask,
}: FooterProps) => {
  const [isCircleMaskOn, setIsCircleMaskOn] = useState(false);
  const swiperRef = useRef<SwiperCore>();

  const swiperSlides = [
    "ideation agent",
    "decision making",
    "dynamic synthesis",
    "dependency mapping",
  ];


  const handleScrollWrapperClick = () => {
    setIsCircleMaskOn(!isCircleMaskOn);
    document.body.classList.add("circle-mask-is-on");
    onToggleCircleMask();
  };

  const circleMaskClass = isCircleMaskOn ? "on" : "";

  return (
    <>
      <div
        className={`${className} text-[#101942] justify-center sm:justify-between items-center flex fixed bottom-0 left-0 w-full z-50 px-14 pb-[30px]`}
      >
        <div className="hidden sm:block w-2/5 flex-col gap-[10px] min-w-[300px]">
          <h5 className="text-[20px] font-[300]">highlighted features</h5>
          <div>
            <Swiper
              spaceBetween={10}
              slidesPerView={2} // Default slides per view
              draggable={false}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              breakpoints={{
                1439: {
                  slidesPerView: 3,
                },
              }}
            >
              {swiperSlides.map((entry) => (
                <SwiperSlide
                  className="text-[14px] font-[300] text-[#727272] swiper-slide-custom"
                  key={entry}
                >
                  {entry}
                </SwiperSlide>
              ))}
              <SwiperSlide className="hidden"></SwiperSlide>
              <SwiperSlide className="hidden"></SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div
          className={`scroll-wrapper w-[50px] h-[50px] bg-[rgba(0,0,0,0.1)] rounded-[10px] flex items-center justify-center overflow-hidden cursor-pointer relative transition duration-500 ${circleMaskClass}`}
          onClick={handleScrollWrapperClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-down "
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
        <div className="hidden sm:block w-2/5 flex-col gap-[10px] text-right">
          <h5 className="text-[20px] font-[375]">towards a neural ecosystem</h5>
          <p className="text-[16px] font-[300] max-w-[600px] text-right ml-auto">
            creatives, researchers, & innovators use{" "}
            <span className="font-[500]">fylo</span> to augment ideation
          </p>
        </div>
      </div>
    </>
  );
};


