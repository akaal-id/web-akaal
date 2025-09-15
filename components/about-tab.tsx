"use client";

import React, { useState, useEffect } from "react";
import { Eye, Target } from "lucide-react";
import FadeInAnimation from "@/components/FadeInAnimation";

interface AboutTabProps {
  onTabChange?: (tab: 'vision' | 'mission') => void;
}

export default function AboutTab({ onTabChange }: AboutTabProps) {
  const [activeTab, setActiveTab] = useState<'vision' | 'mission'>('vision');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleTabClick = (tab: 'vision' | 'mission') => {
    setActiveTab(tab);
    scrollToSection(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  // Update active tab based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const visionSection = document.getElementById('vision');
      const missionSection = document.getElementById('mission');
      
      if (visionSection && missionSection) {
        const visionRect = visionSection.getBoundingClientRect();
        const missionRect = missionSection.getBoundingClientRect();
        
        // Check which section is more visible
        const visionVisible = visionRect.top < window.innerHeight / 2 && visionRect.bottom > window.innerHeight / 2;
        const missionVisible = missionRect.top < window.innerHeight / 2 && missionRect.bottom > window.innerHeight / 2;
        
        if (visionVisible && activeTab !== 'vision') {
          setActiveTab('vision');
          if (onTabChange) {
            onTabChange('vision');
          }
        } else if (missionVisible && activeTab !== 'mission') {
          setActiveTab('mission');
          if (onTabChange) {
            onTabChange('mission');
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTab, onTabChange]);

  return (
    <div className="flex justify-center mb-16">
      <FadeInAnimation delay={800}>
        <div className="flex bg-gray-900/50 backdrop-blur-sm rounded-full p-2 border border-gray-700">
          <button 
            onClick={() => handleTabClick('vision')}
            className={`px-6 py-3 rounded-full transition-all duration-300 ${
              activeTab === 'vision' 
                ? 'text-white bg-cyan-500/20 border border-cyan-500/30' 
                : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
            }`}
          >
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              Vision
            </div>
          </button>
          <button 
            onClick={() => handleTabClick('mission')}
            className={`px-6 py-3 rounded-full transition-all duration-300 ${
              activeTab === 'mission' 
                ? 'text-white bg-purple-500/20 border border-purple-500/30' 
                : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
            }`}
          >
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              Mission
            </div>
          </button>
        </div>
      </FadeInAnimation>
    </div>
  );
}
