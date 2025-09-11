import React from "react"
import LpProjectCard from "./lp-project-card"
import { projects } from "@/lib/project-data"

export default function LpCarousel() {
  // Get first 5 projects for the carousel
  const carouselProjects = projects.slice(0, 5)

  return (
    <div className="w-full min-h-screen py-20 px-4">
      <div className="w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 font-inter">
            Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            Discover our portfolio of innovative digital solutions that transform businesses and create exceptional user experiences.
          </p>
        </div>

        {/* 5x1 Grid of Project Cards - Full Width */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
          {carouselProjects.map((project) => (
            <LpProjectCard
              key={project.id}
              project={project}
              className="w-full"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
