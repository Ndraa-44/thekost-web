import React from 'react';
import Image from 'next/image';
import { Home, Building, MapPin } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-32 border-b border-gray-100 scroll-mt-24">
      <div className="text-center mb-24 relative">
        <h2 className="text-[10px] font-bold tracking-[0.4em] text-gray-400 uppercase mb-4">About TheKost</h2>
        <p className="text-3xl md:text-4xl font-extrabold text-gray-900 max-w-2xl mx-auto uppercase tracking-tight">
          We turn finding rooms into an experience of comfort.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-16 items-start">
        <div className="text-gray-500 leading-relaxed text-sm font-medium">
          <p className="mb-6">
            For each property we establish relationships with partners who we know will help us create added value for your stay. As well as bringing together the public and private sectors.
          </p>
          <p>
            The way we understand living spaces is based on permanently applying values that reinforce each other: comfort, security, technical value and economical value.
          </p>
        </div>
        
        <div className="md:border-l md:border-gray-100 md:pl-16">
          <h3 className="text-[10px] font-bold tracking-[0.2em] text-gray-900 uppercase mb-8">Our Specialization</h3>
          <div className="space-y-8">
            <div className="flex items-center gap-5 group cursor-pointer">
              <div className="w-12 h-12 bg-gray-50 text-gray-400 rounded flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                <Home size={20} />
              </div>
              <span className="font-bold text-[13px] tracking-[0.1em] text-gray-900 uppercase group-hover:text-blue-600 transition-colors">Kost Eksklusif</span>
            </div>
            <div className="flex items-center gap-5 group cursor-pointer">
              <div className="w-12 h-12 bg-gray-50 text-gray-400 rounded flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                <Building size={20} />
              </div>
              <span className="font-bold text-[13px] tracking-[0.1em] text-gray-900 uppercase group-hover:text-blue-600 transition-colors">Premium Homestay</span>
            </div>
            <div className="flex items-center gap-5 group cursor-pointer">
              <div className="w-12 h-12 bg-gray-50 text-gray-400 rounded flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                <MapPin size={20} />
              </div>
              <span className="font-bold text-[13px] tracking-[0.1em] text-gray-900 uppercase group-hover:text-blue-600 transition-colors">Strategic Location</span>
            </div>
          </div>
        </div>

        <div className="h-80 bg-gray-100 rounded-lg overflow-hidden shadow-lg relative">
          <Image src="/images/kost_room_2.png" alt="Interior" fill className="object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700" />
          <div className="absolute inset-0 border-[10px] border-white/10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
