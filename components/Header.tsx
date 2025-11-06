'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Hamburger aur Close icons
import { motion, AnimatePresence } from 'framer-motion'; // Smooth mobile menu ke liye

// --- 1. Live Clock Component ---
const Clock: React.FC = () => {
  const [time, setTime] = useState('');
  const [icon, setIcon] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      setTime(formattedTime);

      const hour = now.getHours();
      if (hour >= 20 || hour < 6) {
        setIcon('🌙'); 
      } else {
        setIcon('☀️'); 
      }
    };

    updateTime();
    const intervalId = setInterval(updateTime, 60000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    // Clock font size thoda bada kiya
    <span className="text-gray-500 text-sm md:text-base font-mono tracking-wider items-center flex">
      {icon} {time}
    </span>
  );
};

// --- 2. Main Header Component ---
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-md border-b border-gray-100">
      
      <nav className="container mx-auto px-4 md:px-8 flex items-center justify-between py-3">

      
        <Link href="/" className="text-xl sm:text-2xl font-black text-black hover:text-blue-600 transition-colors z-20">
          RajatWorks
        </Link>

        {/* --- Desktop Links --- */}
        <div className="hidden sm:flex items-center space-x-4">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="text-black hover:text-blue-600 transition-colors font-medium"
            >
              {item.name}
            </Link>
          ))}
          <div className="h-6 w-px bg-gray-300 mx-2"></div>
          <Clock />
        </div>

        {/* --- Mobile Hamburger/Menu Button --- */}
        <div className="flex items-center sm:hidden">
          <Clock /> 
          
          {/* Hamburger button ka size aur padding bada kiya */}
          <button 
            onClick={toggleMenu} 
            className="text-black ml-3 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors shadow-sm z-20"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* --- Mobile Dropdown Menu --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="sm:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-2 z-10"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)} 
                className="block px-8 py-3 text-lg font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors border-b border-gray-50 last:border-b-0"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
