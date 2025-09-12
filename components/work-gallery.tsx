"use client";

import React from "react";
import { projects } from "@/lib/project-data";
import CardWork from "@/components/card-work";

export default function WorkGallery() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 gap-y-12">
      {projects.map((project) => (
        <CardWork
          key={project.id}
          project={project}
          className="h-auto"
        />
      ))}
    </div>
  );
}
