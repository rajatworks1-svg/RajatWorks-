'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

// --- FRAMER MOTION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

// --- MAIN HOME PAGE COMPONENT ---
export default function Home() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] p-6 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Salutation and Emoji */}
      <motion.p className="text-xl text-gray-600 mb-4" variants={itemVariants}>
        👋 Hello, I'm
      </motion.p>

      {/* Name */}
      <motion.h1
        className="text-6xl md:text-8xl font-black text-gray-900 mb-4 tracking-tight"
        variants={itemVariants}
      >
        Rajat Kumar Dua
      </motion.h1>

      {/* Title */}
      <motion.h2
        className="text-2xl md:text-3xl text-gray-700 font-light mb-10 max-w-lg"
        variants={itemVariants}
      >
        Full-Stack Developer & 3D Web Enthusiast
      </motion.h2>

      {/* Action Button */}
      <motion.div variants={itemVariants}>
        <Link href="/services">
          <motion.button
            className="px-8 py-3 text-lg font-semibold rounded-full shadow-lg
                       text-white bg-blue-600 hover:bg-blue-700
                       transition-all duration-300 ease-in-out transform hover:scale-105"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
