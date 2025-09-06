"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AnimatedLogo = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.svg
      width="48"
      height="48"
      viewBox="0 0 100 100"
      initial={{ rotate: 0 }}
      animate={{ rotate: isAnimating ? 360 : 0 }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: isAnimating ? Infinity : 0,
        repeatType: "loop",
      }}
    >
      <rect
        x="5"
        y="5"
        width="90"
        height="90"
        fill="none"
        stroke="#4285F4"
        strokeWidth="6"
      />
      <rect
        x="20"
        y="20"
        width="60"
        height="60"
        fill="none"
        stroke="#ef4444"
        strokeWidth="8"
      />
      <circle cx="50" cy="50" r="5" fill="#ef4444" />
    </motion.svg>
  );
};

export default AnimatedLogo;
