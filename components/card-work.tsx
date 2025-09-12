import React from "react"
import { Project } from "@/lib/project-data"

type CardWorkProps = {
  project: Project
  className?: string
}

export default function CardWork({ project, className }: CardWorkProps) {
  return (
    <div className={`group flex flex-col ${className}`}>
      {/* 1. Image placeholder */}
      <div className="relative overflow-hidden rounded-sm bg-gray-800 flex-1 mb-4">
        <img 
          src={project.image_url} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      {/* 2. Data section */}
      <div className="flex justify-between justify-start items-start">
        {/* Left side - Title and Client (33%) */}
        <div className="w-1/3 pr-4">
          <h3 className="text-white font-bold leading-tight mb-2 h-12 overflow-hidden" style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '18px' }}>
            {project.title}
          </h3>
          <p className="text-gray-400 font-normal" style={{ fontFamily: 'Inter', fontSize: '14px' }}>
            {project.client}
          </p>
        </div>
        
        {/* Right side - Description and See More button (67%) */}
        <div className="w-2/3 flex flex-col items-start justify-start">
          <p className="text-gray-300 text-sm leading-relaxed mb-3 text-left" style={{ fontFamily: 'Inter' }}>
            {project.description}
          </p>
          <button className="text-white hover:text-gray-200 text-sm font-light transition-colors duration-300 underline">
            See more →
          </button>
        </div>
      </div>
    </div>
  )
}
