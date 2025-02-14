import React from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Youtube,
  FileText,
  Code,
} from "lucide-react";
import DecorativeBackground from "./DecorativeBackground";
const links = [
  {
    name: "Home",
    icon: "",
  },
  {
    name: "About",
    icon: "",
  },
  {
    name: "Works",
    icon: "",
  },
  {
    name: "Contact",
    icon: "",
  },
  {
    name: "Resume",
    icon: "",
  },
];
const certificateAndAchievements = [
  {
    name: "IBM Internship Cert.",
    icon: "",
  },
  {
    name: "Full Stack Web Dev Cert.",
    icon: "",
  },
];
const letsConnect = [
  {
    name: "Github",
    icon: Github,
  },
  {
    name: "Linkedin",
    icon: Linkedin,
  },
];
const Footer = () => {
  return (
    <footer className="relative dark:bg-gray-900 bg-gray-300/50 h-auto text-black dark:text-white py-8">
      <div className=" flex justify-between flex-col md:flex-row items-center">
        <div className=" pb-6 md:p-2 text-2xl text-center min-w-[200px] underline md:no-underline md:w-1/3 transition duration-500 hover:scale-110">
          Subhendu Jena
        </div>
        <div className=" md:w-2/3 flex justify-between p-4 gap-2 w-full ">
          <div className=" flex flex-col justify-center items-center">
            <div className=" mb-3 text-md ">LINKS</div>
            <div className=" flex flex-col justify-center items-center gap-2 opacity-80 text-sm">
              {links.map((data, i) => (
                <div
                  className=" hover:underline transition duration-300 hover:scale-105 cursor-pointer"
                  key={i}
                >
                  {data.name}
                </div>
              ))}
            </div>
          </div>
          <div className=" flex flex-col  items-center">
            <div className=" text-center mb-3 text-md ">
              CERTIFICATES & ACHIEVEMENTS
            </div>
            <div className=" flex flex-col justify-center items-center gap-2 opacity-80 text-sm">
              {certificateAndAchievements.map((data, i) => (
                <div
                  className=" hover:underline transition duration-300 hover:scale-105 cursor-pointer"
                  key={i}
                >
                  {data.name}
                </div>
              ))}
            </div>
          </div>
          <div className=" flex flex-col  items-center">
            <div className=" mb-3 text-md ">LET'S CONNECT</div>
            <div className=" flex flex-col justify-center items-center gap-2 opacity-80 text-sm">
              {letsConnect.map((data, i) => {
                const Icon = data.icon;
                return (
                  <div
                    key={i}
                    className=" hover:underline transition duration-300 hover:scale-110 cursor-pointer"
                  >
                    <Icon />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <div className="mt-6 text-gray-400 w-full flex justify-between items-center p-4 text-sm border-t-2 dark:border-slate-700 border-gray-200">
        <p>© 2025 subhendu jena- All rights reserved.</p>
        <p>Bhubaneswar, Odisha, India</p>
      </div>
    </footer>
  );
};

export default Footer;
