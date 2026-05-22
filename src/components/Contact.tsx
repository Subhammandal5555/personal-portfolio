"use client";

import { motion } from "framer-motion";
import { Mail, Send, MapPin, Phone } from "lucide-react";
import { HandDrawnUnderline } from "@/components/HandDrawn";
import { useState } from "react";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Netlify form handler simulation for React client safety
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // If Netlify is rendering this, it will inject standard action handlers.
    // For pure client-side interactivity, we will just allow default form action or simulate.
    // However, since we are doing static HTML export, standard Netlify form submission uses POST.
    // We do NOT call e.preventDefault() so that Netlify can actually receive the post request,
    // OR we submit via fetch. Let's submit via fetch so it's a seamless SPA experience!
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        setFormSubmitted(true);
        form.reset();
      })
      .catch((error) => console.error("Form submission error:", error));
  };

  return (
    <section id="contact" className="pt-12 pb-16 bg-brand-bg relative overflow-hidden scroll-mt-20">
      {/* Decorative ambient flare */}
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-sans text-xs uppercase tracking-widest text-brand-accent font-medium mb-3 block">
            Connectivity
          </span>
          <h2 className="mb-4">
            <HandDrawnUnderline className="font-marker font-normal text-3xl sm:text-5xl tracking-wide text-white">
              Get In <span className="text-brand-accent">Touch</span>
            </HandDrawnUnderline>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Contact Info Details (takes 5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="flex flex-col gap-6">
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-wide">
                Let's discuss hardware architectures, full-stack ecosystems, or business growth.
              </h3>
              <p className="font-sans font-light text-sm text-gray-400 leading-relaxed">
                Whether you have an upcoming responsive web application project, an IoT micro-controller design puzzle, or are looking for a technical partner to help scale your operations—I am fully open to new opportunities to join innovative teams and grow businesses together. Feel free to drop a message.
              </p>

              <div className="flex flex-col gap-4 mt-4 font-sans text-sm text-gray-300">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-brand-card/45 border border-brand-border">
                  <div className="p-2 rounded-md bg-brand-accent/15 border border-brand-accent/35 text-brand-accent">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-wider text-gray-400 font-light">Email Address</span>
                    <a 
                      href="mailto:contact@subhammandal.in" 
                      className="text-white hover:text-brand-accent transition-colors duration-200"
                    >
                      contact@subhammandal.in
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-brand-card/45 border border-brand-border">
                  <div className="p-2 rounded-md bg-brand-accent/15 border border-brand-accent/35 text-brand-accent">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-wider text-gray-400 font-light">Location</span>
                    <span className="text-white">West Bengal, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Channels Container */}
            <div className="mt-12">
              <span className="block font-sans text-[10px] uppercase tracking-widest text-gray-500 font-light mb-4">
                Social Networks & Channels
              </span>
              <div className="flex gap-6 items-center">
                <a
                  href="https://www.linkedin.com/in/-subham-mandal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-brand-card border border-brand-border flex items-center justify-center text-gray-400 hover:text-[#0077B5] hover:border-[#0077B5]/50 hover:shadow-[0_0_15px_rgba(0,119,181,0.25)] transition-all duration-300 ease-in-out"
                  title="LinkedIn"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href="https://github.com/Subhammandal5555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-brand-card border border-brand-border flex items-center justify-center text-gray-400 hover:text-white hover:border-white/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.25)] transition-all duration-300 ease-in-out"
                  title="GitHub"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <a
                  href="https://x.com/YourSubham_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-brand-card border border-brand-border flex items-center justify-center text-gray-400 hover:text-slate-200 hover:border-slate-200/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 ease-in-out"
                  title="Twitter (X)"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* Right Form Container (takes 7 columns) */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-lg bg-brand-card border border-brand-border shadow-2xl relative">
              
              {/* Form submit confirmation modal layer */}
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-brand-card rounded-lg flex flex-col justify-center items-center p-8 text-center z-20"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-success/15 border border-brand-success/40 text-brand-success flex items-center justify-center mb-6">
                    <Send className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading font-extrabold text-xl text-white uppercase tracking-wider mb-3">
                    Message Sent!
                  </h4>
                  <p className="font-sans font-light text-sm text-gray-400 max-w-sm mb-6">
                    Thank you, Subham has received your message and will respond shortly via email.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="font-sans text-xs uppercase tracking-widest font-semibold px-6 py-3 border border-brand-border hover:border-brand-accent text-gray-300 hover:text-white transition-all duration-300"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : null}

              {/* Netlify Free Form Detection Form */}
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
              >
                {/* Netlify integration requirement hidden variables */}
                <input type="hidden" name="form-name" value="contact" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-sans text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      placeholder="e.g. John Doe"
                      className="w-full bg-brand-bg/50 border border-brand-border rounded-sm py-3 px-4 font-sans text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-accent transition-colors duration-300"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-sans text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      placeholder="e.g. john@example.com"
                      className="w-full bg-brand-bg/50 border border-brand-border rounded-sm py-3 px-4 font-sans text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-accent transition-colors duration-300"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-sans text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
                    Message
                  </label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Type your project proposal, inquiry, or note here..."
                    className="w-full bg-brand-bg/50 border border-brand-border rounded-sm py-3 px-4 font-sans text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-accent transition-colors duration-300 resize-none"
                  />
                </div>

                {/* Netlify recaptcha helper element (optional hook) */}
                <div className="hidden">
                  <label>
                    Don’t fill this out if you’re human: <input name="bot-field" />
                  </label>
                </div>

                {/* CTA Button with 300ms transitions and shadow-glow lift on hover */}
                <button
                  type="submit"
                  className="w-full font-sans text-xs uppercase tracking-widest font-semibold py-4 bg-brand-accent text-white rounded-sm hover:shadow-[0_0_25px_rgba(135,90,123,0.5)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Message</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
