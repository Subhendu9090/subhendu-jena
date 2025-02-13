"use client";
import { Github, Linkedin, Menu, Moon, Sun, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";

function Navbar() {
  const Bars = ["Home", "Contact", "About", "Experience"];
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

  return (
    <>
      {/* Navbar */}
      <div className="w-full flex justify-between items-center p-4 fixed top-0 text-gray-900 bg-gray-300/50 dark:text-white dark:bg-gray-900/50 bg-opacity-5 h-16">
        <Logo/>
        {/* Desktop Menu */}
        <div className="hidden sm:flex flex-row gap-6">
          {Bars.map((bar, index) => (
            <div
              key={index}
              className="hover:scale-110 cursor-pointer hover:underline"
            >
              {bar}
            </div>
          ))}
        </div>

        {/* Icons + Theme Toggle */}
        <div className="hidden sm:flex flex-row gap-2">
          <div className="hover:scale-110 cursor-pointer p-2 hover:underline">
            <Linkedin size={20} />
          </div>
          <div className="hover:scale-110 cursor-pointer p-2 hover:underline">
            <Github size={20} />
          </div>
          <button
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-lg border bg-gray-200 border-gray-950 dark:bg-gray-900 dark:border-white text-black dark:text-white"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Sidebar Button */}
        <button
          className="sm:hidden block"
          onClick={() => setIsSidebarOpen((prev) => !prev)}
        >
          {isSidebarOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-16 right-0 h-full w-64 bg-gray-300/90 dark:bg-gray-900/90 dark:text-white z-50 transform ${
          isSidebarOpen ? "block" : "hidden"
        } transition-transform duration-300 ease-in-out sm:hidden justify-center items-center `}
      >
        <div className="flex flex-col gap-6 p-6 justify-center items-center w-full">
          {Bars.map((bar, index) => (
            <div
              key={index}
              className="hover:scale-110 cursor-pointer hover:underline text-lg"
              onClick={() => setIsSidebarOpen(false)}
            >
              {bar}
            </div>
          ))}
        </div>
        {/* Icons + Theme Toggle */}
        <div className="flex justify-center items-center gap-2">
          <div className="hover:scale-110 cursor-pointer p-2 hover:underline">
            <Linkedin size={20} />
          </div>
          <div className="hover:scale-110 cursor-pointer p-2 hover:underline">
            <Github size={20} />
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
