"use client";
import { useRef, useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";

interface PreloaderProps {
  className?: string;
  onLoadingComplete: () => void;
}

export default function Preloader({ className, onLoadingComplete }: PreloaderProps) {
  const [progress, setProgress] = useState<number>(0);
  const preloaderRef = useRef<any>(null);
  
  // const handleProgressState = (newState: number) => {
  //   setProgress(newState);
  // }

  useEffect(() => {
    if (progress === 100) {
      onLoadingComplete(); // Call onLoadingComplete when progress reaches 100
    }
  }, [progress, onLoadingComplete]);

  return (
    <div
      ref={preloaderRef}
      className={className} // Display the preloader if isLoading is true
    >
      <div className="text-[48px] gap-[16px] absolute text-white flex items-center justify-center  top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="49"
          height="44"
          viewBox="0 0 49 44"
          fill="none"
        >
          <g
            clipPath="url(#clip0_164_11667)"
            filter="url(#filter0_bd_164_11667)"
          >
            <path
              d="M21.4447 17.8781C22.8897 16.3389 23.8274 14.4568 24.7651 12.5748C26.9621 8.16525 29.1591 3.75571 37.8811 3.75571L40.7478 3.75571C43.2923 3.75571 45.1753 5.81867 45.1748 8.36315C45.1743 10.907 43.112 12.9689 40.5682 12.9689L37.8794 12.9689C29.1574 12.9689 26.9604 16.6608 24.7634 20.3527C24.5646 20.6867 24.3659 21.0207 24.1623 21.352C24.3659 21.6866 24.5646 22.024 24.7634 22.3613C26.9604 26.0903 29.1574 29.8192 37.8794 29.8192L40.9622 29.8192C43.2884 29.8192 45.1743 31.7048 45.1748 34.031C45.1753 36.3579 43.2891 38.2444 40.9622 38.2444L37.8811 38.2444C29.1591 38.2444 26.9621 34.0318 24.7651 29.8192C23.8318 28.0295 22.8985 26.2399 21.4649 24.7733C19.5239 26.5144 16.6656 27.7366 11.6474 27.7366L10.2407 27.7366C6.6969 27.7366 3.8241 24.8638 3.8241 21.32C3.8241 17.7762 6.6969 14.9034 10.2407 14.9034L11.6474 14.9034C16.6482 14.9034 19.504 16.1293 21.4447 17.8781Z"
              fill="white"
            />
            <path
              d="M21.4447 17.8781C22.8897 16.3389 23.8274 14.4568 24.7651 12.5748C26.9621 8.16525 29.1591 3.75571 37.8811 3.75571L40.7478 3.75571C43.2923 3.75571 45.1753 5.81867 45.1748 8.36315C45.1743 10.907 43.112 12.9689 40.5682 12.9689L37.8794 12.9689C29.1574 12.9689 26.9604 16.6608 24.7634 20.3527C24.5646 20.6867 24.3659 21.0207 24.1623 21.352C24.3659 21.6866 24.5646 22.024 24.7634 22.3613C26.9604 26.0903 29.1574 29.8192 37.8794 29.8192L40.9622 29.8192C43.2884 29.8192 45.1743 31.7048 45.1748 34.031C45.1753 36.3579 43.2891 38.2444 40.9622 38.2444L37.8811 38.2444C29.1591 38.2444 26.9621 34.0318 24.7651 29.8192C23.8318 28.0295 22.8985 26.2399 21.4649 24.7733C19.5239 26.5144 16.6656 27.7366 11.6474 27.7366L10.2407 27.7366C6.6969 27.7366 3.8241 24.8638 3.8241 21.32C3.8241 17.7762 6.6969 14.9034 10.2407 14.9034L11.6474 14.9034C16.6482 14.9034 19.504 16.1293 21.4447 17.8781Z"
              stroke="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_bd_164_11667"
              x="-0.5"
              y="-4"
              width="50"
              height="51"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_164_11667"
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
                result="effect2_dropShadow_164_11667"
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
                in2="effect1_backgroundBlur_164_11667"
                result="effect2_dropShadow_164_11667"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_164_11667"
                result="shape"
              />
            </filter>
            <clipPath id="clip0_164_11667">
              <rect
                width="42"
                height="42"
                fill="white"
                transform="translate(3.5)"
              />
            </clipPath>
          </defs>
        </svg>
        <span className="relative top-[4px]">fylo</span>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 top-3/4">
        <ProgressBar progress={progress} handleProgress={setProgress} />
      </div>
    </div>
  );
};


