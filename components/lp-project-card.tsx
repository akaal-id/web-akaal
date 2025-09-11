import React from "react"
import Image from "next/image"
import { Project } from "@/lib/project-data"

type LpProjectCardProps = {
  project: Project
  className?: string
}

export default function LpProjectCard({ project, className }: LpProjectCardProps) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-black ${className}`}>
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image_url}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />
      </div>
      
      {/* Content Container - Black background like in the image */}
      <div className="relative bg-black p-6">
        {/* Title */}
        <h3 className="font-inter text-xl font-bold text-white mb-1">
          {project.title}
        </h3>
        
        {/* Client */}
        <p className="font-inter text-lg text-white/80 mb-4">
          {project.client}
        </p>
        
        {/* Arrow Icon */}
        <div className="absolute bottom-6 right-6">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/40">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
