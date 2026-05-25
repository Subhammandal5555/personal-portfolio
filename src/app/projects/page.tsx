import type { Metadata } from "next";
import Home from "../page";

export const metadata: Metadata = {
  title: "Projects & Demos | Subham Mandal",
  description: "View Subham Mandal's project portfolio, featuring Edge-AI Fault Diagnosis DSP buck converters, the Gyananjali Web platform, Simon logic game, and Spotify frontend clone.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return <Home />;
}
