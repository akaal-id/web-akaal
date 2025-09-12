"use client";

import { useEffect, useRef, useState, useCallback } from 'react';
import { animate } from 'animejs';

interface ScrollTriggeredAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
}

export default function ScrollTriggeredAnimation({ 
  children, 
  className = "", 
  delay = 0,
  duration = 800,
  threshold = 0.3
}: ScrollTriggeredAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimatedRef = useRef(false);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !hasAnimatedRef.current) {
        hasAnimatedRef.current = true;
        
        // Check if element still exists before setting styles
        if (elementRef.current) {
          // Set initial state
          elementRef.current.style.opacity = '0';
          elementRef.current.style.transform = 'translateY(50px)';

          // Start animation after delay
          setTimeout(() => {
            if (elementRef.current) {
              animate(elementRef.current, {
                opacity: [0, 1],
                translateY: [50, 0],
                duration: duration,
                ease: 'easeOutExpo'
              });
            }
          }, delay);
        }
      }
    });
  }, [delay, duration]);

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: threshold,
      rootMargin: '0px 0px -100px 0px'
    });

    observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [handleIntersection, threshold]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
