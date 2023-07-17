import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import ForceGraph from "./components/force-graph"

const navigation = [
	{ name: "Features", href: "/features" },
	{ name: "Contact", href: "/contact" },
];

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<nav className="my-16 animate-fade-in z-20">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-xl duration-500 text-zinc-500 hover:text-zinc-300"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<ForceGraph className="absolute inset-0 z-0 animate-fade-in"
			/>
			<h1 className="z-10 text-4xl text-transparent duration-2000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text pt-5 pb-5">
				fylo
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h1 className="text-2xl text-zinc-300 ">
					Ideation, Evolved
					{/* solutions at{" "}
					<Link
						target="_blank"
						href="https://upstash.com"
						className="underline duration-500 hover:text-zinc-300"
					>
						Upstash
					</Link> */}
					{/* 
					<br />
					and working on{" "}
					<Link
						target="_blank"
						href="https://unkey.dev"
						className="underline duration-500 hover:text-zinc-300"
					>
						unkey.dev
					</Link>{" "}
					at night. */}
				</h1>
			</div>
		</div>
	);
}
