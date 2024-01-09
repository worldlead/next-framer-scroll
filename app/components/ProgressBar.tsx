"use client";
import React, { useState, useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

interface StateProps {
  progress: number;
  handleProgress: (newState: number) => void;
}
export default function ProgressBar({ progress, handleProgress }: StateProps) {
  
  useEffect(() => {
    let progressState = 0;
    const interval = setInterval(() => {
      progressState = progressState + 1;
      handleProgress(progressState);
      if (progressState === 100) {
        clearInterval(interval);
      }
    }, 1);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p className="text-white"></p>
    </div>
  );
};
