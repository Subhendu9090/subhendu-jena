import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Subhendu Jena – Full-Stack Developer & Software Engineer",
  description:
    "Explore the portfolio of Subhendu Jena – a passionate full-stack developer specializing in React, Node.js, Next.js, and scalable web applications.",
  keywords: [
    "Subhendu Jena",
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Portfolio",
    "JavaScript Developer",
    "Frontend Engineer",
    "Backend Developer",
    "Node.js Developer",
    "javascript Developer"
  ],
  authors: [{ name: "Subhendu Jena", url: "https://subhendu-jena.vercel.app" }],
  creator: "Subhendu Jena",
  publisher: "Subhendu Jena",
  metadataBase: new URL("https://subhendu-jena.vercel.app"),
  openGraph: {
    title: "Subhendu Jena – Full-Stack Developer Portfolio",
    description:
      "Welcome to the official website of Subhendu Jena. Discover projects, skills, and experience in full-stack web development using modern technologies.",
    url: "https://subhendu-jena.vercel.app",
    siteName: "Subhendu Jena",
    images: [
      {
        url: "/IMG-20250224-WA0087.jpg", 
        width: 1200,
        height: 630,
        alt: "Subhendu Jena Portfolio Screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative flex items-center justify-center w-full z-50">
          <Navbar />
        </div>
        <div className="bg-white dark:bg-black z-10 dark:text-white mt-16">
          {children}
        </div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
