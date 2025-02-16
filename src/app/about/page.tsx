import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DecorativeBackground from '@/components/DecorativeBackground';

function Page() {
  const aboutData = {
    name: "Subhendu Jena",
    title: "MERN Stack Developer",
    bio: "Passionate MERN Stack Developer with experience in building scalable web applications and a strong background in backend and frontend technologies.",
    education: {
      college: "Indira Gandhi Institute Of Technology",
      cgpa: "8.5"
    }
  };

  const certificates = [
    {
      id: 1,
      title: "MERN Stack Development Certificate",
      issuer: "Issuing Organization",
      date: "June 2023",
      image: "/path/to/certificate1.jpg"
    },
    {
      id: 2,
      title: "Full-Stack Development Certificate",
      issuer: "Issuing Organization",
      date: "January 2022",
      image: "/path/to/certificate2.jpg"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 min-h-screen py-8">
      <DecorativeBackground/>
      {/* About Me Section */}
      <section id="about" className="mb-16 z-10 relative">
        <h2 className="text-3xl font-bold mb-6 border-b pb-2 dark:text-white dark:border-gray-700">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Profile Image & Basic Info */}
          <div className="md:col-span-1">
            <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
              <Image 
                src="/path/to/your-profile-image.jpg" 
                alt="Profile Picture"
                fill
                sizes="(max-width: 768px) 100vw, 192px"
                className="object-cover"
                priority
              />
            </div>
            <h3 className="text-xl font-semibold text-center dark:text-white">{aboutData.name}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-4">{aboutData.title}</p>
          </div>

          {/* Bio & Education */}
          <div className="md:col-span-2">
            <p className="text-gray-700 dark:text-gray-300 mb-6">{aboutData.bio}</p>

            {/* Education Section */}
            <h4 className="font-medium mb-2 dark:text-white">Education</h4>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">{aboutData.education.college}</span> <br />
              CGPA: <span className="font-medium">{aboutData.education.cgpa}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates z-10 relative ">
        <h2 className="text-3xl font-bold mb-6 border-b pb-2 dark:text-white dark:border-gray-700">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map(cert => (
            <div key={cert.id} className="border dark:border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800">
              {/* Certificate Image at the Top */}
              <div className="relative w-full h-48">
                <Image 
                  src={cert.image} 
                  alt={cert.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              {/* Certificate Details */}
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 dark:text-white">{cert.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Issued by: <span className="font-medium">{cert.issuer}</span></p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{cert.date}</p>

                {/* View Certificate Button */}
                <Link 
                  href={cert.image} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-blue-500 dark:text-blue-400 font-medium hover:underline transition-colors duration-200"
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