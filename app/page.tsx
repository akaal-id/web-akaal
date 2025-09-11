"use client";

import LpCarousel from "@/components/lp-carousel";
import CTAButton from "@/components/ctabutton";
import Background from "@/components/Background";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      document.documentElement.style.setProperty('--mouse-x', `${clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return (
    <div className="relative min-h-screen text-white bg-black overflow-hidden pt-16">
      
      
      {/* Dynamic Background Flares 
      <div className="absolute top-0 right-0 w-[800px] h-[600px] opacity-40 animate-pulse" style={{
        background: 'radial-gradient(ellipse at top right, #3B82F6 0%, #8B5CF6 30%, #EC4899 60%, transparent 80%)',
        filter: 'blur(120px)',
        mixBlendMode: 'screen',
        animation: 'float-pulse 8s ease-in-out infinite, color-shift-1 12s ease-in-out infinite'
      }}></div>
      
      <div className="absolute bottom-0 left-0 w-[700px] h-[500px] opacity-35" style={{
        background: 'radial-gradient(ellipse at bottom left, #8B5CF6 0%, #EC4899 40%, #F59E0B 70%, transparent 85%)',
        filter: 'blur(100px)',
        mixBlendMode: 'screen',
        animation: 'float-wave 10s ease-in-out infinite, color-shift-2 15s ease-in-out infinite'
      }}></div>
      
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-25" style={{
        background: 'radial-gradient(ellipse at center, #3B82F6 0%, #8B5CF6 50%, transparent 70%)',
        filter: 'blur(80px)',
        mixBlendMode: 'screen',
        animation: 'float-drift 14s ease-in-out infinite, color-shift-3 18s ease-in-out infinite'
      }}></div>
      
      <div className="absolute top-1/2 right-1/3 w-[500px] h-[600px] opacity-20" style={{
        background: 'radial-gradient(ellipse at center, #EC4899 0%, #F59E0B 40%, transparent 60%)',
        filter: 'blur(90px)',
        mixBlendMode: 'screen',
        animation: 'float-orbit 16s ease-in-out infinite, color-shift-4 20s ease-in-out infinite'
      }}></div>
      
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[500px] opacity-15" style={{
        background: 'radial-gradient(ellipse at center, #8B5CF6 0%, #3B82F6 30%, transparent 50%)',
        filter: 'blur(70px)',
        mixBlendMode: 'screen',
        animation: 'float-spiral 12s ease-in-out infinite, color-shift-5 22s ease-in-out infinite'
      }}></div>
      
      {/* Dynamic Grain overlay */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.3\'/%3E%3C/svg%3E")',
        backgroundSize: '200px 200px',
        animation: 'grain-move 8s linear infinite'
      }}></div>
      
      {/* Interactive cursor follow effect 
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
        mixBlendMode: 'screen',
        transition: 'opacity 0.3s ease'
      }}></div>
      */}

      <Background variant="with-blur" />

      {/* 1. Title Section */}
      <section className="relative z-10 h-auto pt-24 pb-2 flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-medium mb-6 leading-tight">
            Be the <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">Game Changer</span> With
            <br />
            <span className="text-white">One Stop</span> <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(20,184,166,0.5)]">Digital Solution</span>
          </h1>
          <p className="text-lg md:text-0.5xl text-gray-300 mb-8 max-w-3xl mx-auto">
          With AKAAL, transform your business with innovative digital solutions designed to help you grow faster. From branding and digital marketing to AI-powered automation, we provide everything you need to take your business to the next level.
          </p>
          <div className="flex flex-col items-center gap-2">
            <CTAButton>Get Started</CTAButton>
            <button className="text-white hover:text-gray-200 text-sm font-light transition-colors duration-300 underline">
              About - AKAAL
            </button>
          </div>
        </div>
      </section>

      {/* 2. Projects Section */}
      <section className="relative z-10 pt-20 pb-24">
        {/* Carousel - Full viewport width */}
        <div className="w-full relative">
          <LpCarousel />
          
          {/* Left fade overlay */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-16 md:w-96 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,8) 20%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.1) 80%, rgba(0,0,0,0) 100%)'
            }}
          ></div>
          
          {/* Right fade overlay */}
          <div 
            className="absolute right-0 top-0 bottom-0 w-16 md:w-96 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,8) 20%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.1) 80%, rgba(0,0,0,0) 100%)'
            }}
          ></div>
        </div>
        
        {/* Text and Button section - Max width 6xl */}
        <div className="max-w-7xl mx-auto px-4 mt-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <p className="text-lg md:text-0.5xl text-gray-300 leading-relaxed flex-1 mb-4 lg:mb-0 lg:mr-8">
              At AKAAL, every project is more than just a task—it&apos;s a partnership built on creativity, strategy, and measurable results. From branding and web design to digital marketing campaigns and AI automation, our work showcases how we transform challenges into opportunities for growth.
            </p>
            <div className="flex-shrink-0">
              <CTAButton variant="white">See All Works</CTAButton>
            </div>
          </div>
        </div>
      </section>

      

    </div>
  )
}