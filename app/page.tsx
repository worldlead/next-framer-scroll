"use client";

import React, { useState, useRef, useEffect } from "react";
import Preloader from "./components/preloader";
import ForceGraph from "./components/force-graph";
import Expander from "./components/expander";
import Navbar from "./components/navbar";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoaded(true);
    setTimeout(() => {
      // Remove the 'overflow-hidden' class after 2 seconds
      const mainWrapper = document.querySelector(".main-wrapper");
      if (mainWrapper) {
        mainWrapper.classList.remove("overflow-hidden");
      }
    }, 2000); // 2 seconds
  };

  useEffect(() => {
    // Simulating loading completion after some time (e.g., 2 seconds)
    setTimeout(handleLoadingComplete, 2000); // 2 seconds
  }, []);

  return (
    <>
      <div className={`main-wrapper w-full h-full absolute `}>
        <div
          className={`navbar-wrapper w-full absolute z-70 ${
            isLoaded ? "" : "hidden"
          }`}
        >
          <Navbar className={`animate-fade-in ${isLoaded ? "z-70" : ""}`} />
        </div>
        <div className="wrapper-scene">
          <ForceGraph
            className={`force-graph transition duration-2000 absolute z-40 inset-0 animate-fade-in ease-in-out ${
              isLoaded ? "animate-scale-in" : "animate-scale-out"
            }`}
          />
        </div>
        <div className="page-wrapper">
          <div className="buffer-page-wrapper fixed inset-0 pointer-events-none bg-opacity-0 z-7 bg-grey-gradient"></div>
          <Expander className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-between w-full pl-[56px] pr-[56px] items-center" />
        </div>
        <Preloader
          className={`w-full h-full absolute bg-[#101942] flex items-center justify-center ${
            isLoaded ? "z-20" : "z-40"
          }`}
          onLoadingComplete={handleLoadingComplete}
        />
      </div>
    </>
  );
}
