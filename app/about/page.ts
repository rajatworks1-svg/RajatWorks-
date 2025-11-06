'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Framer Motion Variants
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
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

// Main About Me Page Component
export default function About() {
  return (
    // FIX: min-h-[calc(100vh-160px)] added so page takes full height
    <motion.div
      className="container mx-auto px-4 py-12 md:py-20 max-w-3xl min-h-[calc(100vh-160px)]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 
        className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-8"
        variants={itemVariants}
      >
        About Me
      </motion.h1>

      <motion.div
        className="bg-white p-6 md:p-10 rounded-xl shadow-xl border border-gray-100 space-y-8"
        variants={itemVariants}
      >
        <motion.section variants={itemVariants}>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Hello! I'm Rajat Kumar Dua</h2>
          <p className="text-gray-600 leading-relaxed">
            Hello! I'm Rajat Kumar Dua, a Full-Stack Software Engineer driven by a passion for creating clean, performant, and highly interactive web applications. I thrive at the intersection of powerful backends and compelling user experiences.
          </p>
        </motion.section>

        <motion.section variants={itemVariants}>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">My Experience: 3 Years of Dedication</h2>
          <div className="p-4 rounded-lg bg-yellow-50/50 border border-yellow-100">
            <p className="text-gray-700 leading-relaxed">
              I bring three years of focused experience in building and deploying complex web solutions. My journey has been centered around transforming ideas into robust, scalable applications, with a special emphasis on high performance and creating unique 3D user interfaces. This experience ensures I deliver stable, production-ready code every time.
            </p>
          </div>
        </motion.section>

        <motion.section variants={itemVariants}>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">My Core Expertise</h2>
          <p className="text-gray-600 mb-4">My core stack is built for robust performance and modern design:</p>
          <div className="flex flex-wrap gap-3">
            {['Next.js', 'TypeScript', 'React', 'Framer Motion', 'React Three Fiber (3D)', 'Node.js', 'PostgreSQL', 'Tailwind CSS'].map(skill => (
              <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full shadow-sm">
                {skill}
              </span>
            ))}
          </div>
        </motion.section>

        <motion.section variants={itemVariants}>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">My Philosophy</h2>
          <p className="text-gray-600 leading-relaxed">
            I believe that great software is a blend of technical excellence and thoughtful design. My goal for every project is to ensure that it is not only functional and fast but also intuitive and accessible for every user. I am constantly learning new tools and techniques to deliver cutting-edge solutions.
          </p>
        </motion.section>

        <motion.section variants={itemVariants}>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Let's Connect</h2>
          <p className="text-gray-600 leading-relaxed">
            I'm always open to new opportunities and collaborations. Feel free to explore my projects or reach out to me directly!
          </p>
        </motion.section>
      </motion.div>
    </motion.div>
  );
}
