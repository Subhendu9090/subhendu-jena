import React from "react";

export default function SkeletonSection() {
  return (
    <div className="animate-pulse p-6 space-y-4">
      <div className="h-6 w-1/3 bg-gray-300 dark:bg-gray-700 rounded"></div>
      <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-600 rounded"></div>
      <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-600 rounded"></div>
      <div className="h-48 w-full bg-gray-200 dark:bg-gray-600 rounded-xl"></div>
    </div>
  );
}
