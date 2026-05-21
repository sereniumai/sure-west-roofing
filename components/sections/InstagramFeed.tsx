import { Instagram, Play, ArrowUpRight } from 'lucide-react'

const INSTAGRAM_URL = 'https://www.instagram.com/surewestroofing/'
const BEHOLD_FEED_URL =
  process.env.BEHOLD_FEED_URL ?? 'https://feeds.behold.so/h2GrGAAouAoANvmMcjEP'

interface BeholdSize {
  mediaUrl: string
}
interface BeholdSizes {
  small?: BeholdSize
  medium?: BeholdSize
  large?: BeholdSize
  full?: BeholdSize
}
interface BeholdPost {
  id: string
  permalink: string
  mediaType: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
  mediaUrl: string
  thumbnailUrl?: string
  isReel?: boolean
  sizes?: BeholdSizes
  caption?: string
}
interface BeholdFeed {
  posts: BeholdPost[]
}

async function fetchFeed(): Promise<BeholdPost[] | null> {
  try {
    const res = await fetch(BEHOLD_FEED_URL, {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return null
    const data = (await res.json()) as BeholdFeed
    return data.posts ?? null
  } catch {
    return null
  }
}

const FALLBACK_TILES = [
  '/images/Cochrane Roofing Contractor Gallery 1.webp',
  '/images/Cochrane Roofing Contractor Gallery 5.webp',
  '/images/Cochrane Roofing Contractor Gallery 7.webp',
  '/images/Cochrane Roofing Contractor Gallery 13.webp',
  '/images/Cochrane Roofing Contractor Gallery 16.webp',
  '/images/Cochrane Roofing Contractor Gallery 22.webp',
]

function tileImage(post: BeholdPost): string {
  if (post.thumbnailUrl) return post.thumbnailUrl
  return post.sizes?.medium?.mediaUrl ?? post.mediaUrl
}

function isVideoPost(post: BeholdPost): boolean {
  return post.mediaType === 'VIDEO' || post.isReel === true
}

export async function InstagramFeed() {
  const posts = await fetchFeed()
  const items = posts && posts.length > 0 ? posts.slice(0, 6) : null

  return (
    <div className="pt-12 md:pt-14 pb-10 md:pb-12 border-b border-brand-border">
      {/* Header row */}
      <div className="flex items-end justify-between flex-wrap gap-3 mb-5">
        <div className="flex items-center gap-3">
          <span
            className="inline-flex items-center justify-center w-7 h-7 rounded-[7px]"
            style={{ background: 'rgba(212,175,96,0.12)' }}
          >
            <Instagram className="w-3.5 h-3.5 text-brand-gold" strokeWidth={2} />
          </span>
          <span
            className="text-brand-slate uppercase tracking-[0.1em]"
            style={{
              fontSize: '12px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 500,
            }}
          >
            Follow Us
          </span>
          <span aria-hidden="true" className="text-brand-border">
            ·
          </span>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-navy hover:text-brand-gold transition-colors duration-200"
            style={{
              fontSize: '14px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 600,
            }}
          >
            @surewestroofing
          </a>
        </div>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 text-brand-gold hover:text-[#B8943F] transition-colors duration-200"
          style={{
            fontSize: '13px',
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
            fontWeight: 600,
          }}
        >
          View profile
          <ArrowUpRight
            className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={2}
          />
        </a>
      </div>

      {/* Tile grid */}
      <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-2 sm:grid sm:overflow-visible sm:grid-cols-3 lg:grid-cols-6 sm:gap-3">
        {items
          ? items.map((post, i) => {
              const isVideo = isVideoPost(post)
              return (
                <a
                  key={post.id}
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View Sure West Roofing post ${i + 1} on Instagram`}
                  className="flex-shrink-0 w-[45%] sm:w-auto snap-start group relative block overflow-hidden rounded-[10px] aspect-square"
                  style={{
                    boxShadow:
                      '0 1px 2px rgba(44,71,102,0.04), 0 12px 28px -10px rgba(44,71,102,0.18)',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={tileImage(post)}
                    alt=""
                    loading="lazy"
                    width={400}
                    height={400}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />

                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-[inherit]"
                    style={{ boxShadow: 'inset 0 0 0 1px rgba(212,175,96,0.22)' }}
                  />

                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)',
                    }}
                  />

                  {isVideo && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-2 left-2 inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/95 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110"
                      style={{
                        boxShadow:
                          '0 2px 6px rgba(0,0,0,0.18), 0 0 0 1px rgba(212,175,96,0.30)',
                      }}
                    >
                      <Play
                        className="w-3 h-3 text-brand-navy fill-brand-navy ml-0.5"
                        strokeWidth={1.5}
                      />
                    </span>
                  )}

                  <span
                    aria-hidden="true"
                    className="absolute top-2 right-2 inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      boxShadow:
                        '0 2px 6px rgba(0,0,0,0.18), 0 0 0 1px rgba(212,175,96,0.30)',
                    }}
                  >
                    <Instagram className="w-3.5 h-3.5 text-brand-navy" strokeWidth={1.75} />
                  </span>
                </a>
              )
            })
          : FALLBACK_TILES.map((src, i) => (
              <a
                key={src}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Watch Sure West Roofing reel ${i + 1} on Instagram`}
                className="flex-shrink-0 w-[45%] sm:w-auto snap-start group relative block overflow-hidden rounded-[10px] aspect-square"
                style={{
                  boxShadow:
                    '0 1px 2px rgba(44,71,102,0.04), 0 12px 28px -10px rgba(44,71,102,0.18)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  width={400}
                  height={400}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-[inherit]"
                  style={{ boxShadow: 'inset 0 0 0 1px rgba(212,175,96,0.22)' }}
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)',
                  }}
                />
                <span
                  aria-hidden="true"
                  className="absolute top-2 right-2 inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow:
                      '0 2px 6px rgba(0,0,0,0.18), 0 0 0 1px rgba(212,175,96,0.30)',
                  }}
                >
                  <Instagram className="w-3.5 h-3.5 text-brand-navy" strokeWidth={1.75} />
                </span>
              </a>
            ))}
      </div>
    </div>
  )
}
