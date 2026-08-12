"use client";
import { FileUser, SmartphoneNfc } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

// ── Framer Motion is SSR-safe when used correctly.
// The issue before was ssr:false hiding this from crawlers.
// Now the server renders the final state (opacity:1, y:0)
// and the client animates from the initial state.

function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative z-10 flex flex-col items-center justify-center h-screen text-black dark:text-white"
    >
      <div className="max-w-2xl text-center">

        {/* Name */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-3xl font-bold mb-2"
        >
          Hey there! 👋 I&apos;m{" "}
          <span className="text-blue-700">Subhendu Jena</span>
        </motion.h1>

        {/* Title — UPDATED from "Full Stack Software Developer" */}
        <motion.p
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center text-4xl sm:text-6xl mb-4 font-extrabold
           hover:scale-110 transition duration-700
           text-slate-800 dark:text-gray-100"
        >
          React &amp; Node.js Developer
        </motion.p>

        {/* Description — UPDATED: removed "MERN" */}
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="px-20 mb-4 text-center text-xl"
        >
          ⚡ Building fullstack web and mobile apps with{" "}
          <span className="text-blue-500 font-bold">
            React, Node.js &amp; Next.js
          </span>{" "}
          — from API design to production deployment.
        </motion.p>

        {/* Buttons */}
        <motion.div className="flex gap-8 justify-center mt-8 w-full">

          {/* Resume — FIXED: unified to Subhendu_Jena.pdf */}
          <motion.a
            href="/CV/Subhendu_Jena.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer flex gap-2 border group items-center dark:border-white border-black rounded-xl px-4 py-2"
          >
            Resume
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <FileUser size={20} />
            </motion.div>
          </motion.a>

          {/* Contact */}
          <a href="mailto:subhendujena38@gmail.com">
            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer flex gap-2 border dark:border-white border-black items-center group rounded-xl px-4 py-2"
            >
              Contact
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <SmartphoneNfc size={20} />
              </motion.div>
            </motion.div>
          </a>

        </motion.div>
      </div>
    </motion.div>
  );
}

export default HeroSection;