"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cpu } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/", id: "home" },
  { name: "About", href: "/about", id: "about" },
  { name: "Skills", href: "/skills", id: "skills" },
  { name: "Projects", href: "/projects", id: "projects" },
  { name: "Contact", href: "/contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMounted, setIsMounted] = useState(false);
  const isScrollingRef = useRef(false);

  // Set isMounted to true after a short timeout to prevent mount layout animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  // Background scrolled state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sniff path on mount and scroll to deep route
  useEffect(() => {
    const path = window.location.pathname;
    if (path !== "/") {
      const sectionId = path.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        isScrollingRef.current = true;
        setActiveSection(sectionId);
        const timer = setTimeout(() => {
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - 80; // 80px sticky offset
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
          setTimeout(() => {
            isScrollingRef.current = false;
          }, 800);
        }, 500);
        return () => clearTimeout(timer);
      }
    } else {
      setActiveSection("home");
    }
  }, []);

  // Popstate listener to handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const sectionId = path === "/" ? "home" : path.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        isScrollingRef.current = true;
        setActiveSection(sectionId);
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - 80;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 800);
      } else {
        setActiveSection(sectionId);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // IntersectionObserver to update activeSection and URL dynamically on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.45, // Triggers when section occupies roughly half the screen
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      if (isScrollingRef.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id);
          
          const path = id === "home" ? "/" : `/${id}`;
          if (window.location.pathname !== path) {
            window.history.replaceState(null, "", path);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    const sections = ["home", "about", "skills", "projects", "contact"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Custom click interceptor
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, sectionId: string) => {
    e.preventDefault();
    
    isScrollingRef.current = true;
    setActiveSection(sectionId);
    
    if (window.location.pathname !== href) {
      window.history.pushState(null, "", href);
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 80; // 80px offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setIsOpen(false);

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 800);
  };

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
        <Link 
          href="/" 
          onClick={(e) => handleNavClick(e, "/", "home")}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-lg bg-brand-card border border-brand-border flex items-center justify-center transition-all duration-300 group-hover:border-brand-accent group-hover:shadow-[0_0_15px_rgba(135,90,123,0.3)]">
            <Cpu className="w-5 h-5 text-brand-accent transition-transform duration-500 group-hover:rotate-180" />
          </div>
          <span className="font-heading font-extrabold text-xl tracking-wider text-white">
            SUBHAM<span className="text-brand-accent font-light">.M</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.id)}
                className="relative font-sans text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 tracking-wide"
              >
                {link.name}
                {isActive && (
                  <motion.span
                    className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-brand-accent"
                    layoutId="activeUnderline"
                    transition={
                      isMounted
                        ? { type: "spring", stiffness: 380, damping: 30 }
                        : { duration: 0 }
                    }
                  />
                )}
              </Link>
            );
          })}
          
          <a
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs uppercase tracking-widest px-4 py-2 border border-brand-border text-gray-400 rounded-sm hover:border-brand-accent/50 hover:text-brand-accent transition-all duration-300 hover:shadow-[0_0_15px_rgba(135,90,123,0.2)] bg-brand-card/20"
          >
            View CV
          </a>
          
          <Link
            href="/contact"
            onClick={(e) => handleNavClick(e, "/contact", "contact")}
            className="font-sans text-xs uppercase tracking-widest px-4 py-2 border border-brand-accent text-brand-accent rounded-sm bg-brand-accent/5 hover:bg-brand-accent hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(135,90,123,0.4)]"
          >
            Hire Me
          </Link>
        </nav>

        {/* Mobile Menu Trigger */}
        <button
          className="md:hidden text-gray-300 hover:text-white focus:outline-none p-2.5 -mr-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
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
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    
                    isScrollingRef.current = true;
                    setActiveSection(link.id);
                    
                    if (window.location.pathname !== link.href) {
                      window.history.pushState(null, "", link.href);
                    }
                    
                    const targetSelector = link.href === "/" ? "#home" : `#${link.id}`;
                    document.querySelector(targetSelector)?.scrollIntoView({ behavior: "smooth" });
                    
                    setTimeout(() => {
                      isScrollingRef.current = false;
                    }, 800);
                  }}
                  className={`font-sans text-base py-3 transition-colors duration-300 ${
                    activeSection === link.id
                      ? "text-brand-accent font-semibold"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center font-sans text-xs uppercase tracking-widest py-3 border border-brand-border text-gray-300 rounded-sm bg-brand-card/20 hover:border-brand-accent/50 hover:text-brand-accent transition-all duration-300"
              >
                View CV
              </a>
              <Link
                href="/contact"
                onClick={(e) => handleNavClick(e, "/contact", "contact")}
                className="w-full text-center font-sans text-xs uppercase tracking-widest py-3 border border-brand-accent text-brand-accent rounded-sm bg-brand-accent/5 hover:bg-brand-accent hover:text-white transition-all duration-300"
              >
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
