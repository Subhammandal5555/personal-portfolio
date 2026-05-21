"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap, Cpu, Layers } from "lucide-react";

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
          <h2 className="font-marker font-normal text-3xl sm:text-5xl tracking-wide text-white mb-4">
            About <span className="text-brand-accent">Me</span>
          </h2>
          <div className="w-12 h-[2px] bg-brand-accent" />
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
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
                    Crafting highly responsive web systems, optimized state logic, and modern UX flows using Node.js, Express, and Next.js.
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
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* GATE 2026 Academic Qualification Card (Framed in Emerald #24A148) */}
            <motion.div
              custom={1}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 rounded-lg bg-brand-card border-2 border-brand-success shadow-[0_0_20px_rgba(36,161,72,0.15)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-success/5 rounded-bl-full pointer-events-none flex items-center justify-center">
                <Award className="w-8 h-8 text-brand-success/30 translate-x-3 -translate-y-3" />
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-md bg-brand-success/15 border border-brand-success/30 text-brand-success flex items-center justify-center">
                  <Award className="w-6 h-6" />
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

      </div>
    </section>
  );
}
