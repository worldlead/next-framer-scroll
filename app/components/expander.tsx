"use client";

import React, { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import Footer from "./footer";
import FramerEmbed from "./framerembed";
import { motion } from "framer-motion";

import fylo from "./framer/fylo";

import { FramerStyles } from "installable-framer/dist/react";
import { ArrowBigRight, ArrowRight } from "lucide-react";
import { breakpoints, variants } from "@/util/break-points";

interface CardData {
  profilePic: string;
  name: string;
  tag: string;
}

interface expander {
  className?: string;
}

const cardData: CardData[] = [
  {
    profilePic: "https://delphiai.vercel.app/Partners/Tiago_Forte.avif",
    name: "Tiago Forte",
    tag: "Productivity Expert, Founder of Forte Labs",
  },
  {
    profilePic: "https://delphiai.vercel.app/Partners/Illmind.avif",
    name: "Illmind",
    tag: "Grammy-award winning music producer",
  },
  {
    profilePic: "https://delphiai.vercel.app/Partners/Tiago_Forte.avif",
    name: "Tiago Forte",
    tag: "Productivity Expert, Founder of Forte Labs",
  },
  {
    profilePic: "https://delphiai.vercel.app/Partners/Illmind.avif",
    name: "Illmind",
    tag: "Grammy-award winning music producer",
  },
  {
    profilePic: "https://delphiai.vercel.app/Partners/Tiago_Forte.avif",
    name: "Tiago Forte",
    tag: "Productivity Expert, Founder of Forte Labs",
  },
  {
    profilePic: "https://delphiai.vercel.app/Partners/Illmind.avif",
    name: "Illmind",
    tag: "Grammy-award winning music producer",
  },
  {
    profilePic: "https://delphiai.vercel.app/Partners/Tiago_Forte.avif",
    name: "Tiago Forte",
    tag: "Productivity Expert, Founder of Forte Labs",
  },
  {
    profilePic: "https://delphiai.vercel.app/Partners/Illmind.avif",
    name: "Illmind",
    tag: "Grammy-award winning music producer",
  },
];

export default function Expander({ className }: expander): JSX.Element {
  const [isCircleMaskOn, setIsCircleMaskOn] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [variant, setVariant] = useState<
    | "Variant 1"
    | "Variant 2"
    | "Variant 3"
    | "Variant 4"
    | "Variant 5"
    | "Variant 6"
    | "Variant 7"
    | "Variant 8"
    | "Variant 9"
    | "Variant 10"
    | "Variant 11"
    | "Variant 12"
    | "Variant 13"
    | "Variant 14"
    | "Variant 15"
    | "Variant 16"
    | "Variant 17"
    | "Variant 18"
    | "Variant 19"
    | "Variant 20"
    | "Variant 21"
    | "Variant 22"
    | "Variant 23"
    | "Variant 24"
    | "Variant 25"
  >("Variant 1");

  const circleRef = useRef<HTMLDivElement>(null);

  const bannerText = useRef<any>(null);
  const footerRef = useRef<any>(null);

  const cardRefs = useRef<React.RefObject<HTMLDivElement>[]>(
    Array.from({ length: cardData.length }, () => useRef(null))
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      if (bannerText.current) {
        bannerText.current.classList.add("z-50");
        bannerText.current.classList.remove("hidden");
      }

      if (footerRef.current) {
        footerRef.current.classList.remove("hidden");
      }
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const prevScrollY = useRef(0);

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e: any) => {
      //console.log(e);
      const { animatedScroll } = e;
      const currentURL = window.location.pathname;

      // Handle the "circle" animation based on e.animatedScroll
      if (animatedScroll < prevScrollY.current && currentURL === "/") {
        // Scrolling up on the homepage, scroll to the top of the page instantly
        window.scrollTo({ top: 0, behavior: "auto" });
        setIsCircleMaskOn(false);
        document.body.classList.remove("circle-mask-is-on");
      } else if (animatedScroll !== 0 && currentURL === "/") {
        setIsCircleMaskOn(true);
        document.body.classList.add("circle-mask-is-on");
      }

      prevScrollY.current = animatedScroll;

      //console.log(e.animatedScroll);

      let currentVariantIndex = 0;
      for (let i = 0; i < breakpoints.length; i++) {
        if (animatedScroll >= breakpoints[i]) {
          currentVariantIndex = i;
        }
      }

      // Calculate the progress within the current breakpoint
      const progress =
        (animatedScroll - breakpoints[currentVariantIndex]) /
        (breakpoints[currentVariantIndex + 1] -
          breakpoints[currentVariantIndex]);

      // Interpolate between the current and next variant
      const currentVariant = variants[currentVariantIndex];
      const nextVariant =
        variants[currentVariantIndex + 1] || variants[currentVariantIndex];
      const interpolatedVariant = progress === 1 ? nextVariant : currentVariant;

      setVariant(
        interpolatedVariant as
          | "Variant 1"
          | "Variant 2"
          | "Variant 3"
          | "Variant 4"
          | "Variant 5"
          | "Variant 6"
          | "Variant 7"
          | "Variant 8"
          | "Variant 9"
          | "Variant 10"
          | "Variant 11"
          | "Variant 12"
          | "Variant 13"
          | "Variant 14"
          | "Variant 15"
          | "Variant 16"
          | "Variant 17"
          | "Variant 18"
          | "Variant 19"
          | "Variant 20"
          | "Variant 21"
          | "Variant 22"
          | "Variant 23"
          | "Variant 24"
          | "Variant 25"
      );

      const maxZIndex = 8; // Define the maximum zIndex

      // Update card animations based on e.animatedScroll
      cardData.forEach((_, index) => {
        // Calculate intermediate translateY values
        const startTranslateY = -9.48198;
        const endTranslateY = 0.559618;
        const translateYRange = endTranslateY - startTranslateY;

        // Calculate intermediate scale values
        const startScale = 1.0;
        const endScale = 0.9;
        const scaleRange = endScale - startScale;

        // Calculate intermediate values based on scroll position
        const scrollPosition = e.animatedScroll;
        let intermediateTranslateY =
          startTranslateY +
          translateYRange * (index / cardData.length) * scrollPosition;
        let intermediateScale =
          startScale + scaleRange * (index / cardData.length) * scrollPosition;

        // Loop translateY values if they exceed the range
        while (intermediateTranslateY > endTranslateY) {
          intermediateTranslateY -= translateYRange;
        }
        while (intermediateTranslateY < startTranslateY) {
          intermediateTranslateY += translateYRange;
        }

        // Loop scale values if they exceed 0.9 or fall below 0.1
        while (intermediateScale > 0.9) {
          intermediateScale -= 0.8;
        }
        while (intermediateScale < 0.1) {
          intermediateScale += 0.8;
        }

        // Calculate zIndex based on translateY
        const zIndex =
          (Math.floor(Math.abs(intermediateTranslateY) / 18) * 2) %
          (maxZIndex + 2);

        // Calculate intermediate background color based on zIndex
        const startColor = [10, 10, 10];
        const endColor = [31, 30, 30];
        const intermediateColor = startColor.map(
          (channel, i) =>
            channel + ((endColor[i] - channel) / maxZIndex) * zIndex
        );
        const backgroundColor = `rgb(${intermediateColor.join(", ")})`;

        // Find the corresponding card element and apply the updated styles

        const cardElement = cardRefs.current[index].current;
        if (cardElement) {
          cardElement.style.transform = `translateY(${intermediateTranslateY}rem) scale(${intermediateScale})`;
          cardElement.style.zIndex = zIndex.toString();
          cardElement.style.backgroundColor = backgroundColor;
        }
      });
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => {
      lenis.off("scroll", (e: any) => {
        //console.log(e);
        const { animatedScroll } = e;
        const currentURL = window.location.pathname;

        // Handle the "circle" animation based on e.animatedScroll
        if (animatedScroll < prevScrollY.current && currentURL === "/") {
          // Scrolling up on the homepage, scroll to the top of the page instantly
          window.scrollTo({ top: 0, behavior: "auto" });
          setIsCircleMaskOn(false);
          document.body.classList.remove("circle-mask-is-on");
        } else if (animatedScroll !== 0 && currentURL === "/") {
          setIsCircleMaskOn(true);
          document.body.classList.add("circle-mask-is-on");
        }

        prevScrollY.current = animatedScroll;

        //console.log(e.animatedScroll);

        let currentVariantIndex = 0;
        for (let i = 0; i < breakpoints.length; i++) {
          if (animatedScroll >= breakpoints[i]) {
            currentVariantIndex = i;
          }
        }

        // Calculate the progress within the current breakpoint
        const progress =
          (animatedScroll - breakpoints[currentVariantIndex]) /
          (breakpoints[currentVariantIndex + 1] -
            breakpoints[currentVariantIndex]);

        // Interpolate between the current and next variant
        const currentVariant = variants[currentVariantIndex];
        const nextVariant =
          variants[currentVariantIndex + 1] || variants[currentVariantIndex];
        const interpolatedVariant =
          progress === 1 ? nextVariant : currentVariant;

        setVariant(
          interpolatedVariant as
            | "Variant 1"
            | "Variant 2"
            | "Variant 3"
            | "Variant 4"
            | "Variant 5"
            | "Variant 6"
            | "Variant 7"
            | "Variant 8"
            | "Variant 9"
            | "Variant 10"
            | "Variant 11"
            | "Variant 12"
            | "Variant 13"
            | "Variant 14"
            | "Variant 15"
            | "Variant 16"
            | "Variant 17"
            | "Variant 18"
            | "Variant 19"
            | "Variant 20"
            | "Variant 21"
            | "Variant 22"
            | "Variant 23"
            | "Variant 24"
            | "Variant 25"
        );

        const maxZIndex = 8; // Define the maximum zIndex

        // Update card animations based on e.animatedScroll
        cardData.forEach((_, index) => {
          // Calculate intermediate translateY values
          const startTranslateY = -9.48198;
          const endTranslateY = 0.559618;
          const translateYRange = endTranslateY - startTranslateY;

          // Calculate intermediate scale values
          const startScale = 1.0;
          const endScale = 0.9;
          const scaleRange = endScale - startScale;

          // Calculate intermediate values based on scroll position
          const scrollPosition = e.animatedScroll;
          let intermediateTranslateY =
            startTranslateY +
            translateYRange * (index / cardData.length) * scrollPosition;
          let intermediateScale =
            startScale +
            scaleRange * (index / cardData.length) * scrollPosition;

          // Loop translateY values if they exceed the range
          while (intermediateTranslateY > endTranslateY) {
            intermediateTranslateY -= translateYRange;
          }
          while (intermediateTranslateY < startTranslateY) {
            intermediateTranslateY += translateYRange;
          }

          // Loop scale values if they exceed 0.9 or fall below 0.1
          while (intermediateScale > 0.9) {
            intermediateScale -= 0.8;
          }
          while (intermediateScale < 0.1) {
            intermediateScale += 0.8;
          }

          // Calculate zIndex based on translateY
          const zIndex =
            (Math.floor(Math.abs(intermediateTranslateY) / 18) * 2) %
            (maxZIndex + 2);

          // Calculate intermediate background color based on zIndex
          const startColor = [10, 10, 10];
          const endColor = [31, 30, 30];
          const intermediateColor = startColor.map(
            (channel, i) =>
              channel + ((endColor[i] - channel) / maxZIndex) * zIndex
          );
          const backgroundColor = `rgb(${intermediateColor.join(", ")})`;

          // Find the corresponding card element and apply the updated styles

          const cardElement = cardRefs.current[index].current;
          if (cardElement) {
            cardElement.style.transform = `translateY(${intermediateTranslateY}rem) scale(${intermediateScale})`;
            cardElement.style.zIndex = zIndex.toString();
            cardElement.style.backgroundColor = backgroundColor;
          }
        });
      });
    };
  }, []);

  const handleToggleCircleMask = () => {
    setIsCircleMaskOn((prev) => !prev); // Toggle the class by updating the state
  };

  console.log("Current Variant:", variant);
  const [isVisible, setIsVisible] = useState(false);
  const [emailEnter, setEmailEnter] = useState(false);
  const [val, setVal] = useState("");
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const enteredValue = e.target.value;

    setVal(enteredValue);

    if (e.target.value.trim().includes("@")) {
      setEmailEnter(true);
    } else {
      setEmailEnter(false);
    }
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    e.stopPropagation();

    if (val.trim().includes("@")) {
      setEmailEnter(true);
    } else {
      setEmailEnter(false);
    }

    setVal("");
    setIsVisible(false);
  };
  return (
    <>
      <div
        className={`absolute top-[20%] sm:top-[25%] 2xl:top-[30%] w-full flex justify-center ${
          isCircleMaskOn ? "z-[99]" : ""
        }`}
      >
        {isCircleMaskOn && (
          <motion.div
            initial={{ opacity: 0, y: -50, zIndex: 0 }}
            animate={{ opacity: 1, y: 0, zIndex: 1 }}
            className=""
            transition={{
              type: "spring",
              duration: 1,
              ease: "ease-in-out",
              delay: 0.5,
            }}
          >
            <FramerStyles Components={[fylo]} />
            <fylo.Responsive
              variants={{
                Desktop: variant,
                Tablet: variant,
                Mobile: variant,
              }}
            />
          </motion.div>
        )}
      </div>
      <div
        ref={bannerText}
        className={`${className}flex items-center transition duration-500 z-50 opacity-0 animated-fade-in`}
      >
        <h1
          className={`text-spectrum-space animate-fade-in leading-trim-cap font-pp-supply-sans text-[30px] md:text-[54px] font-light leading-24 tracking-1.6`}
        >
          ideation, evolved.
        </h1>
        {/* <a
          className={`rounded-lg bg-white flex sm:w-[470px] p-[19px] pl-[100px] pr-[100px] justify-center items-center h-[52px] hover:opacity-[0.6] hover:bg-[rgba(255,255,255,0.6)] transition duration-500 cursor-pointer shadow-lg whitespace-nowrap`}
          href="#"
        >
          Join the waitlist
        </a> */}
        <form
        onSubmit={handleSubmit}
          className="group relative mt-60 sm:mt-0 md:w-[50%] lg:w-[40%] xl:w-[30%] flex justify-center"
        >
          <input
          ref={inputRef}
            onFocus={() => setIsVisible(true)}
            onBlur={() => setIsVisible(false)}
            onChange={handleChange}
            value={isVisible ? val : ""}
            type="text"
            placeholder={""}
            className={`${
              emailEnter
                ? "backdrop-blur-sm bg-black/30 placeholder-white"
                : "placeholder-black hover:bg-[rgba(255,255,255,0.6)] bg-white "
            } text-xl  border outline-none  rounded-3xl flex w-[90%] p-[19px] justify-center items-center hover:opacity-[0.9]  cursor-pointer shadow-lg whitespace-nowrap ${
              isVisible ? "text-left" : "text-center"
            }`}
          />
          <label
          onClick={()=>inputRef?.current?.focus()}
            className={`absolute top-5  ${emailEnter ? 'text-white left-[83px] sm:left-[89px] md:left-[98px] lg:left-[100px] xl:left-[95px] 2xl:left-[180px]':'text-black left-[95px] sm:left-[110px] md:left-[130px] lg:left-[105px] xl:left-[110px] 2xl:left-[200px]'}  transition-all duration-1000 text-center cursor-pointer ${
              isVisible ? `-translate-x-[60px] sm:-translate-x-[75px] 2xl:-translate-x-[105px] ${val !== ''? 'opacity-0':'opacity-25'}  ` : ``
            }`}
          >
            {isVisible
              ? "enter your email"
              : emailEnter
              ? "You're on the waitlist"
              : "Join the waitlist"}
          </label>
          {isVisible && (
            <button type="submit" id="submit">
              <ArrowRight
                size={30}
                className="text-black absolute right-10 top-5"
              />
            </button>
          )}
        </form>
      </div>
      <div
        ref={circleRef}
        className={`circle-mask z-50 ${isCircleMaskOn ? "on" : ""}`}
      >
        <div className="opacity-wrapper">
          <div className="bg-blue-gradient h-screen absolute top-0 left-0 w-full sm:px-[7.5rem] py-[12rem]">
            <div className="absolute h-[10000px] w-full card-stack-wrapper"></div>
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
          className={`sm:flex hidden z-60 ${
            isCircleMaskOn ? "mask-is-on" : ""
          }`}
          onToggleCircleMask={handleToggleCircleMask}
          currentVariant={variant}
        />
      </div>
    </>
  );
}
