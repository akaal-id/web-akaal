import React from "react"
import Image from "next/image"

type PhCardProps = {
  title: string
  company: string
  imageSrc: string
  gradientFrom: string
  gradientTo: string
  className?: string
}

export default function PhCard({ 
  title, 
  company, 
  imageSrc, 
  gradientFrom, 
  gradientTo, 
  className 
}: PhCardProps) {
  return (
    <div 
      className={`w-full h-80 rounded-lg overflow-hidden ${className || ''}`}
      style={{
        background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
        position: 'relative'
      }}
    >
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover opacity-80"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
      />
      
      {/* Overlay with content */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-4">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
            {title}
          </h3>
          <p className="text-sm text-white/80 font-['Inter']">
            {company}
          </p>
        </div>
      </div>
    </div>
  )
}
