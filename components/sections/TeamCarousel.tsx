import Image from 'next/image'
import { Reveal } from '@/components/ui/Reveal'

interface TeamMember {
  name: string
  role: string
  photo: string
}

const TEAM: TeamMember[] = [
  { name: 'Craig',   role: 'Owner',          photo: '/images/Team/Craig - Sure West Roofing.jpg' },
  { name: 'Mike',    role: 'Owner',          photo: '/images/Team/Mike - Sure West Roofing.jpg' },
  { name: 'Mark',    role: 'Lead Installer', photo: '/images/Team/Mark - Sure West Roofing.webp' },
  { name: 'Kyle',    role: 'Installer',      photo: '/images/Team/Kyle - Sure West Roofing.webp' },
  { name: 'Jaron',   role: 'Installer',      photo: '/images/Team/Jaron - Sure West Roofing.jpg' },
  { name: 'James D', role: 'Installer',      photo: '/images/Team/James D - Sure West Roofing.jpg' },
  { name: 'James B', role: 'Installer',      photo: '/images/Team/James B - Sure West Roofing.webp' },
  { name: 'Adam',    role: 'Installer',      photo: '/images/Team/Adam - Sure West Roofing.webp' },
  { name: 'Carter',  role: 'Installer',      photo: '/images/Team/Carter - Sure West Roofing.webp' },
  { name: 'Wyatt',   role: 'Installer',      photo: '/images/Team/Wyatt - Sure West Roofing.webp' },
]

export function TeamCarousel() {
  return (
    <section
      id="team"
      className="bg-brand-cream py-20 md:py-28"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      <div className="max-w-[1320px] mx-auto">
        <Reveal>
        <div className="text-center max-w-[680px] mx-auto mb-12 md:mb-16">
          <span
            className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
            style={{
              background: '#F0EEE8',
              fontSize: '12px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 600,
              lineHeight: 1,
            }}
          >
            The Team
          </span>
          <h2
            className="font-display font-medium text-brand-navy"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 48px)',
              lineHeight: 1.15,
              letterSpacing: '-0.005em',
            }}
          >
            Meet the Sure West Crew
          </h2>
          <p
            className="mt-5 text-brand-slate leading-[1.65]"
            style={{
              fontSize: '16px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 400,
            }}
          >
            Every Sure West roof is installed by our in-house crew. No subcontractors, ever.
          </p>
        </div>
        </Reveal>

        <Reveal delay={150}>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5">
          {TEAM.map((member) => (
            <article key={member.name}>
              <div className="group relative bg-white rounded-[14px] border border-[#E5E2D9] overflow-hidden shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:border-brand-gold/60 hover:shadow-[0_28px_50px_-22px_rgba(212,175,96,0.55),0_10px_20px_-10px_rgba(44,71,102,0.20)]">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.photo}
                    alt={`${member.name}, Sure West Roofing crew member in Cochrane, Alberta`}
                    fill
                    sizes="(max-width: 768px) 50vw, 19vw"
                    className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.07]"
                    style={{ objectPosition: 'center 18%' }}
                    loading="lazy"
                  />
                  {/* Gold gradient wash that fades in from bottom on hover */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        'linear-gradient(180deg, transparent 45%, rgba(212,175,96,0.22) 100%)',
                    }}
                  />
                  {/* Diagonal sheen sweep across the photo on hover */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1100ms] ease-out"
                    style={{
                      background:
                        'linear-gradient(115deg, transparent 0%, transparent 38%, rgba(255,255,255,0.22) 50%, transparent 62%, transparent 100%)',
                    }}
                  />
                  {/* Gold corner accent, top-left, animates in */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute top-3 left-3 w-7 h-7 rounded-tl-[6px] opacity-0 -translate-x-2 -translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 ease-out"
                    style={{
                      borderTop: '2px solid rgba(212,175,96,0.85)',
                      borderLeft: '2px solid rgba(212,175,96,0.85)',
                    }}
                  />
                  {/* Gold corner accent, bottom-right */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-3 right-3 w-7 h-7 rounded-br-[6px] opacity-0 translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 ease-out"
                    style={{
                      borderBottom: '2px solid rgba(212,175,96,0.85)',
                      borderRight: '2px solid rgba(212,175,96,0.85)',
                    }}
                  />
                </div>
                <div className="p-4 md:p-5 relative">
                  {/* Gold rule slides in below name on hover */}
                  <h3
                    className="font-display font-semibold text-brand-navy transition-colors duration-500 group-hover:text-brand-gold"
                    style={{ fontSize: '18px', letterSpacing: '-0.01em', lineHeight: 1.2 }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="uppercase tracking-[0.1em] text-brand-gold mt-2"
                    style={{
                      fontSize: '11px',
                      fontFamily: 'var(--font-inter), system-ui, sans-serif',
                      fontWeight: 600,
                    }}
                  >
                    {member.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  )
}
