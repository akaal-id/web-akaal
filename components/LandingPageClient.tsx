"use client";

import { useEffect, useState, useMemo } from "react";
import Background from "@/components/Background";
import StartupAnimation from "@/components/StartupAnimation";
import TitleAnimation from "@/components/TitleAnimation";
import FadeInAnimation from "@/components/FadeInAnimation";
import CarouselSlider from "@/components/carousel-slider";
import CTAButton from "@/components/ctabutton";
import WorkGallery from "@/components/work-gallery";
import { projects, Project } from "@/lib/project-data";
import { ArrowRight, Search, X } from "lucide-react";

export default function LandingPageClient() {
  const [searchTerm, setSearchTerm] = useState("");

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

  // Filter projects based on search term
  const filteredProjects = useMemo(() => {
    if (!searchTerm.trim()) return projects;
    
    const searchLower = searchTerm.toLowerCase();
    return projects.filter((project: Project) => 
      project.title.toLowerCase().includes(searchLower) ||
      project.client.toLowerCase().includes(searchLower) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchLower)) ||
      project.description.toLowerCase().includes(searchLower)
    );
  }, [searchTerm]);

  return (
    <div className="relative min-h-screen text-white bg-black overflow-hidden">
      <StartupAnimation />
      <Background variant="top-radial" />

      {/* 1. Title Section */}
      <section className="relative z-10 h-auto pt-36 pb-8 flex items-center justify-center px-4">
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
            <p className="text-md md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            With AKAAL, transform your business with innovative digital solutions designed to help you grow faster. From branding and digital marketing to AI-powered automation, we provide everything you need to take your business to the next level.
            </p>
          </FadeInAnimation>
          <FadeInAnimation delay={3000} duration={600}>
            <div className="flex flex-col items-center gap-2">
              <CTAButton>Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </CTAButton>
              <button className="text-white hover:text-gray-200 text-sm font-light transition-colors duration-300 underline">
                Learn More
              </button>
            </div>
          </FadeInAnimation>
        </div>
      </section>

      {/* Carousel Section */}
      <FadeInAnimation delay={3500} duration={1000}>
        <div className="relative z-10 h-80% pb-36 flex items-center justify-center px-4">
          <div className="text-center w-full">
            <div className="w-full h-[800px]">
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

      {/* Work Gallery Section */}
      <FadeInAnimation delay={4000} duration={1000}>
        <section className="relative z-10 pt-48 pb-24 px-4">
          <div className="w-full">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium mb-4 text-white">
                Our <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Work</span>
              </h2>
             
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative justify-center">
                <div className="flex items-center gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 ml-2 text-gray-400 w-5 h-5 z-10 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="Search projects by title, client, or technology..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-[9999px] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm transition-all duration-200"
                    />
                  </div>
                  
                  {/* Clear Button */}
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="p-3 bg-gray-900/50 border border-gray-700 rounded-[9999px] text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all duration-200 backdrop-blur-sm"
                      title="Clear search"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
                {searchTerm && (
                  <p className="text-sm text-gray-400 mt-2">
                    {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
                  </p>
                )}
              </div>
            </div>
            <WorkGallery projects={filteredProjects} />
          </div>
        </section>
      </FadeInAnimation>
    </div>
  );
}

