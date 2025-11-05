"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Component for the Homepage
const HomePage: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center" ref={ref}>
      
      {/* Introduction */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInVariants}
        className="space-y-6 max-w-4xl"
      >
        <motion.p 
          className="text-lg md:text-xl text-theme-muted"
          variants={fadeInVariants}
          transition={{ delay: 0.2 }}
        >
          👋 Hello, I'm
        </motion.p>
        
        <motion.h1 
          className="text-6xl md:text-9xl font-extrabold text-theme-base tracking-tight leading-none"
          variants={fadeInVariants}
          transition={{ delay: 0.4 }}
        >
          Rajat Kumar Dua
        </motion.h1>
        
        <motion.h2 
          className="text-3xl md:text-4xl font-light text-theme-primary mt-4"
          variants={fadeInVariants}
          transition={{ delay: 0.6 }}
        >
          Full-Stack Developer & 3D Web Enthusiast
        </motion.h2>

        <motion.div
          className="mt-10 pt-4"
          variants={fadeInVariants}
          transition={{ delay: 0.8 }}
        >
          <a
            href="/projects"
            className="px-8 py-3 bg-theme-accent text-theme-base font-bold rounded-full text-lg shadow-lg hover:bg-theme-primary transition-colors"
          >
            Explore My Work
          </a>
        </motion.div>
      </motion.div>

    </main>
  );
};

export default HomePage;
