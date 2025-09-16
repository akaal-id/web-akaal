"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

interface SponsorSliderProps {
  className?: string;
}

const SponsorSlider: React.FC<SponsorSliderProps> = ({ className = "" }) => {
  // Sponsor data - you can expand this with actual sponsor data
  const sponsors = [
    { id: 1, logo: "/images/Frame 64.png", alt: "Sponsor 1" },
    { id: 2, logo: "/images/Frame 64.png", alt: "Sponsor 2" },
    { id: 3, logo: "/images/Frame 64.png", alt: "Sponsor 3" },
    { id: 4, logo: "/images/Frame 64.png", alt: "Sponsor 4" },
    { id: 5, logo: "/images/Frame 64.png", alt: "Sponsor 5" },
    { id: 6, logo: "/images/Frame 64.png", alt: "Sponsor 6" },
  ];

  return (
    <div className={`relative overflow-hidden mx-auto ${className}`}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={32}
        slidesPerView="auto"
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={20000}
        allowTouchMove={false}
        className="sponsor-swiper"
        breakpoints={{
          640: {
            spaceBetween: 64,
          },
        }}
      >
        {sponsors.map((sponsor) => (
          <SwiperSlide key={sponsor.id} className="!w-auto">
            <div className="flex items-center justify-center">
               <img
                 src={sponsor.logo}
                 alt={sponsor.alt}
                 className="h-16 sm:h-24 w-auto filter grayscale brightness-180 invert opacity-85 hover:opacity-100 transition-all duration-500"
               />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Left fade overlay */}
      <div 
        className="hidden sm:block absolute left-0 top-0 bottom-0 w-32 md:w-96 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0.3) 85%, rgba(0,0,0,0) 100%)'
        }}
      ></div>
      
      {/* Right fade overlay */}
      <div 
        className="hidden sm:block absolute right-0 top-0 bottom-0 w-32 md:w-96 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0.3) 85%, rgba(0,0,0,0) 100%)'
        }}
      ></div>
    </div>
  );
};

export default SponsorSlider;
