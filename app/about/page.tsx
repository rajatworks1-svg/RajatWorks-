'use client';

import React from 'react';
import { motion } from 'framer-motion';

// --- ANIMATION VARIANTS  ---
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each child animation
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

const techVariants = {
    // Used for the expertise stack list
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
}

// --- KEY COMPONENTS ---
const TechStackList: React.FC<{ items: string[] }> = ({ items }) => (
 
    <motion.div
        className="flex flex-wrap gap-2 mt-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="show" // Use whileInView for scroll-based animation trigger
        viewport={{ once: true, amount: 0.5 }} // Trigger only once when 50% visible
    >
        {items.map((item, index) => (
            <motion.span
                key={index}
                variants={techVariants}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="px-4 py-1 text-sm font-semibold rounded-full bg-blue-100 text-blue-800"
            >
                {item}
            </motion.span>
        ))}
    </motion.div>
);

// --- MAIN PAGE COMPONENT ---
const AboutPage: React.FC = () => {
  return (
    // Base layout wrapper
    <div className="py-8">
      {/* Motion container for the main content card */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show" // Animate on load
        className="max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-xl shadow-2xl border border-gray-100" // CLEANED LINE
      >
        <motion.h1
       
          className="text-3xl md:text-5xl font-extrabold text-black mb-6 border-b border-gray-300 pb-2"
        >
          About Me
        </motion.h1>

        {/* 1. Introduction */}
        <motion.section variants={itemVariants} className="mb-8">
          <p className="text-lg text-gray-800 mb-4">
            Hello! I'm Rajat Kumar Dua, a Full-Stack Software Engineer driven by a passion for creating clean, performant, and highly interactive web applications. I thrive at the intersection of powerful backends and compelling user experiences.
          </p>
        </motion.section>

        {/* 2. My Experience Section */}
        <motion.section variants={itemVariants} className="mb-8 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-800 mb-2">
            My Experience: 3 Years of Dedication
          </h2>
          <p className="text-yellow-900 leading-relaxed">
            I bring three years of focused experience in building and deploying complex web solutions. My journey has been centered around transforming ideas into robust, scalable applications, with a special emphasis on high performance and creating unique 3D user interfaces. This experience ensures I deliver stable, production-ready code every time.
          </p>
        </motion.section>

        {/* 3. My Expertise */}
        <motion.section variants={itemVariants} className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-1">
            My Core Expertise
          </h2>
          <p className="text-gray-700 mb-4">
            My core stack is built for robust performance and modern design:
          </p>
          <TechStackList items={[
              "Next.js",
              "TypeScript",
              "React",
              "Framer Motion",
              "React Three Fiber (3D)",
              "Node.js",
              "PostgreSQL",
              "Tailwind CSS"
          ]} />
        </motion.section>

        {/* 4. My Philosophy */}
        <motion.section variants={itemVariants} className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-1">
            My Philosophy
          </h2>
          <p className="text-gray-700">
            I believe that great software is a blend of technical excellence and thoughtful design. My goal for every project is to ensure that it is not only functional and fast but also intuitive and accessible for every user. I am constantly learning new tools and techniques to deliver cutting-edge solutions.
          </p>
        </motion.section>
      </motion.div>
    </div>
  );
}

export default AboutPage; 
