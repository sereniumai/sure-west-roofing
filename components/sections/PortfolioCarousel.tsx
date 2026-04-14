'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/Button'

interface PortfolioImage {
  src: string
  alt: string
}

interface PortfolioCarouselProps {
  heading: string
  images: PortfolioImage[]
}

export function PortfolioCarousel({ heading, images }: PortfolioCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const dragX = useMotionValue(0)
  const springX = useSpring(dragX, { stiffness: 200, damping: 30 })

  // Number of items and arc geometry
  const totalItems = images.length
  const itemWidth = 280
  const gap = 16
  const totalWidth = totalItems * (itemWidth + gap)

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  // Clamp drag range
  const maxDrag = 0
  const minDrag = -(totalWidth - containerWidth + 100)

  return (
    <section className="bg-[#F5F5F5] py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="text-center mb-6"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label text-[#D4AF60] mb-4 inline-flex justify-center">
            Our Portfolio
          </span>
          <h2 className="font-display font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-[0.95] text-[#1A1A1A] mt-4">
            {heading}
          </h2>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-12"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Button variant="primary" size="sm" href="/services">
            View Projects
          </Button>
          <Button variant="primary" size="sm" href="/contact">
            View Gallery
          </Button>
        </motion.div>
      </div>

      {/* Carousel container with 3D arc effect */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden"
        style={{ perspective: '1200px' }}
      >
        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            preserveAspectRatio="none"
            className="absolute bottom-0 w-full h-full"
          >
            <path
              d="M0 120V60C240 0 480 0 720 0C960 0 1200 0 1440 60V120H0Z"
              fill="#F5F5F5"
            />
          </svg>
        </div>

        {/* Draggable track */}
        <motion.div
          className="flex items-end gap-4 px-8 pb-32 pt-4 cursor-grab active:cursor-grabbing"
          style={{ x: springX }}
          drag="x"
          dragConstraints={{ left: minDrag, right: maxDrag }}
          dragElastic={0.1}
          onDrag={(_, info) => {
            dragX.set(dragX.get() + info.delta.x)
          }}
        >
          {images.map((image, i) => {
            // Calculate a slight arc (bend) effect based on position
            const centerIndex = (totalItems - 1) / 2
            const distFromCenter = i - centerIndex
            const normalizedDist = distFromCenter / centerIndex
            const rotation = normalizedDist * 8 // Slight rotation
            const yOffset = Math.abs(normalizedDist) * 40 // Arc height

            return (
              <CarouselCard
                key={`${image.alt}-${i}`}
                image={image}
                rotation={rotation}
                yOffset={yOffset}
                index={i}
              />
            )
          })}
        </motion.div>

        {/* Drag indicator */}
        <motion.div
          className="absolute bottom-40 left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="bg-[#1A1A1A] text-white px-4 py-2 text-xs font-semibold uppercase tracking-wider flex items-center gap-2">
            <span>&#171;</span>
            <span>Drag</span>
            <span>&#187;</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function CarouselCard({
  image,
  rotation,
  yOffset,
  index,
}: {
  image: PortfolioImage
  rotation: number
  yOffset: number
  index: number
}) {
  return (
    <motion.div
      className="flex-shrink-0 w-[240px] md:w-[280px] lg:w-[320px] select-none"
      style={{
        transform: `rotateY(${rotation}deg) translateY(${yOffset}px)`,
        transformOrigin: 'bottom center',
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <div className="relative aspect-[3/4] overflow-hidden shadow-xl">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover pointer-events-none"
          draggable={false}
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
    </motion.div>
  )
}
