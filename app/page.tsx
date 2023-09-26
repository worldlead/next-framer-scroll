"use client";

import React, { useState } from "react";
import Preloader from "./components/preloader";
import ForceGraph from "./components/force-graph";
import Expander from "./components/expander";
import Navbar from "./components/navbar";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoaded(true); // Set isLoaded to true when loading is complete
  };

  return (
    <>
      <Preloader
        className="w-full h-full absolute z-50 bg-[#101942] flex items-center justify-center"
        onLoadingComplete={handleLoadingComplete}
      />
      <div
        className={`main-wrapper w-full h-full absolute ${
          isLoaded ? "animate-scale-in" : "animate-scale-out"
        }`}
      >
        <Navbar />
        <div className="wrapper-scene">
          <ForceGraph className="force-graph absolute z-0 inset-0 animate-fade-in" />
        </div>
        <div className="page-wrapper">
          <div className="buffer-page-wrapper fixed inset-0 pointer-events-none bg-opacity-0 z-7 bg-grey-gradient"></div>
          <Expander className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-between w-full pl-[56px] pr-[56px] items-center" />
        </div>
      </div>
    </>
  );
}
