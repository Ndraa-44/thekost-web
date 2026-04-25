"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Phone, Mail, ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="h-[calc(100vh-96px)] flex border-b border-gray-100">
      {/* Left Sidebar */}
      <div className="hidden md:flex w-1/5 h-full flex-col justify-between py-12 border-r border-gray-100 pr-8">
        <div className="text-5xl font-light text-gray-900">
          01<span className="text-lg text-gray-300"> / 07</span>
        </div>
        
        <div className="relative flex-1 flex items-center justify-center">
          <div className="-rotate-90 whitespace-nowrap text-[10px] font-bold tracking-[0.4em] text-gray-400 uppercase">
            Premium Living Space
          </div>
        </div>

        <div className="flex flex-col gap-6 text-gray-400">
          <Globe size={18} className="hover:text-blue-600 cursor-pointer transition-colors" />
          <Phone size={18} className="hover:text-blue-600 cursor-pointer transition-colors" />
          <Mail size={18} className="hover:text-blue-600 cursor-pointer transition-colors" />
        </div>
      </div>

      {/* Main Hero */}
      <div className="w-full md:w-4/5 h-full relative bg-gray-50 flex items-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600" 
            alt="Hero Background" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/40 to-transparent"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 px-8 md:px-20 max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight uppercase leading-[1.1] mb-6 drop-shadow-lg">
            Premium Kost <br/>In Jogja
          </h1>
          <p className="text-white/90 text-lg mb-10 max-w-md font-medium leading-relaxed drop-shadow-md">
            TheKost is a new generation of living, providing spaces that exist not only in dimension but in ultimate comfort and modern design.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold tracking-[0.2em] text-[11px] uppercase transition-all shadow-xl shadow-blue-600/20 flex items-center gap-3">
            Book Now <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
