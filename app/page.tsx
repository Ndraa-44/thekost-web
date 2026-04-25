"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Bell, MapPin, ChevronDown, Home, Building, 
  Search, Heart, Star, Compass, Calendar, Bookmark, User,
  Wifi, Battery, Signal, Navigation,
  Italic
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
    { id: 1, image: 'https://images.unsplash.com/photo-1596422846543-74c6ca7b4162?q=80&w=600', title: 'Sleman' },
    { id: 2, image: 'https://images.unsplash.com/photo-1582647509711-c8aa8a8bdef8?q=80&w=600', title: 'Bantul' },
    { id: 3, image: 'https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=600', title: 'Kota Jogja' },
    { id: 4, image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=600', title: 'Gunung Kidul' }
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
    <main className="flex min-h-screen flex-col items-center justify-between font-sans">
      {/* NAVBAR */}
      <nav className="w-full border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
              T
            </div>
            <span className="font-bold text-xl text-blue-600 tracking-tight">TheKost</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium text-gray-600">
            <a href="#beranda" className="text-blue-600 font-semibold">Beranda</a>
            <a href="#fitur" className="hover:text-blue-600 transition-colors">Fitur</a>
            <a href="#kategori" className="hover:text-blue-600 transition-colors">Kategori</a>
          </div>
          <div>
            <button className="px-6 py-2.5 rounded-full font-semibold text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
              Mitra Pemilik
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="beranda" className="w-full bg-white relative overflow-hidden pt-20 pb-32">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="flex flex-col gap-8 max-w-xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm w-fit">
              #1 Aplikasi Cari Kos di Jogja
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.15] tracking-tight">
              Temukan Hunian <span className="text-blue-600 italic">Ideal</span> di Jogja dengan Mudah.
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Sewa kost, villa, atau homestay aman, nyaman, dan terpercaya langsung dari ujung jari Anda. Dapatkan pengalaman booking instan tanpa ribet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-2xl hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20">
                <div className="text-left">
                  <div className="text-[10px] uppercase font-semibold text-gray-300 tracking-wider">Get it on</div>
                  <div className="text-lg font-bold leading-none">Google Play</div>
                </div>
              </button>
              <button className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30">
                <div className="text-left">
                  <div className="text-[10px] uppercase font-semibold text-blue-200 tracking-wider">Download on the</div>
                  <div className="text-lg font-bold leading-none">App Store</div>
                </div>
              </button>
            </div>
          </div>
          
          <div className="relative h-[700px] hidden md:flex items-center justify-center">
            {/* Detailed Mobile Mockup */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-[340px] h-[720px] bg-slate-50 rounded-[48px] border-[14px] border-gray-900 shadow-2xl relative overflow-hidden flex flex-col"
            >
              {/* Notched camera area */}
              <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 rounded-b-2xl w-36 mx-auto z-50"></div>
              
              {/* HEADER */}
              <div className="bg-blue-800 w-full pt-12 pb-6 px-5 relative z-10 rounded-b-xl shadow-sm">
                {/* Status Bar */}
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

              {/* MAIN CONTENT (Scrollable) */}
              <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide pb-24 relative -mt-4 z-0">
                
                {/* Search Card */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                  className="mx-4 mt-5 bg-indigo-100 rounded-[24px] p-4 shadow-sm"
                >
                  <div className="text-indigo-900 text-sm font-semibold mb-2">Kategori Pencarian</div>
                  
                  {/* Location Selector */}
                  <div className="bg-white rounded-xl p-2.5 flex items-center justify-between mb-3 cursor-pointer shadow-sm hover:shadow-md transition">
                    <div className="flex items-center gap-2 text-gray-700">
                      <MapPin size={16} className="text-gray-400" />
                      <span className="font-medium text-[13px]">DIY Yogyakarta</span>
                    </div>
                    <ChevronDown size={16} className="text-gray-400" />
                  </div>

                  {/* Tabs */}
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

                  {/* Search Input */}
                  <div className="bg-white rounded-xl p-2.5 flex items-center gap-2.5 shadow-sm">
                    <Search size={16} className="text-gray-400" />
                    <input type="text" placeholder="Temukan yang kamu cari" className="w-full bg-transparent outline-none text-[13px] text-gray-700 placeholder-gray-400" />
                  </div>
                </motion.div>

                {/* Promo Slider */}
                <motion.div 
                   initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
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
                  {/* Dots */}
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

                {/* Locations Slider */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-6 px-4">
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
                  {/* Dots */}
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

                {/* Property Cards */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}
                  className="mt-6 px-4 grid grid-cols-2 gap-4 pb-8"
                >
                  {[
                    { id: 1, image: '/images/kost_room_1.png', title: 'Kos putri Donda Demangan Yogyakarta', price: 'Rp 700.000' },
                    { id: 2, image: '/images/kost_room_2.png', title: 'Kos putra Eksklusif Jakal Sleman', price: 'Rp 1.200.000' }
                  ].map((item) => (
                    <div key={item.id} className="relative h-48 rounded-[20px] overflow-hidden group cursor-pointer shadow-md">
                      <img src={item.image} alt="Kost" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      
                      {/* Top Badges */}
                      <div className="absolute top-2 left-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-red-500 shadow-sm z-10">
                        <Heart size={12} fill="currentColor" />
                      </div>
                      <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-1.5 py-0.5 rounded-md flex items-center gap-1 text-[10px] font-bold text-gray-800 shadow-sm z-10">
                        <Star size={10} className="text-yellow-400" fill="currentColor" /> 5.0
                      </div>

                      {/* Bottom Info */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent p-3 pt-10 flex flex-col justify-end z-10">
                        <h4 className="text-white text-[10px] font-semibold leading-snug line-clamp-2 mb-1">{item.title}</h4>
                        <p className="text-white text-[11px] font-bold">{item.price} <span className="font-normal text-[8px] opacity-80">/ Bulan</span></p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* BOTTOM NAVIGATION */}
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
      </section>

      {/* OTHER SECTIONS */}
      <section id="fitur" className="w-full bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mengapa Memilih TheKost?</h2>
            <p className="text-gray-600">Pengalaman mencari hunian yang dirancang khusus untuk kemudahan dan kenyamanan Anda.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <MapPin size={24} />,
                title: "Pencarian Akurat",
                desc: "Filter berdasarkan area spesifik di Jogja seperti Sleman, Bantul, hingga Gunungkidul dengan presisi tinggi."
              },
              {
                icon: <Home size={24} />,
                title: "Pilihan Lengkap",
                desc: "Tersedia ribuan properti mulai dari Kost mahasiswa, Villa liburan, hingga Homestay nyaman untuk keluarga."
              },
              {
                icon: <Compass size={24} />,
                title: "Transaksi Aman",
                desc: "Pembayaran terintegrasi langsung dalam aplikasi dengan jaminan keamanan dan verifikasi pemilik properti."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kategori" className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Kategori Populer</h2>
              <p className="text-gray-600">Temukan hunian yang sesuai dengan kebutuhan Anda.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Kost Eksklusif",
                image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=600",
                count: "1,200+ properti"
              },
              {
                title: "Villa Premium",
                image: "/images/kost_room_2.png",
                count: "450+ properti"
              },
              {
                title: "Homestay Nyaman",
                image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600",
                count: "800+ properti"
              }
            ].map((cat, i) => (
              <div key={i} className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer">
                <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{cat.title}</h3>
                  <p className="text-gray-200 font-medium">{cat.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="w-full bg-gray-900 pt-20 pb-10 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  T
                </div>
                <span className="font-bold text-2xl tracking-tight">TheKost</span>
              </div>
              <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
                Platform pencarian hunian sementara terbaik di Yogyakarta. Menghubungkan pencari kos dengan pemilik properti terpercaya.
              </p>
              <div className="flex gap-4">
                 <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"><MapPin size={20} /></div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Perusahaan</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Karir</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Hubungi Kami</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Dukungan</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Pusat Bantuan</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ Pemilik</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
            <p>&copy; 2026 TheKost App. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">ID</a>
              <a href="#" className="hover:text-white">EN</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
