"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Footer from "./footer";

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
  const circleRef = useRef<HTMLDivElement>(null);
  const bannerText = useRef<any>(null);
  const cardRefs = useRef<React.RefObject<HTMLDivElement>[]>(
    Array.from({ length: cardData.length }, () => useRef(null))
  );

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      // Handle the "circle" animation based on e.animatedScroll
      if (e.animatedScroll !== 0) {
        circleRef.current?.classList.add("on");
        bannerText.current?.classList.add("hidden");
      } else {
        circleRef.current?.classList.remove("on");

        bannerText.current?.classList.remove("hidden");
      }

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
  }, []);

  return (
    <>
      <div ref={bannerText} className={`${className} animate-fade-in`}>
        <h1 className="text-spectrum-space leading-trim-cap font-pp-supply-sans text-[64px] font-light leading-24 tracking-1.6">
          ideation, evolved.
        </h1>
        <a
          className="rounded-lg bg-white flex w-[470px] p-[19px] pl-[100px] pr-[100px] justify-center items-center h-[52px] hover:opacity-[0.6] hover:bg-[rgba(255,255,255,0.6)] transition duration-500 cursor-pointer shadow-lg"
          href="#"
        >
          Join the waitlist
        </a>
      </div>
      <div ref={circleRef} className="circle-mask z-20">
        <div className="opacity-wrapper">
          <div className="card-container-wrapper bg-blue-gradient h-screen absolute top-0 left-0 w-full px-[7.5rem] py-[12rem]">
            <div className="card-stack-wrapper relative top-1/2">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  ref={cardRefs.current[index]}
                  className="card-wrapper bg-[rgba(35,35,35,.418)] rounded-[1.3rem] shadow-[1px 3px 20px 12px #0000002e] flex flex-col h-[20rem] justify-between p-[2rem] space-y-[2.5rem] transform origin-center-top transition-transform transition-opacity transition-scale duration-4000 w-[33.25rem] z-20"
                  style={{
                    backgroundColor:
                      index % 2 === 0 ? "rgb(32, 32, 32)" : "rgb(24, 23, 23)",
                  }}
                >
                  <div className="profile-wrapper flex items-center gap-6">
                    <img
                      className="bg-gray-700 rounded-full h-14 w-14 object-cover"
                      src={card.profilePic}
                      alt={card.name}
                    ></img>
                    <div className="profile-container">
                      <a href="#">
                        <div className="name text-white text-sm">
                          {card.name}
                        </div>
                        <div className="tag text-[#fff6] text-sm">
                          {card.tag}
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute left-1/2 top-1/2 flex-col w-1/2 pl-[56px] pr-[56px] items-center">
              <h1 className="text-spectrum-space text-center leading-trim-cap font-pp-supply-sans text-[48px] font-light leading-24 tracking-1.6">
                ideation, evolved.
              </h1>
              <a
                className="rounded-lg bg-[rgba(255,255,255,1)] flex w-[470px] p-[19px] pl-[100px] pr-[100px] justify-center items-center h-[52px] m-auto hover:opacity-[0.6] hover:bg-[rgba(255,255,255,0.6)] transition duration-500 cursor-pointer shadow-lg"
                href="#"
              >
                Join the waitlist
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
