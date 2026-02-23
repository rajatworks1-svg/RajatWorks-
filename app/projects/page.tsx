"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projectData = [
  {
    title: "MIRA — Intelligent Conversational Agent",
    stack: "React, Next.js, Node.js, Multiple AI Models, Vercel",
    shortDescription: "A full-stack AI-powered chat agent supporting multiple AI models with authentication and chat history.",
    fullDescription: `MIRA is a full-stack AI-powered chat agent designed to deliver a seamless and intelligent conversational experience. Built with a modern tech stack, it supports multiple AI models working together to handle a wide range of tasks — from answering questions to maintaining context-aware conversations.

The platform features user authentication, chat history, and a clean responsive interface — all architected for performance and scalability.

⚠️ Note: Live API integrations are currently paused. Core features including authentication, chat history, and multi-model routing are fully implemented and functional in the complete version.`,
    link: null,
    image: "/images/mira.png",
  },
  {
    title: "ANON — E-Commerce Platform",
    stack: "Vue.js, Element UI, Google API, Vercel, Cloudflare",
    shortDescription: "A modern, fully responsive e-commerce web application with secure authentication and Google integrations.",
    fullDescription: `ANON is a modern, fully responsive e-commerce web application designed to deliver a smooth and secure online shopping experience. Built with performance and user experience at its core, the platform combines a clean UI with robust backend services.

It features Google login integration, fast CDN-powered asset delivery, professional typography via Google Fonts, and industry-standard HTTPS security through HSTS and Google Trust Services SSL.

ANON reflects a strong understanding of modern web architecture — from frontend design systems to deployment pipelines and security best practices.`,
    link: null,
    image: "/images/anon.png",
  },
  {
    title: "Phone Shop — Mobile E-Commerce Platform",
    stack: "Vue.js, Cloudflare, Google Fonts, Font Awesome, AOS, Vercel",
    shortDescription: "A phone-specialized e-commerce platform with smooth animations, mobile optimization, and enterprise-grade security.",
    fullDescription: `Phone Shop is a modern e-commerce web application specialized in mobile devices, built with performance, animations, and user experience as top priorities. The platform is fully mobile-optimized and secured with industry-standard protocols.

It uses AOS (Animate on Scroll) for smooth scroll-triggered animations, Font Awesome for scalable icons, and Cloudflare for both CDN delivery and SSL security. The result is a fast, visually polished, and secure shopping experience across all devices.

Phone Shop demonstrates strong attention to performance optimization, visual polish, and security best practices in a real-world e-commerce context.`,
    link: null,
    image: "/images/phoneshop.png",
  },
  {
    title: "Voltri — AI Image to 3D Model Converter",
    stack: "React, Vite, Tailwind CSS, Supabase, NVIDIA Trellis API, Vercel",
    shortDescription: "An AI-powered platform that converts 2D images into interactive 3D models with a full auth and subscription system.",
    fullDescription: `Voltri is a cutting-edge web application that transforms ordinary 2D images into fully interactive 3D models using artificial intelligence. Designed with a clean, intuitive interface, Voltri makes professional-grade 3D generation accessible to everyone — no technical knowledge required.

The platform features a complete user ecosystem including Google authentication, email sign-up, forgot password flow, a credit-based usage system, and both Indian (₹) and international ($) subscription plans with auto location detection. The 3D viewer supports rotate, zoom, and pan controls.

⚠️ Note: 3D model generation is temporarily paused due to API integration adjustments. All other features including authentication, credit system, and subscription management are fully functional.`,
    link: null,
    image: "/images/voltri.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

const ProjectCard = ({ project }: { project: typeof projectData[0] }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      className="bg-theme-bg/50 p-6 rounded-xl shadow-2xl border border-theme-muted/20 hover:border-theme-primary transition-all duration-300 flex flex-col"
    >
      <h2 className="text-2xl font-bold text-theme-base mb-2 leading-snug">
        {project.title}
      </h2>
      <p className="text-sm font-semibold text-theme-accent mb-4">
        {project.stack}
      </p>

      {/* Project Image */}
      <div className="rounded-lg mb-4 overflow-hidden bg-theme-muted/10 h-48">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-theme-muted/50 text-xs italic">
            No image yet
          </div>
        )}
      </div>

      {/* Description with Read More */}
      <div className="flex-1">
        <p className="text-theme-base text-sm whitespace-pre-line">
          {expanded ? project.fullDescription : project.shortDescription}
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-theme-primary text-sm font-semibold hover:text-theme-accent transition-colors"
        >
          {expanded ? "Show Less ↑" : "Read More ↓"}
        </button>
      </div>
    </motion.div>
  );
};

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
          variants={containerVariants}
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
