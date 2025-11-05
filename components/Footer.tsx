

import React from 'react';
import Link from 'next/link';

const SocialIcon: React.FC<{ href: string, icon: string, label: string }> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-2xl text-theme-base hover:text-theme-primary transition-colors mx-3"
  >
    {icon}
  </a>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-16 py-8 border-t border-theme-muted/20">
      <div className="container mx-auto px-4 md:px-8 text-center">
        
        {/* Social Links (Now only Email) */}
        <div className="flex justify-center mb-6">
          <SocialIcon 
            href="mailto:rajatworks1@gmail.com" // NEW EMAIL ADDRESS
            icon="📧" 
            label="Email Rajatworks" 
          />
        </div>

        {/* Navigation Links */}
        <div className="space-x-4 mb-4">
          <Link href="/about" className="text-theme-muted hover:text-theme-base transition-colors text-sm">
            About
          </Link>
          <Link href="/projects" className="text-theme-muted hover:text-theme-base transition-colors text-sm">
            Projects
          </Link>
          <Link href="/contact" className="text-theme-muted hover:text-theme-base transition-colors text-sm">
            Contact
          </Link>
        </div>

        {/* Copyright (Year changes automatically) */}
        <p className="text-sm text-theme-muted">
          &copy; {currentYear} Rajat Kumar Dua (RajatWorks). All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

