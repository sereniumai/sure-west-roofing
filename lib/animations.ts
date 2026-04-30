import type { Variants, Transition } from 'framer-motion'

/**
 * Shared animation primitives used across the site.
 * All scroll-triggered animations should use these constants for consistency.
 *
 * Reduced motion: handled globally via <MotionConfig reducedMotion="user">
 * wrapped around <main> in app/layout.tsx, no per-component work needed.
 */

// ─── Easing ──────────────────────────────────────────────────
// ease-out-expo, gentle, premium deceleration
export const EASE_OUT = [0.22, 1, 0.36, 1] as const

// ─── Viewport settings ───────────────────────────────────────
// Everything fires once when 80px of the element has entered the viewport.
export const VIEWPORT = { once: true, margin: '-80px' } as const

// ─── Durations ───────────────────────────────────────────────
export const DURATION = {
  fast: 0.3,
  base: 0.5,
  slow: 0.6,
  cinematic: 1.2,
} as const

const transition: Transition = { duration: DURATION.slow, ease: EASE_OUT }

// ─── Variants ────────────────────────────────────────────────

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: DURATION.base, ease: EASE_OUT } },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.base, ease: EASE_OUT },
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition },
}

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition },
}
