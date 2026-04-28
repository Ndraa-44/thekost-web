import React from 'react';
import Image from 'next/image';

export function Navbar() {
  return (
    <nav className="h-24 flex items-center justify-between border-b border-gray-100 relative z-50">
      <div className="font-extrabold text-2xl text-blue-600 tracking-tighter flex items-center gap-1">
        <Image src="/icon.png" alt="TheKost Logo" width={32} height={32} className="w-8 h-8 object-contain" />
        thekost.
      </div>
      <div className="hidden md:flex gap-12 text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase">
        <a href="#" className="text-gray-900">Home</a>
        <a href="#about" className="hover:text-blue-600 transition-colors">About Us</a>
        <a href="#properties" className="hover:text-blue-600 transition-colors">Properties</a>
        <a href="#contact" className="hover:text-blue-600 transition-colors">Contacts</a>
      </div>
      <div className="hidden md:block text-xs font-bold tracking-[0.1em] text-gray-900">
        +62 857-4011-2525
      </div>
    </nav>
  );
}
