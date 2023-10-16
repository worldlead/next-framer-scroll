"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore from "swiper";

interface FooterProps {
  className?: string;
  onToggleCircleMask: () => void;
  currentVariant: string;
}

export default function Footer({
  className,
  onToggleCircleMask,
  currentVariant,
}: FooterProps) {
  const [isCircleMaskOn, setIsCircleMaskOn] = useState(false);
  const swiperRef = useRef<SwiperCore>();

  useEffect(() => {
    // Slide to a specific index based on the currentVariant
    if (swiperRef.current) {
      let slideIndex = 0;

      if (currentVariant === "Variant 1" || currentVariant === "Variant 2") {
        slideIndex = 0;
      } else if (
        currentVariant === "Variant 6" ||
        currentVariant === "Variant 7" ||
        currentVariant === "Variant 8" ||
        currentVariant === "Variant 9" ||
        currentVariant === "Variant 10" ||
        currentVariant === "Variant 11" ||
        currentVariant === "Variant 12" ||
        currentVariant === "Variant 13" ||
        currentVariant === "Variant 14"
      ) {
        slideIndex = 1;
      } else if (
        currentVariant === "Variant 15" ||
        currentVariant === "Variant 16" ||
        currentVariant === "Variant 17"
      ) {
        slideIndex = 2;
      } else if (
        currentVariant === "Variant 18" ||
        currentVariant === "Variant 19" ||
        currentVariant === "Variant 20" ||
        currentVariant === "Variant 21" ||
        currentVariant === "Variant 22" ||
        currentVariant === "Variant 23" ||
        currentVariant === "Variant 24" ||
        currentVariant === "Variant 25"
      ) {
        slideIndex = 3;
      }

      // Slide to the determined index
      swiperRef.current.slideTo(slideIndex);
    }
  }, [currentVariant]);

  const handleScrollWrapperClick = () => {
    setIsCircleMaskOn(!isCircleMaskOn);
    onToggleCircleMask();
  };

  const circleMaskClass = isCircleMaskOn ? "on" : "";

  let swiperSlides = [
    "ideation agent",
    "creative decision-making",
    "dynamic synthesis",
    "dependency mapping",
  ];

  return (
    <>
      <div
        className={`${className} text-[#101942] justify-between items-center flex absolute bottom-0 left-0 w-full z-50 px-14 pb-[30px]`}
      >
        <div className="w-2/5 flex-col gap-[10px] min-w-[300px]">
          <h5 className="text-[20px] font-[300]">highlighted features</h5>
          <div>
            <Swiper
              spaceBetween={0}
              slidesPerView={3} // Default slides per view
              draggable={false}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              breakpoints={{
                // Define breakpoints for different screen sizes
                1024: {
                  slidesPerView: 2, // 4 slides per view for screens width >= 1024px
                },
              }}
            >
              {swiperSlides.map((entries) => (
                <SwiperSlide
                  className="text-[14px] font-[300] text-[#727272]"
                  key={entries}
                >
                  {entries}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div
          className={`absolute scroll-wrapper w-[40px] h-[40px] bg-[rgba(0,0,0,0.1)] rounded-[10px] flex items-center justify-center overflow-hidden cursor-pointer relative transition duration-500 ${circleMaskClass}`}
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
              fill-rule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
        <div className="w-2/5 flex-col gap-[10px] text-right">
          <h5 className="text-[20px] font-[375]">towards a neural ecosystem</h5>
          <p className="text-[16px] font-[300] max-w-[300px] text-right ml-auto">
            creatives, researchers, & innovators use{" "}
            <span className="font-[500]">fylo</span> to augment cognitive powers
          </p>
        </div>
      </div>
    </>
  );
}
