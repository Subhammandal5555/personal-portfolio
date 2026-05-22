"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap, Cpu, Layers, Calendar } from "lucide-react";
import { HandDrawnUnderline } from "@/components/HandDrawn";

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        delay: custom * 0.1,
      },
    }),
  };

  return (
    <section id="about" className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-sans text-xs uppercase tracking-widest text-brand-accent font-medium mb-3 block">
            Profile
          </span>
          <h2 className="mb-4">
            <HandDrawnUnderline className="font-marker font-normal text-3xl sm:text-5xl tracking-wide text-white">
              About <span className="text-brand-accent">Me</span>
            </HandDrawnUnderline>
          </h2>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:items-stretch items-start">
          
          {/* Left Bio Details (takes 7 columns) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-wide">
              Bridging the gap between software systems and hardware engineering.
            </h3>
            
            <p className="font-sans font-light text-sm sm:text-base text-gray-400 leading-relaxed">
              I am an Electronics & Communication Engineering student who fell in love with full-stack web development. I thrive at the intersection where code meets circuitry, building sleek, modern web architectures while mastering embedded system designs.
            </p>

            <p className="font-sans font-light text-sm sm:text-base text-gray-400 leading-relaxed">
              My engineering background trains me to build structured, mathematically sound, and optimized digital infrastructures. I look at web platforms not just as UI mockups, but as complex, high-frequency software ecosystems requiring pixel-perfect efficiency and low latency.
            </p>

            {/* Core Values / Dual Discipline Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div className="p-5 rounded-lg bg-brand-card border border-brand-border flex items-start gap-4">
                <div className="p-3 rounded-md bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-sm text-white uppercase tracking-wider mb-1">
                    Web Architectures
                  </h4>
                  <p className="font-sans font-light text-xs text-gray-400 leading-relaxed">
                    Building high-performance systems from the ground up using Next.js & Node.js, optimized for Core Web Vitals, maximum speed, SEO optimization, and clean page ranking.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-lg bg-brand-card border border-brand-border flex items-start gap-4">
                <div className="p-3 rounded-md bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-sm text-white uppercase tracking-wider mb-1">
                    Embedded Engineering
                  </h4>
                  <p className="font-sans font-light text-xs text-gray-400 leading-relaxed">
                    Designing micro-controller solutions, using platforms like TI C2000, Code Composer Studio (CCS), and custom software drivers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Highlights Grid (takes 5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:justify-between lg:h-full">
            
            {/* GATE 2026 Academic Qualification Card (Framed in Emerald #24A148) */}
            <motion.div
              custom={1}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="py-4 px-6 rounded-lg bg-brand-card border-2 border-brand-success shadow-[0_0_20px_rgba(36,161,72,0.15)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-success/5 rounded-bl-full pointer-events-none flex items-center justify-center">
                <Award className="w-8 h-8 text-brand-success/30 translate-x-3 -translate-y-3" />
              </div>

              <div className="flex items-center gap-3 mb-2.5">
                <div className="p-2 rounded-md bg-brand-success/15 border border-brand-success/30 text-brand-success flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-brand-success font-semibold">
                    Achievement Accent
                  </span>
                  <h4 className="font-heading font-extrabold text-base text-white uppercase tracking-wider">
                    GATE 2026 Qualified
                  </h4>
                </div>
              </div>

              <p className="font-sans font-light text-sm text-gray-300 leading-relaxed">
                Qualified in the Graduate Aptitude Test in Engineering (GATE 2026) in Electronics and Communication Engineering, validating core technical fundamentals.
              </p>
            </motion.div>

            {/* Academic Highlights Card */}
            <motion.div
              custom={2}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 rounded-lg bg-brand-card border border-brand-border flex gap-4"
            >
              <div className="p-2.5 rounded-md bg-brand-accent/10 border border-brand-accent/20 text-brand-accent flex h-fit items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-extrabold text-sm text-white uppercase tracking-wider mb-2">
                  Electronics & Communication Engineering
                </h4>
                <p className="font-sans font-light text-xs text-gray-400 leading-relaxed">
                  Active undergraduate student pursuing specializations in electronics, micro-architectures, data structures, and telecommunication frameworks.
                </p>
              </div>
            </motion.div>

            {/* Quick Stats Card */}
            <motion.div
              custom={3}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 rounded-lg bg-brand-card border border-brand-border grid grid-cols-2 gap-4"
            >
              <div className="text-center p-3 border-r border-brand-border">
                <span className="block font-heading font-extrabold text-3xl text-brand-accent">
                  100%
                </span>
                <span className="block font-sans font-light text-[10px] text-gray-400 uppercase tracking-widest mt-1">
                  Commitment
                </span>
              </div>
              <div className="text-center p-3">
                <span className="block font-heading font-extrabold text-3xl text-brand-accent">
                  Dual
                </span>
                <span className="block font-sans font-light text-[10px] text-gray-400 uppercase tracking-widest mt-1">
                  Specialization
                </span>
              </div>
            </motion.div>

          </div>

        </div>

        {/* Dedicated High-Fidelity Education & Experience Visual Timelines */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Experience Timeline Column */}
          <div>
            <div className="mb-12">
              <h3 className="mb-4">
                <HandDrawnUnderline className="font-marker font-normal text-2xl sm:text-4xl tracking-wide text-white">
                  Experience
                </HandDrawnUnderline>
              </h3>
            </div>

            <div className="relative pl-8 border-l border-brand-border/60 flex flex-col gap-8">
              
              {/* Entry 1: Summer Research Intern at IIT BHU */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative p-6 rounded-lg bg-brand-card border border-brand-border hover:border-brand-accent/50 transition-all duration-300 group"
              >
                {/* Visual Connector Dot */}
                <div className="absolute -left-[41px] top-7 w-4 h-4 rounded-full bg-brand-accent/80 border-4 border-brand-bg group-hover:scale-125 group-hover:bg-brand-accent transition-all duration-300 z-10" />

                <div className="flex justify-between items-start gap-4 mb-3">
                  <div>
                    <h4 className="font-heading font-extrabold text-base sm:text-lg text-white">
                      Summer Research Intern
                    </h4>
                    <span className="font-sans text-xs text-brand-accent font-semibold text-wrap pr-2">
                      Indian Institute of Technology (BHU), Varanasi
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-[10px] text-gray-500 font-sans tracking-wider uppercase font-medium bg-brand-border/30 px-2 py-1 rounded shrink-0">
                    <Calendar className="w-3 h-3" /> Jun 2025 - Jul 2025
                  </span>
                </div>

                <p className="font-sans font-light text-sm text-gray-400 leading-relaxed mb-4">
                  Designed and implemented control strategies for different types of converters on the TI C2000 F28379D microcontroller, ensuring efficient power regulation and dynamic response.
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-sans font-semibold bg-brand-accent/10 border border-brand-accent/30 text-brand-accent uppercase tracking-wider">
                    Algorithm Development
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-sans font-semibold bg-brand-accent/10 border border-brand-accent/30 text-brand-accent uppercase tracking-wider">
                    Hardware Architecture
                  </span>
                </div>
              </motion.div>

              {/* Entry 2: Community Manager at GDSC CGEC */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative p-6 rounded-lg bg-brand-card border border-brand-border hover:border-brand-accent/50 transition-all duration-300 group"
              >
                {/* Visual Connector Dot */}
                <div className="absolute -left-[41px] top-7 w-4 h-4 rounded-full bg-brand-accent/80 border-4 border-brand-bg group-hover:scale-125 group-hover:bg-brand-accent transition-all duration-300 z-10" />

                <div className="flex justify-between items-start gap-4 mb-3">
                  <div>
                    <h4 className="font-heading font-extrabold text-base sm:text-lg text-white">
                      Community Manager
                    </h4>
                    <span className="font-sans text-xs text-brand-accent font-semibold">
                      Google Developer Student Clubs (GDSC), CGEC
                    </span>
                  </div>
                </div>

                <p className="font-sans font-light text-sm text-gray-400 leading-relaxed mb-4">
                  Led the local student developer community, organized technical workshops, and drove collaborative engineering projects focused on emerging technologies.
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-sans font-semibold bg-brand-accent/10 border border-brand-accent/30 text-brand-accent uppercase tracking-wider">
                    Web Applications
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-sans font-semibold bg-brand-accent/10 border border-brand-accent/30 text-brand-accent uppercase tracking-wider">
                    Management
                  </span>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Education Timeline Column */}
          <div>
            <div className="mb-12">
              <h3 className="mb-4">
                <HandDrawnUnderline className="font-marker font-normal text-2xl sm:text-4xl tracking-wide text-white">
                  Education
                </HandDrawnUnderline>
              </h3>
            </div>

            <div className="relative pl-8 border-l border-brand-border/60 flex flex-col gap-8">
              
              {/* Entry 1: BTech */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative p-6 rounded-lg bg-brand-card border border-brand-border hover:border-brand-accent/50 transition-all duration-300 group"
              >
                {/* Visual Connector Dot */}
                <div className="absolute -left-[41px] top-7 w-4 h-4 rounded-full bg-brand-accent/80 border-4 border-brand-bg group-hover:scale-125 group-hover:bg-brand-accent transition-all duration-300 z-10" />

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
                  <div>
                    <h4 className="font-heading font-extrabold text-base sm:text-lg text-white">
                      Cooch Behar Government Engineering College
                    </h4>
                    <span className="font-sans text-xs text-brand-accent font-semibold block mt-0.5">
                      Bachelor of Technology - BTech, Electronics and Communication Engineering
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-[10px] text-gray-500 font-sans tracking-wider uppercase font-medium bg-brand-border/30 px-2 py-1 rounded shrink-0 whitespace-nowrap">
                    <Calendar className="w-3 h-3" /> Nov 2022 - Jul 2026 (expected)
                  </span>
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Grade:</span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-sans font-bold bg-brand-success/15 border border-brand-success/30 text-brand-success">
                    7.04 CGPA
                  </span>
                </div>
              </motion.div>

              {/* Entry 2: HS */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative p-6 rounded-lg bg-brand-card border border-brand-border hover:border-brand-accent/50 transition-all duration-300 group"
              >
                {/* Visual Connector Dot */}
                <div className="absolute -left-[41px] top-7 w-4 h-4 rounded-full bg-brand-accent/80 border-4 border-brand-bg group-hover:scale-125 group-hover:bg-brand-accent transition-all duration-300 z-10" />

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
                  <div>
                    <h4 className="font-heading font-extrabold text-base sm:text-lg text-white">
                      Bankura Christian Collegiate High School
                    </h4>
                    <span className="font-sans text-xs text-brand-accent font-semibold block mt-0.5">
                      Higher Secondary (Class XII)
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-[10px] text-gray-500 font-sans tracking-wider uppercase font-medium bg-brand-border/30 px-2 py-1 rounded shrink-0 whitespace-nowrap">
                    <Calendar className="w-3 h-3" /> May 2020 - Mar 2022
                  </span>
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Grade:</span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-sans font-bold bg-brand-success/15 border border-brand-success/30 text-brand-success">
                    91.2%
                  </span>
                </div>
              </motion.div>

              {/* Entry 3: Secondary */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative p-6 rounded-lg bg-brand-card border border-brand-border hover:border-brand-accent/50 transition-all duration-300 group"
              >
                {/* Visual Connector Dot */}
                <div className="absolute -left-[41px] top-7 w-4 h-4 rounded-full bg-brand-accent/80 border-4 border-brand-bg group-hover:scale-125 group-hover:bg-brand-accent transition-all duration-300 z-10" />

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
                  <div>
                    <h4 className="font-heading font-extrabold text-base sm:text-lg text-white">
                      Ramharipur Ramakrishna Mission High School
                    </h4>
                    <span className="font-sans text-xs text-brand-accent font-semibold block mt-0.5">
                      Secondary (Class X)
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-[10px] text-gray-500 font-sans tracking-wider uppercase font-medium bg-brand-border/30 px-2 py-1 rounded shrink-0 whitespace-nowrap">
                    <Calendar className="w-3 h-3" /> Jan 2015 - Feb 2020
                  </span>
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Grade:</span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-sans font-bold bg-brand-success/15 border border-brand-success/30 text-brand-success">
                    84.8%
                  </span>
                </div>
              </motion.div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
