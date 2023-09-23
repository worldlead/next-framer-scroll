import Link from "next/link";
import React from "react";
import ForceGraph from "./components/force-graph";
import Expander from "./components/expander";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="wrapper-scene">
        <ForceGraph className="absolute z-0 inset-0 animate-fade-in" />
      </div>
      <div className="page-wrapper">
        <div className="buffer-page-wrapper fixed inset-0 pointer-events-none bg-opacity-0 z-7 bg-grey-gradient"></div>
        <Expander />
      </div>
    </>
  );
}
