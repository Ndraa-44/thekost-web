import React from 'react';

export function Footer() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="text-center mb-24">
        <h2 className="text-[10px] font-bold tracking-[0.4em] text-gray-400 uppercase">Get In Touch</h2>
      </div>
      
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-20">
        <div className="md:w-1/3 flex flex-col gap-10 text-[13px] text-gray-500 font-medium">
          <div>
            <strong className="block text-gray-900 mb-2 font-bold tracking-widest uppercase text-[10px]">Phone</strong>
            +62 812 3456 7890<br/>
            +62 898 7654 3210
          </div>
          <div>
            <strong className="block text-gray-900 mb-2 font-bold tracking-widest uppercase text-[10px]">Email</strong>
            hello@thekost.com
          </div>
          <div>
            <strong className="block text-gray-900 mb-2 font-bold tracking-widest uppercase text-[10px]">Address</strong>
            Jl. Kaliurang KM 5, Sleman<br/>
            Yogyakarta, Indonesia
          </div>
          <div className="font-extrabold text-3xl text-gray-900 tracking-tighter flex items-center gap-2 mt-12">
            <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center text-2xl">T</div>
            thekost.
          </div>
        </div>
        
        <div className="md:w-2/3">
          <form className="grid grid-cols-2 gap-8">
            <input type="text" placeholder="Name" className="w-full bg-transparent border-b-2 border-gray-100 pb-4 text-sm focus:outline-none focus:border-blue-600 transition-colors placeholder-gray-400" />
            <input type="text" placeholder="Phone" className="w-full bg-transparent border-b-2 border-gray-100 pb-4 text-sm focus:outline-none focus:border-blue-600 transition-colors placeholder-gray-400" />
            <input type="email" placeholder="Email *" className="w-full bg-transparent border-b-2 border-gray-100 pb-4 text-sm focus:outline-none focus:border-blue-600 transition-colors placeholder-gray-400" required />
            <input type="text" placeholder="Subject" className="w-full bg-transparent border-b-2 border-gray-100 pb-4 text-sm focus:outline-none focus:border-blue-600 transition-colors placeholder-gray-400" />
            <textarea placeholder="Message" rows={4} className="col-span-2 w-full bg-transparent border-b-2 border-gray-100 pb-4 text-sm focus:outline-none focus:border-blue-600 transition-colors placeholder-gray-400 mt-4"></textarea>
            <div className="col-span-2 flex justify-end mt-4">
              <button type="submit" className="bg-gray-900 hover:bg-blue-600 text-white px-12 py-5 rounded-full font-bold tracking-[0.2em] text-[11px] uppercase transition-all shadow-xl shadow-gray-900/20 hover:shadow-blue-600/30">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 text-center text-[10px] tracking-widest text-gray-400 font-bold uppercase">
         &copy; 2026 TheKost. All rights reserved.
      </div>
    </section>
  );
}
