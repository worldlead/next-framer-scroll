"use client";

import React, { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import Footer from "./Footer";
import FramerEmbed from "./Framerembed";
import { ArrowRight } from "lucide-react";

interface ExpanderProps {
  className?: string;
}

let expander = function Expander({className}: ExpanderProps) {
  const [isCircleMaskOn, setIsCircleMaskOn] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [emailEnter, setEmailEnter] = useState(false);
  const [val, setVal] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const bannerText = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    //Function to handle banner and footer animation after a delay

    const handleAnimationDelay = () => {
      if (bannerText.current) {
        bannerText.current.classList.add("z-50");
        bannerText.current.classList.remove("hidden");
      }

      if (footerRef.current) {
        footerRef.current.classList.remove("hidden");
      }
    }

    const timer = setTimeout(handleAnimationDelay, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const lenis = new Lenis();

    const handleScroll = (e: any) => {

      const {animatedScroll, direction} = e;
      const currentURL = window.location.pathname;

      // Handle the "circle" animation based on e.animatedScroll
      if (direction === -1 && currentURL === "/") {

        lenis.scrollTo(0, {immediate: true});
        setIsCircleMaskOn(false);
        document.body.classList.remove("circle-mask-is-on");
      } else if (direction === 1 && currentURL === "/") {

        document.body.classList.add("circle-mask-is-on");
        setIsCircleMaskOn(true);
      }

      // Interpolate between the current and next variant
    }

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    lenis.on("scroll", handleScroll);
    requestAnimationFrame(raf);

    return () => {
      lenis.off("scroll", handleScroll);
    };
  }, []);

  const handleToggleCircleMask = () => {
    setIsCircleMaskOn((prev) => !prev); // Toggle the class by updating the state
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const enteredValue = e.target.value;
    setVal(enteredValue);
    setEmailEnter(enteredValue.trim().includes("@"));
    setIsSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailEnter(val.trim().includes("@"));
    setVal("");
    setIsFocused(false);
    setIsSubmitted(true);
  };

  return (
      <>
        <div
            className={`fixed top-0 opacity-0.5 left-1/2 -translate-x-1/2 justify-center ${isCircleMaskOn ? "z-[99]" : ""}`}
        >
          {isCircleMaskOn && (
              <FramerEmbed></FramerEmbed>
          )}
        </div>
        <div
            ref={bannerText}
            className={`${className}flex items-center transition z-50 opacity-0 animate-fade-in`}
        >
          <h1
              className={`text-spectrum-space animate-fade-in leading-trim-cap font-pp-supply-sans text-[30px] md:text-[54px] font-light leading-24 tracking-1.6 mb-[100px] sm:mb-0`}
          >
            ideation, evolved.
          </h1>
          <form
              onSubmit={handleSubmit}
              className="group relative mt-0 md:w-[50%] lg:w-[40%] xl:w-[30%] flex justify-center"
          >

            <input
                ref={inputRef}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={handleChange}
                value={isFocused ? val : ""}
                type="email"
                placeholder={""}
                className={` placeholder-black text-xl  border outline-none rounded-2xl flex w-full px-[19px] py-[8px] sm:p-[19px] justify-center items-center cursor-pointer shadow-lg whitespace-nowrap 
              ${isFocused ? "text-left" : "text-center"}
              `}
            />

            <label
                onClick={() => inputRef?.current?.focus()}
                className={`absolute top-[13px] sm:top-[24px] min-w-[130px] text-black  transition-all ease-out duration-500 cursor-pointer
              ${isFocused ? `sm:!left-[21px]  ${val ? 'opacity-0' : 'opacity-50'}  ` : ' opacity-100'}  `}
                style={{left: isFocused ? '18px' : 'calc(50% - 65px)'}}
            >
              {isFocused ? 'Enter your email' : isSubmitted ? "You are on the waitlist" : "Join the waitlist"}
            </label>

            <button type="submit" id="submit" disabled={!emailEnter}>
              {isFocused ? <ArrowRight
                  size={20}
                  className="text-black absolute opacity-50 right-5 -translate-y-1/2"
              /> : ''}
            </button>

          </form>
        </div>
        <div
            ref={circleRef}
            className={`circle-mask z-50 ${isCircleMaskOn ? "on" : ""}`}
        >
          <div className="opacity-wrapper">
            <div className="h-screen absolute top-0 left-0 w-full sm:px-[7.5rem] py-[12rem]">
            <div className="absolute left-0 h-[10000px] w-full card-stack-wrapper "></div>
              <div className="hidden sm:w-unset absolute sm:left-1/2 sm:top-1/2 flex-col sm:w-1/2 px-8 sm:px-[56px] bottom-[100px] items-center">
                <h1 className="text-spectrum-space w-[50%] text-center leading-trim-cap font-pp-supply-sans text-[30px] sm:text-[48px] font-light leading-24 tracking-1.6">
                  ideation, evolved.
                </h1>
                <a
                    className="rounded-lg bg-[rgba(255,255,255,1)] flex w-full sm:w-[470px] p-[19px] pl-[100px] pr-[100px] justify-center items-center h-[52px] m-auto hover:opacity-[0.6] hover:bg-[rgba(255,255,255,0.6)] transition duration-500 cursor-pointer shadow-lg"
                    href="#"
                >
                  Join the waitlist
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
            ref={footerRef}
            className={`footer-wrapper hidden w-full absolute z-50 bottom-0 animate-fade-in`}
        >
          <Footer
              className={`sm:flex z-60 ${isCircleMaskOn ? "mask-is-on" : ""}`}
              onToggleCircleMask={handleToggleCircleMask}
          />
        </div>
      </>
  );
};
export default expander