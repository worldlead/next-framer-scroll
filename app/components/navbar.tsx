"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface navbarProps {
  className?: string;
}

export default function Navbar({ className }: navbarProps) {
  const pathName = usePathname();
  console.log(pathName);

  const navLinks = [
    { text: "about", href: "/about" },
    { text: "features", href: "/features" }, // Added "features" link
  ];

  return (
    <>
      <div
        className={`${className} flex justify-between items-center px-14 text-black h-16 top-8 w-full transition-colors absolute duration-500 z-20`}
      >
        <nav>
          <ul className="flex items-center space-x-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className={`inline-block -mx-2 -my-1 px-2 py-1 text-sm transition-color duration-500 hover:opacity-[0.8] hover:blur-[0.5px] ${
                    pathName === link.href ? "" : "active"
                  }`}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/" className="flex items-start text-[24px] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <g filter="url(#filter0_bd_1_2838)">
              <path
                d="M14.5456 14.836C15.2054 14.1332 15.6336 13.2739 16.0617 12.4145C17.0649 10.4011 18.0681 8.38768 22.0505 8.38768L23.3595 8.38768C24.5213 8.38768 25.3811 9.32964 25.3809 10.4915C25.3806 11.653 24.439 12.5944 23.2775 12.5944L22.0497 12.5944C18.0673 12.5944 17.0641 14.2802 16.061 15.9659C15.9702 16.1184 15.8794 16.271 15.7865 16.4222C15.8794 16.575 15.9702 16.729 16.061 16.8831C17.0641 18.5857 18.0673 20.2884 22.0497 20.2884L23.4574 20.2884C24.5195 20.2884 25.3806 21.1493 25.3809 22.2115C25.3811 23.2739 24.5198 24.1353 23.4574 24.1353L22.0505 24.1353C18.0681 24.1353 17.0649 22.2118 16.0617 20.2883C15.6356 19.4712 15.2094 18.6541 14.5548 17.9844C13.6686 18.7794 12.3635 19.3374 10.0722 19.3374L9.42983 19.3374C7.81173 19.3374 6.5 18.0257 6.5 16.4076C6.5 14.7895 7.81173 13.4778 9.42983 13.4778L10.0722 13.4778C12.3555 13.4778 13.6595 14.0375 14.5456 14.836Z"
                fill="#101942"
              />
              <path
                d="M14.5456 14.836C15.2054 14.1332 15.6336 13.2739 16.0617 12.4145C17.0649 10.4011 18.0681 8.38768 22.0505 8.38768L23.3595 8.38768C24.5213 8.38768 25.3811 9.32964 25.3809 10.4915C25.3806 11.653 24.439 12.5944 23.2775 12.5944L22.0497 12.5944C18.0673 12.5944 17.0641 14.2802 16.061 15.9659C15.9702 16.1184 15.8794 16.271 15.7865 16.4222C15.8794 16.575 15.9702 16.729 16.061 16.8831C17.0641 18.5857 18.0673 20.2884 22.0497 20.2884L23.4574 20.2884C24.5195 20.2884 25.3806 21.1493 25.3809 22.2115C25.3811 23.2739 24.5198 24.1353 23.4574 24.1353L22.0505 24.1353C18.0681 24.1353 17.0649 22.2118 16.0617 20.2883C15.6356 19.4712 15.2094 18.6541 14.5548 17.9844C13.6686 18.7794 12.3635 19.3374 10.0722 19.3374L9.42983 19.3374C7.81173 19.3374 6.5 18.0257 6.5 16.4076C6.5 14.7895 7.81173 13.4778 9.42983 13.4778L10.0722 13.4778C12.3555 13.4778 13.6595 14.0375 14.5456 14.836Z"
                stroke="#101942"
              />
            </g>
            <defs>
              <filter
                id="filter0_bd_1_2838"
                x="-3.55933"
                y="-3.23853"
                width="39"
                height="40"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_1_2838"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="1"
                  operator="erode"
                  in="SourceAlpha"
                  result="effect2_dropShadow_1_2838"
                />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.0627451 0 0 0 0 0.0980392 0 0 0 0 0.258824 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_backgroundBlur_1_2838"
                  result="effect2_dropShadow_1_2838"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_1_2838"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          fylo
        </Link>

        <nav>
          <ul className="flex items-center">
            <li>
              <Link
                href="/login"
                className="text-sm px-10 py-2 rounded-[10px] shadow-lg bg-[rgba(255,255,255,1)] flex items-center cursor-pointer gap-2 hover:opacity-[0.6] hover:bg-[rgba(255,255,255,0.6)] transition duration-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-log-in"
                >
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                  <polyline points="10 17 15 12 10 7"></polyline>
                  <line x1="15" y1="12" x2="3" y2="12"></line>
                </svg>
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
