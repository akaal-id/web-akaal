import React, { useRef } from "react"
import { Project } from "@/lib/project-data"

type LpProjectCardProps = {
  project: Project
  className?: string
  onHoverStart?: (ref: React.RefObject<HTMLDivElement>) => void
  onHoverEnd?: () => void
}

export default function LpProjectCard({ project, className, onHoverStart, onHoverEnd }: LpProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={cardRef}
      className={`relative group overflow-hidden rounded-2xl bg-gray-800 ${className}`}
      onMouseEnter={() => onHoverStart?.(cardRef)}
      onMouseLeave={onHoverEnd}
    >
      {/* Default state - Image only */}
      <div className="relative w-full h-full">
        <img 
          src={project.image_url} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      {/* Hover state - Combined blur and black overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-100 pointer-events-none overflow-hidden">
        {/* Blurred background covering entire card */}
        <div 
          className="absolute inset-0 backdrop-blur-xs"
          style={{
            left: '-10px',
            right: '-10px',
            top: '-10px',
            bottom: '-10px',
            width: 'calc(100% + 20px)',
            height: 'calc(100% + 20px)'
          }}
        />
        
        {/* White gradient overlay at bottom */}
        <div 
          className="absolute bottom-0 h-64"
          style={{
            background: 'linear-gradient(to top, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 25%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.2) 75%, transparent 100%)',
            left: '-10px',
            right: '-10px',
            width: 'calc(100% + 20px)'
          }}
        />
        
        {/* Project information */}
        <div className="absolute bottom-0 left-0 right-0 px-6 py-8 flex items-center justify-between">
          {/* Left side - Text info */}
          <div className="group-hover:translate-y-0 translate-y-4 transition-transform duration-500 delay-100">
            <p className="text-gray-600 -mb-1 font-normal" style={{ fontFamily: 'Inter', fontSize: '16px' }}>
              {project.client}
            </p>
            <h3 className="text-purple-500 -mt-1 font-semibold" style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '24px' }}>
              {project.title}
            </h3>
           
          </div>
          
          {/* Right side - Chevron */}
          <div className="group-hover:translate-y-0 translate-y-4 transition-transform duration-500 delay-200">
            <div className="text-gray-900 transition-colors duration-300 pointer-events-auto">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
