"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // 1. Manage isScrolled state for shadow
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 2. Manage active section based on scroll position
      const sections = ['home', 'about', 'properties', 'contact'];
      let current = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold (e.g., 200px from top) to detect active section
          if (rect.top <= 200) {
            current = section;
          }
        }
      }
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 h-24 transition-all duration-300 backdrop-blur-md bg-gradient-to-r from-blue-50/80 to-white/80 border-b border-white/20 ${isScrolled ? 'shadow-lg shadow-blue-900/5' : ''}`}>
      <div className="max-w-[1600px] mx-auto px-[5vw] h-full flex items-center justify-between">
        <a href="#home" className="font-extrabold text-2xl text-blue-600 tracking-tighter flex items-center gap-1">
          <Image src="/icon.png" alt="TheKost Logo" width={32} height={32} className="w-8 h-8 object-contain" />
          thekost.
        </a>
        <div className="hidden md:flex gap-12 text-[11px] font-bold tracking-[0.2em] uppercase">
          <a href="#home" className={`transition-colors ${activeSection === 'home' ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'}`}>Home</a>
          <a href="#about" className={`transition-colors ${activeSection === 'about' ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'}`}>About Us</a>
          <a href="#properties" className={`transition-colors ${activeSection === 'properties' ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'}`}>Properties</a>
          <a href="#contact" className={`transition-colors ${activeSection === 'contact' ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'}`}>Contacts</a>
        </div>
        <div className="hidden md:block text-xs font-bold tracking-[0.1em] text-gray-900">
          +62 857-4011-2525
        </div>
      </div>
    </nav>
  );
}
