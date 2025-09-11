import React from "react"
import Image from "next/image"
import { Project } from "@/lib/project-data"

type LpProjectCardProps = {
  project: Project
  className?: string
}

export default function LpProjectCard({ project, className }: LpProjectCardProps) {
  return (
    <div className={`group relative overflow-hidden bg-black transition-transform duration-300 hover:-translate-y-12 ${className}`}>
      {/* Image Container */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <Image
          src={project.image_url}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />
      </div>
    </div>
  )
}
