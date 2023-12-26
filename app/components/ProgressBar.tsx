import React, { useState, useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export default function NProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the progress state
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 2;
        // Update the NProgress bar
        console.log(newProgress);
        NProgress.set(newProgress / 100);
        // Clear interval and finish NProgress when progress reaches 100
        if (newProgress === 100) {
          clearInterval(interval);
          NProgress.done();
        }
        // Return the new progress state
        return newProgress;
      });
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p className="text-white">{progress}</p>
      {/* You can add more UI elements or components here */}
    </div>
  );
};
