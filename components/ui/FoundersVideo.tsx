'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'

const DEFAULT_VIMEO_ID = '917315486'
const DEFAULT_THUMBNAIL = '/images/Team/Sure West Roofing Thumnnail.png'

interface FoundersVideoProps {
  alt?: string
  title?: string
  /** Applied to the outer aspect wrapper so callers can control height/rounding. */
  className?: string
  /** Override the Vimeo video ID. Defaults to the original founders video. */
  vimeoId?: string
  /** Override the thumbnail image path. */
  thumbnail?: string
}

export function FoundersVideo({
  alt = 'Sure West Roofing founders, Cochrane Alberta',
  title = 'Sure West Roofing - Cochrane, Alberta',
  className = 'relative aspect-video w-full overflow-hidden rounded-[--radius-lg] bg-black',
  vimeoId = DEFAULT_VIMEO_ID,
  thumbnail = DEFAULT_THUMBNAIL,
}: FoundersVideoProps) {
  const [playing, setPlaying] = useState(false)

  return (
    <div
      className={`${className} shadow-[0_0_0_5px_rgba(196,154,44,1),0_40px_90px_-30px_rgba(26,22,18,0.55),0_18px_40px_-18px_rgba(26,22,18,0.3)]`}
    >
      {playing ? (
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
          className="absolute inset-0 w-full h-full border-0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={title}
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label="Play Sure West Roofing founders video"
          className="group absolute inset-0 w-full h-full cursor-pointer"
        >
          <Image
            src={thumbnail}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 100vw, 720px"
            quality={95}
            priority
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            draggable={false}
          />

          <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
            <span
              className="absolute w-[108px] h-[108px] rounded-full transition-all duration-500 group-hover:w-[128px] group-hover:h-[128px]"
              style={{
                background:
                  'radial-gradient(closest-side, rgba(212,175,96,0.50), rgba(212,175,96,0.14) 60%, transparent 75%)',
              }}
            />
            <span
              className="relative flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
              style={{
                width: '80px',
                height: '80px',
                background: 'var(--color-accent, #D4AF60)',
                boxShadow:
                  '0 0 0 4px rgba(212,175,96,0.18), 0 18px 40px -12px rgba(212,175,96,0.75), 0 8px 20px -8px rgba(0,0,0,0.3)',
              }}
            >
              <Play className="w-7 h-7 text-white fill-white ml-1" strokeWidth={1.5} />
            </span>
          </span>
        </button>
      )}

    </div>
  )
}
