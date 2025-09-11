"use client";

import React, { useState } from "react";
import { projects } from "@/lib/project-data";
import ProjectCard from "@/components/project-card";
import BlurOverlay from "@/components/BlurOverlay";

export default function WorkGallery() {
  const [isBlurVisible, setIsBlurVisible] = useState(false);
  const [activeCardRef, setActiveCardRef] = useState<React.RefObject<HTMLDivElement> | undefined>(undefined);

  return (
    <>
      <BlurOverlay isVisible={isBlurVisible} activeCardRef={activeCardRef} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            className="h-[28rem]"
            onHoverStart={(ref) => {
              setActiveCardRef(ref);
              setIsBlurVisible(true);
            }}
            onHoverEnd={() => {
              setActiveCardRef(undefined);
              setIsBlurVisible(false);
            }}
          />
        ))}
      </div>
    </>
  );
}
