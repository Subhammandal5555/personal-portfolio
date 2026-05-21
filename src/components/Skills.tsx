"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Cpu, ShieldCheck } from "lucide-react";

const skillCategories = [
  {
    id: "web",
    title: "Web Development",
    icon: Code,
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    id: "embedded",
    title: "Embedded & IoT",
    icon: Cpu,
    skills: [
      { name: "C Language", level: 88 },
      { name: "Embedded Systems", level: 80 },
      { name: "TI C2000 Platforms", level: 75 },
      { name: "Code Composer Studio (CCS)", level: 75 },
      { name: "MATLAB", level: 70 },
    ],
  },
  {
    id: "tools",
    title: "Software & Tools",
    icon: ShieldCheck,
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 90 },
      { name: "Systems Design", level: 80 },
      { name: "Debugging & Testing", level: 85 },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("web");

  return (
    <section id="skills" className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Subtle backdrop flare */}
      <div className="absolute right-0 top-1/3 w-[300px] h-[300px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-sans text-xs uppercase tracking-widest text-brand-accent font-medium mb-3 block">
            Capabilities
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl tracking-tight text-white mb-4">
            TECHNICAL <span className="font-light text-gray-400">STACK</span>
          </h2>
          <div className="w-12 h-[2px] bg-brand-accent" />
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-3 px-6 py-3 border font-heading font-extrabold text-xs uppercase tracking-widest transition-all duration-300 ${
                  isActive
                    ? "bg-brand-accent/15 border-brand-accent text-white shadow-[0_0_15px_rgba(135,90,123,0.25)]"
                    : "bg-brand-card/45 border-brand-border text-gray-400 hover:text-white hover:border-gray-600"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-brand-accent" : "text-gray-500"}`} />
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Display Cards Grid */}
        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            {skillCategories.map(
              (category) =>
                category.id === activeTab && (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    {category.skills.map((skill, index) => (
                      <div
                        key={skill.name}
                        className="p-6 rounded-lg bg-brand-card border border-brand-border hover:border-brand-accent/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(135,90,123,0.1)] group"
                      >
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-sans font-semibold text-sm sm:text-base text-white tracking-wide group-hover:text-brand-accent transition-colors duration-300">
                            {skill.name}
                          </span>
                          <span className="font-heading font-extrabold text-xs text-brand-accent/80 tracking-wider">
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Progress Bar background */}
                        <div className="h-1.5 w-full bg-brand-bg rounded-full overflow-hidden border border-brand-border/30">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 0.8, delay: index * 0.05, ease: "easeOut" }}
                            className="h-full bg-brand-accent rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
