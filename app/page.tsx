"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  ArrowRight, ArrowLeft,
  MapPin, Home, Building, 
  Search, Heart, Star, Compass, Calendar, Bookmark, User,
  Wifi, Battery, Signal, Navigation, Mail, Phone, Globe,
  Bell, ChevronDown
} from 'lucide-react';

export default function Page() {
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
    { id: 4, image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=600', title: 'Kulon Progo' }
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
    <main className="relative min-h-screen bg-white text-gray-900 font-sans overflow-hidden">
      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 pointer-events-none flex justify-between px-[5vw] max-w-[1600px] mx-auto z-0">
        <div className="w-[1px] h-full bg-gray-100"></div>
        <div className="w-[1px] h-full bg-gray-100 hidden md:block"></div>
        <div className="w-[1px] h-full bg-gray-100 hidden md:block"></div>
        <div className="w-[1px] h-full bg-gray-100 hidden md:block"></div>
        <div className="w-[1px] h-full bg-gray-100"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-[5vw] relative z-10">
        
        {/* NAVBAR */}
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

        {/* HERO SECTION */}
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

        {/* MOBILE APP SECTION */}
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

        {/* ABOUT SECTION */}
        <section id="about" className="py-32 border-b border-gray-100">
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
              <img src="/images/kost_room_2.png" alt="Interior" className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 border-[10px] border-white/10 pointer-events-none"></div>
            </div>
          </div>
        </section>

        {/* PROPERTIES SECTION */}
        <section id="properties" className="py-32 border-b border-gray-100">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-bold tracking-[0.4em] text-gray-400 uppercase">Our Properties</h2>
          </div>
          
          <div className="flex -mx-[5vw] overflow-x-auto snap-x scrollbar-hide px-[5vw] gap-2 pb-10">
            {[
              { title: "Kos Putri Donda", location: "Demangan, Yogyakarta", img: "/images/kost_room_1.png" },
              { title: "Eksklusif Jakal", location: "Sleman, Yogyakarta", img: "/images/kost_room_2.png" },
              { title: "Modern Homestay", location: "Kota Jogja", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800" },
              { title: "Minimalist Villa", location: "Gunungkidul", img: "https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=800" }
            ].map((prop, i) => (
              <div key={i} className="min-w-[85vw] md:min-w-[420px] h-[650px] relative group overflow-hidden snap-center cursor-pointer bg-gray-100 rounded-sm">
                <img src={prop.img} alt={prop.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
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

        {/* STATS SECTION */}
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

        {/* PARTNERS SECTION */}
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

        {/* CONTACT & FOOTER */}
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

      </div>
    </main>
  );
}
