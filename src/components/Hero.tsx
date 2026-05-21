"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Cpu } from "lucide-react";

// Reusable hand-drawn marker loop component
function HandDrawnLoop({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block px-3 py-1 select-none">
      <span className="relative z-10 text-white font-extrabold">{children}</span>
      <svg
        className="absolute top-0 left-0 w-full h-full overflow-visible pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 2,50 C 5,10 95,5 98,45 C 100,75 80,95 45,95 C 10,95 -2,70 5,45 C 10,25 35,5 92,8"
          stroke="#875A7B"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
        />
      </svg>
    </span>
  );
}

// Reusable hand-drawn fluid rough double underline component
function HandDrawnUnderline({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block px-1 select-none">
      <span className="relative z-10 font-extrabold text-white">{children}</span>
      <svg
        className="absolute bottom-[-8px] left-0 w-full h-[12px] overflow-visible pointer-events-none"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
      >
        {/* Underline stroke 1 */}
        <motion.path
          d="M 2, 5 Q 50, 2 98, 7"
          stroke="#875A7B"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        />
        {/* Underline stroke 2 */}
        <motion.path
          d="M 8, 9 Q 55, 6 92, 8"
          stroke="#875A7B"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
        />
      </svg>
    </span>
  );
}

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-brand-bg"
    >
      {/* Background Decorative Mesh Glows */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-brand-accent/10 blur-[100px] pointer-events-none animate-pulse duration-[6s]" />
      <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] rounded-full bg-brand-accent/5 blur-[120px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#262E3B0d_1px,transparent_1px),linear-gradient(to_bottom,#262E3B0d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Subheading Badges */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-border bg-brand-card/40 backdrop-blur-sm mb-6 text-xs uppercase tracking-widest text-gray-400 font-sans"
          >
            <span className="flex h-2 w-2 rounded-full bg-brand-accent animate-ping" />
            <span>Open For Opportunities</span>
          </motion.div>

          {/* Main Title - Heavy sans-serif with stylized light italic alternate */}
          <motion.h1
            variants={itemVariants}
            className="font-heading font-extrabold text-4xl sm:text-6xl md:text-8xl tracking-tight text-white mb-6 leading-none"
          >
            SUBHAM <span className="font-light italic text-brand-accent">MANDAL</span>
          </motion.h1>

          {/* Sub-Title / Role with extreme weight contrasts */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-3 justify-center mb-10 font-heading text-lg sm:text-2xl tracking-wide max-w-3xl"
          >
            <span className="text-brand-accent font-extrabold flex items-center gap-2">
              <Code2 className="w-5 h-5 inline-block" /> FULL-STACK DEVELOPER
            </span>
            <span className="hidden sm:inline text-brand-border">|</span>
            <span className="text-gray-300 font-light flex items-center gap-2">
              <Cpu className="w-5 h-5 inline-block" /> ELECTRONICS ENGINEER
            </span>
          </motion.div>

          {/* Tagline wrapping key words in HandDrawn components */}
          <motion.p
            variants={itemVariants}
            className="font-sans font-light text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-12"
          >
            Bridging <HandDrawnLoop>software & hardware</HandDrawnLoop> to build <HandDrawnUnderline>high-performance</HandDrawnUnderline> digital experiences. Specializing in responsive web apps and robust embedded systems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#projects"
              className="group relative font-sans text-sm font-semibold tracking-wider uppercase px-8 py-4 bg-brand-accent text-white rounded-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(135,90,123,0.5)] hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>Explore Work</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            
            <a
              href="#contact"
              className="font-sans text-sm font-medium tracking-wider uppercase px-8 py-4 border border-brand-border text-gray-300 rounded-sm hover:border-brand-accent hover:text-white bg-brand-card/25 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(135,90,123,0.15)] hover:-translate-y-0.5"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Elegant Bottom Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5, y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-[10px] uppercase tracking-widest font-sans text-gray-500 font-light">Scroll Down</span>
        <div className="w-[1px] h-10 bg-brand-border relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-accent" />
        </div>
      </motion.div>
    </section>
  );
}
