"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, Cpu, Eye, Download } from "lucide-react";
import { HandDrawnLoop, HandDrawnUnderline } from "@/components/HandDrawn";

export default function Hero() {
  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const heroItemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04 }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 15, filter: "blur(12px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.4, ease: "easeOut" as const }
    }
  };

  const handleCTAClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    sectionId: string
  ) => {
    e.preventDefault();
    window.history.pushState(null, "", href);
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 80; // 80px offset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-dvh flex flex-col justify-between items-center pt-28 pb-8 overflow-hidden bg-brand-bg scroll-mt-20"
    >
      {/* Background Decorative Mesh Glows */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-brand-accent/10 blur-[100px] pointer-events-none animate-pulse duration-[6s]" />
      <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] rounded-full bg-brand-accent/5 blur-[120px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#262E3B0d_1px,transparent_1px),linear-gradient(to_bottom,#262E3B0d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex-grow flex flex-col justify-center items-center text-center">
        <motion.div
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Subheading Badges */}
          <motion.div
            variants={heroItemVariants}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-border bg-brand-card/40 backdrop-blur-sm mb-6 text-xs uppercase tracking-widest text-gray-400 font-sans"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#40D04E] animate-ping" />
            <span>Open For Opportunities</span>
          </motion.div>

          {/* Main Title - Cyberpunk high-contrast typography with staggered blur-reveal */}
          <motion.h1 
            variants={containerVariants} 
            initial="hidden" 
            animate="visible" 
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl uppercase flex flex-col md:flex-row items-center justify-center text-center w-full mx-auto gap-y-2 md:gap-y-0 md:gap-x-4 font-sans mb-6 leading-none will-change-transform transform-gpu"
          >
            {/* First Name Block */}
            <span className="text-white font-black tracking-tight whitespace-nowrap text-center block md:inline w-full md:w-auto">
              {"SUBHAM".split("").map((char, index) => <motion.span key={`subham-${index}`} variants={letterVariants} className="inline-block will-change-transform transform-gpu">{char}</motion.span>)}
            </span>

            {/* Last Name Block */}
            <span className="text-purple-400 font-light tracking-[0.2em] md:tracking-[0.25em] pl-[0.2em] md:pl-[0.25em] whitespace-nowrap drop-shadow-[0_0_20px_rgba(168,85,247,0.45)] text-center block md:inline w-full md:w-auto">
              {"MANDAL".split("").map((char, index) => <motion.span key={`mandal-${index}`} variants={letterVariants} className="inline-block will-change-transform transform-gpu">{char}</motion.span>)}
            </span>
          </motion.h1>

          {/* Sub-Title / Role with extreme weight contrasts */}
          <motion.div
            variants={heroItemVariants}
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
            variants={heroItemVariants}
            className="font-sans font-light text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-12"
          >
            Bridging <HandDrawnLoop>software & hardware</HandDrawnLoop> to build <HandDrawnUnderline>high-performance</HandDrawnUnderline> digital experiences. Specializing in responsive web apps and robust embedded systems.
          </motion.p>

          {/* Main CTA Buttons */}
          <motion.div
            variants={heroItemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
          >
            <Link
              href="/projects"
              onClick={(e) => handleCTAClick(e, "/projects", "projects")}
              className="group relative font-sans text-sm font-semibold tracking-wider uppercase px-8 py-4 bg-brand-accent text-white rounded-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(135,90,123,0.5)] hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>Explore Work</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            
            <Link
              href="/contact"
              onClick={(e) => handleCTAClick(e, "/contact", "contact")}
              className="font-sans text-sm font-medium tracking-wider uppercase px-8 py-4 border border-brand-border text-gray-300 rounded-sm hover:border-brand-accent hover:text-white bg-brand-card/25 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(135,90,123,0.15)] hover:-translate-y-0.5"
            >
              Get In Touch
            </Link>
          </motion.div>

          {/* Beautiful Glassmorphic CV Pill */}
          <motion.div
            variants={heroItemVariants}
            className="flex items-center gap-1 p-1 rounded-full border border-brand-border bg-brand-card/20 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:border-brand-accent/30 hover:shadow-[0_0_20px_rgba(135,90,123,0.1)] transition-all duration-500"
          >
            <a
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-3 rounded-full font-sans text-xs font-semibold tracking-wider text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              <Eye className="w-3.5 h-3.5 text-gray-400 group-hover:text-brand-accent transition-colors duration-300" />
              <span>View CV</span>
            </a>

            <div className="h-4 w-[1px] bg-brand-border/50" />

            <a
              href="/CV.pdf"
              download="Subham_Mandal_CV.pdf"
              className="group flex items-center gap-2 px-4 py-3 rounded-full font-sans text-xs font-semibold tracking-wider text-brand-accent hover:text-white hover:bg-brand-accent/80 transition-all duration-300"
            >
              <Download className="w-3.5 h-3.5 text-brand-accent group-hover:text-white transition-colors duration-300" />
              <span>Download CV</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Elegant Bottom Scroll Indicator */}
      <motion.div
        className="relative z-20 flex flex-col items-center gap-2 opacity-50 mt-auto pb-4 pointer-events-none"
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
