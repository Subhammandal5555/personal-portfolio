import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { Cpu } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Sticky Top Glass Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* Visual Masterpiece Hero */}
        <Hero />

        {/* ECE & Dual Discipline Profile */}
        <About />

        {/* Structured Capabilities Tab Matrix */}
        <Skills />

        {/* High-Fidelity Project Deck */}
        <Projects />

        {/* Netlify Free Form Connection Portal */}
        <Contact />
      </main>

      {/* Premium Sleek Minimalist Footer */}
      <footer className="bg-brand-bg border-t border-brand-border py-12">
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
    </>
  );
}
