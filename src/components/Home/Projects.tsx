import { Github, LinkIcon } from "lucide-react";
import React from "react";
interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  githubLink,
  liveLink,
}: ProjectCardProps) => {
  return (
    <div
      className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden 
      transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>

        <div className="mb-4">
          <span className="font-semibold text-gray-700 dark:text-gray-200">
            Technologies:
          </span>
          <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-100 dark:bg-blue-900 
                  text-blue-800 dark:text-blue-200 
                  text-xs font-medium px-2.5 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex space-x-4 mt-4">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 
                dark:text-gray-300 dark:hover:text-gray-100 
                flex items-center"
            >
              <Github className="mr-2" />
              GitHub
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 
                dark:text-blue-400 dark:hover:text-blue-300 
                flex items-center"
            >
              <LinkIcon className="mr-2" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

function Projects() {
  const projects = [
    {
      title: "E-Commerce Application",
      description: "Full-stack e-commerce platform built using the MERN stack.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      githubLink: "https://github.com/Subhendu9090/E-commerce-project",
      
    },
    {
      title: "Real-Time Chat Application",
      description: "Chat application with real-time messaging using Socket.IO.",
      technologies: ["React", "Node.js", "Socket.IO", "Express", "MongoDB"],
      githubLink: "https://github.com/Subhendu9090/CHAT-APP",
      
    },
    {
      title: "Canteen Management System",
      description: "Final semester project for managing canteen operations.",
      technologies: ["MERN", "Socket.IO", "Tailwind CSS"],
      githubLink: "https://github.com/Subhendu9090/canteen-management-system-project",
      
    },
    {
      title: "YouTube Backend Clone",
      description:
        "Backend implementation of YouTube-like features using Node.js and MongoDB.",
      technologies: ["Node.js", "MongoDB", "Express"],
      githubLink: "https://github.com/Subhendu9090/youTube-clone-backend",
    },
    {
      title: "Restaurant Management System",
      description:
        "Comprehensive restaurant management system built with Golang.",
      technologies: ["Golang", "MongoDB"],
      githubLink: "https://github.com/Subhendu9090/go-restaurant-management",
    },
  ];
  return (
    <div className=" flex justify-center p-6">
      <div className=" max-w-6xl flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid md:grid-cols-2 px-8 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
