"use client"
import { Handshake, Mail, MessageCircle } from "lucide-react";
import React, { useEffect, useState } from "react";

function AboutNextProject() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); 
  }, []);
  return (
    <div className="w-full relative max-w-6xl mx-auto p-8 z-10 border bg-transparent border-t-0 rounded-b-xl">
      <div className=" max-w-6xl  flex items-center justify-center flex-col gap-4">
        <div className="flex  justify-center w-fit p-4 rounded-full border-2 ">
          <Handshake size={60} />
        </div>
        <div className=" max-w-lg text-6xl font-semibold dark:text-gray-100 text-center text-gray-800">
          Tell me about your next Project
        </div>
        <div className=" flex justify-center flex-wrap gap-8 w-full mt-4 items-center">
          <button
            className="flex justify-center items-center  px-4 gap-2 py-2 border-2 group cursor-pointer transition duration-300 bg-transparent rounded-full"
            onClick={() => {
              if (isClient) {
                window.open("mailto:subhendujena38@gmail.com", "_blank");
              }
            }}
          >
            <Mail className=" group-hover:animate-bounce" />
            Email Me
          </button>
          <button 
  className="flex justify-center items-center px-4 gap-2 py-2 rounded-full group transition duration-300 border-2 cursor-pointer bg-transparent"
  onClick={() => {
    if (typeof window !== "undefined") {
      window.open(
        "https://wa.me/9090003689",
        "_blank"
      );
    }
  }}
>
  <MessageCircle className="group-hover:animate-bounce" />
  WhatsApp
</button>
        </div>
      </div>
    </div>
  );
}

export default AboutNextProject;
