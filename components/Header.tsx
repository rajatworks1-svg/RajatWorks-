
"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// 1. Live Clock Component (Sun/Moon logic based on user's local time)
const Clock: React.FC = () => {
  const [time, setTime] = useState('');
  const [icon, setIcon] = useState(''); 

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format the time as HH:MM AM/PM based on the user's location
      const formattedTime = now.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      setTime(formattedTime);

      // Determine Sun or Moon icon based on the user's local hour (8 PM to 6 AM is Moon)
      const hour = now.getHours();
      if (hour >= 20 || hour < 6) { 
        setIcon('🌙'); // Moon (Night)
      } else {
        setIcon('☀️'); // Sun (Day)
      }
    };

    updateTime(); 
    // Update every minute (60000 ms)
    const intervalId = setInterval(updateTime, 60000); 

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <span className="text-gray-500 text-sm font-mono tracking-wider px-3 flex items-center hidden sm:flex">
      {icon} {time}
    </span>
  );
};

// Main Header Component
const Header: React.FC = () => {
  return (
    // White background, dark text
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-md border-b border-gray-200">
      <nav className="container mx-auto px-4 md:px-8 flex items-center justify-between py-4">
        
        <Link href="/" className="text-2xl font-black text-black hover:text-blue-600 transition-colors">
          RajatWorks
        </Link>
        
        <div className="flex items-center space-x-4">
          <Link href="/about" className="text-black hover:text-blue-600 transition-colors font-medium">
            About
          </Link>
          {/* 🌟 NEW SERVICES LINK INSERTED HERE 🌟 */}
          <Link href="/services" className="text-black hover:text-blue-600 transition-colors font-medium">
            Services
          </Link>
          <Link href="/projects" className="text-black hover:text-blue-600 transition-colors font-medium">
            Projects
          </Link>
          <Link href="/contact" className="text-black hover:text-blue-600 transition-colors font-medium">
            Contact 
          </Link>
          
          <div className="h-6 w-px bg-gray-300 mx-2"></div> 
          
          <Clock /> 
        </div>
      </nav>
    </header>
  );
};

export default Header;
