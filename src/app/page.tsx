import DecorativeBackground from "@/components/DecorativeBackground";
import HeroSection from "@/components/Home/HeroSection";
import WhoAmI from "@/components/Home/WhoAmI";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black">
      {/* Background Decorations */}
      <DecorativeBackground />
      <HeroSection />
      <WhoAmI/>
    </div>
  );
}
