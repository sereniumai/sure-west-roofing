'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

export function FinalCTA() {
  return (
    <section className="relative bg-black py-20 lg:py-28 overflow-hidden">
      {/* Silhouette decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-48 opacity-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 200"
          fill="white"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
        >
          {/* Worker silhouettes */}
          <rect x="100" y="80" width="4" height="120" />
          <rect x="98" y="75" width="8" height="8" rx="4" />
          <rect x="90" y="85" width="24" height="3" />
          <polygon points="96,88 104,88 108,200 92,200" />

          <rect x="250" y="60" width="4" height="140" />
          <rect x="248" y="55" width="8" height="8" rx="4" />
          <polygon points="246,68 254,68 260,200 240,200" />
          <line x1="240" y1="72" x2="260" y2="65" stroke="white" strokeWidth="3" />

          <rect x="1200" y="70" width="4" height="130" />
          <rect x="1198" y="65" width="8" height="8" rx="4" />
          <polygon points="1196,78 1204,78 1210,200 1190,200" />

          <rect x="1340" y="90" width="4" height="110" />
          <rect x="1338" y="85" width="8" height="8" rx="4" />
          <rect x="1330" y="95" width="24" height="3" />
          <polygon points="1336,98 1344,98 1348,200 1332,200" />

          {/* Roof line */}
          <polygon points="400,200 720,80 1040,200" fill="none" stroke="white" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display font-semibold uppercase text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[0.95] text-white">
            You Click, We Climb.{' '}
            <span className="text-[#D4AF60]">Deal?</span>
          </h2>
          <p className="font-body text-white/50 text-lg leading-relaxed mt-6 max-w-2xl mx-auto">
            Book your free roof inspection today. No pressure, no obligation,
            just an honest assessment from a certified Cochrane roofing contractor.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-10"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button variant="secondary" size="lg" href="/contact">
            Get a Free Estimate
          </Button>
          <Button variant="ghost" size="lg" href="/services">
            Explore Our Services
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
