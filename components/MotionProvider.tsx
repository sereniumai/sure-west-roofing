'use client'

import { MotionConfig } from 'framer-motion'

/**
 * Wraps children in a MotionConfig with reducedMotion="user".
 *
 * Framer Motion reads the user's `prefers-reduced-motion` setting and
 * instantly skips transforms/opacity animations when true — no per-component
 * work required. Keeps focus rings and instant-state behavior intact.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
