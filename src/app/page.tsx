import DecorativeBackground from "@/components/DecorativeBackground";
import AboutNextProject from "@/components/Home/AboutNextProject";
import HeroSection from "@/components/Home/HeroSection";
import Projects from "@/components/Home/Projects";
import Skills from "@/components/Home/Skills";
import WhoAmI from "@/components/Home/WhoAmI";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black">
      {/* Background Decorations */}
      <DecorativeBackground />
      <HeroSection />
      <WhoAmI/>
      <Skills/>
      <Projects/>
      <AboutNextProject/>
    </div>
  );
}
