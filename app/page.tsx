import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { MobileAppSection } from '@/components/sections/MobileAppSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { PropertiesSection } from '@/components/sections/PropertiesSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { PartnersSection } from '@/components/sections/PartnersSection';

export default function Page() {
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'thekost',
    url: 'https://thekost.id',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://thekost.id/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };
  
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'thekost',
    url: 'https://thekost.id',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'thekostyogya.id@gmail.com',
      contactType: 'customer service'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <main className="relative min-h-screen bg-white text-gray-900 font-sans overflow-hidden">
        {/* Grid Lines Overlay */}
      <div className="absolute inset-0 pointer-events-none flex justify-between px-[5vw] max-w-[1600px] mx-auto z-0">
        <div className="w-[1px] h-full bg-gray-100"></div>
        <div className="w-[1px] h-full bg-gray-100 hidden md:block"></div>
        <div className="w-[1px] h-full bg-gray-100 hidden md:block"></div>
        <div className="w-[1px] h-full bg-gray-100 hidden md:block"></div>
        <div className="w-[1px] h-full bg-gray-100"></div>
      </div>

      <Navbar />
      <div className="max-w-[1600px] mx-auto px-[5vw] relative z-10 pt-24">
        <HeroSection />
        <MobileAppSection />
        <AboutSection />
        <PropertiesSection />
        <StatsSection />
        <PartnersSection />
        <Footer />
      </div>
    </main>
    </>
  );
}
