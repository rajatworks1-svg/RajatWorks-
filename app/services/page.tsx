'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Globe, TrendingUp } from 'lucide-react'; // Icons

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

// Service Card Component
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  keys: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, keys, description }) => (
  <motion.div 
    variants={itemVariants} 
    className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
  >
    <div className="flex items-center space-x-4 mb-4">
      <div className="p-3 bg-blue-500/10 rounded-full text-blue-600">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
    </div>
    <p className="text-xs font-semibold text-gray-500 mb-2">Key Skills: {keys}</p>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

// Main Services Page Component
export default function Services() {
  return (
    <motion.div
      className="container mx-auto px-4 py-12 md:py-20 max-w-5xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 
        className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-3"
        variants={itemVariants}
      >
        My Professional Services
      </motion.h1>
      
      <motion.p 
        className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto"
        variants={itemVariants}
      >
        Providing high-impact development solutions centered around performance, modern design, and robust engineering.
      </motion.p>

      {/* FIX: Mobile par grid-cols-1 (Vertical) aur Tablet/Desktop par grid-cols-2 */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <ServiceCard
          icon={<Code size={24} />}
          title="Full-Stack Application Development"
          keys="Next.js, R3F, PostgreSQL, Tailwind CSS"
          description="Building complete, scalable, and secure web applications from initial database design and API architecture to deployment and continuous integration."
        />

        <ServiceCard
          icon={<Smartphone size={24} />}
          title="Modern Frontend & UI/UX"
          keys="React/Next.js, R3F, PostgreSQL, Tailwind CSS"
          description="Crafting highly interactive, fast, and responsive user interfaces using React/Next.js and Tailwind CSS for exceptional user experiences across all devices."
        />

        <ServiceCard
          icon={<Globe size={24} />}
          title="3D Web Experiences (Web Graphics)"
          keys="Next.js, R3F, PostgreSQL, Tailwind CSS"
          description="Designing and implementing unique, immersive 3D scenes and dynamic visualizations directly in the browser using React Three Fiber (R3F) and Three.js."
        />

        <ServiceCard
          icon={<TrendingUp size={24} />}
          title="Performance Optimization"
          keys="Next.js, R3F, PostgreSQL, Tailwind CSS"
          description="Analyzing and refining existing codebases to achieve significant improvements in application speed, SEO rankings, and overall page loading times."
        />
      </div>
    </motion.div>
  );
}
