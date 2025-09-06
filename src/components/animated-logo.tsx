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
        .square {
            fill: none;
            stroke: #374151; /* text-gray-700 */
            stroke-width: 6;
            transition: stroke 0.5s ease-in-out;
        }
        .dot {
            fill: #dc2626; /* red-600 */
            transition: all 0.5s ease-in-out;
            transform-origin: 50% 50%;
            animation-fill-mode: forwards;
        }

        .dot:nth-child(1) { transform: translate(0, 0) scale(1.4); }
        .dot:nth-child(2) { transform: translate(0, 0); }
        .dot:nth-child(3) { transform: translate(0, 0); }
        .dot:nth-child(4) { transform: translate(0, 0); }
        .dot:nth-child(5) { transform: translate(0, 0); }

        #animated-logo.active .square {
            stroke: #1e40af; /* blue-800 */
        }
        #animated-logo.active .dot {
            fill: #1e40af; /* blue-800 */
            transition: all 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55);
        }
        
        #animated-logo.active .dot:nth-child(1) {
            transform: translate(0, 0);
        }
        #animated-logo.active .dot:nth-child(2) {
            transform: translate(20px, 0);
        }
        #animated-logo.active .dot:nth-child(3) {
            transform: translate(-20px, 0);
        }
        #animated-logo.active .dot:nth-child(4) {
            transform: translate(0, 20px);
        }
        #animated-logo.active .dot:nth-child(5) {
            transform: translate(0, -20px);
        }
      `}</style>
      <svg width="100%" height="100%" viewBox="0 0 100 100">
        <rect x="10" y="10" width="80" height="80" className="square"></rect>
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
