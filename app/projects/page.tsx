

"use client";
import React from 'react';
import { Metadata } from 'next';
import { motion } from 'framer-motion';

// NOTE: Metadata is exported from layout/metadata for client components,
// but we include it here for reference (and it will work if imported correctly in layout)

const projectData = [
  {
    title: "Project Alpha: 3D Portfolio Experience",
    stack: "Next.js, React Three Fiber (R3F), Drei, Tailwind CSS, TypeScript",
    description: "An immersive, interactive 3D website built to showcase a passion for web graphics. It features custom geometries, dynamic camera controls, and smooth animations, proving proficiency in performance-optimized 3D rendering in the browser.",
    link: "#",
    image: "",
  },
  {
    title: "Project Beta: Full-Stack E-commerce Platform",
    stack: "Next.js, PostgreSQL, Stripe API, Node.js, Express",
    description: "A scalable e-commerce application demonstrating full-stack skills, including secure user authentication, complex database queries, and payment processing integration. Focus was placed on fast load times and responsive design.",
    link: "#",
    image: "",
  },
  {
    title: "Project Gamma: Real-Time Chat Application",
    stack: "React, Socket.IO, MongoDB, Express",
    description: "Developed a real-time messaging platform supporting private and group chats. Features include instant delivery confirmation and user status updates, highlighting expertise in WebSocket implementation.",
    link: "#",
    image: "",
  },
  {
    title: "Project Delta: Fitness Tracking API",
    stack: "Node.js, TypeScript, PostgreSQL, RESTful Architecture",
    description: "Built a robust backend API for a fitness application, managing user data, workout logs, and progress metrics. Focused on secure data handling and efficient query performance.",
    link: "#",
    image: "",
  },
  {
    title: "Project Epsilon: Custom CMS Dashboard",
    stack: "Next.js, Tailwind CSS, Firebase Authentication",
    description: "Designed and built a modern, responsive Content Management System dashboard for easy website content updates. The interface is optimized for speed and accessibility.",
    link: "#",
    image: "",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
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
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-theme-bg/50 p-6 rounded-xl shadow-2xl border border-theme-muted/20 hover:border-theme-primary transition-all duration-300"
            >
              <h2 className="text-2xl font-bold text-theme-base mb-3 leading-snug">
                {project.title}
              </h2>
              <p className="text-sm font-semibold text-theme-accent mb-3">
                {project.stack}
              </p>
              
              {/* This is where the image/proof will go later */}
              <div className="bg-theme-muted/10 h-40 rounded-lg mb-4 flex items-center justify-center text-theme-muted/50 text-xs italic">
                {/* [Image/Video Placeholder for {project.title}] */}
                Proof/Image Placeholder (Later, we'll replace this with actual links/images)
              </div>
              
              <p className="text-theme-base mb-4 text-sm">
                {project.description}
              </p>
              
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-theme-primary hover:text-theme-accent font-semibold transition-colors group"
              >
                View Live Project/Code
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default ProjectsPage;
