import { Handshake, Linkedin, Mail } from "lucide-react";
import React from "react";

function AboutNextProject() {
  return (
    <div className="w-full max-w-6xl mx-auto p-8 z-10 bg-gray-50 dark:bg-gray-800 rounded-b-xl">
      <div className=" max-w-6xl  flex items-center justify-center flex-col gap-4">
        <div className="flex  justify-center w-fit p-4 rounded-full border-2 ">
        <Handshake size={60} />
        </div>
        <div className=" max-w-lg text-6xl font-semibold dark:text-gray-100 text-center text-gray-800">
          Tell me about your next Project
        </div>
        <div className=" flex justify-center gap-8 w-full mt-4 items-center">
          <button className="flex justify-center items-center  px-4 gap-2 py-2 border-2 bg-transparent rounded-full">
            <Mail/>
            Email Me
          </button>
          <button className="flex justify-center items-center  px-4 gap-2 py-2 rounded-full border-2 bg-transparent">
            <Linkedin/>
            Linked in
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutNextProject;
