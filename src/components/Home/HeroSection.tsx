import { FileUser, SmartphoneNfc } from "lucide-react";
import React from "react";

function HeroSection() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center h-screen text-black dark:text-white">
      <div className="max-w-2xl text-center ">
        <h1 className="text-xl sm:text-3xl font-bold mb-2">
          Hey there! 👋 I&apos;m{" "}
          <span className=" text-blue-700">Subhendu Jena</span>
        </h1>

        <p
          className=" bg-clip-text text-transparent text-center text-4xl sm:text-6xl mb-4 font-extrabold hover:scale-110 transition duration-700"
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=')",
          }}
        >
          Full stack Software Developer
        </p>
        <p className="px-20 mb-4 text-center text-xl ">
          ⚡ Transforming ideas into robust, scalable web applications with{" "}
          <span className=" text-blue-500 transition duration-500 hover:shadow-md dark:shadow-white shadow-black bg-transparent rounded-md font-bold">
            MERN
          </span>{" "}
          technologies for seamless user experiences.
        </p>
        <div className=" flex gap-8 justify-center mt-8 w-full">
          <div className=" hover:scale-105 transition duration-300 cursor-pointer flex gap-2 border group items-center dark:border-white border-black rounded-xl px-4 py-2">
            Resume
            <FileUser className=" group-hover:animate-bounce " size={20} />
          </div>
          <div className="transition hover:scale-105 duration-300 cursor-pointer flex gap-2 border dark:border-white border-black items-center group rounded-xl px-4 py-2">
            Contact
            <SmartphoneNfc size={20} className=" group-hover:animate-bounce " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
