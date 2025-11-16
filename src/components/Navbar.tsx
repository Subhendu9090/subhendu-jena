"use client";
import { Github, Linkedin, Menu, Moon, Sun, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import Logo from "./Home/Logo";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Navbar() {
  const Bars = [
    { name: "Home", navigateLink: "/" },
    { name: "Contact", navigateLink: "/contact" },
    { name: "About", navigateLink: "/about" },
    { name: "Experience", navigateLink: "/experience" },
  ];

  const [theme, setTheme] = useState("dark");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const pathName = usePathname();
  const router = useRouter();

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

  useGSAP(() => {
    gsap.from(".nav-element", {
      yPercent: -50,
      duration: 1,
      stagger: 0.02,
      yoyo:true,
    });

    gsap.from(".icon", {
      y: -50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <>
      {/* Navbar */}
      <div className="w-full flex justify-between items-center px-8 md:px-20 py-4 fixed top-0 text-gray-900 bg-gray-50/90 dark:text-white backdrop-blur-md dark:bg-gray-900/80 h-16">
        <Logo />

        {/* Desktop Menu */}
        <div
          className="hidden sm:flex flex-row gap-4"
        >
          {Bars.map((bar, index) => (
            <div
              onClick={() => router.push(bar.navigateLink)}
              key={index}
              className={`hover:scale-105 nav-element cursor-pointer hover:border-2 px-2 rounded-full duration-300 py-1 border-gray-900 dark:border-white ${
                bar.navigateLink === pathName ? "underline" : ""
              }`}
            >
              {bar.name}
            </div>
          ))}
        </div>

        {/* Desktop Icons */}
        <div className="hidden sm:flex flex-row gap-2">
          <div className="cursor-pointer p-2 icon">
            <a
              href="https://www.linkedin.com/in/subhendu-jena-06056925a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
          </div>

          <div className="cursor-pointer icon p-2">
            <a
              href="https://github.com/Subhendu9090"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
          </div>

          <button
            onClick={toggleTheme}
            className="ml-2 p-2 icon rounded-lg border bg-gray-200 border-gray-950 dark:bg-gray-900 dark:border-white"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Sidebar Button */}
        <button
          className="sm:hidden block"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-16 right-0 h-full w-64 bg-gray-300/90 dark:bg-gray-900/90 dark:text-white z-50 shadow-lg sm:hidden transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6 p-6 justify-center items-center w-full">
          {Bars.map((bar, index) => (
            <div
              key={index}
              className="hover:scale-110 cursor-pointer hover:border-2 rounded-xl px-4 border-black dark:border-white py-2 transition duration-300 text-lg"
              onClick={() => {
                setIsSidebarOpen(false);
              }}
            >
              <Link href={bar.navigateLink}>{bar.name}</Link>
            </div>
          ))}
        </div>

        {/* Sidebar Icons */}
        <div className="flex justify-center items-center gap-2 mt-4">
          <div className="cursor-pointer p-2">
            <a
              href="https://www.linkedin.com/in/subhendu-jena-06056925a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
          </div>
          <div className="cursor-pointer p-2">
            <a
              href="https://github.com/Subhendu9090"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
          </div>

          <button
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-lg border bg-gray-200 dark:bg-gray-900 text-black dark:text-white"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
