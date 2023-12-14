"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

interface navbarProps {
  className?: string;
  isLoaded?:boolean;
}

export default function Navbar({ className ,isLoaded}: navbarProps) {
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Check if the current pathname is not the home page ("/")
    if (pathName !== "/") {
      // If it's not the home page, remove the "circle-mask-is-on" class from the body element
      document.body.classList.remove("circle-mask-is-on");
    } else {
      document.body.classList.remove("circle-mask-is-on");
    }
  }, [pathName]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { text: "about", href: "/about" },
    { text: "features", href: "/features" }, // Added "features" link
  ];

  return (
    <>
      <div
        className={`${className} overflow-hidden flex justify-between items-center px-4 sm:px-14 text-black h-16 mt-4 sm:top-8 w-full transition-colors duration-500 z-[999] ${
          pathName !== "/" ? "" : "absolute"
        }`}
      >
        <nav className="nav-items hidden md:block">
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

        {/* Hamburger Menu */}
        <div className="sm:hidden">
          <div
            onClick={toggleMenu}
            className={`burger-wrapper cursor-pointer h-[22px] relative top-[-4px] transition-color delay-[0.5s] w-[22px] z-[999] ${
              isMenuOpen ? "modal-open" : ""
            }`}
          >
            <div className={`burger-line ${isMenuOpen ? 'menu-toggle' : ''} bg-black border-black  border rounded-[1px] h-[2px] absolute top-1/2 transform translate-y-[-7px] transition-transform duration-300 w-[22px]`}></div>
            <div className={`burger-line ${isMenuOpen ? 'menu-toggle' : ''} bg-black border-black border rounded-[1px] h-[2px] absolute top-1/2 transform transition-transform duration-300 w-[22px]`}></div>
            <div className={`burger-line ${isMenuOpen ? 'menu-toggle' : ''} bg-black border-black border rounded-[1px] h-[2px] absolute top-1/2 transform translate-y-[7px] transition-transform duration-300 w-[22px]`}></div>
          </div>
          <div className={`modal ${isMenuOpen ? "modal-open" : "close"}`}>
            <div className="menu-item__wrapper">
              {navLinks.map((link, index) => (
                <div className="menu-item" key={index}>
                  <Link
                    href={link.href}
                    className={`router-link-active router-link-exact-active ${
                      pathName === link.href ? "" : "active"
                    }`}
                  >
                    {link.text}
                  </Link>
                </div>
              ))}
            </div>
            <div className="footer">
              <div className="socials">
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
                    ></path>
                    <path
                      d="M14.5456 14.836C15.2054 14.1332 15.6336 13.2739 16.0617 12.4145C17.0649 10.4011 18.0681 8.38768 22.0505 8.38768L23.3595 8.38768C24.5213 8.38768 25.3811 9.32964 25.3809 10.4915C25.3806 11.653 24.439 12.5944 23.2775 12.5944L22.0497 12.5944C18.0673 12.5944 17.0641 14.2802 16.061 15.9659C15.9702 16.1184 15.8794 16.271 15.7865 16.4222C15.8794 16.575 15.9702 16.729 16.061 16.8831C17.0641 18.5857 18.0673 20.2884 22.0497 20.2884L23.4574 20.2884C24.5195 20.2884 25.3806 21.1493 25.3809 22.2115C25.3811 23.2739 24.5198 24.1353 23.4574 24.1353L22.0505 24.1353C18.0681 24.1353 17.0649 22.2118 16.0617 20.2883C15.6356 19.4712 15.2094 18.6541 14.5548 17.9844C13.6686 18.7794 12.3635 19.3374 10.0722 19.3374L9.42983 19.3374C7.81173 19.3374 6.5 18.0257 6.5 16.4076C6.5 14.7895 7.81173 13.4778 9.42983 13.4778L10.0722 13.4778C12.3555 13.4778 13.6595 14.0375 14.5456 14.836Z"
                      stroke="#101942"
                    ></path>
                  </g>
                  <defs>
                    <filter
                      id="filter0_bd_1_2838"
                      x="-3.55933"
                      y="-3.23853"
                      width="39"
                      height="40"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="2"
                      ></feGaussianBlur>
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_1_2838"
                      ></feComposite>
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      ></feColorMatrix>
                      <feMorphology
                        radius="1"
                        operator="erode"
                        in="SourceAlpha"
                        result="effect2_dropShadow_1_2838"
                      ></feMorphology>
                      <feOffset dy="2"></feOffset>
                      <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                      <feComposite in2="hardAlpha" operator="out"></feComposite>
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0627451 0 0 0 0 0.0980392 0 0 0 0 0.258824 0 0 0 0.1 0"
                      ></feColorMatrix>
                      <feBlend
                        mode="normal"
                        in2="effect1_backgroundBlur_1_2838"
                        result="effect2_dropShadow_1_2838"
                      ></feBlend>
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_1_2838"
                        result="shape"
                      ></feBlend>
                    </filter>
                  </defs>
                </svg>
                <span>
                  {" "}
                  Fylo is an innovative platform for sharing your knowledge,
                  discovering new perspectives, and connecting with your
                  audience on a whole new level.{" "}
                </span>
                <div className="socials-logo">
                  <Link href="" rel="noopener noreferrer">
                    <svg
                      data-v-b588c410=""
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        data-v-b588c410=""
                        d="M16.6269 7.50851C16.6371 7.65544 16.6371 7.80237 16.6371 7.95066C16.6371 12.4689 13.1974 17.6798 6.90789 17.6798V17.6771C5.04994 17.6798 3.23059 17.1476 1.6665 16.1442C1.93666 16.1767 2.20818 16.1929 2.48037 16.1936C4.02008 16.195 5.51578 15.6783 6.7271 14.727C5.2639 14.6992 3.98081 13.7452 3.53258 12.3524C4.04514 12.4513 4.57327 12.431 5.07635 12.2935C3.48112 11.9712 2.33344 10.5697 2.33344 8.94192C2.33344 8.92702 2.33344 8.91281 2.33344 8.89859C2.80876 9.16333 3.34096 9.31026 3.88534 9.32651C2.38287 8.32238 1.91974 6.3236 2.82704 4.76087C4.56311 6.8971 7.12456 8.19576 9.87424 8.33321C9.59866 7.14559 9.97512 5.90109 10.8635 5.06624C12.2407 3.77163 14.4067 3.83799 15.7013 5.21452C16.4671 5.06353 17.2011 4.78253 17.8727 4.3844C17.6175 5.17592 17.0833 5.84828 16.3696 6.27553C17.0474 6.19563 17.7096 6.01417 18.3332 5.73724C17.8741 6.42516 17.2959 7.02439 16.6269 7.50851Z"
                        fill="#8A8A8A"
                      ></path>
                    </svg>
                  </Link>
                  <Link href="=" rel="noopener noreferrer">
                    <svg
                      data-v-b588c410=""
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        data-v-b588c410=""
                        d="M15.0963 5.91586C14.1986 5.3305 13.5506 4.39392 13.3485 3.30213C13.3048 3.06624 13.2808 2.82347 13.2808 2.57507H10.4155L10.4109 14.0584C10.3627 15.3443 9.30433 16.3764 8.00686 16.3764C7.6036 16.3764 7.22389 16.2756 6.88957 16.0997C6.12292 15.6962 5.59825 14.8926 5.59825 13.9678C5.59825 12.6397 6.67881 11.5591 8.00686 11.5591C8.25477 11.5591 8.49259 11.6 8.71755 11.6705V8.74527C8.48475 8.71358 8.24821 8.69376 8.00686 8.69376C5.09874 8.69376 2.73291 11.0597 2.73291 13.9678C2.73291 15.7521 3.62437 17.3311 4.9844 18.2859C5.84105 18.8873 6.88306 19.2417 8.00686 19.2417C10.915 19.2417 13.2808 16.8759 13.2808 13.9678V8.1448C14.4046 8.95142 15.7815 9.42674 17.2672 9.42674V6.5614C16.4669 6.5614 15.7215 6.32348 15.0963 5.91586Z"
                        fill="#8A8A8A"
                      ></path>
                    </svg>
                  </Link>
                  <Link href="" rel="noopener noreferrer">
                    <svg
                      data-v-b588c410=""
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        data-v-b588c410=""
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.4932 5.42064C17.2099 5.6132 17.7769 6.18017 17.9695 6.89689C18.3225 8.20199 18.3332 10.9084 18.3332 10.9084C18.3332 10.9084 18.3332 13.6256 17.9802 14.92C17.7876 15.6367 17.2206 16.2037 16.5039 16.3963C15.2095 16.7493 9.99984 16.7493 9.99984 16.7493C9.99984 16.7493 4.79017 16.7493 3.49577 16.3963C2.77904 16.2037 2.21208 15.6367 2.01952 14.92C1.6665 13.6149 1.6665 10.9084 1.6665 10.9084C1.6665 10.9084 1.6665 8.20199 2.00882 6.90759C2.20138 6.19086 2.76834 5.6239 3.48507 5.43134C4.77947 5.07832 9.98914 5.06763 9.98914 5.06763C9.98914 5.06763 15.1988 5.06763 16.4932 5.42064ZM12.6528 10.9085L8.33103 13.4117V8.40524L12.6528 10.9085Z"
                        fill="#8A8A8A"
                      ></path>
                    </svg>
                  </Link>
                  <Link href="" rel="noopener noreferrer">
                    <svg
                      data-v-b588c410=""
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        data-v-b588c410=""
                        d="M17.5 4.51139V17.3055C17.5 17.598 17.3838 17.8786 17.177 18.0854C16.9701 18.2922 16.6896 18.4084 16.3971 18.4084H3.60294C3.31042 18.4084 3.02989 18.2922 2.82304 18.0854C2.6162 17.8786 2.5 17.598 2.5 17.3055V4.51139C2.5 4.21887 2.6162 3.93833 2.82304 3.73149C3.02989 3.52465 3.31042 3.40845 3.60294 3.40845H16.3971C16.6896 3.40845 16.9701 3.52465 17.177 3.73149C17.3838 3.93833 17.5 4.21887 17.5 4.51139ZM6.91176 9.14374H4.70588V16.2026H6.91176V9.14374ZM7.11029 6.71727C7.11146 6.55041 7.07974 6.38496 7.01696 6.23036C6.95418 6.07576 6.86156 5.93504 6.7444 5.81624C6.62723 5.69743 6.48781 5.60287 6.3341 5.53795C6.18038 5.47302 6.01539 5.43901 5.84853 5.43786H5.80882C5.4695 5.43786 5.14408 5.57265 4.90414 5.81259C4.66421 6.05253 4.52941 6.37795 4.52941 6.71727C4.52941 7.05659 4.66421 7.38202 4.90414 7.62195C5.14408 7.86189 5.4695 7.99668 5.80882 7.99668C5.97569 8.00079 6.14173 7.97197 6.29746 7.91188C6.45319 7.8518 6.59555 7.76161 6.71642 7.64649C6.83728 7.53136 6.93427 7.39355 7.00186 7.24092C7.06944 7.08829 7.10629 6.92385 7.11029 6.75698V6.71727ZM15.2941 11.9143C15.2941 9.79227 13.9441 8.96727 12.6029 8.96727C12.1638 8.94528 11.7266 9.03881 11.3349 9.23853C10.9432 9.43825 10.6107 9.73718 10.3706 10.1055H10.3088V9.14374H8.23529V16.2026H10.4412V12.4482C10.4093 12.0636 10.5304 11.6821 10.7782 11.3863C11.026 11.0906 11.3805 10.9046 11.7647 10.8687H11.8485C12.55 10.8687 13.0706 11.3099 13.0706 12.4217V16.2026H15.2765L15.2941 11.9143Z"
                        fill="#8A8A8A"
                      ></path>
                    </svg>
                  </Link>
                  <Link href="" rel="noopener noreferrer">
                    <svg
                      data-v-b588c410=""
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        data-v-b588c410=""
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10 3.40845C7.963 3.40845 7.708 3.41695 6.908 3.45345C6.1095 3.48995 5.564 3.61695 5.087 3.80245C4.587 3.99045 4.1335 4.28545 3.7585 4.66745C3.37711 5.04201 3.08193 5.49519 2.8935 5.99545C2.709 6.47245 2.5815 7.01845 2.545 7.81695C2.509 8.61645 2.5 8.87095 2.5 10.9084C2.5 12.9459 2.5085 13.2004 2.545 14.0004C2.5815 14.7989 2.7085 15.3444 2.894 15.8214C3.082 16.3214 3.377 16.7749 3.759 17.1499C4.13358 17.5313 4.58675 17.8265 5.087 18.0149C5.564 18.1999 6.1095 18.3269 6.908 18.3634C7.708 18.3999 7.963 18.4084 10 18.4084C12.037 18.4084 12.292 18.3999 13.092 18.3634C13.8905 18.3269 14.436 18.1999 14.913 18.0144C15.413 17.8264 15.8665 17.5314 16.2415 17.1494C16.6229 16.7749 16.9181 16.3217 17.1065 15.8214C17.2915 15.3444 17.4185 14.7989 17.455 14.0004C17.4915 13.2004 17.5 12.9454 17.5 10.9084C17.5 8.87145 17.4915 8.61645 17.455 7.81645C17.4185 7.01795 17.2915 6.47245 17.106 5.99545C16.9177 5.49498 16.6225 5.04161 16.241 4.66695C15.8664 4.28556 15.4133 3.99038 14.913 3.80195C14.436 3.61745 13.89 3.48995 13.0915 3.45345C12.292 3.41745 12.0375 3.40845 10 3.40845ZM10 4.75995C12.0025 4.75995 12.24 4.76745 13.031 4.80345C13.762 4.83695 14.159 4.95845 14.4235 5.06195C14.7735 5.19745 15.0235 5.36045 15.286 5.62245C15.5485 5.88495 15.711 6.13495 15.8465 6.48495C15.9495 6.74945 16.0715 7.14645 16.105 7.87745C16.141 8.66845 16.1485 8.90595 16.1485 10.9084C16.1485 12.9109 16.141 13.1484 16.105 13.9394C16.0715 14.6704 15.95 15.0674 15.8465 15.3319C15.7265 15.6577 15.5349 15.9524 15.286 16.1944C15.044 16.4434 14.7493 16.635 14.4235 16.7549C14.159 16.8579 13.762 16.9799 13.031 17.0134C12.24 17.0494 12.003 17.0569 10 17.0569C7.997 17.0569 7.76 17.0494 6.969 17.0134C6.238 16.9799 5.841 16.8584 5.5765 16.7549C5.25073 16.6349 4.956 16.4434 4.714 16.1944C4.46509 15.9524 4.27356 15.6577 4.1535 15.3319C4.0505 15.0674 3.9285 14.6704 3.895 13.9394C3.859 13.1484 3.8515 12.9109 3.8515 10.9084C3.8515 8.90595 3.859 8.66845 3.895 7.87745C3.9285 7.14645 4.05 6.74945 4.1535 6.48495C4.289 6.13495 4.452 5.88495 4.714 5.62245C4.95597 5.37347 5.2507 5.18194 5.5765 5.06195C5.841 4.95895 6.238 4.83695 6.969 4.80345C7.76 4.76745 7.9975 4.75995 10 4.75995Z"
                        fill="#8A8A8A"
                      ></path>
                      <path
                        data-v-b588c410=""
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10 13.4109C9.67139 13.4109 9.34597 13.3462 9.04235 13.2204C8.73874 13.0946 8.46286 12.9103 8.23048 12.6779C7.99811 12.4456 7.81377 12.1697 7.68801 11.8661C7.56225 11.5624 7.49752 11.237 7.49752 10.9084C7.49752 10.5798 7.56225 10.2543 7.68801 9.95073C7.81377 9.64711 7.99811 9.37124 8.23048 9.13886C8.46286 8.90648 8.73874 8.72215 9.04235 8.59639C9.34597 8.47062 9.67139 8.40589 10 8.40589C10.6637 8.40589 11.3002 8.66955 11.7696 9.13886C12.2389 9.60817 12.5025 10.2447 12.5025 10.9084C12.5025 11.5721 12.2389 12.2086 11.7696 12.6779C11.3002 13.1472 10.6637 13.4109 10 13.4109ZM10 7.05339C8.97761 7.05339 7.99707 7.45954 7.27412 8.1825C6.55117 8.90545 6.14502 9.88598 6.14502 10.9084C6.14502 11.9308 6.55117 12.9113 7.27412 13.6343C7.99707 14.3572 8.97761 14.7634 10 14.7634C11.0224 14.7634 12.003 14.3572 12.7259 13.6343C13.4489 12.9113 13.855 11.9308 13.855 10.9084C13.855 9.88598 13.4489 8.90545 12.7259 8.1825C12.003 7.45954 11.0224 7.05339 10 7.05339ZM14.9765 6.98339C14.9765 7.22507 14.8805 7.45685 14.7096 7.62774C14.5387 7.79864 14.3069 7.89464 14.0653 7.89464C13.8236 7.89464 13.5918 7.79864 13.4209 7.62774C13.25 7.45685 13.154 7.22507 13.154 6.98339C13.154 6.74172 13.25 6.50994 13.4209 6.33904C13.5918 6.16815 13.8236 6.07214 14.0653 6.07214C14.3069 6.07214 14.5387 6.16815 14.7096 6.33904C14.8805 6.50994 14.9765 6.74172 14.9765 6.98339Z"
                        fill="#8A8A8A"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="legals">
                {" "}
                ©2023 Fylo Inc | All rights reserved{" "}
              </div>
            </div>
          </div>
        </div>

        {/* Logo */}
        <Link href="/" className="logo flex items-start text-[24px] ">
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
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
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

        <nav className="btn-login sm:block sm:w-[unset]">
          <ul className="flex items-center">
            <li>
              <Link
                href="/login"
                className="text-sm px-2 sm:px-10 py-2 rounded-[10px] sm:shadow-lg sm:bg-[rgba(255,255,255,1)] flex items-center cursor-pointer gap-2 hover:opacity-[0.6] hover:bg-[rgba(255,255,255,0.6)] transition duration-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-log-in"
                >
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                  <polyline points="10 17 15 12 10 7"></polyline>
                  <line x1="15" y1="12" x2="3" y2="12"></line>
                </svg>
                <span className="hidden sm:block">Login</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
