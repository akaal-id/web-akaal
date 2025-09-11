"use client"

import React, { useEffect, useRef } from "react"
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';
import LpProjectCard from './lp-project-card';
import { projects } from '@/lib/project-data';

export default function LpCarousel() {
  const splideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (splideRef.current) {
      const splide = new Splide('.splide', {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perPage: 5,
        gap: '1rem',
        padding: '2rem',
        pagination: false,
        arrows: false,
        autoScroll: {
          speed: 1,
        },
        breakpoints: {
          368: {
            perPage: 1,
            gap: '0.5rem',
            padding: '1rem',
          },
          640: {
            perPage: 2,
            gap: '0.5rem',
            padding: '1rem',
          },
          768: {
            perPage: 2,
            gap: '0.5rem',
            padding: '1.5rem',
          },
          1266: {
            perPage: 3,
            gap: '0.5rem',
            padding: '2rem',
          },
        },
      });

      splide.mount({ AutoScroll });

      return () => {
        splide.destroy();
      };
    }
  }, []);

  return (
    <div className="splide" ref={splideRef} style={{ overflow: 'visible' }}>
      <div className="splide__track" style={{ overflow: 'visible' }}>
        <ul className="splide__list" style={{ overflow: 'visible' }}>
          {projects.map((project) => (
            <li key={project.id} className="splide__slide" style={{ overflow: 'visible' }}>
              <LpProjectCard 
                project={project} 
                className="h-80 w-auto sm:h-96 sm:w-auto md:h-[28rem] md:w-auto mx-auto"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
