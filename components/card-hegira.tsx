import React from 'react';
import { Target, Ticket, BarChart3, CreditCard, UsersRound, Unplug, Volume2, Settings, ArrowRight } from "lucide-react";
import CTAButton from './ctabutton';

const CardHegira: React.FC = () => {
  return (
    <div className="relative rounded-xl overflow-hidden border border-white/10 hover:transition-all duration-300 w-full group h-[512px] flex flex-col">
      {/* Background Image */}
      <img 
        src="/images/hegira-bg.png" 
        alt="Hegira Background"
        className="absolute inset-0 w-full h-full object-cover rotate-180 opacity-10 group-hover:opacity-80 transition-all duration-300"
      />
      {/* Grid overlay (subtle) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] group-hover:opacity-20 transition-opacity duration-300"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)` ,
          backgroundSize: '48px 48px',
          backgroundPosition: '0 0, 0 0'
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/20 transition-all duration-300" />
      
      <div className="relative z-10 p-8 flex flex-col justify-center items-center text-center h-full">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-medium text-white bg-black/20 border border-white/20 backdrop-blur-sm mb-6">
          <img 
            src="/images/hegiralogo.png" 
            alt="Hegira Logo" 
            className="h-6 w-auto filter brightness-0 invert"
          />
         
        </div>
        
        {/* Main Title */}
        <h3 
          className="text-4xl md:text-3xl font-semibold leading-tight mb-6"
          style={{ fontFamily: 'Plus Jakarta Sans', color: '#F4CB88' }}
        >
          The Ultimate
          <br />
          Event Ticketing Platform
        </h3>
        
        {/* Description */}
        <p 
          className="text-white text-md leading-relaxed max-w-3xl mb-8"
          style={{ fontFamily: 'Inter' }}
        >
          Hegira is an integrated event platform designed to revolutionize how you discover, manage, and enjoy various events. We believe every event is an opportunity—to learn, grow, network, and create memories. Our mission is to empower event organizers with intuitive and comprehensive tools while providing seamless and enjoyable experiences for participants. From grand music concerts to intimate business workshops, Hegira is here for you.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-6 py-3 rounded-full text-white border-2 border-white hover:bg-white hover:text-black transition-all duration-300 font-semibold">
            <span style={{ fontFamily: 'Plus Jakarta Sans' }}>Get Started</span>
            <ArrowRight className="inline w-4 h-4 ml-2" />
          </button>
          

        </div>
      </div>
    </div>
  );
};

export default CardHegira;
