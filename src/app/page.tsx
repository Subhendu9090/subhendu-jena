"use client";

import dynamic from "next/dynamic";
import DecorativeBackground from "@/components/DecorativeBackground";
import SkeletonSection from "@/components/SkeletonSection";
import HeroSectionSkeleton from "@/components/HeroSectionSkeleton";

// ── FIXED: removed ssr: false so Google, AI crawlers, ATS systems
// can read your actual content. Components still lazy-load on client
// for performance, but the initial HTML now includes real content.

const HeroSection = dynamic(() => import("@/components/Home/HeroSection"), {
  // ssr: true is the default — just remove ssr:false
  loading: () => <HeroSectionSkeleton />,
});

const WhoAmI = dynamic(() => import("@/components/Home/WhoAmI"), {
  loading: () => <SkeletonSection />,
});

const Skills = dynamic(() => import("@/components/Home/Skills"), {
  loading: () => <SkeletonSection />,
});

const Projects = dynamic(() => import("@/components/Home/Projects"), {
  loading: () => <SkeletonSection />,
});

const AboutNextProject = dynamic(
  () => import("@/components/Home/AboutNextProject"),
  {
    loading: () => <SkeletonSection />,
  }
);

export default function Home() {
  return (
    <div className="relative min-h-screen bg-transparent">
      <DecorativeBackground />
      <div className="relative z-10">
        <HeroSection />
        <WhoAmI />
        <Skills />
        <Projects />
        <AboutNextProject />
      </div>
    </div>
  );
}