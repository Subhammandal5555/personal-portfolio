"use client";

import { useState, useEffect, useRef } from "react";
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

  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Helper to determine clean URL path vs hash based on environment
  const getTargetUrl = (sectionId: string) => {
    if (sectionId === "home") return "/";
    const isLocal = typeof window !== "undefined" && 
      (window.location.hostname === "localhost" || 
       window.location.hostname === "127.0.0.1" || 
       window.location.port !== "");
    return isLocal ? `/#${sectionId}` : `/${sectionId}`;
  };

  // Programmatic offset-aware smooth scrolling utility that updates history path/hash safely
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.substring(1);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      // Lock intersection observer updates during programmatic scrolling
      isScrollingRef.current = true;
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      const targetUrl = getTargetUrl(sectionId);
      window.history.pushState(null, "", targetUrl);
      setActiveSection(sectionId);

      // Release lock after smooth scroll completes
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 800);
    }
  };

  useEffect(() => {
    const handleScrollHeader = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScrollHeader);

    // Dynamic section detection using Intersection Observer
    const observerOptions = {
      root: null, // viewport
      rootMargin: "-40% 0px -50% 0px", // triggers when section occupies the sweet spot of the screen
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (isScrollingRef.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
          
          // Smoothly update browser URL bar without polluting browser back history
          const targetUrl = getTargetUrl(sectionId);
          window.history.replaceState(null, "", targetUrl);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = ["home", "about", "skills", "projects", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScrollHeader);
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    // Handle clean URL or hash direct hits/refreshes by scrolling on mount
    const hash = typeof window !== "undefined" ? window.location.hash.substring(1) : "";
    const path = typeof window !== "undefined" ? window.location.pathname.substring(1) : "";
    const targetId = hash || path;

    if (targetId && ["about", "skills", "projects", "contact"].includes(targetId)) {
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
          setActiveSection(targetId);
        }
      }, 500);
    }
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
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-lg bg-brand-card border border-brand-border flex items-center justify-center transition-all duration-300 group-hover:border-brand-accent group-hover:shadow-[0_0_15px_rgba(135,90,123,0.3)]">
            <Cpu className="w-5 h-5 text-brand-accent transition-transform duration-500 group-hover:rotate-180" />
          </div>
          <span className="font-heading font-extrabold text-xl tracking-wider text-white">
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
                onClick={(e) => handleNavClick(e, link.href)}
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
            onClick={(e) => handleNavClick(e, "#contact")}
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
                  onClick={(e) => {
                    setIsOpen(false);
                    handleNavClick(e, link.href);
                  }}
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
                onClick={(e) => {
                  setIsOpen(false);
                  handleNavClick(e, "#contact");
                }}
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
