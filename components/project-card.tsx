import React from "react"

type ProjectCardProps = {
  className?: string
}

export default function ProjectCard({ className }: ProjectCardProps) {
  return (
    <div className={className}>
      {/* ProjectCard content will go here */}
    </div>
  )
}