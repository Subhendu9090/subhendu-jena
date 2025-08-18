"use client";
import React from "react";

function HeroSectionSkeleton() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center h-screen text-black dark:text-white">
      <div className="max-w-2xl text-center animate-pulse">
        {/* Heading Skeleton */}
        <div className="h-6 sm:h-8 w-2/3 mx-auto bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>

        {/* Title Skeleton */}
        <div className="h-10 sm:h-16 w-4/5 mx-auto bg-gray-200 dark:bg-gray-600 rounded-xl mb-6"></div>

        {/* Description Skeleton */}
        <div className="space-y-3 px-10">
          <div className="h-4 w-full bg-gray-200 dark:bg-gray-600 rounded"></div>
          <div className="h-4 w-2/3 mx-auto bg-gray-200 dark:bg-gray-600 rounded"></div>
        </div>

        {/* Buttons Skeleton */}
        <div className="flex gap-8 justify-center mt-10">
          <div className="h-10 w-28 bg-gray-300 dark:bg-gray-700 rounded-xl"></div>
          <div className="h-10 w-28 bg-gray-300 dark:bg-gray-700 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
}

export default HeroSectionSkeleton;
