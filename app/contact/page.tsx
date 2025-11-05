

"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Animation variants for smooth fade-in
const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            type: "spring", 
            stiffness: 100, 
            delay: 0.2 
        } 
    }
};

const ContactPage: React.FC = () => {
  return (
    <main className="container mx-auto p-4 md:p-8 flex justify-center items-center min-h-[70vh]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-md w-full bg-white p-8 md:p-10 rounded-xl shadow-2xl border border-gray-200 text-center"
      >
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          Get In Touch
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          I'm currently available for freelance projects and full-time opportunities. Let's build something amazing together!
        </p>
        
   
        <Link 
            href="mailto:rajatworks1@gmail.com" 
            className="inline-block px-8 py-3 bg-black text-white font-semibold rounded-full shadow-lg hover:bg-gray-800 transition-colors duration-300 border border-black"
        >
          Email Me Directly 
        </Link>
        
      </motion.div>
    </main>
  );
};

export default ContactPage;
