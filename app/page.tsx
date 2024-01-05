"use client";

import React, { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import CameraOrbit from "./components/force-graph";
import Expander from "./components/Expander";
import Navbar from "./components/Navbar";
import ForceGraph from "./components/ForceGraph";

export default function Home() {
  const [graphData, setGraphData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("/blocks.json")
      .then(res => res.json())
      .then(data => setGraphData(data));
  }, []);

  const handleLoadingComplete = () => {
    setIsLoaded(true);
    const mainWrapper = document.querySelector(".main-wrapper");
    if (mainWrapper) {
      mainWrapper.classList.remove("overflow-hidden");
    }
  };


  return (
    <>
      <div className={`main-wrapper w-full h-full`}>
        <div
          className={`navbar-wrapper w-full absolute z-70 ${isLoaded ? "" : "hidden"}`}
        >
          <Navbar isLoaded={isLoaded} className={` animate-fade-in ${isLoaded ? "z-[70]" : ""}`} />
        </div>
        <div className="wrapper-scene ">
          {isLoaded && graphData && <CameraOrbit data={graphData} className={`w-full absolute z-40 inset-0 ${isLoaded ? "z-10" : ""}`} />}
          
        </div>
        <div className="page-wrapper w-full h-full" >
          <div className="buffer-page-wrapper fixed inset-0 pointer-events-none bg-opacity-0 z-7"></div>
          {isLoaded && (
            <Expander className={`absolute left-1/2 top-[70%] sm:top-1/2 transform  -translate-x-1/2 -translate-y-1/2 sm:flex justify-between w-full text-center sm:text-left float-unset sm:float-left px-8 sm:px-[56px] items-center`} />
          )}
        </div>
        <Preloader
          className={`w-full h-full absolute bg-[#101942] items-center justify-center ${isLoaded ? "z-20" : "z-40"}`}
          onLoadingComplete={handleLoadingComplete}
        />
      </div>
    </>
  );
}
