import React, { useEffect, useRef, useState } from "react";
import { Code2, GraduationCap, Sparkles } from "lucide-react";

const coreSkills = [
  { name: "React", icon: "⚛️", level: 90, tag: "Frontend" },
  { name: "Next.js", icon: "▲", level: 85, tag: "Frontend" },
  { name: "React Native", icon: "📱", level: 40, tag: "Mobile" },
  { name: "Expo", icon: "🚀", level: 55, tag: "Mobile" },
  { name: "Node.js", icon: "💚", level: 85, tag: "Backend" },
  { name: "Express", icon: "🚂", level: 82, tag: "Backend" },
  { name: "MongoDB", icon: "🍃", level: 80, tag: "Database" },
  { name: "TypeScript", icon: "🔷", level: 78, tag: "Language" },
  { name: "JavaScript", icon: "💛", level: 90, tag: "Language" },
  { name: "SQL", icon: "📊", level: 70, tag: "Database" },
  { name: "HTML & CSS", icon: "🎨", level: 92, tag: "Frontend" },
];

// College languages — shown as simple badges, no proficiency bars
// because you haven't used them professionally
const collegeLanguages = [
  { name: "C", icon: "⚙️" },
  { name: "C++", icon: "🔩" },
  { name: "Java", icon: "☕" },
  { name: "Python", icon: "🐍" },
  { name: "Go", icon: "🐹" },
];

const tagColor: Record<string, string> = {
  Frontend: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  Backend:
    "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  Database:
    "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  Language:
    "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
};

const levelLabel = (n: number) =>
  n >= 88 ? "Expert" : n >= 78 ? "Advanced" : "Comfortable";

// ─── SkillCard (professional) ─────────────────────────────────────────────────

const SkillCard = ({
  name,
  icon,
  level,
  tag,
  index,
}: {
  name: string;
  icon: string;
  level: number;
  tag: string;
  index: number;
}) => {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimated(true);
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group relative rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <span className="text-2xl leading-none">{icon}</span>
          <span className="font-semibold text-gray-800 dark:text-white text-sm">
            {name}
          </span>
        </div>
        <span
          className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${tagColor[tag]}`}
        >
          {tag}
        </span>
      </div>

      <div className="h-1.5 rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-700 ease-out"
          style={{ width: animated ? `${level}%` : "0%" }}
        />
      </div>

      <div className="flex items-center justify-between mt-2">
        <span className="text-[11px] text-gray-400 dark:text-gray-500">
          {levelLabel(level)}
        </span>
        <span className="text-[11px] font-medium text-gray-500 dark:text-gray-400">
          {level}%
        </span>
      </div>

      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

// ─── CollegeBadge (simple pill for academic languages) ────────────────────────

const CollegeBadge = ({ name, icon }: { name: string; icon: string }) => (
  <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-200">
    <span className="text-lg leading-none">{icon}</span>
    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
      {name}
    </span>
  </div>
);

// ─── Skills (main) ────────────────────────────────────────────────────────────

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const filters = ["All", "Frontend", "Mobile", "Backend", "Database", "Language"];

  const filtered =
    activeFilter === "All"
      ? coreSkills
      : coreSkills.filter((s) => s.tag === activeFilter);

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
          <Code2 size={14} />
          Tech Stack
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
          Skills & Technologies
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto text-sm leading-relaxed">
          Building full-stack web applications with React, Node.js, and Next.js
          — from database design to production deployment.
        </p>
      </div>

      {/* ── Section 1: Professional skills ── */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-6">
          <Code2 size={16} className="text-blue-600 dark:text-blue-400" />
          <h3 className="text-base font-semibold text-gray-800 dark:text-white">
            Professional Skills
          </h3>
          <span className="text-xs text-gray-400 dark:text-gray-500 ml-1">
            — used daily in production
          </span>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all duration-200 border ${
                activeFilter === f
                  ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                  : "bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map((skill, i) => (
            <SkillCard key={skill.name} {...skill} index={i} />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="my-10 border-t border-gray-100 dark:border-gray-700/60" />

      {/* ── Section 2: Academic / college languages ── */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <GraduationCap
            size={16}
            className="text-gray-500 dark:text-gray-400"
          />
          <h3 className="text-base font-semibold text-gray-800 dark:text-white">
            Academic Background
          </h3>
          <span className="text-xs text-gray-400 dark:text-gray-500 ml-1">
            — studied during MCA
          </span>
        </div>
        <p className="text-xs text-gray-400 dark:text-gray-500 mb-5 ml-6">
          Strong foundation in programming fundamentals through coursework and
          university projects.
        </p>

        <div className="flex flex-wrap gap-3">
          {collegeLanguages.map((lang) => (
            <CollegeBadge key={lang.name} {...lang} />
          ))}
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500">
          <Sparkles size={14} className="text-blue-400" />
          Currently deepening React performance patterns and Node.js
          architecture
        </div>
      </div>
    </section>
  );
};

export default Skills;
