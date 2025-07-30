// HeroSlider component with Supabase integration
"use client";

import { useEffect, useState } from "react";
import { getHeroImages, HeroImage } from "@/lib/hero-images";

export default function HeroSlider() {
  const [images, setImages] = useState<HeroImage[]>([]);
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch images from Supabase on component mount
  useEffect(() => {
    const fetchImages = async () => {
      try {
        console.log('🚀 HeroSlider: Starting to fetch images...')
        setIsLoading(true);
        const heroImages = await getHeroImages();
        
        console.log('📸 HeroSlider: Received', heroImages.length, 'images')
        
        if (heroImages.length === 0) {
          console.log('🔄 HeroSlider: No Supabase images, using fallback')
          // Fallback to local images if no Supabase images found
          setImages([
            {
              id: 'fallback-1',
              url: '/images/Header-1.png',
              alt: 'Hero Image 1',
              order: 1
            },
            {
              id: 'fallback-2',
              url: '/images/photo-2.jpg',
              alt: 'Hero Image 2',
              order: 2
            },
            {
              id: 'fallback-3',
              url: '/images/photo-3.jpg',
              alt: 'Hero Image 3',
              order: 3
            }
          ]);
        } else {
          console.log('✅ HeroSlider: Using Supabase images')
          setImages(heroImages);
        }
      } catch (err) {
        console.error('💥 HeroSlider: Error fetching hero images:', err);
        setError('Failed to load hero images');
        // Fallback to local images
        setImages([
          {
            id: 'fallback-1',
            url: '/images/Header-1.png',
            alt: 'Hero Image 1',
            order: 1
          },
          {
            id: 'fallback-2',
            url: '/images/photo-2.jpg',
            alt: 'Hero Image 2',
            order: 2
          },
          {
            id: 'fallback-3',
            url: '/images/photo-3.jpg',
            alt: 'Hero Image 3',
            order: 3
          }
        ]);
      } finally {
        console.log('🏁 HeroSlider: Finished loading, setting isLoading to false')
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  // Auto-slide effect
  useEffect(() => {
    if (isHovered || images.length === 0) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  if (isLoading) {
    return (
      <section className="w-full flex flex-col items-center bg-black m-0 p-0">
        <div className="relative w-full max-w-none aspect-[16/6] overflow-hidden m-0 p-0 bg-gray-800 flex items-center justify-center">
          <div className="text-white text-lg">Loading hero images...</div>
        </div>
      </section>
    );
  }

  if (error && images.length === 0) {
    return (
      <section className="w-full flex flex-col items-center bg-black m-0 p-0">
        <div className="relative w-full max-w-none aspect-[16/6] overflow-hidden m-0 p-0 bg-gray-800 flex items-center justify-center">
          <div className="text-white text-lg">{error}</div>
        </div>
      </section>
    );
  }

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
          {images.map((image, idx) => (
            <img
              key={image.id}
              src={image.url}
              alt={image.alt}
              className="object-cover w-full aspect-[16/6]"
              style={{ width: '100vw', aspectRatio: '16/6', objectFit: 'cover', height: '100%' }}
              draggable={false}
            />
          ))}
        </div>
      </div>
      {/* Chevron controls outside, bottom center */}
      {images.length > 1 && (
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
      )}
    </section>
  );
}
