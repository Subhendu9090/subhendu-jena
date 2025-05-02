"use client";
import React, { useEffect, useState } from "react";
import { Code, Database, Layout, Server } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  {
    icon: <Layout className="text-blue-500 dark:text-blue-400" />,
    label: "React & Next.js",
  },
  {
    icon: <Server className="text-blue-500 dark:text-blue-400" />,
    label: "Node.js",
  },
  {
    icon: <Database className="text-blue-500 dark:text-blue-400" />,
    label: "MongoDB",
  },
  {
    icon: <Code className="text-blue-500 dark:text-blue-400" />,
    label: "Full Stack Development",
  },
];
const titles = [
  "Full Stack Developer",
  "MERN Stack Expert",
  "JavaScript Enthusiast",
  "React & Node.js Developer",
];

const WhoAmI: React.FC = () => {
  const [currentTitle, setCurrentTitle] = useState(titles[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => {
        const currentIndex = titles.indexOf(prev);
        return titles[(currentIndex + 1) % titles.length];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full dark:bg-blue-100/10 bg-gray-400/40 z-10 relative py-12 px-4 sm:px-6 lg:px-8 duration-200 dark:bg-[url('https://i.pinimg.com/736x/d0/eb/69/d0eb692ca9955b9e0bc67e5fe07610e4.jpg')] bg-cover bg-center">
      <div className="max-w-7xl mx-auto">
        <div className="flex md:flex-row justify-around flex-col gap-8 items-center">
          {/* Image Section */}
          <div className="flex justify-center w-full md:w-1/2 ">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 dark:border-blue-400">
                <Image
                  src="/IMG-20250224-WA0087.jpg"
                  alt="Subhendu Jena"
                  className="w-full h-full object-cover object-center"
                  width={250}
                  height={250}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-500 dark:bg-blue-400 text-white p-4 rounded-full shadow-lg">
                <Code size={24} />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 md:w-1/2 w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Who Am I?
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Passionate{" "}
              <motion.span
                key={currentTitle}
                className="text-blue-700 text-xl font-bold hover:underline"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.9, ease: "backInOut" }}
              >
                {currentTitle}
              </motion.span>{" "}
              with expertise in MERN stack, building scalable and
              high-performance web applications.
            </p>

            {/* Skills Section */}
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

            {/* Experience Highlight */}
            <div className="mt-8 bg-blue-50 dark:bg-gray-800 p-6 rounded-lg border border-blue-200 dark:border-blue-500">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                Experience & Achievements
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                With a strong background in web development, I have built
                scalable and efficient applications using modern technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAmI;
