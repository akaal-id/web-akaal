"use client"

import React, { useEffect, useState } from "react"

export default function StartupAnimation() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Start fade out after a short delay
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 800) // 0.8 seconds total

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div 
      className="fixed inset-0 z-[10000] bg-black"
      style={{
        animation: 'startupFadeOut 1s ease-out forwards'
      }}
    />
  )
}
