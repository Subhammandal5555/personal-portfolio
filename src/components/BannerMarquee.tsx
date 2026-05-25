"use client";

import { motion } from "framer-motion";

export default function BannerMarquee() {
  const phrases = Array(8).fill("BUILDING SOMETHING THAT MAKES INDIA PROUD");

  return (
    <div className="w-full max-w-full overflow-x-hidden relative bg-brand-bg/50 border-y border-brand-border/40 py-4 select-none z-20">
      <div className="flex w-max">
        {/* Double-row container moving infinitely */}
        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{
            ease: "linear",
            duration: 40,
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap"
        >
          {/* Row 1 */}
          <div className="flex items-center">
            {phrases.map((phrase, idx) => (
              <div key={`r1-${idx}`} className="flex items-center">
                <span className="font-marker font-normal text-xl md:text-2xl tracking-wider text-gray-200 uppercase whitespace-nowrap inline-block align-middle">
                  {phrase}
                </span>
                <img
                  src="/indian flag.png"
                  alt="Indian Flag Accent"
                  className="h-8 inline-block mx-6 align-middle"
                />
              </div>
            ))}
          </div>

          {/* Row 2 (identical copy for seamless loop) */}
          <div className="flex items-center">
            {phrases.map((phrase, idx) => (
              <div key={`r2-${idx}`} className="flex items-center">
                <span className="font-marker font-normal text-xl md:text-2xl tracking-wider text-gray-200 uppercase whitespace-nowrap inline-block align-middle">
                  {phrase}
                </span>
                <img
                  src="/indian flag.png"
                  alt="Indian Flag Accent"
                  className="h-8 inline-block mx-6 align-middle"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
