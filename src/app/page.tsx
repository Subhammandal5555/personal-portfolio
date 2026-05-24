import Hero from "@/components/Hero";
import BannerMarquee from "@/components/BannerMarquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <BannerMarquee />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
