import React from "react";
import {
  Github,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

const links = [
  {
    name: "Home",
    icon: "/",
  },
  {
    name: "About",
    icon: "/about",
  },
  {
    name: "Contact",
    icon: "/contact",
  },
  {
    name: "Resume",
    icon: "/CV/Subhendu_Jena.pdf",
  },
];
const certificateAndAchievements = [
  {
    name:"Udemy Full Stack Cert.",
    link:"/UdemyFullStactCourse.pdf"
  },
  {
    name: "IBM Internship Cert.",
    link: "/IBMInternshipCertificate.pdf",
  },
  {
    name: "Full Stack Web Dev Cert.",
    link: "/CodeKartExperienceLetter.pdf",
  },
];
const letsConnect = [
  {
    name: "Github",
    icon: Github,
    link:"https://github.com/Subhendu9090"
  },
  {
    name: "Linkedin",
    icon: Linkedin,
    link:"https://www.linkedin.com/in/subhendu-jena-06056925a/"
  },
];
const Footer = () => {
  return (
    <footer className="relative dark:bg-gray-900/50 bg-gray-50/90 h-auto text-black dark:text-white py-8 ">
      <div className=" flex justify-between flex-col md:flex-row items-center max-w-7xl">
        <div className=" md:p-2 text-2xl text-center min-w-[200px] underline md:no-underline md:w-1/3 transition duration-500 hover:scale-110">
          Subhendu Jena
        </div>
        <div className=" md:w-2/3 flex-row flex justify-between p-4 gap-2 w-full ">
          <div className="hidden sm:flex flex-col justify-center items-center">
            <div className=" mb-3 text-md underline sm:no-underline ">LINKS</div>
            <div className=" flex flex-col justify-center items-center gap-2 opacity-80 text-sm">
              {links.map((data, i) => (
                <Link href={data.icon}
                  className=" hover:underline transition duration-300 hover:scale-105 cursor-pointer"
                  key={i}
                >
                  {data.name}
                </Link>
              ))}
            </div>
          </div>
          <div className=" flex flex-col  items-center ">
            <div className=" underline sm:no-underline text-center mb-3 text-sm sm:text-md ">
              CERTIFICATES & ACHIEVEMENTS
            </div>
            <div className=" flex flex-col justify-center items-start sm:items-center gap-2 opacity-80 text-sm">
              {certificateAndAchievements.map((data, i) => (
                <Link key={i} href={data.link} target="_blank" rel="noopener noreferrer">
                <div className="hover:underline transition duration-300 hover:scale-105 cursor-pointer text-[12px]">
                  {data.name}
                </div>
              </Link>
              ))}
            </div>
          </div>
          <div className=" flex flex-col  items-center ">
            <div className=" underline sm:no-underline text-center mb-3 sm:text-md text-sm ">LET&apos;S CONNECT</div>
            <div className=" flex flex-col gap-2 opacity-80 text-sm">
              {letsConnect.map((data, i) => {
                const Icon = data.icon;
                return (
                  <Link key={i} href={data.link} target="_blank" rel="noopener noreferrer">
                  <div
                    key={i}
                    className=" hover:underline transition duration-300 hover:scale-110 cursor-pointer"
                  >
                    <Icon />
                  </div>
                  </Link>
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
