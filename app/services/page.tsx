'use client';

import { motion } from 'framer-motion';
import { LayoutDashboard, Code, PencilRuler, Search, Handshake, Component, LucideIcon } from 'lucide-react';
import React from 'react';

// --- Interface for Service Card Props ---
// This defines the types for the ServiceCard component, fixing the "implicitly has an 'any' type" error.
interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  skills: string[];
  delay: number;
}

// --- Service Card Component ---
// Now uses the defined ServiceCardProps interface
const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, skills, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay }}
        className="flex flex-col bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
    >
        <div className="flex items-center mb-4">
            <div className="p-3 bg-blue-500 rounded-full text-white mr-4">
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        
        <div className="mt-auto">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Skills:</h4>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <span 
                        key={index} 
                        className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);

// --- Main Services Page Component ---
const ServicesPage: React.FC = () => {
    const servicesData: ServiceCardProps[] = [
        {
            icon: Code,
            title: "Full-Stack Web Development",
            description: "Building scalable and modern web applications from frontend to backend using Next.js, React, and robust server technologies.",
            skills: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
            delay: 0.1,
        },
        {
            icon: LayoutDashboard,
            title: "Performance Optimization",
            description: "Focusing on blazingly fast load times and smooth user interactions using performance best practices and code splitting.",
            skills: ["Lighthouse Audits", "Caching", "Code Splitting", "SEO"],
            delay: 0.2,
        },
        {
            icon: Component,
            title: "3D & Interactive UI",
            description: "Designing and developing unique, engaging 3D experiences right within the browser using React Three Fiber (Three.js).",
            skills: ["R3F", "Three.js", "WebGL", "Framer Motion"],
            delay: 0.3,
        },
        {
            icon: PencilRuler,
            title: "Clean Code & Architecture",
            description: "Ensuring long-term project maintainability with clean, well-documented, and scalable architectural patterns (MVC, Hexagonal).",
            skills: ["SOLID Principles", "Design Patterns", "Unit Testing", "E2E Testing"],
            delay: 0.4,
        },
        {
            icon: Search,
            title: "API Development & Integration",
            description: "Creating powerful, secure RESTful and GraphQL APIs and integrating them seamlessly with frontend applications.",
            skills: ["Node.js/Express", "GraphQL", "Auth0", "JWT", "API Design"],
            delay: 0.5,
        },
        {
            icon: Handshake,
            title: "Consultation & Code Review",
            description: "Providing expert guidance on technology stack choices, best practices, and thorough code reviews to elevate team standards.",
            skills: ["Git Workflows", "CI/CD", "Performance Tuning", "Security Audits"],
            delay: 0.6,
        },
    ];

    return (
        <div className="container mx-auto px-4 py-12 md:py-20 max-w-6xl">
            <motion.h1 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900"
            >
                My Core Services
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicesData.map((service, index) => (
                    <ServiceCard
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                        skills={service.skills}
                        delay={service.delay}
                    />
                ))}
            </div>
        </div>
    );
}

export default ServicesPage;

