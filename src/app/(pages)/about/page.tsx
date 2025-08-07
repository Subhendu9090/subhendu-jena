import React from "react";
import Image from "next/image";
import Link from "next/link";
import DecorativeBackground from "@/components/DecorativeBackground";

function Page() {
  const aboutData = {
    name: "Subhendu Jena",
    title: "MERN Stack Developer",
    bio: "Passionate MERN Stack Developer with experience in building scalable web applications and a strong background in backend and frontend technologies.",
    education: {
      degree: "Master of Computer Application (MCA)",
      college: "INDIRA GANDHI INSTITUTE OF TECHNOLOGY, sarang",
      cgpa: "8.7",
    },
  };

  const certificates = [
    {
      id: 1,
      title: "MERN Stack Development Certificate",
      issuer: "CodeKart",
      date: "",
      image: "/certificate/CodeKart.png",
    },
    {
      id: 2,
      title: "Full-Stack Development Certificate",
      issuer: "IBM",
      date: "",
      image: "/certificate/IbmCert.png",
    },
    {
      id: 3,
      title: "Full-Stack Development Certificate",
      issuer: "Udemy",
      date: "",
      image: "/certificate/UdemyCert.png",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 min-h-screen py-8">
      <DecorativeBackground />
      {/* About Me Section */}
      <section id="about" className="mb-16 z-10 relative">
        <h2 className="text-3xl font-bold mb-6 border-b pb-2 dark:text-white dark:border-gray-700">
          About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Profile Image & Basic Info */}
          <div className="md:col-span-1">
            <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src="/IMG-20250224-WA0087.jpg"
                alt="Profile Picture"
                fill
                sizes="(max-width: 768px) 100vw, 192px"
                className="object-cover"
                priority
              />
            </div>
            <h3 className="text-xl font-semibold text-center dark:text-white">
              {aboutData.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
              {aboutData.title}
            </p>
          </div>

          {/* Bio & Education */}
          <div className="md:col-span-2">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {aboutData.bio}
            </p>

            {/* Education Section */}
            <h4 className="font-medium mb-2 dark:text-white">Education</h4>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">
                {aboutData.education.degree}
              </span>{" "}
              <br /> {/* Added Degree */}
              <span className="font-semibold">
                Institution:{" "}
                <Link
                  href={"https://igitsarang.ac.in/"}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className=" hover:text-blue-700 hover:underline cursor-pointer"
                >
                  {aboutData.education.college}
                </Link>
              </span>{" "}
              <br />
              CGPA:{" "}
              <span className="font-medium">{aboutData.education.cgpa}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates z-10 relative ">
        <h2 className="text-3xl font-bold mb-6 border-b pb-2 dark:text-white dark:border-gray-700">
          Certificates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="border transition duration-300 hover:rotate-2 cursor-pointer dark:border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg dark:bg-gray-800"
            >
              {/* Certificate Image at the Top */}
              <div className="relative w-full h-48">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain transition duration-200 hover:scale-110 bg-gray-300"
                />
              </div>

              {/* Certificate Details */}
              <div className="p-4 z-10 relative">
                <h3 className="font-semibold text-lg mb-2 dark:text-white">
                  {cert.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Issued by: <span className="font-medium">{cert.issuer}</span>
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                  {cert.date}
                </p>

                {/* View Certificate Button */}
                <Link
                  href={cert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-blue-500 dark:text-blue-400 font-medium hover:underline transition-colors cursor-pointer duration-200"
                >
                  View Certificate
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Page;
