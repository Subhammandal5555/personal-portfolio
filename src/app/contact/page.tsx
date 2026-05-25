import type { Metadata } from "next";
import Home from "../page";

export const metadata: Metadata = {
  title: "Contact & Hire | Subham Mandal",
  description: "Get in touch with Subham Mandal for collaborations, full-stack software inquiries, or embedded electronics engineering contracts. Securely masked email integration inside.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <Home />;
}
