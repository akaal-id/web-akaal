"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import WorkGallery from "@/components/work-gallery";
import Background from "@/components/Background";

export default function WorkPage() {

  return (
    <div className="relative min-h-screen text-white bg-black overflow-hidden w-screen pt-16">
      <Background variant="top-radial" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-medium mb-6 leading-tight">
            Our <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Work</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Explore our portfolio of innovative digital solutions that have transformed businesses and created lasting impact.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mb-16">
          <WorkGallery />
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-900/30 backdrop-blur-sm rounded-2xl p-12 border border-gray-800/50">
          <h2 className="text-3xl font-semibold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can bring your vision to life with our innovative digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-600 text-white rounded-full font-medium hover:border-purple-500 hover:text-purple-400 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-600 text-white rounded-full font-medium hover:border-purple-500 hover:text-purple-400 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
