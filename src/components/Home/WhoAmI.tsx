"use client";
import React, { useEffect, useState } from "react";
import { Code, Database, Layout, Server } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const skills = [
  {
    icon: <Layout className="text-blue-500 dark:text-blue-400" />,
    label: "React & Next.js",
  },
  {
    icon: <Server className="text-blue-500 dark:text-blue-400" />,
    label: "Node.js & Express",
  },
  {
    icon: <Database className="text-blue-500 dark:text-blue-400" />,
    label: "MongoDB & SQL",
  },
  {
    icon: <Code className="text-blue-500 dark:text-blue-400" />,
    label: "REST API Design",
  },
];

const titles = [
  "React & Node.js Developer",
  "Full Stack Developer",
  "Next.js Developer",
  "Mobile App Developer",
];

const WhoAmI: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // ── FIX: mounted guard prevents hydration mismatch.
  // Server renders titles[0], client picks up from there.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full dark:bg-blue-100/10 bg-gray-400/40 z-10 relative py-12 px-4 sm:px-6 lg:px-8 duration-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex md:flex-row justify-around flex-col gap-8 items-center">

          {/* Image */}
          <div className="flex justify-center w-full md:w-1/2">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 dark:border-blue-400">
                <Image
                  src="/subhendu.jpeg"
                  alt="Subhendu Jena"
                  className="w-full h-full object-cover object-center"
                  width={250}
                  height={250}
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-500 dark:bg-blue-400 text-white p-4 rounded-full shadow-lg">
                <Code size={24} />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 md:w-1/2 w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Who Am I?
            </h1>

            <p className="text-lg text-gray-700 dark:text-gray-300">
              {/* ── FIX: render plain text on server, animate only after mount.
                  This way crawlers always see "React & Node.js Developer". */}
              {mounted ? (
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentIndex}
                    className="text-blue-700 text-xl font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {titles[currentIndex]}
                  </motion.span>
                </AnimatePresence>
              ) : (
                // Server-rendered static text — what Google and AI crawlers see
                <span className="text-blue-700 text-xl font-bold">
                  React &amp; Node.js Developer
                </span>
              )}{" "}
              — SDE-1 at Qwegle building CMS platforms, REST APIs, and React
              Native mobile apps. MCA from IGIT Sarang (8.7 CGPA).
            </p>

            {/* Skills grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-white/20 dark:bg-gray-800/30 p-4 rounded-lg shadow-lg"
                >
                  {skill.icon}
                  <span className="text-gray-700 dark:text-gray-300">
                    {skill.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Experience highlight */}
            <div className="mt-8 bg-blue-50 dark:bg-gray-800 p-6 rounded-lg border border-blue-200 dark:border-blue-500">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                Experience & Achievements
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                2 years building fullstack web and mobile applications. Delivered
                CMS-driven business websites, REST APIs, and React Native app
                features at Qwegle. MCA with 8.7 CGPA from IGIT Sarang.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhoAmI;