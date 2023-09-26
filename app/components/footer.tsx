"use client";
import React, { useState } from "react";

interface FooterProps {
  className?: string;
  onToggleCircleMask: () => void;
}

export default function Footer({ className, onToggleCircleMask }: FooterProps) {
  const [isCircleMaskOn, setIsCircleMaskOn] = useState(false);

  const handleScrollWrapperClick = () => {
    setIsCircleMaskOn(!isCircleMaskOn);
    onToggleCircleMask();
  };

  const circleMaskClass = isCircleMaskOn ? "on" : "";

  return (
    <>
      <div
        className={`${className} text-[#101942] flex justify-between absolute bottom-0 left-0 w-full z-50 px-14 pb-[30px]`}
      >
        <div className="flex-col gap-[10px] min-w-[300px]">
          <h5 className="text-[20px] font-[300]">highlighted features</h5>
        </div>
        <div
          className={`scroll-wrapper w-[40px] h-[40px] bg-[rgba(0,0,0,0.1)] rounded-[10px] flex items-center justify-center overflow-hidden cursor-pointer relative ${circleMaskClass}`}
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
        <div className="flex-col gap-[10px] text-right">
          <h5 className="text-[20px] font-[375]">towards a neural ecosystem</h5>
          <p className="text-[16px] max-w-[300px] font-[300]">
            creatives, researchers, & innovators use{" "}
            <span className="font-[500]">fylo</span> to augment cognitive powers
          </p>
        </div>
      </div>
    </>
  );
}
