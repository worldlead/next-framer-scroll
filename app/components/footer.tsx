"use client";
import { useState } from "react";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <>
      <div
        className={`${className} text-[#101942] flex justify-between absolute bottom-0 left-0 w-full z-50 px-14 pb-[30px]`}
      >
        <div className="flex-col gap-[10px]">
          <h5 className="text-[20px] font-[300]">highlighted features</h5>
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
