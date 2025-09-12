"use client";

import { useEffect, useRef, useState } from 'react';
import { animate } from 'animejs';

interface FadeInAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export default function FadeInAnimation({ 
  children, 
  className = "", 
  delay = 0,
  duration = 600 
}: FadeInAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!elementRef.current) return;

    // Set initial state
    elementRef.current.style.opacity = '0';
    elementRef.current.style.transform = 'translateY(30px)';

    // Start animation after delay
    const timer = setTimeout(() => {
      setIsVisible(true);
      
      if (elementRef.current) {
        animate(elementRef.current, {
          opacity: [0, 1],
          translateY: [30, 0],
          duration: duration,
          ease: 'easeOutExpo'
        });
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, duration]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
