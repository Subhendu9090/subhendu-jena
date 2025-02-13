"use client";
import { useState, useEffect } from "react";

export default function DecorativeBackground() {
  const [decorations, setDecorations] = useState<
    { top: number; left: number; size: number; color: string }[]
  >([]);

  useEffect(() => {
    const colors = [
      "bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-900/50 dark:to-pink-900/50",
      "bg-gradient-to-tr from-blue-200 to-cyan-200 dark:from-blue-900/50 dark:to-cyan-900/50",
      "bg-gradient-to-bl from-green-200 to-lime-200 dark:from-green-900/50 dark:to-lime-900/50",
      "bg-gradient-to-tl from-yellow-200 to-orange-200 dark:from-yellow-900/50 dark:to-orange-900/50",
    ];

    const generateDecorations = () =>
      Array.from({ length: 5 }).map(() => ({
        top: Math.random() * 90,
        left: Math.random() * 90,
        size: Math.random() * 150 + 100, 
        color: colors[Math.floor(Math.random() * colors.length)], 
      }));

    setDecorations(generateDecorations());
  }, []); 
  return (
    <div className="fixed w-full overflow-hidden h-full">
      {decorations.map((decor, index) => (
        <div
          key={index}
          className={`absolute rounded-full blur-3xl ${decor.color}`}
          style={{
            top: `${decor.top}%`,
            left: `${decor.left}%`,
            width: `${decor.size}px`,
            height: `${decor.size}px`,
          }}
        />
      ))}
    </div>
  );
}
