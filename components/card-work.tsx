import React, { useState, useRef, useEffect } from "react"
import { createPortal } from "react-dom"
import { Project } from "@/lib/project-data"
import { ArrowRight } from "lucide-react"

type CardWorkProps = {
  project: Project
  className?: string
}

export default function CardWork({ project, className }: CardWorkProps) {
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
      className={`group relative overflow-hidden rounded-lg bg-gray-800 aspect-square ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Image */}
      <img 
        src={project.image_url} 
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      
      {/* Black linear gradient overlay - appears on hover */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-2/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.2) 75%, rgba(0,0,0,0) 100%)'
        }}
      />
      
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
      
      {/* Data section overlay - appears on hover */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex flex-col space-y-3">
          {/* Client name */}
          <p className="text-gray-400 font-normal text-sm -mb-2" style={{ fontFamily: 'Inter' }}>
            {project.client}
          </p>
          
          {/* Title */}
          <h3 className="text-white font-bold leading-tight" style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '18px' }}>
            {project.title}
          </h3>
          
          {/* Short description */}
          <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: 'Inter' }}>
            {project.description}
          </p>
          
          {/* See more button */}
          <button className="text-white hover:text-gray-200 text-sm font-light transition-colors duration-300 underline self-start">
            See more →
          </button>
        </div>
      </div>
    </div>
  )
}
