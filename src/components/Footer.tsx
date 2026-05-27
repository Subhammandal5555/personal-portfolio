"use client";

import { Cpu, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-brand-bg border-t border-brand-border py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-brand-card border border-brand-border flex items-center justify-center">
            <Cpu className="w-4 h-4 text-brand-accent" />
          </div>
          <span className="font-heading font-extrabold text-sm tracking-wider text-white">
            SUBHAM<span className="text-brand-accent font-light">.M</span>
          </span>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right font-sans text-xs text-gray-500 font-light leading-relaxed">
          <div>
            <p className="mb-1">
              &copy; {new Date().getFullYear()} Subham Mandal. All rights reserved.
            </p>
            <p className="text-gray-500">
              Bridging Software & Hardware Engineering.{" "}
              <span className="block mt-1 sm:mt-0 sm:inline whitespace-nowrap">
                Made with{" "}
                <motion.span
                  className="inline-block align-middle relative -top-[2px]"
                  animate={{
                    scale: [1, 1.125, 1],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                >
                  <Heart 
                    strokeWidth={1.5}
                    className="inline w-[11px] h-[11px] mx-1 text-white fill-transparent align-middle drop-shadow-[0_0_4px_rgba(255,255,255,0.5)]" 
                  />
                </motion.span>{" "}
                in India.
              </span>
            </p>
          </div>

          <div className="flex items-center hover:shadow-[0_0_15px_rgba(135,90,123,0.25)] transition-all duration-300 rounded-sm overflow-hidden select-none pointer-events-none">
            <img 
              src="https://hits.sh/subhammandal.in.svg?color=875a7b&label=Total%20Visitors" 
              alt="Total Visitors" 
              className="h-5"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
