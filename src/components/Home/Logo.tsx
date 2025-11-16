import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React from "react";

function Logo() {
  useGSAP(() => {
    const logoSplit = new SplitText("#logo", { type: "chars,words" });
    gsap.from(logoSplit.chars, {
      yPercent: -600,
      duration: 1,
      stagger: 0.07,
      scale: 2,
      ease: "expo.inOut",
    });
  }, []);
  
  return (
    <div
      id="logo"
      className="text-4xl text-white font-bold text-transparent bg-clip-text"
      // style={{
      //   backgroundImage:
      //     "url('https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      Subhendu
    </div>
  );
}

export default Logo;
