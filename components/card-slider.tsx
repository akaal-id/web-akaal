import React, { useRef, useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { Project } from "@/lib/project-data"

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
      
      {/* Data - Text second - Only shown on hover */}
      <div className="flex flex-col justify-start h-20 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Container 1 - Title */}
        <div className="px-1 pt-2 group-hover:translate-y-0 translate-y-1 transition-transform duration-500 delay-100">
          <h3 
            className="text-white justify-start mb-2 font-semibold leading-tight" 
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
        
        {/* Container 2 - Client */}
        <div className="group-hover:translate-y-0 px-1 -mt-2 translate-y-1 transition-transform duration-500 delay-200">
          <p className="text-gray-400 font-normal" style={{ fontFamily: 'Inter', fontSize: '14px' }}>
            {project.client}
          </p>
        </div>
      </div>
      
      {/* Custom cursor with tooltip - rendered outside transform context */}
      {isHovering && createPortal(
        <div
          className="fixed pointer-events-none z-[9999] flex items-center gap-3"
          style={{
            left: mousePosition.x + 75,
            top: mousePosition.y,
            transform: 'translate(-50%, -50%)'
          }}
        >
          {/* Circle cursor */}
          <div className="w-6 h-6 backdrop-blur-sm text-white rounded-lg text-sm font-medium rounded-full"
               style={{ 
                 background: 'linear-gradient(to bottom, #115C68, #22A6BB)',
                 boxShadow: 'inset 0px 6px 10px rgba(42,207,234,1)'
               }}>
          </div>
          
          {/* Tooltip */}
          <div className="backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-normal"
               style={{ 
                 fontFamily: 'Inter',
                 background: 'linear-gradient(to bottom, #115C68, #22A6BB)',
                 boxShadow: 'inset 0px 6px 10px rgba(42,207,234,1)'
               }}>
            See Case Study
          </div>
        </div>,
        document.body
      )}
    </div>
  )
}
