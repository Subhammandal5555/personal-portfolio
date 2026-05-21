"use client";

import { motion } from "framer-motion";
import { ExternalLink, Play, ArrowRight, Clock, ShieldAlert, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export default function Projects() {
  // Simon Game interactive simulation state
  const [simonColor, setSimonColor] = useState<string | null>(null);
  const [simonPattern, setSimonPattern] = useState<string[]>([]);
  
  const playSimonStep = () => {
    const colors = ["green", "red", "yellow", "blue"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setSimonColor(randomColor);
    setSimonPattern((prev) => [...prev, randomColor].slice(-4));
    
    setTimeout(() => {
      setSimonColor(null);
    }, 600);
  };

  // Countdown timer simulation for Gyananjali
  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 8,
    minutes: 42,
    seconds: 15,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="projects" className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-sans text-xs uppercase tracking-widest text-brand-accent font-medium mb-3 block">
            Portfolio
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl tracking-tight text-white mb-4 select-none odoo-header">
            FEATURED <span className="font-marker text-brand-accent lowercase tracking-wide font-normal text-[1.15em] ml-1">projects</span>
          </h2>
          <div className="w-12 h-[2px] bg-brand-accent" />
        </div>

        {/* Projects Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* PROJECT 1: Gyananjali Saraswati Puja Platform */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-lg bg-brand-card border border-brand-border hover:border-brand-accent/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:shadow-[0_0_25px_rgba(135,90,123,0.15)]"
          >
            {/* Visual Top Mockup */}
            <div className="relative h-56 bg-brand-bg/60 border-b border-brand-border flex flex-col justify-center items-center p-6 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(135,90,123,0.08)_0%,transparent_70%)] pointer-events-none" />
              
              {/* Puja Countdown Widget */}
              <div className="bg-brand-bg/90 border border-brand-border/60 rounded-md p-4 w-full max-w-[260px] text-center shadow-lg relative z-10">
                <span className="text-[9px] uppercase tracking-widest text-brand-accent font-extrabold block mb-2">
                  Event Countdown Timer
                </span>
                <div className="grid grid-cols-4 gap-1.5 text-white">
                  <div className="bg-brand-card/80 p-1.5 rounded-sm">
                    <span className="block font-heading font-extrabold text-base">{timeLeft.days}</span>
                    <span className="block text-[7px] uppercase tracking-wider text-gray-400 font-light">Days</span>
                  </div>
                  <div className="bg-brand-card/80 p-1.5 rounded-sm">
                    <span className="block font-heading font-extrabold text-base">{timeLeft.hours}</span>
                    <span className="block text-[7px] uppercase tracking-wider text-gray-400 font-light">Hrs</span>
                  </div>
                  <div className="bg-brand-card/80 p-1.5 rounded-sm">
                    <span className="block font-heading font-extrabold text-base">{timeLeft.minutes}</span>
                    <span className="block text-[7px] uppercase tracking-wider text-gray-400 font-light">Mins</span>
                  </div>
                  <div className="bg-brand-card/80 p-1.5 rounded-sm text-brand-accent">
                    <span className="block font-heading font-extrabold text-base">{timeLeft.seconds}</span>
                    <span className="block text-[7px] uppercase tracking-wider text-brand-accent font-light">Secs</span>
                  </div>
                </div>
              </div>

              {/* Chat Simulation Badge */}
              <div className="absolute bottom-3 left-4 right-4 bg-brand-card/90 border border-brand-border rounded-sm py-1.5 px-3 flex items-center justify-between text-[9px] text-gray-400">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-success animate-ping" />
                  <span>Real-time chat active</span>
                </span>
                <span className="text-[8px] text-brand-accent font-extrabold font-heading">UPI ENABLED</span>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-heading font-extrabold text-lg text-white uppercase tracking-wider group-hover:text-brand-accent transition-colors duration-300 odoo-header">
                    Gyananjali Platform
                  </h3>
                  <span className="px-2 py-0.5 rounded-sm bg-brand-accent/10 border border-brand-accent/30 text-[9px] font-extrabold text-brand-accent tracking-widest uppercase">
                    Live Demo
                  </span>
                </div>
                
                <p className="font-sans font-light text-xs text-gray-400 leading-relaxed mb-6">
                  A fully responsive, mobile-first web app with integrated UPI payment gateways, interactive countdown timers, real-time live chat integration, and optimized SEO performance.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["JavaScript", "Node.js", "Express", "UPI API", "Socket.io"].map((t) => (
                    <span key={t} className="text-[10px] font-sans font-medium text-gray-400 px-2 py-0.5 border border-brand-border bg-brand-card/30">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <a
                  href="http://gyananjali.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-xs uppercase tracking-widest font-semibold text-white hover:text-brand-accent flex items-center gap-1.5 transition-colors duration-300"
                >
                  <span>Visit Live</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* PROJECT 2: Spotify Frontend Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-lg bg-brand-card border border-brand-border hover:border-brand-accent/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:shadow-[0_0_25px_rgba(135,90,123,0.15)]"
          >
            {/* Visual Top Mockup */}
            <div className="relative h-56 bg-brand-bg/60 border-b border-brand-border flex justify-center items-center p-6 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(135,90,123,0.08)_0%,transparent_70%)] pointer-events-none" />
              
              {/* Music Player Mockup */}
              <div className="bg-[#121212] border border-brand-border/60 rounded-md p-4 w-full max-w-[260px] shadow-lg relative z-10 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-brand-accent/20 border border-brand-accent/30 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block text-[10px] font-semibold text-white truncate">Spotify Architecture</span>
                    <span className="block text-[8px] text-gray-400 font-light truncate">High-Fidelity Clone</span>
                  </div>
                </div>
                {/* Control bar */}
                <div className="flex items-center justify-center gap-4 text-gray-400">
                  <div className="w-2.5 h-2.5 rounded-sm bg-gray-500" />
                  <div className="p-1.5 rounded-full bg-white text-black cursor-pointer hover:scale-105 transition-transform duration-200">
                    <Play className="w-2.5 h-2.5 fill-black pl-0.5" />
                  </div>
                  <div className="w-2.5 h-2.5 rounded-sm bg-gray-500" />
                </div>
                {/* Timeline slider */}
                <div className="flex items-center gap-1.5">
                  <span className="text-[7px] text-gray-400">1:42</span>
                  <div className="h-1 flex-1 bg-brand-border rounded-full overflow-hidden">
                    <div className="h-full w-[45%] bg-brand-accent rounded-full" />
                  </div>
                  <span className="text-[7px] text-gray-400">3:50</span>
                </div>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-heading font-extrabold text-lg text-white uppercase tracking-wider group-hover:text-brand-accent transition-colors duration-300 odoo-header">
                    Spotify Frontend
                  </h3>
                  <span className="px-2 py-0.5 rounded-sm bg-brand-border text-[9px] font-extrabold text-gray-400 tracking-widest uppercase">
                    Architecture
                  </span>
                </div>
                
                <p className="font-sans font-light text-xs text-gray-400 leading-relaxed mb-6">
                  A high-fidelity frontend clone of the Spotify music streaming web client built to pixel-perfect design accuracy. Fully responsive layout mirroring standard desktop viewports.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["HTML5", "CSS3", "JavaScript", "Responsive Design", "Flexbox"].map((t) => (
                    <span key={t} className="text-[10px] font-sans font-medium text-gray-400 px-2 py-0.5 border border-brand-border bg-brand-card/30">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <a
                  href="https://github.com/Subhammandal5555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-xs uppercase tracking-widest font-semibold text-white hover:text-brand-accent flex items-center gap-1.5 transition-colors duration-300"
                >
                  <span>Codebase</span>
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* PROJECT 3: Interactive Web-Based Simon Game */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-lg bg-brand-card border border-brand-border hover:border-brand-accent/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:shadow-[0_0_25px_rgba(135,90,123,0.15)]"
          >
            {/* Visual Top Mockup */}
            <div className="relative h-56 bg-brand-bg/60 border-b border-brand-border flex justify-center items-center p-6 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(135,90,123,0.08)_0%,transparent_70%)] pointer-events-none" />
              
              {/* Interactive Simon Game visualizer */}
              <div className="bg-brand-card border border-brand-border rounded-full w-36 h-36 p-3 flex flex-wrap gap-2.5 relative justify-center items-center shadow-lg relative z-10">
                {/* 4 Colored sectors */}
                <div
                  className={`w-14 h-14 rounded-tl-full transition-all duration-200 cursor-pointer ${
                    simonColor === "green" ? "bg-green-400 scale-95 shadow-[0_0_15px_rgba(74,222,128,0.7)]" : "bg-green-700/60"
                  }`}
                  onClick={playSimonStep}
                />
                <div
                  className={`w-14 h-14 rounded-tr-full transition-all duration-200 cursor-pointer ${
                    simonColor === "red" ? "bg-red-400 scale-95 shadow-[0_0_15px_rgba(248,113,113,0.7)]" : "bg-red-700/60"
                  }`}
                  onClick={playSimonStep}
                />
                <div
                  className={`w-14 h-14 rounded-bl-full transition-all duration-200 cursor-pointer ${
                    simonColor === "yellow" ? "bg-yellow-400 scale-95 shadow-[0_0_15px_rgba(250,204,21,0.7)]" : "bg-yellow-700/60"
                  }`}
                  onClick={playSimonStep}
                />
                <div
                  className={`w-14 h-14 rounded-br-full transition-all duration-200 cursor-pointer ${
                    simonColor === "blue" ? "bg-blue-400 scale-95 shadow-[0_0_15px_rgba(96,165,250,0.7)]" : "bg-blue-700/60"
                  }`}
                  onClick={playSimonStep}
                />
                {/* Center Core */}
                <div className="absolute w-12 h-12 rounded-full bg-brand-bg border border-brand-border flex items-center justify-center text-[7px] uppercase font-bold text-gray-400 text-center select-none shadow-md cursor-pointer hover:border-brand-accent transition-colors duration-200" onClick={playSimonStep}>
                  {simonColor ? "Active" : "Tap"}
                </div>
              </div>

              {/* Simon Game status bar */}
              <div className="absolute bottom-3 left-4 right-4 bg-brand-bg/90 border border-brand-border/60 rounded-sm py-1.5 px-3 flex items-center justify-between text-[9px] text-gray-500">
                <span>Simon Game Sequence</span>
                <span className="font-heading font-extrabold text-[8px] text-brand-accent tracking-widest uppercase">
                  {simonPattern.length > 0 ? simonPattern.join(" • ") : "No steps yet"}
                </span>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-heading font-extrabold text-lg text-white uppercase tracking-wider group-hover:text-brand-accent transition-colors duration-300 odoo-header">
                    Simon Logic Game
                  </h3>
                  <span className="px-2 py-0.5 rounded-sm bg-brand-border text-[9px] font-extrabold text-gray-400 tracking-widest uppercase">
                    Interactive
                  </span>
                </div>
                
                <p className="font-sans font-light text-xs text-gray-400 leading-relaxed mb-6">
                  A responsive logic-based pattern game built with custom interactive scripts, fluid event handlers, and structured keyframes simulating hardware game systems.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["HTML5", "CSS3", "JavaScript", "Event Handlers", "Audio Context"].map((t) => (
                    <span key={t} className="text-[10px] font-sans font-medium text-gray-400 px-2 py-0.5 border border-brand-border bg-brand-card/30">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <a
                  href="https://github.com/Subhammandal5555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-xs uppercase tracking-widest font-semibold text-white hover:text-brand-accent flex items-center gap-1.5 transition-colors duration-300"
                >
                  <span>Codebase</span>
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
