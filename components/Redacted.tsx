'use client'

import { useState } from 'react'

interface RedactedProps {
  children: string
  autoReveal?: boolean
}

export function Redacted({ children, autoReveal = false }: RedactedProps) {
  const [hovered, setHovered] = useState(false)
  const revealed = hovered || autoReveal

  return (
    <span
      className="relative inline-block cursor-pointer"
      aria-label={children}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className={`transition-opacity duration-300 ${revealed ? 'opacity-100' : 'opacity-0'}`}
      >
        {children}
      </span>
      {!revealed && (
        <span
          className="absolute inset-0 bg-ink transition-opacity duration-200"
          aria-hidden="true"
        />
      )}
    </span>
  )
}
