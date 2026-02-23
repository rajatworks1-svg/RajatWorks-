"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// =============================================
// HOW TO ADD IMAGES:
// 1. Put screenshots in /public/images/ folder
// 2. Add paths to images array for each project
// Example: images: ["/images/mira1.png", "/images/mira2.png"]
// Up to 7 images per project supported
// =============================================

const projectData = [
  {
    title: "MIRA",
    subtitle: "AI-Powered Chat Agent",
    stack: "React, Next.js, Node.js, Vercel",
    images: [
      // "/images/mira1.png",
      // "/images/mira2.png",
    ],
    hasWarning: true,
    warning: "Live API integrations are currently paused. Core features including authentication, chat history, and multi-model routing are fully implemented and functional in the complete version.",
    description: `MIRA is a full-stack AI-powered chat agent designed to deliver a seamless and intelligent conversational experience. Built with a modern tech stack, it supports multiple AI models working together to handle a wide range of tasks — from answering questions to maintaining context-aware conversations.\n\nThe platform features user authentication, chat history, and a clean responsive interface — all architected for performance and scalability.`,
    techStack: [
      { label: "Frontend", detail: "React & Next.js — for a fast, SEO-friendly, and modern UI" },
      { label: "Backend", detail: "Node.js — handling server logic and API communication" },
      { label: "Hosting", detail: "Vercel — ensuring reliable and optimized deployment" },
      { label: "AI", detail: "Multiple large language models integrated for enhanced response quality" },
    ],
    keyFeatures: [],
  },
  {
    title: "ANON",
    subtitle: "E-Commerce Platform",
    stack: "Vue.js, Element UI, Vercel, Google API",
    images: [
      // "/images/anon1.png",
      // "/images/anon2.png",
    ],
    hasWarning: false,
    warning: "",
    description: `ANON is a modern, fully responsive e-commerce web application designed to deliver a smooth and secure online shopping experience. Built with performance and user experience at its core, the platform combines a clean UI with robust backend services.\n\nANON reflects a strong understanding of modern web architecture — from frontend design systems to deployment pipelines and security best practices.`,
    techStack: [
      { label: "Frontend", detail: "Vue.js with Element UI — delivering a polished, component-driven interface with ready-to-use design elements" },
      { label: "Hosting", detail: "Vercel — enabling seamless deployment with automatic updates and global availability" },
      { label: "CDN", detail: "Unpkg — ensuring fast load times by serving libraries from worldwide distributed servers" },
      { label: "Typography", detail: "Google Fonts API — for clean, professional, and consistent typography across the platform" },
      { label: "Integrations", detail: "Google API — powering features like Google login and maps integration" },
      { label: "Security", detail: "HSTS & Google Trust Services SSL — ensuring all user data is transmitted over encrypted HTTPS connections" },
    ],
    keyFeatures: [],
  },
  {
    title: "Phone Shop",
    subtitle: "Mobile Devices E-Commerce",
    stack: "Vercel, Cloudflare, Google API, AOS",
    images: [
      // "/images/phoneshop1.png",
      // "/images/phoneshop2.png",
    ],
    hasWarning: false,
    warning: "",
    description: `Phone Shop is a modern e-commerce web application specialized in mobile devices, built with performance, animations, and user experience as top priorities. The platform is fully mobile-optimized and secured with industry-standard protocols.\n\nPhone Shop demonstrates strong attention to performance optimization, visual polish, and security best practices in a real-world e-commerce context.`,
    techStack: [
      { label: "Hosting", detail: "Vercel — for fast, reliable, and seamless deployment with global availability" },
      { label: "CDN", detail: "Cloudflare, cdnjs & Unpkg — delivering assets and libraries at lightning speed through worldwide distributed servers" },
      { label: "Typography & Icons", detail: "Google Fonts API & Font Awesome — providing clean, professional typography and over 7000 scalable icons" },
      { label: "JavaScript", detail: "Google API & AOS (Animate on Scroll) — powering smooth scroll-triggered animations and dynamic functionality" },
      { label: "Mobile", detail: "Viewport Meta — ensuring a fully responsive experience across all screen sizes and devices" },
      { label: "Security", detail: "HSTS & Cloudflare SSL — enforcing encrypted HTTPS connections and protecting users from protocol attacks" },
    ],
    keyFeatures: [],
  },
  {
    title: "Voltri",
    subtitle: "AI Image to 3D Model Converter",
    stack: "React, Vite, Tailwind CSS, Supabase, Microsoft Trellis API",
    images: [
      // "/images/voltri1.png",
      // "/images/voltri2.png",
    ],
    hasWarning: true,
    warning: "3D model generation is temporarily paused due to API integration adjustments. All other features including authentication, credit system, and subscription management are fully functional.",
    description: `Voltri is a cutting-edge web application that transforms ordinary 2D images into fully interactive 3D models using artificial intelligence. Designed with a clean, intuitive interface, Voltri makes professional-grade 3D generation accessible to everyone — no technical knowledge required.\n\nThe platform features a complete user ecosystem including Google authentication, email sign-up, forgot password flow, a credit-based usage system, and both Indian (₹) and international ($) subscription plans with auto location detection.`,
    techStack: [
      { label: "Frontend", detail: "React & Vite — for a blazing-fast, modern UI experience" },
      { label: "Styling", detail: "Tailwind CSS — clean, responsive, and fully mobile-optimized design" },
      { label: "Backend & Database", detail: "Supabase — handling authentication, user data, and credit management" },
      { label: "AI Engine", detail: "Microsoft Trellis API — powering the core image-to-3D conversion" },
      { label: "Hosting", detail: "Vercel — reliable global deployment" },
      { label: "Security", detail: "HSTS & Google Trust Services SSL — ensuring all user data stays encrypted and protected" },
    ],
    keyFeatures: [
      "Image upload with real-time AI processing and progress tracking",
      "Interactive 3D model viewer with rotate, zoom, and pan controls",
      "Google Sign-In & Email authentication",
      "Credit & subscription management system",
      "Geo-based pricing (INR & USD auto-detected)",
      "Beautiful, user-friendly error handling — no technical jargon shown to users",
    ],
  },
];

// =============================================
// CAROUSEL COMPONENT
// =============================================
const ImageCarousel: React.FC<{ images: string[]; title: string }> = ({ images, title }) => {
  const [current, setCurrent] = useState(0);

  if (images.length === 0) {
    return (
      <div className="bg-theme-muted/10 h-48 rounded-lg mb-4 flex flex-col items-center justify-center text-theme-muted/40 text-xs italic border border-dashed border-theme-muted/20 gap-2">
        <span className="text-3xl">🖼️</span>
        <span>Put screenshots in /public/images/</span>
        <span>Then add paths to images[] in projectData</span>
      </div>
    );
  }

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="relative mb-4 rounded-lg overflow-hidden group">
      {/* Image */}
      <div className="h-48 bg-theme-muted/10">
        <img
          src={images[current]}
          alt={`${title} screenshot ${current + 1}`}
          className="w-full h-full object-cover rounded-lg transition-opacity duration-300"
        />
      </div>

      {/* Arrows - only show if more than 1 image */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg transition-all opacity-0 group-hover:opacity-100"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg transition-all opacity-0 group-hover:opacity-100"
          >
            ›
          </button>

          {/* Counter */}
          <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-0.5 rounded-full">
            {current + 1}/{images.length}
          </div>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-200 ${
                  i === current ? 'bg-white w-3 h-1.5' : 'bg-white/50 w-1.5 h-1.5'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// =============================================
// PROJECT CARD
// =============================================
const ProjectCard: React.FC<{ project: typeof projectData[0] }> = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 100, damping: 10 },
        },
      }}
      className="bg-theme-bg/50 p-6 rounded-xl shadow-2xl border border-theme-muted/20 hover:border-theme-primary transition-all duration-300 flex flex-col"
    >
      {/* Header */}
      <h2 className="text-2xl font-bold text-theme-base mb-1 leading-snug">
        {project.title}
      </h2>
      <p className="text-base font-medium text-theme-muted mb-2">
        {project.subtitle}
      </p>
      <p className="text-sm font-semibold text-theme-accent mb-4">
        {project.stack}
      </p>

      {/* Carousel */}
      <ImageCarousel images={project.images} title={project.title} />

      {/* Description */}
      <p className="text-theme-base text-sm mb-3 whitespace-pre-line">
        {project.description}
      </p>

      {/* Expandable Section */}
      {expanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-2"
        >
          {/* Key Features */}
          {project.keyFeatures.length > 0 && (
            <div className="mb-4">
              <p className="text-sm font-bold text-theme-base mb-2">Key Features:</p>
              <ul className="space-y-1">
                {project.keyFeatures.map((f, i) => (
                  <li key={i} className="text-sm text-theme-base flex items-start gap-2">
                    <span className="text-theme-primary mt-0.5">▸</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div className="mb-4">
            <p className="text-sm font-bold text-theme-base mb-2">Tech Stack:</p>
            <ul className="space-y-2">
              {project.techStack.map((t, i) => (
                <li key={i} className="text-sm text-theme-base">
                  <span className="font-semibold text-theme-accent">{t.label}:</span>{" "}
                  {t.detail}
                </li>
              ))}
            </ul>
          </div>

          {/* Yellow Warning Note */}
          {project.hasWarning && (
            <div className="mt-3 p-3 rounded-lg border border-yellow-400/50 bg-yellow-400/10">
              <p className="text-yellow-400 text-xs font-semibold flex items-start gap-2">
                <span className="text-base leading-none mt-0.5">⚠️</span>
                <span>{project.warning}</span>
              </p>
            </div>
          )}
        </motion.div>
      )}

      {/* Read More / Read Less */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 self-start text-sm text-theme-primary hover:text-theme-accent font-semibold transition-colors"
      >
        {expanded ? "Read Less ↑" : "Read More ↓"}
      </button>
    </motion.div>
  );
};

// =============================================
// MAIN PAGE
// =============================================
const ProjectsPage: React.FC = () => {
  return (
    <main className="container mx-auto p-4 md:p-8 min-h-screen">
      <div className="max-w-5xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-extrabold text-theme-primary mb-12 text-center"
        >
          My Featured Work
        </motion.h1>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-10"
        >
          {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>

      </div>
    </main>
  );
};

export default ProjectsPage;
