import React, { useRef } from "react"
import { Project } from "@/lib/project-data"

type ProjectCardProps = {
  project: Project
  className?: string
  onHoverStart?: (ref: React.RefObject<HTMLDivElement>) => void
  onHoverEnd?: () => void
}

export default function ProjectCard({ project, className, onHoverStart, onHoverEnd }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={cardRef}
      className={`group flex flex-col ${className}`}
      onMouseEnter={() => onHoverStart?.(cardRef)}
      onMouseLeave={onHoverEnd}
    >
      {/* Data - Text first - Only shown on hover */}
      <div className="flex flex-col justify-end h-20 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Container 1 - Client */}
        <div className="group-hover:translate-y-0 translate-y-1 transition-transform duration-500 delay-100">
          <p className="text-gray-400 mb-1 px-2 font-normal" style={{ fontFamily: 'Inter', fontSize: '14px' }}>
            {project.client}
          </p>
        </div>
        
        {/* Container 2 - Title and Arrow */}
        <div className="flex items-center justify-between mb-0 group-hover:translate-y-0 translate-y-1 transition-transform duration-500 delay-200">
          <h3 className="text-white px-2 mb-2 font-normal leading-tight" style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '20px' }}>
            {project.title}
          </h3>
          <div className="text-gray-900 px-2 group-hover:text-white transition-colors duration-300 pointer-events-auto">
            <svg className="w-6 h-6 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Container - Image placeholder */}
      <div className="relative overflow-hidden rounded-xs bg-gray-800 flex-1">
        <img 
          src={project.image_url} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Hover state - Black overlay with blur */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none overflow-hidden">
        

          {/* Black overlay 
          <div className="absolute inset-0 bg-black/60" />
        */}
          {/* Blurred background 
          <div 
            className="absolute inset-0 backdrop-blur-sm"
            style={{
              left: '-10px',
              right: '-10px',
              top: '-10px',
              bottom: '-10px',
              width: 'calc(100% + 20px)',
              height: 'calc(100% + 20px)'
            }}
          />
          */}
        </div>
      </div>
    </div>
  )
}