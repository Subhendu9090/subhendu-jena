import DecorativeBackground from "@/components/DecorativeBackground";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black">
      {/* Background Decorations */}
      <DecorativeBackground />
      <HeroSection />
    </div>
  );
}
