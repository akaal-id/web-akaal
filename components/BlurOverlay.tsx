import React, { useEffect, useState } from "react"

type BlurOverlayProps = {
  isVisible: boolean
  activeCardRef?: React.RefObject<HTMLDivElement>
  className?: string
}

export default function BlurOverlay({ isVisible, activeCardRef, className = "" }: BlurOverlayProps) {
  const [cardPosition, setCardPosition] = useState<{ x: number; y: number; width: number; height: number } | null>(null)

  useEffect(() => {
    if (activeCardRef?.current && isVisible) {
      const updatePosition = () => {
        const rect = activeCardRef.current!.getBoundingClientRect()
        setCardPosition({
          x: rect.left,
          y: rect.top,
          width: rect.width,
          height: rect.height
        })
      }

      updatePosition()
      window.addEventListener('resize', updatePosition)
      window.addEventListener('scroll', updatePosition)

      return () => {
        window.removeEventListener('resize', updatePosition)
        window.removeEventListener('scroll', updatePosition)
      }
    } else {
      setCardPosition(null)
    }
  }, [activeCardRef, isVisible])

  if (!isVisible) return null

  return (
    <div className={`fixed inset-0 z-[9999] pointer-events-none ${className}`}>
      {/* Top blur section */}
      {cardPosition && (
        <div 
          className="absolute backdrop-blur-md bg-black/30"
          style={{
            top: 0,
            left: 0,
            right: 0,
            height: cardPosition.y,
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
        />
      )}
      
      {/* Bottom blur section */}
      {cardPosition && (
        <div 
          className="absolute backdrop-blur-md bg-black/30"
          style={{
            top: cardPosition.y + cardPosition.height,
            left: 0,
            right: 0,
            bottom: 0,
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
        />
      )}
      
      {/* Left blur section */}
      {cardPosition && (
        <div 
          className="absolute backdrop-blur-md bg-black/30"
          style={{
            top: cardPosition.y,
            left: 0,
            width: cardPosition.x,
            height: cardPosition.height,
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
        />
      )}
      
      {/* Right blur section */}
      {cardPosition && (
        <div 
          className="absolute backdrop-blur-md bg-black/30"
          style={{
            top: cardPosition.y,
            left: cardPosition.x + cardPosition.width,
            right: 0,
            height: cardPosition.height,
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
        />
      )}
      
      {/* Fallback full blur when no card position */}
      {!cardPosition && (
        <div 
          className="absolute inset-0 backdrop-blur-md bg-black/30"
          style={{
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
        />
      )}
    </div>
  )
}
