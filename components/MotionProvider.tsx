'use client'

import { LazyMotion, domAnimation, MotionConfig } from 'framer-motion'

/**
 * LazyMotion tree-shakes unused Framer Motion features (~30% smaller).
 * MotionConfig with reducedMotion="user" auto-skips animations for
 * users with prefers-reduced-motion enabled.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  )
}
