"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import CardSlider from './card-slider';
import { Project } from '@/lib/project-data';

interface CarouselSliderProps {
  items: Project[];
  className?: string;
}

const CarouselSlider: React.FC<CarouselSliderProps> = ({ items, className = "" }) => {
  // Duplicate items 3 times for seamless infinite loop
  const extendedItems = [...items, ...items, ...items];
  const [activeIndex, setActiveIndex] = useState(items.length); // Start at middle set
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  

  const moveLeft = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    setActiveIndex(prev => prev - 1);
    
    // Reset transition state after animation completes
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const moveRight = () => {
    if (isTransitioning) {
      console.log('moveRight: currently transitioning, skipping');
      return;
    }
    console.log('moveRight: moving to next slide');
    setIsTransitioning(true);
    
    setActiveIndex(prev => prev + 1);
    
    // Reset transition state after animation completes
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  // Auto-play functionality
  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    
    autoPlayRef.current = setInterval(() => {
      if (!isTransitioning) {
        console.log('Auto-playing: moving right');
        moveRight();
      } else {
        console.log('Auto-play skipped: currently transitioning');
      }
    }, 3000); // Auto-play every 3 seconds
  }, [isTransitioning]);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, []);

  // Handle seamless loop after animation completes
  useEffect(() => {
    if (isTransitioning) return;
    
    // If we're at the first set, jump to the last set for seamless loop
    if (activeIndex < items.length) {
      setTimeout(() => {
        setActiveIndex(items.length * 2 - 1);
      }, 50); // Small delay to ensure animation is complete
    }
    // If we're at the last set, jump to the first set for seamless loop
    else if (activeIndex >= items.length * 2) {
      setTimeout(() => {
        setActiveIndex(items.length);
      }, 50); // Small delay to ensure animation is complete
    }
  }, [activeIndex, isTransitioning, items.length]);

  // Start auto-play on component mount
  useEffect(() => {
    console.log('Starting auto-play');
    startAutoPlay();
    
    // Cleanup on unmount
    return () => {
      console.log('Stopping auto-play');
      stopAutoPlay();
    };
  }, [startAutoPlay, stopAutoPlay]);

  // Pause auto-play on hover, resume on mouse leave
  const handleMouseEnter = () => {
    stopAutoPlay();
  };

  const handleMouseLeave = () => {
    startAutoPlay();
  };

  // Removed wheel event listener since we're using arrows now

  const generateItems = () => {
    const carouselItems = [];
    
    for (let i = activeIndex - 3; i < activeIndex + 4; i++) {
      let index = i;
      if (i < 0) {
        index = extendedItems.length + i;
      } else if (i >= extendedItems.length) {
        index = i % extendedItems.length;
      }
      
      const level = activeIndex - i;
      
       // Get level-specific styles
       let levelClass = '';
       let topPosition = '';
       let leftPosition = '';
       let scale = '';
       let zIndex = '';
       
       if (level === 0) {
         levelClass = 'level0';
         topPosition = '0px';
         leftPosition = '50%';
         scale = '1';
         zIndex = '10';
       } else if (level === 1) {
         levelClass = 'level1';
         topPosition = '60px';
         leftPosition = 'calc(50% - 360px)';
         scale = '1.0';
         zIndex = '8';
       } else if (level === -1) {
         levelClass = 'level-1';
         topPosition = '60px';
         leftPosition = 'calc(50% + 360px)';
         scale = '1.0';
         zIndex = '8';
       } else if (level === 2) {
         levelClass = 'level2';
         topPosition = '120px';
         leftPosition = 'calc(50% - 720px)';
         scale = '1';
         zIndex = '6';
       } else if (level === -2) {
         levelClass = 'level-2';
         topPosition = '120px';
         leftPosition = 'calc(50% + 720px)';
         scale = '1';
         zIndex = '6';
       } else if (level === 3) {
         levelClass = 'level3';
         topPosition = '200px';
         leftPosition = 'calc(50% - 1100px)';
         scale = '1';
         zIndex = '4';
       } else if (level === -3) {
         levelClass = 'level-3';
         topPosition = '200px';
         leftPosition = 'calc(50% + 1100px)';
         scale = '1';
         zIndex = '4';
       }
      
       carouselItems.push(
         <div
           key={`${index}-${i}`}
           className={`item ${levelClass}`}
           style={{
             height: '560px',
             width: '340px',
             position: 'absolute',
             left: leftPosition,
             top: topPosition,
             transform: `translateX(-50%) scale(${scale})`,
             opacity: 1,
             zIndex: zIndex,
             transition: 'all 1s ease',
             textAlign: 'left' // Override carousel's center alignment
           }}
         >
           <CardSlider 
             project={extendedItems[index]}
             className="w-full h-full"
           />
         </div>
       );
    }
    
    return carouselItems;
  };

  return (
    <div 
      ref={carouselRef}
      className={`relative mx-auto ${className}`}
      style={{
        height: '100%',
        width: '100%',
       
        overflow: 'visible' // Crop cards that go outside viewport
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Carousel Items */}
      <div className="relative w-full h-full">
        {generateItems()}
      </div>
      
      {/* Navigation Arrows - Below center of cards */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
        {/* Left Arrow */}
        <button
          onClick={moveLeft}
          className="w-9 h-9 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 backdrop-blur-sm border border-white/30"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
        </button>

        {/* See Work Button */}
        <button className="px-4 py-2 bg-white/20 text-sm hover:bg-white/30 text-white font-light rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 backdrop-blur-sm border border-white/30">
          See All Works
        </button>

        {/* Right Arrow */}
        <button
          onClick={moveRight}
          className="w-9 h-9 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 backdrop-blur-sm border border-white/30"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
          </svg>
        </button>
      </div>
      
      {/* Instructions */}
      
    </div>
  );
};

export default CarouselSlider;
