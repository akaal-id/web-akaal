import React from 'react';
import { Target, Ticket, BarChart3, CreditCard, UsersRound, Unplug, Volume2, Settings, ArrowRight } from "lucide-react";
import CTAButton from './ctabutton';

const CardHegira: React.FC = () => {
  return (
    <div className="relative rounded-xl overflow-hidden border border-white/10 hover:transition-all duration-300 w-full group">
      {/* Cyan radial blur at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] opacity-40 group-hover:opacity-100 transition-opacity duration-300" style={{
        background: 'radial-gradient(ellipse at center top, rgba(20,184,166,0.3) 0%, rgba(20,184,166,0.1) 40%, rgba(20,184,166,0.02) 70%, transparent 100%)',
        filter: 'blur(10px)',
        mixBlendMode: 'screen',
        zIndex: 1
      }}></div>
      
      {/* Grid background */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{ 
          zIndex: 2,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      
      <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-8">
        {/* Tag and CTA */}
        <div className="flex justify-between items-center mb-7">
          {/* Hegira Icon Tag */}
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium text-cyan-100 bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm">
            <img 
              src="/images/hegiralogo.png" 
              alt="Hegira Logo" 
              className="h-6 w-auto filter brightness-0 invert"
            />
            
          </div>
          
          {/* CTA Button */}
          <button className="inline-flex items-center gap-2 px-4 py-3 rounded-full text-sm font-semibold text-gray-200 border border-gray-800 hover:bg-gray-700 transition-all duration-300">
            <span style={{ fontFamily: 'Plus Jakarta Sans' }}>
              Visit Hegira
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      
        {/* Grid 2x3: Title + Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {/* First row, first column - Title */}
          <div className="flex flex-col justify-center">
            <h3 
              className="text-2xl md:text-2xl font-medium text-white leading-tight mb-2"
              style={{ fontFamily: 'Plus Jakarta Sans' }}
            >
              The Ultimate Ticketing Solution for Seamless Events.
            </h3>
            <p 
              className="text-gray-300 text-sm leading-relaxed"
              style={{ fontFamily: 'Inter' }}
            >
              Hegira is a ticketing platform that allows you to create, manage, and sell tickets for your events.
            </p>
          </div>

         
          
          
          {/* First row, second column - First Card */}
          <div className="bg-black/20 rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 h-[180px] flex flex-col">
            <div className="mb-4 flex">
              <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center">
                <Ticket className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="flex-1"></div>
            <h3 className="text-base font-semibold text-white leading-tight mb-2" style={{ fontFamily: 'Plus Jakarta Sans' }}>
              Easy Ticket Booking
            </h3>
            <p className="text-gray-300 text-xs leading-relaxed" style={{ fontFamily: 'Inter' }}>
              Whitelabel system with flexible ticket categories
            </p>
          </div>
          
          {/* Second row - Two Cards */}
          <div className="bg-black/20 rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 h-[180px] flex flex-col">
            <div className="mb-4 flex">
              <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="flex-1"></div>
            <h3 className="text-base font-semibold text-white leading-tight mb-2" style={{ fontFamily: 'Plus Jakarta Sans' }}>
              Management Dashboard
            </h3>
            <p className="text-gray-300 text-xs leading-relaxed" style={{ fontFamily: 'Inter' }}>
              Monitor sales, bookings, and check-ins in one place
            </p>
          </div>
          
          <div className="bg-black/20 rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 h-[180px] flex flex-col">
            <div className="mb-4 flex">
              <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center">
                <CreditCard className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="flex-1"></div>
            <h3 className="text-base font-semibold text-white leading-tight mb-2" style={{ fontFamily: 'Plus Jakarta Sans' }}>
              Integrated Payment
            </h3>
            <p className="text-gray-300 text-xs leading-relaxed" style={{ fontFamily: 'Inter' }}>
              Support for various secure and efficient payment methods
            </p>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default CardHegira;
