"use client";

import React, { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import Footer from "./Footer";
import { animate, motion, useScroll } from "framer-motion";
import fylo from "./framer/fylo";
import { FramerStyles } from "installable-framer/dist/react";
import { ArrowRight } from "lucide-react";
import { breakpoints, variants } from "@/util/break-points";


interface CardData {
  profilePic: string;
  name: string;
  tag: string;
}

interface ExpanderProps {
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

export default function Expander({ className }: ExpanderProps) {
  const [isCircleMaskOn, setIsCircleMaskOn] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [emailEnter, setEmailEnter] = useState(false);
  const [val, setVal] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const bannerText = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<React.RefObject<HTMLDivElement>[]>(
    Array.from({ length: cardData.length }, () => useRef(null))
  );
  const prevScrollY = useRef(0);
  const { scrollYProgress } = useScroll();
  const [variant, setVariant] = useState<
    | 'Variant B-2'
    | 'Variant A-1'
    | 'Variant A-2'
    | 'Variant A-3'
    | 'Variant A-4'
    | 'Variant B-1'
    | 'Variant B-3'
    | 'Variant B-4'
    | 'Variant B-5'
    | 'Variant B-6'
    | 'Variant B-7'
    | 'Variant B-8'
    | 'Variant C-1'
    | 'Variant C-2'
    | 'Variant C-3'
    | 'Variant C-4'
    | 'Variant C-5'
    | 'Variant C-6'
    | 'Variant D-1'
    | 'Variant D-2'
    | 'Variant D-3'
    | 'Variant D-4'
    | 'Variant E-1'
    | 'Variant E-2'
    | 'Variant E-3'
    | 'Variant E-4'
    | 'Variant E-5'
    | 'Variant E-6'
    | 'Variant E-7'
    | 'Variant F-1'
    | 'Variant F-2'
    | 'Variant F-3'
    | 'Variant F-4'
    | 'Variant F-5'
  >("Variant B-2");



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
     
      const { animatedScroll, direction } = e;
      const currentURL = window.location.pathname;
      
      // Handle the "circle" animation based on e.animatedScroll
      if (direction === -1 && currentURL === "/") {

        lenis.scrollTo(0, {immediate: true});
        setIsCircleMaskOn(false);
        document.body.classList.remove("circle-mask-is-on");
      } else if (direction === 1 && currentURL === "/") {
        
        setIsCircleMaskOn(true);
        document.body.classList.add("circle-mask-is-on");
      }

      let currentVariantIndex = 0;
      for (let i = 0; i < breakpoints.length; i++) {
        if (animatedScroll >= breakpoints[i]) {
          currentVariantIndex = i;
        }
      }
      
      // Calculate the progress within the current breakpoint
      const progress = (animatedScroll - breakpoints[currentVariantIndex]) /
                      (breakpoints[currentVariantIndex + 1] - breakpoints[currentVariantIndex]);
     

      // Interpolate between the current and next variant
      const currentVariant = variants[currentVariantIndex];
      const nextVariant = variants[currentVariantIndex + 1] || variants[currentVariantIndex];
      const interpolatedVariant = progress === 1 ? nextVariant : currentVariant;
      
      setVariant(
        interpolatedVariant as
        | 'Variant B-2'
        | 'Variant A-1'
        | 'Variant A-2'
        | 'Variant A-3'
        | 'Variant A-4'
        | 'Variant B-1'
        | 'Variant B-3'
        | 'Variant B-4'
        | 'Variant B-5'
        | 'Variant B-6'
        | 'Variant B-7'
        | 'Variant B-8'
        | 'Variant C-1'
        | 'Variant C-2'
        | 'Variant C-3'
        | 'Variant C-4'
        | 'Variant C-5'
        | 'Variant C-6'
        | 'Variant D-1'
        | 'Variant D-2'
        | 'Variant D-3'
        | 'Variant D-4'
        | 'Variant E-1'
        | 'Variant E-2'
        | 'Variant E-3'
        | 'Variant E-4'
        | 'Variant E-5'
        | 'Variant E-6'
        | 'Variant E-7'
        | 'Variant F-1'
        | 'Variant F-2'
        | 'Variant F-3'
        | 'Variant F-4'
        | 'Variant F-5'
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
        className={`fixed top-[20%] sm:top-[25%] flex opacity-1 left-1/2 -translate-x-1/2 justify-center ${isCircleMaskOn ? "z-[99]" : ""}`}
      >
        {isCircleMaskOn && (
          <motion.div
            initial={{ opacity: 0, y: -50, zIndex: 0 }}
            animate={{ opacity: 1, y: 0, zIndex: 1 }}
            className=""
            transition={{
              type: "spring",
              duration: 5,
              ease: "ease-in-out",
              delay: 1,
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
              style={{ left: isFocused? '18px':'calc(50% - 65px)' }}
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
        // className={`circle-mask z-50`}
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
          currentVariant={variant}
        />
      </div>
    </>
  );
}


