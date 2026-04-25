import React from 'react';

export function PartnersSection() {
  return (
    <section className="py-32 border-b border-gray-100">
      <div className="text-center mb-16">
        <h2 className="text-[10px] font-bold tracking-[0.4em] text-gray-400 uppercase">Our Partners</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
        {[1,2,3,4,5,6,7,8].map(i => (
           <div key={i} className="flex items-center justify-center h-24 hover:opacity-100 transition-opacity cursor-pointer">
             <div className="flex items-center gap-3 font-extrabold text-xl text-gray-900 tracking-tighter uppercase">
               <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-white text-xs">P</div> partner
             </div>
           </div>
        ))}
      </div>
    </section>
  );
}
