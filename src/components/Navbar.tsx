"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cpu } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active link detection based on section positions
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-bg/80 backdrop-blur-md border-b border-brand-border py-4"
          : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand/Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-brand-card border border-brand-border flex items-center justify-center transition-all duration-300 group-hover:border-brand-accent group-hover:shadow-[0_0_15px_rgba(135,90,123,0.3)]">
            <Cpu className="w-5 h-5 text-brand-accent transition-transform duration-500 group-hover:rotate-180" />
          </div>
          <span className="font-heading font-extrabold text-xl tracking-wider text-white odoo-header">
            SUBHAM<span className="text-brand-accent font-light">.M</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className="relative font-sans text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 tracking-wide"
              >
                {link.name}
                {isActive && (
                  <motion.span
                    className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-brand-accent"
                    layoutId="activeNavIndicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
          
          <a
            href="#contact"
            className="font-sans text-xs uppercase tracking-widest px-4 py-2 border border-brand-accent text-brand-accent rounded-sm bg-brand-accent/5 hover:bg-brand-accent hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(135,90,123,0.4)]"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Menu Trigger */}
        <button
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-card/95 border-b border-brand-border backdrop-blur-lg overflow-hidden absolute top-full left-0 w-full"
          >
            <div className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-sans text-base py-2 transition-colors duration-300 ${
                    activeSection === link.href.substring(1)
                      ? "text-brand-accent font-semibold"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center font-sans text-xs uppercase tracking-widest py-3 border border-brand-accent text-brand-accent rounded-sm bg-brand-accent/5 hover:bg-brand-accent hover:text-white transition-all duration-300"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
