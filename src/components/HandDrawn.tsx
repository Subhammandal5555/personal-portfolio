"use client";

import { motion } from "framer-motion";

// Reusable hand-drawn marker loop component
export function HandDrawnLoop({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block px-3 py-1">
      <span className="relative z-10 text-white font-extrabold font-sans">{children}</span>
      <svg
        className="absolute top-[-4px] left-[-4px] w-[calc(100%+8px)] h-[calc(100%+8px)] overflow-visible pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 2,50 C 5,10 95,5 98,45 C 100,75 80,95 45,95 C 10,95 -2,70 5,45 C 10,25 35,5 92,8"
          stroke="#71e3ae"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
          strokeDasharray="400"
          initial={{ strokeDashoffset: 400 }}
          whileInView={{ strokeDashoffset: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, ease: "easeInOut", delay: 0.2 }}
        />
      </svg>
    </span>
  );
}

// Reusable hand-drawn fluid rough double underline component
export function HandDrawnUnderline({ 
  children, 
  className = "font-extrabold text-white font-sans px-1" 
}: { 
  children: React.ReactNode; 
  className?: string; 
}) {
  return (
    <span className="relative inline-block">
      <span className={`relative z-10 ${className}`}>{children}</span>
      <svg
        className="absolute bottom-[-10px] left-0 w-full h-[14px] overflow-visible pointer-events-none"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
      >
        {/* Underline stroke 1 */}
        <motion.path
          d="M 2, 4 Q 50, 1 98, 6"
          stroke="#71e3ae"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          strokeDasharray="100"
          initial={{ strokeDashoffset: 100 }}
          whileInView={{ strokeDashoffset: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        />
        {/* Underline stroke 2 */}
        <motion.path
          d="M 8, 8 Q 55, 5 92, 7"
          stroke="#71e3ae"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          strokeDasharray="100"
          initial={{ strokeDashoffset: 100 }}
          whileInView={{ strokeDashoffset: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
        />
      </svg>
    </span>
  );
}

// Reusable highlighter semi-transparent brush overlay component
export function HandDrawnHighlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block px-2 py-0.5">
      <span className="relative z-10 text-white font-extrabold font-sans">{children}</span>
      <svg
        className="absolute top-0 left-0 w-full h-full overflow-visible pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 2,52 Q 50,46 98,54 Q 50,56 4,50"
          stroke="#71e3ae"
          strokeWidth="28"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.3"
          strokeDasharray="250"
          initial={{ strokeDashoffset: 250 }}
          whileInView={{ strokeDashoffset: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: "easeInOut", delay: 0.4 }}
        />
      </svg>
    </span>
  );
}
