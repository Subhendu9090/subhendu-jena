"use client";
import React, { useState } from "react";
import {
  Mail,
  User,
  MessageSquare,
  Pencil,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
} from "lucide-react";
import DecorativeBackground from "@/components/DecorativeBackground";
import Link from "next/link";

const ContactSection = () => {
  const formFields = [
    {
      name: "name",
      type: "text",
      placeholder: "Your Name",
      label: "Name",
      icon: <User className="w-5 h-5" />,
    },
    {
      name: "email",
      type: "email",
      placeholder: "your@email.com",
      label: "Email",
      icon: <Mail className="w-5 h-5" />,
    },
    {
      name: "subject",
      type: "text",
      placeholder: "Subject",
      label: "Subject",
      icon: <Pencil className="w-5 h-5" />,
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: formData.subject,
          message: formData.message,
          from: formData.email,
          name:formData.name
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMsg("✅ Email sent successfully!");
      } else {
        setResponseMsg(`❌ Error: ${data.error || "Something went wrong"}`);
      }
    } catch (error) {
      setResponseMsg("❌ Failed to send email. Please try again.");
      console.error("Email send error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#f8f9fa] dark:bg-gray-900 flex items-center justify-center py-12 px-4">
      {/* Background Decorations */}
      <DecorativeBackground />
      <div className="max-w-5xl relative z-20 w-full mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Have a question or want to work together? I&apos;d love to hear from
            you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Contact Info Card */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800/40 rounded-2xl p-6 shadow-xl dark:shadow-gray-800/50 border border-gray-100 h-full dark:border-gray-700">
            <div className="space-y-10">
              {/* Contact Details */}
              <div className="space-y-4 ">
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Email
                    </p>
                    <a
                      href="mailto:subhendujena38@gmail.com"
                      className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                    >
                      subhendujena38@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Phone
                    </p>
                    <p className="text-gray-900 dark:text-white font-medium">
                      +91 7991066182
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Location
                    </p>
                    <p className="text-gray-900 dark:text-white font-medium">
                      Odisha, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Connect with me
                </p>
                <div className="flex space-x-4">
                  <Link
                    href="https://github.com/Subhendu9090"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center group hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
                  >
                    <Github className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                  </Link>
                  <Link
                    href="https://linkedin.com/in/subhendu-jena"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center group hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white dark:bg-gray-800/30 rounded-2xl p-8 shadow-xl dark:shadow-gray-800/50 border border-gray-100 dark:border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {formFields.map((field, index) => (
                  <div key={index} className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {field.label}
                    </label>
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-blue-500 transition-colors duration-300">
                        {field.icon}
                      </div>
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className="w-full px-12 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl
                          text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500
                          focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20
                          outline-none transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-4 text-gray-400 group-hover:text-blue-500 transition-colors duration-300">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    className="w-full px-12 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl
                      text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500
                      focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20
                      outline-none transition-all duration-300 min-h-[150px] resize-y"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700
                  text-white font-medium px-6 py-3 rounded-xl
                  flex items-center justify-center space-x-2
                  transform hover:-translate-y-0.5 transition-all duration-300 group"
              >
                {loading ? "Sending..." : "Send Email"}
                <Send className="w-5 h-5 group-hover:animate-pulse " />
              </button>
            </form>
            {responseMsg && <p className="mt-2 text-center">{responseMsg}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
