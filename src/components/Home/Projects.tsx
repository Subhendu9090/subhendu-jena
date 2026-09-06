"use client";
import { Github, ExternalLink, Monitor } from "lucide-react";
import React, { useState } from "react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  badge: string;
  badgeColor: string;
  accentColor: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    title: "Image & PDF Tools",
    description:
      "Fullstack utility web app offering image compression, format conversion, PDF manipulation, and more — built with Next.js App Router and TypeScript.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    githubLink: "https://github.com/Subhendu9090/image-pdf-tools",
    liveLink: "https://image-pdf-tools-seven.vercel.app",
    badge: "Live",
    badgeColor:
      "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800",
    accentColor: "#10B981",
    highlights: [
      "Image compression and format conversion",
      "PDF manipulation tools",
      "Next.js App Router with TypeScript",
      "Deployed on Vercel",
    ],
  },
  {
    title: "Spotify Clone — Microservices",
    description:
      "Full-stack music streaming platform with microservices architecture — separate Admin, Song, and User services communicating via REST APIs.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Microservices"],
    githubLink: "https://github.com/Subhendu9090/spotify-clone",
    liveLink: "https://spotify-frontend-60wn.onrender.com/",
    badge: "Live",
    badgeColor:
      "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800",
    accentColor: "#1DB954",
    highlights: [
      "Microservices: Admin-Service, Song-Service, User-Service",
      "REST API communication between services",
      "React frontend with full music player UI",
      "MongoDB for data persistence",
    ],
  },
  {
    title: "Real-Time Chat App",
    description:
      "Fullstack real-time chat application with private messaging, online presence indicators, and persistent message history using WebSockets.",
    technologies: ["React", "Node.js", "Socket.IO", "Express", "MongoDB"],
    githubLink: "https://github.com/Subhendu9090/CHAT-APP",
    badge: "Backend + Frontend",
    badgeColor:
      "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-800",
    accentColor: "#8B5CF6",
    highlights: [
      "Real-time messaging with Socket.IO WebSockets",
      "JWT-based user authentication",
      "Online presence indicators",
      "Separate React frontend and Node.js backend",
    ],
  },
  {
    title: "YouTube Backend Clone",
    description:
      "Production-grade REST API replicating YouTube core features — video upload, likes, comments, subscriptions, and JWT authentication.",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Multer"],
    githubLink: "https://github.com/Subhendu9090/youTube-clone-backend",
    badge: "Backend",
    badgeColor:
      "bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800",
    accentColor: "#EF4444",
    highlights: [
      "Video upload and streaming via Cloudinary",
      "Like, comment, and subscription system",
      "JWT authentication with refresh tokens",
      "Mongoose schemas with aggregation pipelines",
    ],
  },
  {
    title: "Canteen Management System",
    description:
      "Full-stack canteen system with real-time order tracking, menu management, and role-based access for staff and students.",
    technologies: ["React", "Node.js", "Socket.IO", "MongoDB", "Tailwind CSS"],
    githubLink:
      "https://github.com/Subhendu9090/canteen-management-system-project",
    badge: "Real-time",
    badgeColor:
      "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800",
    accentColor: "#F59E0B",
    highlights: [
      "Real-time order status via Socket.IO",
      "Role-based access: admin, staff, student",
      "Menu management and order tracking dashboard",
      "Mobile-responsive UI with Tailwind CSS",
    ],
  },
  {
    title: "E-Commerce Application",
    description:
      "Full-stack e-commerce platform with product listings, cart management, user authentication, and order tracking.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    githubLink: "https://github.com/Subhendu9090/E-commerce-project",
    badge: "Fullstack",
    badgeColor:
      "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800",
    accentColor: "#3B82F6",
    highlights: [
      "Product listings with search and filter",
      "Cart management and checkout flow",
      "User authentication and session management",
      "Order tracking and history",
    ],
  },
];

// ── Iframe preview card (for projects with live URL) ──────────────────────────
const LiveCard = ({ project }: { project: Project }) => {
  const [iframeError, setIframeError] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden flex flex-col hover:border-blue-300 dark:hover:border-blue-700 hover:-translate-y-0.5 transition-all duration-200">
      {/* Accent bar */}
      <div
        className="h-0.5 w-full"
        style={{ background: project.accentColor }}
      />

      {/* iframe or fallback */}
      <div className="relative bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        {/* Browser chrome bar */}
        <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded text-[10px] text-gray-400 dark:text-gray-500 px-2 py-0.5 truncate">
            {project.liveLink}
          </div>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors"
            title="Open in new tab"
          >
            <ExternalLink size={11} />
          </a>
        </div>

        {/* iframe */}
        {!iframeError ? (
          <div
            className={`relative transition-all duration-300 ${expanded ? "h-96" : "h-48"}`}
          >
            <iframe
              src={project.liveLink}
              title={project.title}
              className="w-full h-full border-none"
              style={{ transform: "scale(1)", transformOrigin: "top left" }}
              onError={() => setIframeError(true)}
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-forms"
            />
            {/* Expand toggle */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="absolute bottom-2 right-2 text-[10px] bg-black/50 text-white px-2 py-1 rounded-full hover:bg-black/70 transition-colors"
            >
              {expanded ? "Collapse" : "Expand preview"}
            </button>
          </div>
        ) : (
          // Fallback if iframe blocked
          <div className="h-48 flex flex-col items-center justify-center gap-3 bg-gray-50 dark:bg-gray-800/50">
            <Monitor size={32} className="text-gray-300 dark:text-gray-600" />
            <p className="text-xs text-gray-400 dark:text-gray-500 text-center px-4">
              Preview blocked by site policy
            </p>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
            >
              Open live site <ExternalLink size={10} />
            </a>
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white leading-snug">
            {project.title}
          </h3>
          <span
            className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border whitespace-nowrap flex-shrink-0 ${project.badgeColor}`}
          >
            {project.badge}
          </span>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="text-[10px] font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded px-1.5 py-0.5"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 pb-4 flex items-center gap-2">
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 rounded-lg px-3 py-1.5 transition-all"
          >
            <Github size={12} />
            GitHub
          </a>
        )}
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-white rounded-lg px-3 py-1.5 transition-all"
            style={{ background: project.accentColor }}
          >
            <ExternalLink size={12} />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

// ── Writeup card (for projects without live URL) ──────────────────────────────
const WriteupCard = ({ project }: { project: Project }) => (
  <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden flex flex-col hover:border-blue-300 dark:hover:border-blue-700 hover:-translate-y-0.5 transition-all duration-200">
    <div className="h-0.5 w-full" style={{ background: project.accentColor }} />

    <div className="p-5 flex flex-col gap-4 flex-1">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white leading-snug">
          {project.title}
        </h3>
        <span
          className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border whitespace-nowrap flex-shrink-0 ${project.badgeColor}`}
        >
          {project.badge}
        </span>
      </div>

      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
        {project.description}
      </p>

      {/* Highlights — the "writeup" for no-live-URL projects */}
      <div className="bg-gray-50 dark:bg-gray-800/60 rounded-lg p-3 flex flex-col gap-1.5">
        <p className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">
          What it does
        </p>
        {project.highlights.map((h) => (
          <div
            key={h}
            className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400"
          >
            <span className="mt-0.5 flex-shrink-0 w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-500" />
            {h}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5">
        {project.technologies.map((t) => (
          <span
            key={t}
            className="text-[10px] font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded px-1.5 py-0.5"
          >
            {t}
          </span>
        ))}
      </div>
    </div>

    <div className="px-5 pb-5">
      {project.githubLink && (
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 rounded-lg px-3 py-1.5 transition-all"
        >
          <Github size={12} />
          View on GitHub
        </a>
      )}
    </div>
  </div>
);

// ── Main Projects section ──────────────────────────────────────────────────────
export default function Projects() {
  const liveProjects = projects.filter((p) => p.liveLink);
  const otherProjects = projects.filter((p) => !p.liveLink);

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-14">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-full px-3 py-1 mb-4">
          Selected work
        </span>
        <h2 className="text-3xl font-medium text-gray-900 dark:text-white tracking-tight mb-2">
          Projects
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          What I have built — fullstack web apps, real-time systems, and backend
          services
        </p>
      </div>

      {/* Live projects — with iframe preview */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Live projects
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {liveProjects.map((p) => (
            <LiveCard key={p.title} project={p} />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="my-8 border-t border-gray-100 dark:border-gray-800" />

      {/* Other projects — with writeup */}
      <div>
        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
          More projects
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {otherProjects.map((p) => (
            <WriteupCard key={p.title} project={p} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-10">
        <a
          href="https://github.com/Subhendu9090"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <Github size={15} />
          View all repositories on GitHub
        </a>
      </div>
    </section>
  );
}
