"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Signal, Wifi, Battery, Bell, MapPin, ChevronDown, 
  Home, Building, Search, Heart, Star, Navigation, Calendar, User 
} from 'lucide-react';

export function MobileAppSection() {
  const [promoIndex, setPromoIndex] = React.useState(0);
  const [locationIndex, setLocationIndex] = React.useState(0);

  const promos = React.useMemo(() => [
    { id: 1, image: '/images/kost_room_1.png', title: 'PROMO SPESIAL' },
    { id: 2, image: '/images/kost_room_2.png', title: 'DISKON 50%' },
    { id: 3, image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=600', title: 'CASHBACK' }
  ], []);

  const locations = React.useMemo(() => [
    { id: 1, image: 'images/kost_room_1.png', title: 'Sleman' },
    { id: 2, image: 'images/kost_room_2.png', title: 'Bantul' },
    { id: 3, image: 'https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=600', title: 'Kota Jogja' },
    { id: 4, image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=600', title: 'Gunung Kidul' },
    { id: 5, image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=600', title: 'Kulon Progo' }
  ], []);

  React.useEffect(() => {
    const promoTimer = setInterval(() => {
      setPromoIndex((prev) => (prev + 1) % promos.length);
    }, 4000);
    const locationTimer = setInterval(() => {
      setLocationIndex((prev) => (prev + 1) % locations.length);
    }, 5000);
    return () => {
      clearInterval(promoTimer);
      clearInterval(locationTimer);
    };
  }, [promos.length, locations.length]);

  return (
    <section className="py-32 border-b border-gray-100 bg-gray-50/50 relative">
      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-8 z-10">
           <h2 className="text-[10px] font-bold tracking-[0.4em] text-blue-600 uppercase">The Mobile Experience</h2>
           <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 uppercase tracking-tight leading-[1.1]">
             Your Perfect Stay <br/>At Your Fingertips.
           </h3>
           <p className="text-gray-500 font-medium leading-relaxed max-w-md">
             Find, book, and manage your premium living space directly from our app. Enjoy exclusive cashback, detailed search categories, and virtual tours in one seamless experience.
           </p>
           <div className="flex flex-wrap gap-4 pt-4">
             <button className="bg-gray-900 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold tracking-[0.2em] text-[10px] uppercase transition-all shadow-xl shadow-gray-900/20 hover:shadow-blue-600/30">
                Get It On Google Play
             </button>
             <button className="bg-white border-2 border-gray-200 hover:border-gray-900 text-gray-900 px-8 py-4 rounded-full font-bold tracking-[0.2em] text-[10px] uppercase transition-all">
                App Store
             </button>
           </div>
        </div>
        
        <div className="flex justify-center relative z-10">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-3xl"></div>
           
           <div className="relative h-[720px] flex items-center justify-center">
             <motion.div 
               initial={{ y: 50, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="w-[340px] h-[720px] bg-slate-50 rounded-[48px] border-[14px] border-gray-900 shadow-2xl relative overflow-hidden flex flex-col z-10"
             >
               <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 rounded-b-2xl w-36 mx-auto z-50"></div>
               
               <div className="bg-blue-800 w-full pt-12 pb-6 px-5 relative z-10 rounded-b-xl shadow-sm">
                 <div className="absolute top-2 left-5 right-5 flex justify-between items-center text-white text-xs font-medium z-20">
                   <span>9:00</span>
                   <div className="flex items-center gap-1.5">
                     <Signal size={14} />
                     <Wifi size={14} />
                     <Battery size={14} />
                   </div>
                 </div>

                 <div className="flex items-center justify-between mt-2">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden border-2 border-white/20">
                       <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=150" alt="Profile" className="w-full h-full object-cover" />
                     </div>
                     <div className="text-white font-bold text-xl tracking-wide">TheKost</div>
                   </div>
                   <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white cursor-pointer hover:bg-white/30 transition">
                     <Bell size={20} />
                   </div>
                 </div>
               </div>

               <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide pb-24 relative -mt-4 z-0">
                 
                 <motion.div 
                   initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                   className="mx-4 mt-5 bg-indigo-100 rounded-[24px] p-4 shadow-sm"
                 >
                   <div className="text-indigo-900 text-sm font-semibold mb-2">Kategori Pencarian</div>
                   
                   <div className="bg-white rounded-xl p-2.5 flex items-center justify-between mb-3 cursor-pointer shadow-sm hover:shadow-md transition">
                     <div className="flex items-center gap-2 text-gray-700">
                       <MapPin size={16} className="text-gray-400" />
                       <span className="font-medium text-[13px]">DIY Yogyakarta</span>
                     </div>
                     <ChevronDown size={16} className="text-gray-400" />
                   </div>

                   <div className="flex gap-2 mb-3 relative">
                     {['Kost', 'Homestay', 'Villa'].map((tab) => (
                       <div 
                         key={tab}
                         className={`flex-1 py-1.5 rounded-xl flex items-center justify-center gap-1.5 text-xs font-semibold relative z-10 ${tab === 'Kost' ? 'text-blue-700 bg-white shadow-sm' : 'text-indigo-500 hover:text-indigo-700 cursor-pointer'}`}
                       >
                         {tab === 'Kost' && <Home size={14} />}
                         {tab === 'Homestay' && <Building size={14} />}
                         {tab === 'Villa' && <Home size={14} />}
                         <span className="z-10 relative">{tab}</span>
                       </div>
                     ))}
                   </div>

                   <div className="bg-white rounded-xl p-2.5 flex items-center gap-2.5 shadow-sm">
                     <Search size={16} className="text-gray-400" />
                     <input type="text" placeholder="Temukan yang kamu cari" className="w-full bg-transparent outline-none text-[13px] text-gray-700 placeholder-gray-400" />
                   </div>
                 </motion.div>

                 <motion.div 
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
                    className="mt-6 px-4"
                 >
                   <div className="relative w-full h-24 rounded-2xl overflow-hidden cursor-pointer shadow-sm group">
                     <motion.img 
                       key={`promo-${promoIndex}`}
                       initial={{ opacity: 0, scale: 1.05 }}
                       animate={{ opacity: 1, scale: 1 }}
                       transition={{ duration: 0.5 }}
                       src={promos[promoIndex].image} 
                       alt="Promo" 
                       className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700" 
                     />
                     <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 to-transparent flex items-center p-4">
                       <div className="text-white font-bold tracking-widest text-xs bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                         {promos[promoIndex].title}
                       </div>
                     </div>
                   </div>
                   <div className="flex justify-center gap-1.5 mt-3">
                     {promos.map((_, i) => (
                       <button 
                         key={i} 
                         onClick={() => setPromoIndex(i)}
                         className={`h-1.5 rounded-full transition-all duration-300 ${i === promoIndex ? 'w-5 bg-blue-600' : 'w-1.5 bg-gray-300'}`}
                         aria-label={`Promo ${i + 1}`}
                       />
                     ))}
                   </div>
                 </motion.div>

                 <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="mt-6 px-4">
                   <div className="flex justify-between items-end mb-3">
                     <h3 className="font-bold text-gray-800 text-sm">Lokasi Kami</h3>
                     <span className="text-[10px] text-blue-600 font-semibold cursor-pointer hover:underline">Lihat Semua</span>
                   </div>
                   
                   <div className="relative w-full h-24 rounded-2xl overflow-hidden cursor-pointer shadow-sm group">
                     <motion.img 
                       key={`loc-${locationIndex}`}
                       initial={{ opacity: 0, scale: 1.05 }}
                       animate={{ opacity: 1, scale: 1 }}
                       transition={{ duration: 0.4 }}
                       src={locations[locationIndex].image} 
                       alt="Location" 
                       className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent flex flex-col justify-end p-3">
                       <div className="text-white font-bold text-[13px] drop-shadow-md">
                         {locations[locationIndex].title}
                       </div>
                     </div>
                   </div>
                   <div className="flex justify-center gap-1.5 mt-3">
                     {locations.map((_, i) => (
                       <button 
                         key={i} 
                         onClick={() => setLocationIndex(i)}
                         className={`h-1.5 rounded-full transition-all duration-300 ${i === locationIndex ? 'w-5 bg-blue-600' : 'w-1.5 bg-gray-300'}`}
                         aria-label={`Location ${i + 1}`}
                       />
                     ))}
                   </div>
                 </motion.div>

                 <motion.div 
                   initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}
                   className="mt-6 px-4 grid grid-cols-2 gap-4 pb-8"
                 >
                   {[
                     { id: 1, image: '/images/kost_room_1.png', title: 'Kos putri Donda Demangan Yogyakarta', price: 'Rp 700.000' },
                     { id: 2, image: '/images/kost_room_2.png', title: 'Kos putra Eksklusif Jakal Sleman', price: 'Rp 1.200.000' }
                   ].map((item) => (
                     <div key={item.id} className="relative h-48 rounded-[20px] overflow-hidden group cursor-pointer shadow-md">
                       <img src={item.image} alt="Kost" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                       
                       <div className="absolute top-2 left-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-red-500 shadow-sm z-10">
                         <Heart size={12} fill="currentColor" />
                       </div>
                       <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-1.5 py-0.5 rounded-md flex items-center gap-1 text-[10px] font-bold text-gray-800 shadow-sm z-10">
                         <Star size={10} className="text-yellow-400" fill="currentColor" /> 5.0
                       </div>

                       <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent p-3 pt-10 flex flex-col justify-end z-10">
                         <h4 className="text-white text-[10px] font-semibold leading-snug line-clamp-2 mb-1">{item.title}</h4>
                         <p className="text-white text-[11px] font-bold">{item.price} <span className="font-normal text-[8px] opacity-80">/ Bulan</span></p>
                       </div>
                     </div>
                   ))}
                 </motion.div>
               </div>

               <div className="absolute bottom-0 inset-x-0 bg-white rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.05)] border-t border-gray-100 flex justify-around items-center px-6 py-4 pb-6 z-50">
                 <div className="flex flex-col items-center gap-1 cursor-pointer">
                   <div className="w-12 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center">
                     <Navigation size={18} fill="currentColor" />
                   </div>
                   <span className="text-[10px] font-bold text-blue-700 mt-0.5">Discover</span>
                 </div>
                 <div className="flex flex-col items-center gap-1 text-gray-400 hover:text-blue-600 transition-colors cursor-pointer group">
                   <div className="h-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                     <Calendar size={20} />
                   </div>
                   <span className="text-[10px] font-semibold mt-0.5">Bookings</span>
                 </div>
                 <div className="flex flex-col items-center gap-1 text-gray-400 hover:text-blue-600 transition-colors cursor-pointer group">
                   <div className="h-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                     <Heart size={20} />
                   </div>
                   <span className="text-[10px] font-semibold mt-0.5">Saved</span>
                 </div>
                 <div className="flex flex-col items-center gap-1 text-gray-400 hover:text-blue-600 transition-colors cursor-pointer group">
                   <div className="h-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                     <User size={20} />
                   </div>
                   <span className="text-[10px] font-semibold mt-0.5">Profile</span>
                 </div>
               </div>
             </motion.div>
           </div>
        </div>
      </div>
    </section>
  );
}
