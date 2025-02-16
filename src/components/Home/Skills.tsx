import React from 'react';
import { Code2, Brain } from 'lucide-react';

const Skills = () => {
  const knownLanguages = [
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '💛' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '💚' },
    { name: 'Express', icon: '🚂' },
    { name: 'Next.js', icon: '▲' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'SQL', icon: '📊' }
  ];

  const learningTech = [
    { name: 'Go', icon: '🔷' },
    { name: 'React Native', icon: '📱' }
  ];

  const SkillCard = ({ name, icon }:{name:string,icon:string}) => (
    <div className="group hover:rotate-6 relative overflow-hidden rounded-lg bg-white dark:bg-gray-700 p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center space-x-3">
        <span className="text-2xl">{icon}</span>
        <span className="font-medium text-gray-800 dark:text-white">{name}</span>
      </div>
      <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
    </div>
  );

  return (
    <div className="w-full max-w-6xl relative mx-auto p-8 z-10 border border-b-0 rounded-t-xl">
      <div className="mb-12 text-center flex items-center flex-col">
        <h2 className="text-2xl md:text-4xl font-bold dark:text-black text-white w-fit px-4 py-1 rounded-full dark:bg-white bg-black mb-4">
          My Tech Stack
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Full Stack Development Technologies
        </p>
      </div>

      {/* Known Languages */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Experience In
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 xl:grid-cols-4 xxl:grid-cols-6">
          {knownLanguages.map((lang) => (
            <SkillCard key={lang.name} {...lang} />
          ))}
        </div>
      </div>

      {/* Currently Learning */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-6">
          <Brain className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Currently Exploring
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {learningTech.map((tech) => (
            <SkillCard key={tech.name} {...tech} />
          ))}
        </div>
      </div>

      {/* Learning Journey Note */}
      <div className="mt-12">
        <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl">
          <p className="text-gray-700 dark:text-gray-200 animate-pulse">
            🚀 Always learning and exploring new technologies to build better solutions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;