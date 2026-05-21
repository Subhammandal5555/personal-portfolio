import type { Metadata } from "next";
import { Outfit, Inter, Caveat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Subham Mandal | Full-Stack Web Developer & Electronics Engineer",
  description: "Portfolio of Subham Mandal, a passionate Electronics & Communication Engineering student, full-stack web developer, and GATE 2026 Qualified professional specialized in bridging software and hardware.",
  keywords: ["Subham Mandal", "Full-Stack Developer", "Electronics Engineer", "ECE Portfolio", "GATE 2026", "Next.js", "Framer Motion", "Embedded Systems", "TI C2000"],
  authors: [{ name: "Subham Mandal" }],
  creator: "Subham Mandal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="bg-brand-bg text-foreground min-h-full flex flex-col font-sans selection:bg-brand-accent/30 selection:text-white">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
