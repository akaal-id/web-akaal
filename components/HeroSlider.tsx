// HeroSlider component extracted from app/page.tsx
"use client";

import { useEffect, useState } from "react";

export default function HeroSlider() {
  const images = [
    "/images/Header-1.png",
    "/images/photo-2.jpg",
    "/images/photo-3.jpg"
  ];
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-slide effect
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  return (
    <section className="w-full flex flex-col items-center bg-black m-0 p-0">
      <div
        className="relative w-full max-w-none aspect-[16/6] overflow-hidden m-0 p-0"
        style={{
          position: 'relative',
          top: 0,
          width: '100%',
          height: '100%',
          userSelect: 'none',
          justifyContent: 'center',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="slider-track"
          style={{
            display: 'flex',
            width: `${images.length * 100}vw`,
            height: '100%',
            transition: 'transform 0.7s cubic-bezier(0.4,0,0.2,1)',
            transform: `translateX(-${current * 100}vw)`
          }}
        >
          {images.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt={`Slide ${idx + 1}`}
              className="object-cover w-full aspect-[16/6]"
              style={{ width: '100vw', aspectRatio: '16/6', objectFit: 'cover', height: '100%' }}
              draggable={false}
            />
          ))}
        </div>
      </div>
      {/* Chevron controls outside, bottom center */}
      <div className="flex gap-4 justify-center mt-6">
        <button
          className="hero-chevron"
          onClick={() => setCurrent(current === 0 ? images.length - 1 : current - 1)}
          aria-label="Previous slide"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <button
          className="hero-chevron"
          onClick={() => setCurrent(current === images.length - 1 ? 0 : current + 1)}
          aria-label="Next slide"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      </div>
    </section>
  );
}
