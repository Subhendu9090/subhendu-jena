"use client";
import { Github, Linkedin, Menu, Moon, Sun, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "./Home/Logo";
import { useRouter } from "next/navigation";

function Navbar() {
  const Bars = [
    { name: "Home", navigateLink: "/" },
    { name: "Contact", navigateLink: "/contact" },
    { name: "About", navigateLink: "/about" },
    { name: "Experience", navigateLink: "/experience" },
  ];
  const [theme, setTheme] = useState("dark");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };
  return (
    <>
      {/* Navbar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full flex justify-between items-center p-4 fixed top-0 text-gray-900 bg-gray-300/50 dark:text-white dark:bg-gray-900 h-16"
      >
        {/* Logo Animation */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Logo />
        </motion.div>

        {/* Desktop Menu */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="hidden sm:flex flex-row gap-4"
        >
          {Bars.map((bar, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: -30, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="hover:scale-105 cursor-pointer hover:border-2 px-2 rounded-full duration-300 py-1 border-gray-900 dark:border-white transition"
              onClick={() => handleNavigation(bar.navigateLink)}
            >
              {bar.name}
            </motion.div>
          ))}
        </motion.div>

        {/* Icons + Theme Toggle */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden sm:flex flex-row gap-2"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer p-2"
          >
            <a
              href="https://www.linkedin.com/in/subhendu-jena-06056925a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer p-2"
          >
            <a
              href="https://github.com/Subhendu9090"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
          </motion.div>
          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.9 }}
            className="ml-2 p-2 rounded-lg border bg-gray-200 border-gray-950 dark:bg-gray-900 dark:border-white"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </motion.div>

        {/* Mobile Sidebar Button */}
        <button
          className="sm:hidden block"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.div>

      {/* Sidebar for Mobile */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isSidebarOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
        className="fixed top-16 right-0 h-full w-64 bg-gray-300/90 dark:bg-gray-900/90 dark:text-white z-50 shadow-lg sm:hidden"
      >
        <motion.div
          initial="hidden"
          animate={isSidebarOpen ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="flex flex-col gap-6 p-6 justify-center items-center w-full"
        >
          {Bars.map((bar, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="hover:scale-110 cursor-pointer hover:border-2 rounded-xl px-4 border-black dark:border-white py-2 transition duration-300 text-lg"
              onClick={() => {
                handleNavigation(bar.navigateLink);
                setIsSidebarOpen(false);
              }}
            >
              {bar.name}
            </motion.div>
          ))}
        </motion.div>

        {/* Icons + Theme Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isSidebarOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center items-center gap-2"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer p-2"
          >
            <a
              href="https://www.linkedin.com/in/subhendu-jena-06056925a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer p-2"
          >
            <a
              href="https://github.com/Subhendu9090"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
          </motion.div>
          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.9 }}
            className="ml-2 p-2 rounded-lg border bg-gray-200 dark:bg-gray-900 text-black dark:text-white"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Navbar;
