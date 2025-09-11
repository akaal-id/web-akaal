"use client"

import React from "react"

type HoverButtonProps = {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
}

export default function HoverButton({ children, className, style, onClick }: HoverButtonProps) {
  return (
    <button 
      className={className}
      style={style}
      onClick={onClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'linear-gradient(90deg, #392686 0%, #6543EC 100%)';
        e.currentTarget.style.borderImage = 'linear-gradient(90deg, #6543EC 0%, #392686 100%) 1';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'linear-gradient(90deg, #6543EC 0%, #392686 100%)';
        e.currentTarget.style.borderImage = 'linear-gradient(90deg, #392686 0%, #6543EC 100%) 1';
      }}
    >
      {children}
    </button>
  )
}
