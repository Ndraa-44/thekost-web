import React from 'react';
import Image from 'next/image';

export function PropertiesSection() {
  return (
    <section id="properties" className="py-32 border-b border-gray-100 scroll-mt-24">
      <div className="text-center mb-16">
        <h2 className="text-[10px] font-bold tracking-[0.4em] text-gray-400 uppercase">Our Properties</h2>
      </div>
      
      <div className="flex -mx-[5vw] overflow-x-auto snap-x scrollbar-hide px-[5vw] gap-2 pb-10">
        {[
          { title: "Kos Putri Donda", location: "Demangan, Yogyakarta", img: "/images/kost_room_3.png" },
          { title: "Eksklusif Jakal", location: "Sleman, Yogyakarta", img: "/images/kost_room_2.png" },
          { title: "Modern Homestay", location: "Kota Jogja", img: "/images/kost_room_1.png" },
          { title: "Minimalist Villa", location: "Gunungkidul", img: "/images/villa_1.png" },
          { title: "Kos Eksklusif Minimalis", location: "Kulon Progo", img: "/images/kost_room_4.png" }
        ].map((prop, i) => (
          <div key={i} className="min-w-[85vw] md:min-w-[420px] h-[650px] relative group overflow-hidden snap-center cursor-pointer bg-gray-100 rounded-sm">
            <Image src={prop.img} alt={prop.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent transition-opacity duration-500 group-hover:opacity-80"></div>
            <div className="absolute inset-0 p-12 flex flex-col justify-end">
              <div className="text-[10px] font-bold tracking-[0.3em] text-blue-400 uppercase mb-3 -rotate-90 origin-bottom-left absolute left-12 bottom-32 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-4">
                Premium Living
              </div>
              <h3 className="text-2xl font-bold text-white uppercase tracking-wider mb-2 pl-8 border-l-2 border-blue-600 leading-snug">
                {prop.title}
              </h3>
              <p className="text-white/70 text-[13px] font-bold tracking-widest uppercase pl-8">{prop.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
