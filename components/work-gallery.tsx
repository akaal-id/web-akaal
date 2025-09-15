"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/lib/project-data";
import CardWork from "@/components/card-work";

interface WorkGalleryProps {
  projects?: Project[];
}

export default function WorkGallery({ projects: projectsProp }: WorkGalleryProps) {
  const allProjects = projectsProp || projects;
  const [showAll, setShowAll] = useState(false);
  
  // Show 6 projects initially, all if showAll is true
  const projectsToShow = showAll ? allProjects : allProjects.slice(0, 6);
  const remainingProjects = allProjects.slice(6);

  if (allProjects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg">No projects found matching your search.</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-120 w-full items-start">
        {/* First 6 cards - no animation */}
        {allProjects.slice(0, 6).map((project) => (
          <CardWork
            key={project.id}
            project={project}
            className="w-full"
          />
        ))}
        
        {/* Remaining cards - with animation when showAll is true */}
        {showAll && (
          <AnimatePresence>
            {remainingProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <CardWork
                  project={project}
                  className="w-full"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>
      
      {/* Show More/Show Less Button */}
      {allProjects.length > 6 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 bg-gray-900/50 border border-gray-700 rounded-[9999px] text-white hover:bg-gray-800/50 transition-colors duration-200 backdrop-blur-sm"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </div>
  );
}
