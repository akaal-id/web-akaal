"use client"
import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import LpProjectCard from "./lp-project-card"
import { projects } from "@/lib/project-data"

// Import Swiper styles
import 'swiper/css'

export default function LpCarousel() {
  // Use all 10 projects for the carousel
  const carouselProjects = projects

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

        {/* Swiper Carousel */}
        <div className="pt-12 pb-12">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 24,
              },
            }}
            className="w-full"
          >
            {carouselProjects.map((project) => (
              <SwiperSlide key={project.id}>
                <LpProjectCard
                  project={project}
                  className="w-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
