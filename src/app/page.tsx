"use client";

import dynamic from "next/dynamic";
import DecorativeBackground from "@/components/DecorativeBackground";
import SkeletonSection from "@/components/SkeletonSection";
import HeroSectionSkeleton from "@/components/HeroSectionSkeleton";

// Lazy-loaded components with skeletons
const HeroSection = dynamic(() => import("@/components/Home/HeroSection"), {
  ssr: false,
  loading: () => <HeroSectionSkeleton />,
});
const WhoAmI = dynamic(() => import("@/components/Home/WhoAmI"), {
  ssr: false,
  loading: () => <SkeletonSection />,
});

const Skills = dynamic(() => import("@/components/Home/Skills"), {
  ssr: false,
  loading: () => <SkeletonSection />,
});

const Projects = dynamic(() => import("@/components/Home/Projects"), {
  ssr: false,
  loading: () => <SkeletonSection />,
});

const AboutNextProject = dynamic(
  () => import("@/components/Home/AboutNextProject"),
  {
    ssr: false,
    loading: () => <SkeletonSection />,
  }
);

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black">
      {/* Background Decorations */}
      <DecorativeBackground />

      {/* Eager-loaded */}
      <HeroSection />
      <WhoAmI />

      {/* Lazy-loaded with skeleton fallback */}
      <Skills />
      <Projects />
      <AboutNextProject />
    </div>
  );
}
