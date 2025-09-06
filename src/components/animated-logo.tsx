"use client"

import { useState } from 'react';
import { cn } from "@/lib/utils"

const AnimatedLogo = ({ className }: { className?: string }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div id="animated-logo" className={cn(className, { active: isActive })} onClick={handleClick}>
      <style jsx>{`
        .outer-square {
            fill: none;
            stroke: #ef4444; /* red */
            stroke-width: 6;
            transition: stroke 0.5s ease-in-out;
        }
        .inner-square {
            fill: none;
            stroke: #4285F4; /* blue */
            stroke-width: 8;
            transition: stroke 0.5s ease-in-out;
        }
        .dot {
            fill: #ef4444; /* red */
            transition: all 0.5s ease-in-out;
            transform-origin: 50% 50%;
            animation-fill-mode: forwards;
        }

        .dot:nth-child(3) { transform: translate(0, 0) scale(1.4); }
        .dot:nth-child(4) { transform: translate(0, 0); }
        .dot:nth-child(5) { transform: translate(0, 0); }
        .dot:nth-child(6) { transform: translate(0, 0); }
        .dot:nth-child(7) { transform: translate(0, 0); }

        #animated-logo.active .outer-square {
            stroke: #ef4444;
        }
        #animated-logo.active .inner-square {
            stroke: #4285F4;
        }
        #animated-logo.active .dot {
            fill: #1f2937; 
            transition: all 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55);
        }
        
        #animated-logo.active .dot:nth-child(3) {
            transform: translate(0, 0);
        }
        #animated-logo.active .dot:nth-child(4) {
            transform: translate(20px, 0);
        }
        #animated-logo.active .dot:nth-child(5) {
            transform: translate(-20px, 0);
        }
        #animated-logo.active .dot:nth-child(6) {
            transform: translate(0, 20px);
        }
        #animated-logo.active .dot:nth-child(7) {
            transform: translate(0, -20px);
        }
      `}</style>
      <svg width="100%" height="100%" viewBox="0 0 100 100">
        <rect x="5" y="5" width="90" height="90" className="outer-square"></rect>
        <rect x="20" y="20" width="60" height="60" className="inner-square"></rect>
        <circle cx="50" cy="50" r="5" className="dot"></circle>
        <circle cx="50" cy="50" r="5" className="dot"></circle>
        <circle cx="50" cy="50" r="5" className="dot"></circle>
        <circle cx="50" cy="50" r="5" className="dot"></circle>
        <circle cx="50" cy="50" r="5" className="dot"></circle>
      </svg>
    </div>
  );
};

export default AnimatedLogo;
