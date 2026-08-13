"use client";
import React, { useState } from "react";
import { Mail, MapPin, Clock, Github, Linkedin, Send, ArrowUpRight, AlertCircle, CheckCircle, Loader2 } from "lucide-react";
import Link from "next/link";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [errMsg, setErrMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");
    const { name, email, subject, message } = formData;
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setErrMsg("Please fill in all fields before sending.");
      setStatus("err");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, from: email, subject, message }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("ok");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setErrMsg(data.error || "Something went wrong. Try emailing directly.");
        setStatus("err");
      }
    } catch {
      setErrMsg("Could not send. Please email subhendujena38@gmail.com directly.");
      setStatus("err");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2.5 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/10 dark:focus:ring-blue-400/10 transition-all duration-150";

  const labelClass =
    "block text-[10px] font-semibold tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-1.5";

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col">

      {/* ── Hero strip ─────────────────────────────── */}
      <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-12 text-center">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-full px-3 py-1 mb-5">
          <Mail size={12} />
          Get in touch
        </span>
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white tracking-tight mb-3">
          Let&apos;s work together
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm mx-auto leading-relaxed">
          Open to React, Node.js, and fullstack roles. I&apos;ll reply within 24 hours.
        </p>
      </div>

      {/* ── Body ───────────────────────────────────── */}
      <div className="flex flex-col md:flex-row flex-1">

        {/* Left col */}
        <aside className="md:w-72 lg:w-80 flex-shrink-0 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800 px-6 md:px-8 py-10 flex flex-col gap-8">

          {/* Status */}
          <div>
            <p className={labelClass}>Status</p>
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-full px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Available for new roles
            </span>
          </div>

          {/* Contact info */}
          <div>
            <p className={labelClass}>Contact details</p>
            <div className="flex flex-col divide-y divide-gray-100 dark:divide-gray-800">
              {[
                { icon: <Mail size={15} />, label: "Email", value: "subhendujena38@gmail.com" },
                { icon: <MapPin size={15} />, label: "Location", value: "Odisha, India" },
                { icon: <Clock size={15} />, label: "Response time", value: "Within 24 hours" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 py-3.5">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-0.5">{item.label}</p>
                    <p className="text-xs font-medium text-gray-800 dark:text-gray-200 break-all">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <p className={labelClass}>Find me on</p>
            <div className="flex flex-wrap gap-2">
              <Link
                href="https://github.com/Subhendu9090"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 rounded-full px-3 py-1.5 transition-all duration-150"
              >
                <Github size={13} />
                GitHub
              </Link>
              <Link
                href="https://linkedin.com/in/subhendu-jena"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 rounded-full px-3 py-1.5 transition-all duration-150"
              >
                <Linkedin size={13} />
                LinkedIn
              </Link>
            </div>
          </div>

        </aside>

        {/* Right col — form */}
        <main className="flex-1 m-auto px-6 md:px-10 lg:px-14 py-10 max-w-2xl">
          <p className={labelClass + " mb-6"}>Send a message</p>

          <form onSubmit={handleSubmit} noValidate className="space-y-5">

            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="c-name" className={labelClass}>Name</label>
                <input id="c-name" type="text" name="name" value={formData.name} onChange={handleChange}
                  onFocus={() => setStatus("idle")} placeholder="Your name"
                  required autoComplete="name" className={inputClass} />
              </div>
              <div>
                <label htmlFor="c-email" className={labelClass}>Email</label>
                <input id="c-email" type="email" name="email" value={formData.email} onChange={handleChange}
                  onFocus={() => setStatus("idle")} placeholder="you@company.com"
                  required autoComplete="email" className={inputClass} />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="c-subject" className={labelClass}>Subject</label>
              <input id="c-subject" type="text" name="subject" value={formData.subject} onChange={handleChange}
                onFocus={() => setStatus("idle")} placeholder="Hiring — React & Node.js Developer"
                required className={inputClass} />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="c-message" className={labelClass}>Message</label>
              <textarea id="c-message" name="message" value={formData.message} onChange={handleChange}
                onFocus={() => setStatus("idle")} placeholder="Tell me about the role or project..."
                required rows={5}
                className={inputClass + " resize-y"} />
            </div>

            {/* Error */}
            {status === "err" && (
              <div className="flex items-center gap-2.5 text-xs text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg px-4 py-3">
                <AlertCircle size={14} className="flex-shrink-0" />
                {errMsg}
              </div>
            )}

            {/* Success */}
            {status === "ok" && (
              <div className="flex items-center gap-2.5 text-xs text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg px-4 py-3">
                <CheckCircle size={14} className="flex-shrink-0" />
                Message sent — I&apos;ll get back to you within 24 hours.
              </div>
            )}

            {/* Submit row */}
            <div className="flex w-full justify-center items-center gap-4 pt-2">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium rounded-lg transition-colors duration-150"
              >
                {loading
                  ? <><Loader2 size={14} className="animate-spin" /> Sending...</>
                  : <><Send size={14} /> Send message</>}
              </button>
              <span className="text-xs text-gray-400 dark:text-gray-600">or</span>
              <a
                href="mailto:subhendujena38@gmail.com"
                className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
              >
                email directly
                <ArrowUpRight size={11} />
              </a>
            </div>

          </form>
        </main>

      </div>
    </div>
  );
};

export default ContactSection;