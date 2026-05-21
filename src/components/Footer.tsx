"use client";

import { Cpu } from "lucide-react";

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
        
        <div className="text-center md:text-right font-sans text-xs text-gray-500 font-light leading-relaxed">
          <p className="mb-1">
            &copy; {new Date().getFullYear()} Subham Mandal. All Rights Reserved.
          </p>
          <p>
            Bridging software and hardware engineering. Made in India.
          </p>
        </div>
      </div>
    </footer>
  );
}
