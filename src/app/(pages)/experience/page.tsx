"use client";
import React from "react";
import Image from "next/image";
import { Dot } from "lucide-react";

function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      company: "Qwegle",
      role: "Software Developer Engineer I  ·",
      period: "september-2024 - Present ·  Full-time",
      location: "Bhubaneswar, Odisha, India",
      description:
        "Developing and maintaining scalable web applications using the MERN stack.",
      logo: "https://i0.wp.com/www.qwegle.com/wp-content/uploads/2023/03/final-logo2.png?resize=300%2C86&ssl=1",
      points: [
        "Built and shipped multiple client-facing business websites and CMS-driven pages using Next.js and Node.js, working within a team of 4–6 developers using an agile workflow. (Next js , Node.js)",

        "Developed and maintained RESTful APIs with Node.js and Express, handling data storage and retrieval from MongoDB — covering features like authentication, content management, and dynamic page data. (Express, MongoDB)",

        "Implemented server-side rendering and static site generation patterns in Next.js to improve page load performance and SEO for client websites. (SSR, SSG, SEO)",

        "Worked across the full MERN stack — from designing MongoDB schemas and writing backend APIs to building pixel-accurate, responsive UIs — owning features end-to-end. (Full-stack, MongoDB)",

        "Built reusable React component systems shared across multiple projects, reducing duplicated UI code and speeding up feature delivery across the team.",

        "Collaborated with designers and product stakeholders to translate requirements into production-ready code, participating in code reviews and maintaining shared coding standards across the team.",
      ],
    },
    {
      id: 2,
      company: "CodeKart",
      role: "Software Developer Intern ·",
      period: "may-2024 - september-2024  ·  Internship",
      location: "Bhubaneswar, Odisha, India",
      description:
        "Developing and maintaining scalable web applications using the MERN stack.",
      logo: "https://cdn.thecodekart.com/assets/images/navbar/codekartlogo.png",
      points: [
        "Contributed to building a client-facing web application from scratch, working on both frontend (React) and backend (Node.js/Express) across the full development lifecycle — from initial setup to deployment. (React , Node.js)",

        "Built responsive UI pages and components with React, ensuring cross-device compatibility and consistent user experience across desktop and mobile viewports. (React , Responsive UI)",

        "Designed and implemented a user authentication system with login, registration, and protected routes — using JWT-based token authentication in the Node.js backend. (JWT, Auth, Express)",

        "Developed RESTful API endpoints with Node.js and Express to power dynamic frontend features, including data fetching, form submission, and user state management. (REST, API, Express)",

        "Built an admin dashboard with CMS-style panels to allow non-technical users to manage content, reducing dependency on developers for routine content updates.",
      ],
    },
  ];

  return (
    <section id="experience" className=" max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 border-b-2 pb-2 dark:text-white dark:border-gray-600">
        Professional Experience
      </h2>

      <div className="space-y-12">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="group border-b-[1px] dark:border-gray-700"
          >
            {/* Company header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="relative w-16 h-16 mr-4 overflow-hidden rounded-md border dark:border-gray-700">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    fill
                    sizes="64px"
                    className="object-contain bg-white px-2"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold dark:text-white">
                    {exp.company}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{exp.role}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  {exp.period}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {exp.location}
                </p>
              </div>
            </div>

            {/* Company description */}
            <div className="text-gray-700 dark:text-gray-300 mb-6">
              {exp.points.slice(0,4).map((p, i) => (
                <div className=" flex gap-4 mb-2" key={i}>
                  <Dot size={20} />
                  {` ${p}`}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;
