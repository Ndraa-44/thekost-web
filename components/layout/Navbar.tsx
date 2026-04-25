import React from 'react';

export function Navbar() {
  return (
    <nav className="h-24 flex items-center justify-between border-b border-gray-100 relative z-50">
      <div className="font-extrabold text-2xl text-blue-600 tracking-tighter flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-lg">T</div>
        thekost.
      </div>
      <div className="hidden md:flex gap-12 text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase">
        <a href="#" className="text-gray-900">Home</a>
        <a href="#about" className="hover:text-blue-600 transition-colors">About Us</a>
        <a href="#properties" className="hover:text-blue-600 transition-colors">Properties</a>
        <a href="#contact" className="hover:text-blue-600 transition-colors">Contacts</a>
      </div>
      <div className="hidden md:block text-xs font-bold tracking-[0.1em] text-gray-900">
        +62 812 3456 7890
      </div>
    </nav>
  );
}
