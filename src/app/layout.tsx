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
  title: "Subham Mandal",
  description: "Subham Mandal's portfolio showcasing Next.js, Tailwind CSS, TypeScript, and high-performance UI engineering for web & embedded systems.",
  keywords: ["Subham Mandal", "Subham Mandal Portfolio", "UI Engineer India", "Frontend Developer", "Next.js Expert", "Electronics Engineer"],
  authors: [{ name: "Subham Mandal" }],
  creator: "Subham Mandal",
  metadataBase: new URL("https://subhammandal.in"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Subham Mandal",
    description: "Subham Mandal's portfolio showcasing Next.js, Tailwind CSS, TypeScript, and high-performance UI engineering for web & embedded systems.",
    url: "https://subhammandal.in",
    siteName: "Subham Mandal Portfolio",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Subham Mandal Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Subham Mandal",
    description: "Subham Mandal's portfolio showcasing Next.js, Tailwind CSS, TypeScript, and high-performance UI engineering for web & embedded systems.",
    images: ["/favicon.png"],
  },
  icons: {
    icon: "/favicon.png",
  },
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
