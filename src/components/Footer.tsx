import React from "react";
import { Github, Linkedin, Twitter, Youtube, FileText, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-transparent dark:bg-black bg-white text-black dark:text-white z-10 py-8">
      <div className="container mx-auto px-4 text-center">
        {/* Let's Connect Section */}
        <h2 className="text-2xl font-semibold">Let's Connect</h2>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <Linkedin size={24} />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <Twitter size={24} />
          </a>
          <a href="https://www.youtube.com/c/yourchannel" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <Youtube size={24} />
          </a>
          <a href="https://leetcode.com/yourusername/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <Code size={24} />
          </a>
          <a href="https://www.hackerrank.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <Code size={24} />
          </a>
        </div>

        {/* Additional Links */}
        <div className="mt-6">
          <a href="/path-to-your-cv.pdf" download className="flex items-center justify-center space-x-2 hover:text-gray-400">
            <FileText size={20} />
            <span>Download CV</span>
          </a>
        </div>

        {/* Footer Text */}
        <div className="mt-6 text-gray-400 text-sm">
          <p>© 2025 subhendu jena- All rights reserved.</p>
          <p>Made with ❤️ in Odisha, India.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
