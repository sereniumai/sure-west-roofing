'use client'

import { useEffect, useRef, useState } from 'react'

interface RevealProps {
  children: React.ReactNode
  /** ms before the animation starts after entering view */
  delay?: number
  /** distance in px the element rises from */
  y?: number
  className?: string
  /** disable the subtle entrance blur (use sparingly, blur is what makes it premium) */
  noBlur?: boolean
}

/**
 * Premium content reveal. Wraps inner content (NOT section backgrounds) so
 * coloured backgrounds stay put while the foreground rises softly into view.
 * Effect: opacity + slight upward translate + tiny scale-from-0.985 + 8px → 0 blur,
 * driven by an expo-out curve over 1200ms. Plays once on first intersection.
 */
export function Reveal({
  children,
  delay = 0,
  y = 40,
  className,
  noBlur = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setShown(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -100px 0px', threshold: 0.05 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const duration = 1200
  const easing = 'cubic-bezier(0.16, 1, 0.3, 1)'

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0) scale(1)' : `translateY(${y}px) scale(0.985)`,
        filter: shown || noBlur ? 'blur(0)' : 'blur(3px)',
        transition: `opacity ${duration}ms ${easing} ${delay}ms, transform ${duration}ms ${easing} ${delay}ms, filter ${duration}ms ${easing} ${delay}ms`,
        willChange: 'opacity, transform, filter',
      }}
    >
      {children}
    </div>
  )
}
