import React from 'react';
import { Lightbulb, LayoutGrid, Zap, Code } from 'lucide-react';
import { motion } from 'framer-motion';

// Metadata and component definitions...
// ... (Your other imports and component logic)
// ...

const ServiceCard = ({ icon: Icon, title, description, skills, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay }}
        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out border border-gray-100"
    >
        <div className="flex items-center mb-4">
            <Icon className="w-8 h-8 text-indigo-600 mr-3" />
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        <p className="text-xs font-semibold text-indigo-500 mt-4">Key Skills: {skills}</p>
    </motion.div>
);

const ServicesPage = () => {
    // ... (Your page structure)
    return (
        <div className="py-12 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header (Keep it simple, layout handles main padding) */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-gray-900">
                    My Professional Services
                </h1>
                <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                    Providing high-impact development solutions centered around performance, modern design, and robust engineering.
                </p>

                {/* FIX: grid-cols-1 for mobile, md:grid-cols-2 for desktop */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <ServiceCard
                        icon={Code}
                        title="Full-Stack Application Development"
                        description="Building complete, scalable, and secure web applications from initial database design and API architecture to deployment and continuous integration."
                        skills="Next.js, R3F, PostgreSQL, Tailwind CSS"
                        delay={0.1}
                    />
                    <ServiceCard
                        icon={LayoutGrid}
                        title="Modern Frontend & UI/UX"
                        description="Crafting highly interactive, fast, and responsive user interfaces using React/Next.js and Tailwind CSS for exceptional user experiences across all devices."
                        skills="Next.js, R3F, PostgreSQL, Tailwind CSS"
                        delay={0.2}
                    />
                    <ServiceCard
                        icon={Lightbulb}
                        title="3D Web Experiences (Web Graphics)"
                        description="Designing and implementing unique, immersive 3D scenes and dynamic visualizations directly in the browser using React Three Fiber (R3F) and Three.js."
                        skills="Next.js, R3F, PostgreSQL, Tailwind CSS"
                        delay={0.3}
                    />
                    <ServiceCard
                        icon={Zap}
                        title="Performance Optimization"
                        description="Analyzing and refining existing codebases to achieve significant improvements in application speed, SEO rankings, and overall page loading times."
                        skills="Next.js, R3F, PostgreSQL, Tailwind CSS"
                        delay={0.4}
                    />
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
