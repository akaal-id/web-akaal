import React, { useRef, useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { Project } from "@/lib/project-data"
import { ArrowRight } from "lucide-react";

type CardSliderProps = {
  project: Project
  className?: string
  onHoverStart?: (ref: React.RefObject<HTMLDivElement>) => void
  onHoverEnd?: () => void
}

export default function CardSlider({ project, className, onHoverStart, onHoverEnd }: CardSliderProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (isHovering) {
      document.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovering]);

  return (
    <div 
      ref={cardRef}
      className={`group flex flex-col ${className}`}
      onMouseEnter={() => {
        setIsHovering(true);
        onHoverStart?.(cardRef);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
        onHoverEnd?.();
      }}
    >
      {/* Data - Text first - Only shown on hover - Aligned to bottom */}
      <div className="flex flex-col justify-end h-20 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Container 1 - Client */}
        <div className="group-hover:translate-y-0 px-1 pt-2 translate-y-1 transition-transform duration-500 delay-100">
          <p className="text-gray-400 font-normal mb-2" style={{ fontFamily: 'Inter', fontSize: '14px' }}>
            {project.client}
          </p>
        </div>
        
        {/* Container 2 - Title */}
        <div className="group-hover:translate-y-0 px-1 -mt-2 translate-y-1 transition-transform duration-500 delay-200">
          <h3 
            className="text-white justify-start font-semibold leading-tight" 
            style={{ 
              fontFamily: 'Plus Jakarta Sans', 
              fontSize: '20px',
              lineHeight: '1.2em',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxHeight: '2.4em'
            }}
          >
            {project.title}
          </h3>
        </div>
      </div>
      
      {/* Container - Image placeholder */}
      <div className="relative overflow-hidden rounded-3xl bg-gray-800 flex-1">
        <img 
          src={project.image_url} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Hover state - Black overlay with blur */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none overflow-hidden">
          {/* Black overlay */}
          {/* <div className="absolute inset-0 bg-black/60" /> */}
          {/* Blurred background */}
          {/* <div 
            className="absolute inset-0 backdrop-blur-sm"
            style={{
              left: '-10px',
              right: '-10px',
              top: '-10px',
              bottom: '-10px',
              width: 'calc(100% + 20px)',
              height: 'calc(100% + 20px)'
            }}
          /> */}
        </div>
      </div>
      
      {/* Custom cursor with tooltip - rendered outside transform context */}
      {isHovering && createPortal(
        <div
          className="fixed pointer-events-none z-[9999] flex items-center gap-2"
          style={{
            left: mousePosition.x + 75,
            top: mousePosition.y,
            transform: 'translate(-50%, -50%)'
          }}
        >
          {/* Circle cursor */}
          <div className="w-9 h-9 backdrop-blur-sm text-white rounded-9999 text-sm font-medium rounded-full"
               style={{ 
                 background: 'linear-gradient(to bottom, #115C68, #22A6BB, 0.2)',
                 boxShadow: 'inset 0px 6px 10px rgba(42,207,234,0.2)',
                 backdropFilter: 'blur(20px)',
                 border: '1.5px solid rgba(255, 255, 255, 0.3)'
               }}>
              <ArrowRight className="px-2 py-2 w-full h-full" />
          </div>
          
          {/* Tooltip */}
          <div className="backdrop-blur-sm text-gray-300 px-4 py-2 rounded-full text-sm font-normal"
               style={{ 
                 fontFamily: 'Inter',
                 background: 'linear-gradient(to bottom, #115C68, #22A6BB, 0.2)',
                 boxShadow: 'inset 0px 6px 10px rgba(42,207,234,0.2)',
                 backdropFilter: 'blur(20px)',
                 border: '1.5px solid rgba(255, 255, 255, 0.3)'
               }}>
            See Case Study
          </div>
        </div>,
        document.body
      )}
    </div>
  )
}
