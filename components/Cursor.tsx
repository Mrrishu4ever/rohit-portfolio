'use client'

import { useEffect, useState } from 'react'

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.body.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  if (typeof window === 'undefined') return null

  return (
    <>
      {/* Cursor Dot */}
      <div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-accent-cyan pointer-events-none z-50 mix-blend-difference"
        style={{
          transform: `translate(${position.x - 6}px, ${position.y - 6}px)`,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.2s ease',
        }}
      />
      {/* Cursor Ring */}
      <div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-accent-cyan/50 pointer-events-none z-50"
        style={{
          transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.2s ease, transform 0.1s ease',
        }}
      />
    </>
  )
}