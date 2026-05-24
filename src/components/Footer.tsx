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
        
        <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right font-sans text-xs text-gray-500 font-light leading-relaxed">
          <div>
            <p className="mb-1">
              &copy; {new Date().getFullYear()} Subham Mandal. All rights reserved.
            </p>
            <p className="text-gray-500">
              Bridging Software & Hardware Engineering. Made with ❤️ in India.
            </p>
          </div>

          <div className="flex items-center hover:shadow-[0_0_15px_rgba(135,90,123,0.25)] transition-all duration-300 rounded-sm overflow-hidden select-none pointer-events-none">
            <img 
              src="https://hits.sh/subhammandal.in.svg?color=875a7b&label=Total%20Visitors" 
              alt="Total Visitors" 
              className="h-5"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
