"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BASE = "https://res.cloudinary.com/dbshw2jxv/image/upload";

const projectData = [
  {
    title: "MIRA",
    subtitle: "AI-Powered Chat Agent",
    stack: "React, Next.js, Node.js, Vercel",
    link: "https://rajatworks-mira.vercel.app/",
    images: [
      `${BASE}/IMG_20260222_223953_fk41hb.jpg`,
      `${BASE}/IMG_20260222_223929_vdwboh.jpg`,
      `${BASE}/IMG_20260222_223914_fjpbk3.jpg`,
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
    link: "https://rajatworks-anon.vercel.app/",
    images: [
      `${BASE}/IMG_20260222_224520_k13pig.jpg`,
      `${BASE}/IMG_20260222_224618_t6ysmm.jpg`,
      `${BASE}/IMG_20260222_224601_caidle.jpg`,
      `${BASE}/IMG_20260222_224529_x3rjju.jpg`,
      `${BASE}/IMG_20260222_224544_ytby66.jpg`,
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
    link: "https://rajatworks-teck.vercel.app/",
    images: [
      `${BASE}/IMG_20260222_224631_felxid.jpg`,
      `${BASE}/IMG_20260222_224720_qwcqyo.jpg`,
      `${BASE}/IMG_20260222_224643_dtorqt.jpg`,
      `${BASE}/IMG_20260222_224652_z3twqi.jpg`,
      `${BASE}/IMG_20260222_224709_kb4vk4.jpg`,
      `${BASE}/IMG_20260222_224737_xlkctz.jpg`,
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
    link: "https://voltri.vercel.app/",
    images: [
      `${BASE}/IMG_20260222_224914_iag0wb.jpg`,
      `${BASE}/IMG_20260222_224944_dbhmyy.jpg`,
      `${BASE}/IMG_20260222_224955_cqbzkj.jpg`,
      `${BASE}/IMG_20260222_224934_txdsx7.jpg`,
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
// LIGHTBOX (Fullscreen viewer)
// =============================================
const Lightbox: React.FC<{
  images: string[];
  startIndex: number;
  onClose: () => void;
}> = ({ images, startIndex, onClose }) => {
  const [current, setCurrent] = useState(startIndex);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // Prevent body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center text-xl z-10 transition-all"
      >
        ✕
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/70 text-sm bg-black/40 px-3 py-1 rounded-full">
        {current + 1} / {images.length}
      </div>

      {/* Left Arrow */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/25 rounded-full w-12 h-12 flex items-center justify-center text-2xl transition-all z-10"
        >
          ‹
        </button>
      )}

      {/* Image */}
      <motion.img
        key={current}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        src={images[current]}
        alt={`Image ${current + 1}`}
        className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg select-none"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Right Arrow */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/25 rounded-full w-12 h-12 flex items-center justify-center text-2xl transition-all z-10"
        >
          ›
        </button>
      )}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
              className={`rounded-full transition-all duration-200 ${
                i === current ? 'bg-white w-4 h-2' : 'bg-white/40 w-2 h-2'
              }`}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

// =============================================
// THUMBNAIL CAROUSEL (in card)
// =============================================
const ImageCarousel: React.FC<{ images: string[]; title: string }> = ({ images, title }) => {
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  };

  return (
    <>
      {/* Thumbnail */}
      <div
        className="relative mb-4 rounded-lg overflow-hidden group cursor-zoom-in"
        onClick={() => setLightboxOpen(true)}
      >
        <div className="h-56 bg-black flex items-center justify-center">
          <img
            src={images[current]}
            alt={`${title} screenshot ${current + 1}`}
            className="max-w-full max-h-full w-full h-full object-contain transition-opacity duration-300"
          />
        </div>

        {/* Zoom hint */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs bg-black/60 px-2 py-1 rounded-full">
            🔍 Tap to expand
          </span>
        </div>

        {images.length > 1 && (
          <>
            {/* Left arrow */}
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl transition-all opacity-0 group-hover:opacity-100 z-10"
            >
              ‹
            </button>

            {/* Right arrow */}
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl transition-all opacity-0 group-hover:opacity-100 z-10"
            >
              ›
            </button>

            {/* Counter */}
            <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded-full z-10">
              {current + 1}/{images.length}
            </div>

            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                  className={`rounded-full transition-all duration-200 ${
                    i === current ? 'bg-white w-3 h-1.5' : 'bg-white/50 w-1.5 h-1.5'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={images}
          startIndex={current}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
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

      {/* Expandable */}
      {expanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-2"
        >
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

      {/* Bottom Row */}
      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-theme-primary hover:text-theme-accent font-semibold transition-colors"
        >
          {expanded ? "Read Less ↑" : "Read More ↓"}
        </button>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm text-theme-primary hover:text-theme-accent font-semibold transition-colors group"
        >
          Visit Site
          <svg className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
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
