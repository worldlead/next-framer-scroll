import React, { useEffect, useState } from 'react';

const FramerEmbed = () => {
  const [scale, setScale] = useState(1);

  const updateScale = () => {
    const windowWidth = window.innerWidth;
    // Constants to adjust the scaling effect
    const baseWidth = 1220; // Base width for full scale (1.0)
    const scaleFactor = -0.7; // Adjust this factor to change the scaling sensitivity

    // Calculating scale using a modified inverse function
    let scaleValue = 1 + scaleFactor * (1 - windowWidth / baseWidth);

    // Ensure the scale is within reasonable bounds
    scaleValue = Math.max(0.5, Math.min(scaleValue, 1.7));

    setScale(scaleValue);
  };

  useEffect(() => {
    window.addEventListener('resize', updateScale);
    updateScale(); // Initialize scale on first render
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <div className="h-screen overflow-clip flex justify-center items-center bg-clip-border">
      <iframe
        src="https://sienna-work-015843.framer.app/page-3"
        frameBorder="0"
        style={{
          height: '200vh',
          width: '1900px',
          border: 'none',
          transform: `scale(${scale})`,
          transformOrigin: 'center',
          overflow: "clip"
        }}
      ></iframe>
    </div>
  );
};

export default FramerEmbed;
