'use client'

import { animate, motion, useMotionValue, useTransform, useAnimationFrame } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/Button'

interface PortfolioImage {
  src: string
  alt: string
  /** CSS object-position for the <img> — use to nudge a specific photo's crop (e.g. "70% center"). Defaults to "center". */
  objectPosition?: string
}

interface PortfolioCarouselProps {
  heading?: string
  images: PortfolioImage[]
}

// ── 3D cylinder tuning ────────────────────────────────────────────────
// Cards lie on a vertical-axis cylinder whose axis sits BEHIND the
// cards (away from the viewer). The viewer sees the convex front of
// the cylinder: the centre card is closest to camera, side cards
// curve backward, and each side card's inner edge tilts forward toward
// the viewer — the Rooferio "panorama wrapped on a barrel" look.
//
// Implementation borrows the GSAP-ring trick: each card uses
//   transform-origin: 50% 50% -ARC_RADIUSpx  (pivot pushed behind card)
//   transform: translate(-50%, -50%) rotateY(angle)
// so a single rotateY sweeps the card along the cylinder. The whole
// ring is then wrapped in a parent motion.div whose rotateY we drive
// with a motion value to spin the entire cylinder.
//
// Spacing: cards are spread evenly around the full cylinder so that as
// the ring spins, photos pass continuously through the front view.
//   ARC_STEP_DEG = 360 / images.length
// Radius is chosen so that ARC_RADIUS * sin(ARC_STEP_DEG) ≈ card width
// — i.e. cards meet edge-to-edge around the entire ring. For 19 images
// at 360/19 ≈ 18.95° per slot and a ~175px card, R ≈ 175/sin(18.95°)
// ≈ 540px. We use 550 so cards touch with a hairline seam.

const ARC_RADIUS = 550       // px — radius of the cylinder
const PERSPECTIVE_PX = 1300
const AUTO_ROTATE_DPS = 6    // degrees/sec — slow turntable drift
const DRAG_SENSITIVITY = 0.4 // degrees per pixel of pointer drag

export function PortfolioCarousel({ images }: PortfolioCarouselProps) {
  // Duplicate the image list so the cylinder is fully populated all the
  // way around (no empty "back" arc). With ~19 source photos we tile
  // around 360° — angular step works out to 360/n.
  const ringImages = images
  const n = ringImages.length
  const stepDeg = 360 / n

  const rotationY = useMotionValue(0)
  const transform = useTransform(rotationY, (r) => `rotateY(${r}deg)`)

  // Drag state (mutable refs — don't trigger re-renders)
  const dragRef = useRef({
    active: false,
    lastX: 0,
    lastT: 0,
    velDegPerSec: 0,
    inertia: null as ReturnType<typeof animate> | null,
  })

  // Auto-rotate loop: advances rotation each frame unless the user is
  // actively dragging or an inertia animation is running.
  useAnimationFrame((_, deltaMs) => {
    const d = dragRef.current
    if (d.active || d.inertia) return
    rotationY.set(rotationY.get() + (AUTO_ROTATE_DPS * deltaMs) / 1000)
  })

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Stop any in-flight inertia
    dragRef.current.inertia?.stop()
    dragRef.current.inertia = null
    dragRef.current.active = true
    dragRef.current.lastX = e.clientX
    dragRef.current.lastT = performance.now()
    dragRef.current.velDegPerSec = 0
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const d = dragRef.current
    if (!d.active) return
    const now = performance.now()
    const dx = e.clientX - d.lastX
    const dt = Math.max(now - d.lastT, 1)
    const dDeg = dx * DRAG_SENSITIVITY
    rotationY.set(rotationY.get() + dDeg)
    // Exponential smoothing of velocity (more stable for inertia handoff)
    const instantVel = (dDeg / dt) * 1000
    d.velDegPerSec = d.velDegPerSec * 0.6 + instantVel * 0.4
    d.lastX = e.clientX
    d.lastT = now
  }

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    const d = dragRef.current
    if (!d.active) return
    d.active = false
    try {
      e.currentTarget.releasePointerCapture(e.pointerId)
    } catch {
      /* pointer may already be released */
    }
    const v = d.velDegPerSec
    if (Math.abs(v) > 8) {
      d.inertia = animate(rotationY, rotationY.get() + v * 0.6, {
        type: 'inertia',
        velocity: v,
        power: 0.6,
        timeConstant: 380,
        modifyTarget: (t) => t, // keep raw degrees, no snapping
      })
      d.inertia.then(() => {
        dragRef.current.inertia = null
      })
    }
  }

  return (
    <section
      className="relative overflow-hidden bg-[#F8F8F8]"
      style={{ padding: 'var(--section-pad-top) 0 var(--section-pad-bot)' }}
    >
      {/* Subtle paper-grain texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          background:
            'radial-gradient(1200px 600px at 20% 10%, rgba(212,175,96,0.08), transparent 60%), radial-gradient(900px 500px at 85% 85%, rgba(26,22,18,0.05), transparent 60%)',
        }}
      />

      {/* Centered header */}
      <motion.div
        className="relative flex flex-col items-center text-center"
        style={{
          paddingLeft: 'var(--section-pad-x)',
          paddingRight: 'var(--section-pad-x)',
        }}
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
      >
        <span
          className="inline-flex items-center h-8 md:h-9 px-3 md:px-4 text-[13px] md:text-[14px] font-body font-bold uppercase tracking-[0.12em] rounded-[--radius-sm] mb-6"
          style={{
            background: 'rgba(0,0,0,0.04)',
            color: 'var(--color-near-black)',
          }}
        >
          Our Work
        </span>

        <h2
          className="font-display font-semibold leading-[1.05] text-[--color-near-black] max-w-[980px]"
          style={{
            fontSize: 'clamp(30px, 4.2vw, 60px)',
            letterSpacing: '-0.035em',
          }}
        >
          Roofing Projects Completed Across Cochrane, Calgary &amp; Canmore
        </h2>

        <p
          className="mt-6 md:mt-7 max-w-[640px] text-[--color-near-black]/70 leading-[1.7]"
          style={{
            fontSize: '16px',
            fontFamily: "'Inter', system-ui, sans-serif",
            fontWeight: 400,
          }}
        >
          Every roof in our gallery was completed by our in-house Red Seal Journeyman team. No subcontractors. No compromises.
        </p>

        <div className="flex items-center mt-8 md:mt-10">
          <Button variant="primary" size="md" href="/gallery">
            View Gallery
          </Button>
        </div>
      </motion.div>

      {/* Spinning 3D cylinder of project photos. Auto-rotates slowly;
          drag horizontally to spin manually with inertia. */}
      <div
        className="relative w-full mt-16 md:mt-24 overflow-hidden select-none touch-pan-y"
        style={{
          perspective: `${PERSPECTIVE_PX}px`,
          perspectiveOrigin: '50% 50%',
          cursor: 'grab',
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <motion.div
          className="relative mx-auto"
          style={{
            width: '100%',
            height: 'clamp(320px, 34vw, 460px)',
            transformStyle: 'preserve-3d',
            transform,
          }}
        >
          {ringImages.map((card, i) => {
            const psiDeg = i * stepDeg
            return (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 rounded-[--radius-md]"
                style={{
                  width: 'clamp(140px, 14vw, 175px)',
                  height: 'clamp(240px, 24vw, 310px)',
                  transform: `translate(-50%, -50%) rotateY(${psiDeg.toFixed(3)}deg)`,
                  transformOrigin: `50% 50% -${ARC_RADIUS}px`,
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                  overflow: 'hidden',
                  boxShadow:
                    '0 30px 50px -20px rgba(20,20,20,0.45), 0 12px 22px -14px rgba(20,20,20,0.22)',
                }}
              >
                <img
                  src={card.src}
                  alt={card.alt}
                  className="w-full h-full object-cover pointer-events-none select-none"
                  style={{ objectPosition: card.objectPosition ?? 'center' }}
                  draggable={false}
                />
              </div>
            )
          })}
        </motion.div>

        {/* Side vignettes — fade the cylinder into the section background
            at the viewport edges so the rotating photos don't visually
            collide with the page edge. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-[12vw] max-w-[180px]"
          style={{
            background:
              'linear-gradient(to right, rgba(248,248,248,1) 0%, rgba(248,248,248,0) 100%)',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-[12vw] max-w-[180px]"
          style={{
            background:
              'linear-gradient(to left, rgba(248,248,248,1) 0%, rgba(248,248,248,0) 100%)',
          }}
        />
      </div>
    </section>
  )
}
