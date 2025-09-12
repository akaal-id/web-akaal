"use client";

import { useEffect, useRef } from 'react';
import { animate as anime } from 'animejs';

interface TitleAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function TitleAnimation({ children, className = "", delay = 0 }: TitleAnimationProps) {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    // Get the original HTML content
    const originalHTML = titleRef.current.innerHTML;
    
    // Create a temporary container to parse the HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = originalHTML;
    
    // Process all nodes (both elements and text nodes)
    const processNode = (node: Node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        // It's a text node
        const text = node.textContent || '';
        if (text.trim()) {
          const words = text.split(/(\s+)/); // Split by whitespace but keep the spaces
          
          const fragment = document.createDocumentFragment();
          
          words.forEach((word) => {
            if (word.trim()) {
              // It's a word - create a span
              const wordSpan = document.createElement('span');
              wordSpan.textContent = word;
              wordSpan.style.display = 'inline-block';
              wordSpan.style.opacity = '0';
              wordSpan.style.transform = 'translateY(50px)';
              fragment.appendChild(wordSpan);
            } else {
              // It's whitespace
              const spaceSpan = document.createElement('span');
              spaceSpan.textContent = word;
              spaceSpan.style.display = 'inline';
              fragment.appendChild(spaceSpan);
            }
          });
          
          node.parentNode?.replaceChild(fragment, node);
        }
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        // It's an element node - process its text content
        const element = node as HTMLElement;
        const text = element.textContent || '';
        const words = text.split(/(\s+)/); // Split by whitespace but keep the spaces
        
        // Clear the element content
        element.innerHTML = '';
        
        // Create spans for each word, preserving the original element's classes
        words.forEach((word) => {
          if (word.trim()) {
            // It's a word - create a span with the original classes
            const wordSpan = document.createElement('span');
            wordSpan.textContent = word;
            wordSpan.className = element.className; // Preserve original classes
            wordSpan.style.display = 'inline-block';
            wordSpan.style.opacity = '0';
            wordSpan.style.transform = 'translateY(50px)';
            element.appendChild(wordSpan);
          } else {
            // It's whitespace
            const spaceSpan = document.createElement('span');
            spaceSpan.textContent = word;
            spaceSpan.style.display = 'inline';
            element.appendChild(spaceSpan);
          }
        });
      }
    };
    
    // Process all child nodes
    const childNodes = Array.from(tempDiv.childNodes);
    childNodes.forEach(processNode);
    
    // Update the main container with the processed HTML
    titleRef.current.innerHTML = tempDiv.innerHTML;

    // Animate all word spans
    const wordSpans = titleRef.current.querySelectorAll('span[style*="opacity: 0"]');
    
    anime(Array.from(wordSpans), {
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 800,
      delay: (target: any, index: number, length: number) => delay + (index * 100), // Stagger animation
      ease: 'easeOutExpo'
    });

  }, [delay]);

  return (
    <div ref={titleRef} className={`font-plus-jakarta ${className}`}>
      {children}
    </div>
  );
}
