"use client";

import Background from "@/components/Background";
import StartupAnimation from "@/components/StartupAnimation";
import TitleAnimation from "@/components/TitleAnimation";
import FadeInAnimation from "@/components/FadeInAnimation";
import ScrollTriggeredAnimation from "@/components/ScrollTriggeredAnimation";
import CarouselSlider from "@/components/carousel-slider";
import CTAButton from "@/components/ctabutton";
import { projects } from "@/lib/project-data";
import { useEffect } from "react";
import Link from "next/link";

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

  // Use the projects data for the carousel
  const carouselItems = projects;

  return (
    <div className="relative min-h-screen text-white bg-black overflow-hidden">
      <StartupAnimation />
      <Background variant="both-radial" />

      {/* 1. Title Section */}
      <section className="relative z-10 h-auto pt-36 pb-24 flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <TitleAnimation 
            className="text-[32px] md:text-[64px] font-medium mb-6 leading-[1.21] tracking-[-0.05em]"
            delay={1000}
          >
            Be the <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(168,85,247,0.25)]">GameChanger</span> With
            <br />
            <span className="text-white">One Stop</span> <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(20,184,166,0.25)]">Digi-Solution</span>
          </TitleAnimation>
          <FadeInAnimation delay={2500} duration={800}>
            <p className="text-md md:text-0.5xl text-gray-300 mb-8 max-w-3xl mx-auto">
            With AKAAL, transform your business with innovative digital solutions designed to help you grow faster. From branding and digital marketing to AI-powered automation, we provide everything you need to take your business to the next level.
            </p>
          </FadeInAnimation>
          <FadeInAnimation delay={3000} duration={600}>
            <div className="flex flex-col items-center gap-2">
              <CTAButton>Get Started</CTAButton>
              <button className="text-white hover:text-gray-200 text-sm font-light transition-colors duration-300 underline">
                See Work
              </button>
            </div>
          </FadeInAnimation>
        </div>
      </section>

      {/* Carousel Section */}
      <FadeInAnimation delay={3500} duration={1000}>
        <div className="relative z-10 h-80% pb-36 flex items-center justify-center px-4">
          <div className="text-center w-full">
            <div className="w-full h-[720px]">
              <CarouselSlider items={carouselItems} className="w-full h-full" />
            </div>
          </div>
        
        {/* Left fade overlay */}
        <div 
          className="hidden sm:block absolute left-0 top-0 bottom-0 w-32 md:w-96 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.1) 85%, rgba(0,0,0,0) 100%)'
          }}
        ></div>
        
        {/* Right fade overlay */}
        <div 
          className="hidden sm:block absolute right-0 top-0 bottom-0 w-32 md:w-96 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.1) 85%, rgba(0,0,0,0) 100%)'
          }}
        ></div>
        </div>
      </FadeInAnimation>

      </div>
  )
}