import React from "react"
import { Project } from "@/lib/project-data"

type LpProjectCardProps = {
  project: Project
  className?: string
}

export default function LpProjectCard({ project, className }: LpProjectCardProps) {
  return (
    <div className={`relative group overflow-hidden bg-gray-800 ${className}`}>
      {/* Default state - Image only */}
      <div className="relative w-full h-full">
        <img 
          src={project.image_url} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      {/* Hover state - Strong black inner shadow at bottom */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none overflow-hidden">
        {/* Strong black linear gradient at bottom */}
        <div 
          className="absolute bottom-0 h-64"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.9) 25%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.4) 75%, transparent 100%)',
            left: '-10px',
            right: '-10px',
            width: 'calc(100% + 20px)'
          }}
        />
        
        {/* Project information */}
        <div className="absolute bottom-0 left-0 right-0 px-6 py-8 text-white flex items-center justify-between">
          {/* Left side - Text info */}
          <div className="group-hover:translate-y-0 translate-y-4 transition-transform duration-500 delay-100">
            <p className="text-gray-400 -mb-1 font-normal" style={{ fontFamily: 'Inter', fontSize: '16px' }}>
              {project.client}
            </p>
            <h3 className="text-white -mt-1 font-medium" style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '24px' }}>
              {project.title}
            </h3>
          </div>
          
          {/* Right side - Arrow */}
          <div className="group-hover:translate-y-0 translate-y-4 transition-transform duration-500 delay-200">
            <button className="bg-white text-black w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 pointer-events-auto hover:bg-gray-100">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
