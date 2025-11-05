


"use client";
import React from 'react';
import { motion } from 'framer-motion';
// ChevronRight is still needed for the ServiceCard component, even if unused now.
import { ChevronRight } from 'lucide-react'; 

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delay between each service card
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

// --- SERVICE CARD COMPONENT (Cleaned) ---
interface ServiceCardProps {
    title: string;
    description: string;
    icon: string;
    color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, color }) => (
    <motion.div 
        variants={itemVariants} 
        className={`bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow cursor-default`}
    >
        <div className="flex items-start mb-4">
            <span className={`text-4xl ${color} mr-4`}>{icon}</span>
            <div>
                <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                <p className="text-sm text-gray-500 mt-1">Key Skills: Next.js, R3F, PostgreSQL, Tailwind CSS</p>
            </div>
        </div>
        <p className="text-gray-700 leading-relaxed">{description}</p>
        {/* The "Learn More" div has been removed here */}
    </motion.div>
);


// --- MAIN PAGE COMPONENT ---
const ServicesPage: React.FC = () => {
  return (
    <main className="container mx-auto p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-3">
          My Professional Services
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Providing high-impact development solutions centered around performance, modern design, and robust engineering.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
      >
        
        {/* SERVICE 1: Full-Stack App Dev */}
        <ServiceCard
            title="Full-Stack Application Development"
            description="Building complete, scalable, and secure web applications from initial database design and API architecture to deployment and continuous integration."
            icon="⚙️"
            color="text-green-600"
        />

        {/* SERVICE 2: Modern Frontend */}
        <ServiceCard
            title="Modern Frontend & UI/UX"
            description="Crafting highly interactive, fast, and responsive user interfaces using React/Next.js and Tailwind CSS for exceptional user experiences across all devices."
            icon="📱"
            color="text-blue-600"
        />
        
        {/* SERVICE 3: 3D Web Graphics */}
        <ServiceCard
            title="3D Web Experiences (Web Graphics)"
            description="Designing and implementing unique, immersive 3D scenes and dynamic visualizations directly in the browser using React Three Fiber (R3F) and Three.js."
            icon="🌎"
            color="text-purple-600"
        />

        {/* SERVICE 4: Performance Optimization */}
        <ServiceCard
            title="Performance Optimization"
            description="Analyzing and refining existing codebases to achieve significant improvements in application speed, SEO rankings, and overall page loading times."
            icon="⚡"
            color="text-yellow-600"
        />
        
      </motion.div>
    </main>
  );
};

export default ServicesPage;

