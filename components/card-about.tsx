import React from 'react';
import { ShieldCheck, Volume2, Crown, SquareArrowOutUpRight } from 'lucide-react';

interface CardAboutProps {
  number: string;
  title: string;
  description: string;
  index: number;
  iconType?: string;
}

export default function CardAbout({ number, title, description, index, iconType }: CardAboutProps) {
  return (
    <div className="relative px-6 pt-8 pb-8 h-[320px] rounded-xl justify-end transition-all duration-300 hover:transform hover:scale-105 group overflow-hidden min-h-[320px] border border-white/10 hover:border-gray-400/30 shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[inset_0_0_30px_rgba(255,255,255,0.2)]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ zIndex: 1 }}
      >
        <img 
          src="/images/Frame 53.png" 
          alt="Background"
          className="w-full h-full object-cover"
          style={{ 
            transform: 'scale(1.01)',
            transformOrigin: 'center'
          }}
        />
      </div>
      
      {/* Grid background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{ 
          zIndex: 2,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Opacity overlay */}
      <div className="absolute inset-0 bg-black/90 group-hover:bg-black/20 transition-all duration-300 z-10" />
      
      {/* Glass overlay */}
      <div className="absolute inset-0 backdrop-blur-xl group-hover:backdrop-blur-xl transition-all duration-300 z-15" />
      
      {/* Content */}
      <div className="relative z-20 flex flex-col h-full p-0 justify-between">
        {/* Icon badge */}
        <div className="mb-6">
          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
            {iconType === "shield" && <ShieldCheck className="w-4 h-4 text-white" />}
            {iconType === "speech" && <Volume2 className="w-4 h-4 text-white" />}
            {iconType === "crown" && <Crown className="w-4 h-4 text-white" />}
            {iconType === "arrow" && <SquareArrowOutUpRight className="w-4 h-4 text-white" />}
          </div>
        </div>
        
        {/* Main content - centered */}
        <div className="flex-1 flex flex-col justify-end">
          <h3 
            className="text-xl font-bold text-white mb-3 font-medium group-hover:text-white-400 transition-colors duration-300"
            style={{ fontFamily: 'Plus Jakarta Sans' }} 
          >
            {title}
          </h3>
          <p 
            className="text-gray-300 text-sm leading-relaxed"
            style={{ fontFamily: 'Inter' }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
