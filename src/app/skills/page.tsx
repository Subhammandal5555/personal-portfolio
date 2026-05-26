import type { Metadata } from "next";
import Home from "../page";

export const metadata: Metadata = {
  title: "Subham Mandal",
  description: "Explore Subham Mandal's software and hardware skill sets: Next.js, React, TypeScript, Tailwind CSS, TI C2000 DSP microcontrollers, Embedded C, and SVM ML models.",
  alternates: {
    canonical: "/skills",
  },
};

export default function SkillsPage() {
  return <Home />;
}
