import React from 'react';

interface CardServiceProps {
  number: string;
  title: string;
  description: string;
  image?: string;
  tag?: string;
  index: number;
}

export default function CardService({ number, title, description, image, tag, index }: CardServiceProps) {
  return (
    <div className="relative rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 group overflow-hidden aspect-square">
      {/* Background Image */}
      <img 
        src={image || "/images/service-card-1.png"} 
        alt={title}
        className="absolute inset-0 w-full h-full object-cover opacity-75"
      />
      
      {/* Strong black gradient overlay at bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-2/3"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)'
        }}
      />
      
      {/* Tag overlay */}
      <div className="absolute top-4 left-4 z-10">
        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
          tag === "agency" 
            ? "text-cyan-100 bg-cyan-500/20 border border-cyan-500/30" 
            : "text-purple-100 bg-purple-500/20 border border-purple-500/30"
        }`}>
          {tag === "agency" ? "Agency" : "Digital"}
        </div>
      </div>
      
      {/* Radial blur hover effect */}
      <div className="absolute top-1/2 -translate-x-1/2 translate-y-1 w-[1000px] h-[800px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
        background: tag === "agency" 
          ? 'radial-gradient(ellipse at center, rgba(20,184,166,0.4) 0%, rgba(20,184,166,0.2) 40%, rgba(20,184,166,0.02) 70%, transparent 100%)'
          : 'radial-gradient(ellipse at center, rgba(96, 65, 168, 0.4) 0%, rgba(139,92,246,0.2) 40%, rgba(139,92,246,0.02) 70%, transparent 100%)',
        filter: 'blur(10px)',
        mixBlendMode: 'lighten',
        zIndex: 1
      }}></div>
      
      {/* Content overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 px-6 pt-6 pb-8 z-10">
        <h3 
          className="text-xl font-bold text-white mb-3 font-medium"
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
  );
}
