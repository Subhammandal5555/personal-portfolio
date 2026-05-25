import type { Metadata } from "next";
import Home from "../page";

export const metadata: Metadata = {
  title: "About | Subham Mandal",
  description: "Learn about Subham Mandal's engineering background: ECE student at IIT BHU & Cooch Behar Govt Engineering College, and Full-Stack Web Developer specialized in Next.js.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <Home />;
}
