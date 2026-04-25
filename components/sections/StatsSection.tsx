import React from 'react';

export function StatsSection() {
  return (
    <section className="py-32 border-b border-gray-100 flex flex-col items-center justify-center text-center">
      <div className="relative inline-block overflow-hidden">
        <h2 className="text-[180px] md:text-[280px] font-extrabold leading-none tracking-tighter text-transparent bg-clip-text bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600')" }}>
          12
        </h2>
      </div>
      <div className="mt-2 flex flex-col items-center gap-2">
        <div className="text-[13px] font-bold tracking-[0.2em] text-gray-900 uppercase">Years of Successful Work</div>
        <div className="text-[13px] font-bold tracking-[0.2em] text-blue-600 uppercase">In The Market</div>
      </div>
    </section>
  );
}
