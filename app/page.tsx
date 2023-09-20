import Link from "next/link";
import React from "react";
import ForceGraph from "./components/force-graph";
import Expander from "./components/expander";

const navigation = [
  // { name: "features", href: "/features" },
  { name: "contact", href: "/contact" },
  { name: "login", href: "/login" },
];

export default function Home() {
  return (
    <>
      <div className="wrapper-scene">
        <ForceGraph className="absolute z-0 inset-0 animate-fade-in" />
      </div>
      <div className="page-wrapper">
        <div className="menu-wrapper flex justify-between items-center mx-8">
          <nav className="my-10 animate-fade-in z-20">
            <ul className="flex items-center justify-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
                >
                  {item.name}
                </Link>
              ))}
            </ul>
          </nav>
          <h6 className="z-10 text-xl text-transparent duration-3000 bg-black cursor-default text-edge-outline animate-title font-display whitespace-nowrap bg-clip-text pt-5 pb-5">
            fylo
          </h6>
          <nav className="my-10 animate-fade-in z-20">
            <ul className="flex items-center justify-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
                >
                  {item.name}
                </Link>
              ))}
            </ul>
          </nav>
        </div>
        <div className="buffer-page-wrapper fixed inset-0 pointer-events-none bg-opacity-0 z-7"></div>
        <Expander />
      </div>
    </>
  );
}
