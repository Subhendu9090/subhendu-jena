"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      company: "Tech Innovations Inc.",
      role: "Senior Developer",
      period: "2020 - Present",
      location: "San Francisco, CA",
      description: "Leading development of enterprise SaaS solutions for financial technology clients.",
      logo: "/path/to/company1-logo.png",
      projects: [
        {
          id: "p1",
          title: "Financial Dashboard Redesign",
          description: "Led the redesign of the company's flagship financial dashboard product, improving user engagement by 37%.",
          technologies: ["React", "TypeScript", "D3.js", "AWS"],
          image: "/path/to/project1-image.jpg",
          link: "https://example.com/project1"
        },
        {
          id: "p2",
          title: "Real-time Analytics Pipeline",
          description: "Architected and implemented a real-time data analytics pipeline processing over 1M events per minute.",
          technologies: ["Node.js", "Kafka", "ElasticSearch", "Kubernetes"],
          image: "/path/to/project2-image.jpg",
          link: "https://example.com/project2"
        }
      ]
    },
    {
      id: 2,
      company: "Digital Solutions Co.",
      role: "Full Stack Developer",
      period: "2017 - 2020",
      location: "Austin, TX",
      description: "Developed web applications and mobile-first solutions for diverse client portfolio.",
      logo: "/path/to/company2-logo.png",
      projects: [
        {
          id: "p3",
          title: "E-commerce Platform Migration",
          description: "Successfully migrated legacy e-commerce platform to a modern stack, reducing load times by 65%.",
          technologies: ["Vue.js", "Laravel", "MySQL", "Docker"],
          image: "/path/to/project3-image.jpg",
          link: "https://example.com/project3"
        }
      ]
    }
  ];

  // State to track which experience's projects are visible
  const [visibleProjects, setVisibleProjects] = useState({});

  // Toggle project visibility for a specific experience
  const toggleProjects = (id:string) => {
    setVisibleProjects((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="experience" className=" max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 border-b pb-2 dark:text-white dark:border-gray-700">
        Professional Experience
      </h2>

      <div className="space-y-12">
        {experiences.map((exp) => (
          <div key={exp.id} className="group">
            {/* Company header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="relative w-16 h-16 mr-4 overflow-hidden rounded-md border dark:border-gray-700">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold dark:text-white">{exp.company}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{exp.role}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-gray-700 dark:text-gray-300 font-medium">{exp.period}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{exp.location}</p>
              </div>
            </div>

            {/* Company description */}
            <p className="text-gray-700 dark:text-gray-300 mb-6">{exp.description}</p>

            {/* Toggle Button */}
            <button
              onClick={() => toggleProjects(exp.id)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition"
            >
              {visibleProjects[exp.id] ? "Hide Projects" : "View Projects"}
            </button>

            {/* Projects (only shown if visibleProjects[exp.id] is true) */}
            {visibleProjects[exp.id] && (
              <div className="pl-0 md:pl-20 mt-6">
                <h4 className="text-lg font-medium mb-4 dark:text-white">Key Projects</h4>
                <div className="space-y-8">
                  {exp.projects.map((project) => (
                    <div
                      key={project.id}
                      className="bg-gray-50 dark:bg-gray-800/50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="md:flex">
                        <div className="relative w-full md:w-1/3 h-48 md:h-auto">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6 md:w-2/3">
                          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3">
                            <h5 className="text-lg font-semibold dark:text-white mb-2 md:mb-0">
                              {project.title}
                            </h5>
                            <Link
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 dark:text-blue-400 text-sm hover:underline"
                            >
                              View Project
                            </Link>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                          <div>
                            <h6 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                              Technologies Used:
                            </h6>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;
