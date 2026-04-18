import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | Sure West Roofing',
  description:
    'Terms governing your use of the Sure West Roofing website and engagement of our roofing services in Cochrane, Calgary, and Canmore.',
  alternates: {
    canonical: 'https://surewestroofing.ca/terms',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const EFFECTIVE_DATE = 'May 1, 2026'
const LAST_UPDATED = 'May 1, 2026'

interface Section {
  id: string
  title: string
}

const SECTIONS: Section[] = [
  { id: 'about', title: '1. About Sure West Roofing' },
  { id: 'use', title: '2. Use of the Website' },
  { id: 'ip', title: '3. Website Content and Intellectual Property' },
  { id: 'accuracy', title: '4. Accuracy of Information' },
  { id: 'calculator', title: '5. Roofing Cost Calculator Disclaimer' },
  { id: 'estimates', title: '6. Free Estimates and Quotes' },
  { id: 'agreements', title: '7. Service Agreements' },
  { id: 'sms', title: '8. SMS Communications' },
  { id: 'liability', title: '9. Limitation of Liability' },
  { id: 'indemnification', title: '10. Indemnification' },
  { id: 'third-party', title: '11. Third-Party Links and Tools' },
  { id: 'governing-law', title: '12. Governing Law and Jurisdiction' },
  { id: 'changes', title: '13. Changes to These Terms' },
  { id: 'contact', title: '14. Contact Us' },
]

function LegalHero() {
  return (
    <section
      className="bg-brand-cream pt-28 md:pt-36 pb-12 md:pb-16"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      <div className="max-w-[920px] mx-auto">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol
            className="flex items-center gap-2"
            style={{
              fontSize: '13px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              color: 'var(--brand-slate, #4D6A87)',
            }}
          >
            <li>
              <Link href="/" className="hover:text-brand-gold transition-colors duration-200">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-brand-border select-none">/</li>
            <li className="text-brand-navy font-medium" aria-current="page">
              Terms of Service
            </li>
          </ol>
        </nav>

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
          Legal
        </span>

        <h1
          className="font-display font-semibold text-brand-navy"
          style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', lineHeight: 1.08, letterSpacing: '-0.03em' }}
        >
          Terms of Service
        </h1>

        <p
          className="mt-5 text-brand-slate leading-[1.65] max-w-[600px]"
          style={{
            fontSize: '16px',
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
            fontWeight: 400,
          }}
        >
          The terms governing your use of the Sure West Roofing website and engagement of our
          roofing services across Cochrane, Calgary, and Canmore.
        </p>

        <p
          className="mt-6 text-brand-slate"
          style={{
            fontSize: '14px',
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
          }}
        >
          <span className="font-semibold text-brand-navy">Effective Date:</span> {EFFECTIVE_DATE}
          <span className="mx-3 text-brand-border">|</span>
          <span className="font-semibold text-brand-navy">Last Updated:</span> {LAST_UPDATED}
        </p>
      </div>
    </section>
  )
}

function LegalBody() {
  return (
    <section
      className="bg-white pb-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      <div className="max-w-[920px] mx-auto grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)] gap-12 lg:gap-16 pt-12 md:pt-16">
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <p
              className="text-xs uppercase tracking-[0.12em] font-semibold text-brand-gold mb-4"
              style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
            >
              Contents
            </p>
            <nav>
              <ol className="space-y-2">
                {SECTIONS.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="block text-sm text-brand-slate hover:text-brand-navy transition-colors leading-snug"
                      style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </aside>

        <article
          className="text-brand-navy"
          style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif', fontSize: '16px', lineHeight: 1.75 }}
        >
          <p className="mb-8 text-brand-slate">
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the Sure West Roofing
            Ltd. website at{' '}
            <a
              href="https://surewestroofing.ca"
              className="text-brand-navy hover:text-brand-gold underline underline-offset-2"
            >
              surewestroofing.ca
            </a>{' '}
            (the &ldquo;Website&rdquo;) and your engagement of any roofing services provided by Sure
            West Roofing Ltd. (&ldquo;Sure West,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
          </p>
          <p className="mb-10 text-brand-slate">
            By using our Website, submitting an enquiry, or engaging our services, you agree to
            these Terms. If you do not agree, please do not use the Website or our services.
          </p>

          <H2 id="about">1. About Sure West Roofing</H2>
          <P>
            Sure West Roofing Ltd. is a roofing contractor registered in Alberta, Canada, with its
            principal place of business at:
          </P>
          <address className="not-italic mb-6 text-brand-slate">
            Unit 9, 225 Railway St E<br />
            Cochrane, Alberta T4C 2C3<br />
            Phone: <a href="tel:+14039907210" className="text-brand-navy hover:text-brand-gold underline underline-offset-2">(403) 990-7210</a><br />
            Email: <a href="mailto:mike@surewestroofing.ca" className="text-brand-navy hover:text-brand-gold underline underline-offset-2">mike@surewestroofing.ca</a>
          </address>

          <H2 id="use">2. Use of the Website</H2>
          <P>
            You agree to use the Website only for lawful purposes and in a way that does not
            infringe on the rights of, restrict, or inhibit anyone else&apos;s use of the Website.
            You agree not to:
          </P>
          <UL>
            <li>Use the Website in any way that violates Canadian law or the laws of your jurisdiction</li>
            <li>Attempt to gain unauthorized access to the Website, our servers, or any linked systems</li>
            <li>Introduce viruses, malware, or harmful code</li>
            <li>Use automated tools (bots, scrapers) without our written permission</li>
            <li>Impersonate any person or misrepresent your identity</li>
            <li>Submit false, misleading, or fraudulent information through our forms</li>
          </UL>

          <H2 id="ip">3. Website Content and Intellectual Property</H2>
          <P>
            All content on this Website, including text, images, graphics, logos, photographs,
            videos, and software, is owned by or licensed to Sure West Roofing Ltd. and is protected
            by Canadian and international copyright and trademark law.
          </P>
          <P>
            You may not reproduce, distribute, modify, or republish any content from this Website
            without our prior written permission, except for personal, non-commercial use.
          </P>
          <P>The Sure West Roofing name and logo are trademarks of Sure West Roofing Ltd.</P>

          <H2 id="accuracy">4. Accuracy of Information</H2>
          <P>
            We make reasonable efforts to ensure the information on our Website is accurate and up
            to date. However:
          </P>
          <UL>
            <li>All pricing, timelines, and service descriptions are illustrative and subject to change</li>
            <li>
              Roofing estimates generated by our online calculator are approximate and do not
              constitute a binding quote
            </li>
            <li>Firm pricing is provided only after an on-site inspection and written quote</li>
            <li>We reserve the right to update, modify, or remove content without notice</li>
          </UL>

          <H2 id="calculator">5. Roofing Cost Calculator Disclaimer</H2>
          <P>If our Website includes a roofing cost calculator or similar estimation tool:</P>
          <UL>
            <li>Estimates are based on user-provided inputs and average industry pricing</li>
            <li>
              Estimates are for informational purposes only and do not constitute a binding quote
              or offer
            </li>
            <li>
              Actual project costs may vary based on roof condition, decking requirements, material
              availability, site access, and other factors
            </li>
            <li>
              A binding quote is provided only after a free in-person inspection by a Sure West
              representative
            </li>
          </UL>
          <P>
            Sure West Roofing is not responsible for decisions made based solely on calculator
            output.
          </P>

          <H2 id="estimates">6. Free Estimates and Quotes</H2>
          <P>
            Our free roof estimates are provided at no cost and without obligation. By requesting an
            estimate, you agree that:
          </P>
          <UL>
            <li>
              Sure West will contact you by phone, email, and/or SMS to schedule and conduct the
              estimate
            </li>
            <li>You will provide accurate property information and reasonable access for on-site inspection</li>
            <li>A written quote will be provided after inspection</li>
            <li>You are under no obligation to accept the quote</li>
            <li>
              A quote is valid for 30 days unless otherwise stated, after which pricing may be
              revised based on current material and labour costs
            </li>
          </UL>

          <H2 id="agreements">7. Service Agreements</H2>
          <P>
            If you engage Sure West for roofing services, the specific terms of your project will be
            governed by a separate written service agreement or work order signed by both parties.
            In the event of any conflict between these Website Terms and your signed service
            agreement, the signed service agreement prevails.
          </P>

          <H2 id="sms">8. SMS Communications</H2>
          <P>
            By providing your phone number through our Website, you consent to receive SMS text
            messages from Sure West Roofing related to your enquiry, including:
          </P>
          <UL>
            <li>Responses to form submissions</li>
            <li>Appointment reminders</li>
            <li>Project updates</li>
            <li>Quote confirmations</li>
          </UL>
          <P>
            You may opt out of SMS messages at any time by replying STOP. Standard message and data
            rates may apply. See our{' '}
            <Link href="/privacy" className="text-brand-navy hover:text-brand-gold underline underline-offset-2">
              Privacy Policy
            </Link>{' '}
            for full details.
          </P>

          <H2 id="liability">9. Limitation of Liability</H2>
          <P>To the maximum extent permitted by Canadian law:</P>
          <P>
            The Website is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis.
            Sure West Roofing makes no warranties, express or implied, regarding the Website or its
            content, including warranties of merchantability, fitness for a particular purpose, or
            non-infringement.
          </P>
          <P>
            Sure West Roofing will not be liable for any indirect, incidental, special,
            consequential, or punitive damages arising from your use of the Website, including but
            not limited to loss of profits, data, or business opportunities.
          </P>
          <P>
            Our total liability arising from or related to your use of the Website is limited to the
            amount you have paid Sure West Roofing in the 12 months preceding the claim, if any.
          </P>
          <P>
            Nothing in these Terms limits or excludes any liability that cannot be limited or
            excluded under applicable Canadian law, including liability for fraud, gross negligence,
            or personal injury.
          </P>

          <H2 id="indemnification">10. Indemnification</H2>
          <P>
            You agree to indemnify and hold harmless Sure West Roofing, its directors, employees,
            and agents from any claims, damages, losses, or expenses (including reasonable legal
            fees) arising from:
          </P>
          <UL>
            <li>Your breach of these Terms</li>
            <li>Your misuse of the Website</li>
            <li>Your violation of any third-party rights</li>
            <li>Any false or misleading information you submit through our Website</li>
          </UL>

          <H2 id="third-party">11. Third-Party Links and Tools</H2>
          <P>
            Our Website may link to third-party sites or include third-party tools (such as Google
            Maps, social media embeds, or advertising services). We are not responsible for the
            content, privacy practices, or performance of third-party sites or tools.
          </P>

          <H2 id="governing-law">12. Governing Law and Jurisdiction</H2>
          <P>
            These Terms are governed by the laws of the Province of Alberta and the federal laws of
            Canada applicable therein. Any dispute arising from or related to these Terms or your
            use of the Website will be resolved exclusively in the courts of the Province of
            Alberta, and you consent to the jurisdiction of those courts.
          </P>

          <H2 id="changes">13. Changes to These Terms</H2>
          <P>
            We may update these Terms from time to time. Changes take effect when posted on the
            Website with a new &ldquo;Last Updated&rdquo; date. Your continued use of the Website
            after changes are posted constitutes acceptance of the updated Terms.
          </P>

          <H2 id="contact">14. Contact Us</H2>
          <P>Questions about these Terms should be directed to:</P>
          <address className="not-italic text-brand-slate">
            Sure West Roofing Ltd.<br />
            Unit 9, 225 Railway St E<br />
            Cochrane, Alberta T4C 2C3<br />
            Email: <a href="mailto:mike@surewestroofing.ca" className="text-brand-navy hover:text-brand-gold underline underline-offset-2">mike@surewestroofing.ca</a><br />
            Phone: <a href="tel:+14039907210" className="text-brand-navy hover:text-brand-gold underline underline-offset-2">(403) 990-7210</a>
          </address>
        </article>
      </div>
    </section>
  )
}

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="font-display font-semibold text-brand-navy scroll-mt-28 mt-12 mb-4"
      style={{ fontSize: 'clamp(22px, 2.5vw, 28px)', letterSpacing: '-0.01em', lineHeight: 1.25 }}
    >
      {children}
    </h2>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mb-5 text-brand-slate">{children}</p>
}

function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="mb-6 ml-5 list-disc space-y-1.5 text-brand-slate marker:text-brand-gold">
      {children}
    </ul>
  )
}

export default function TermsOfService() {
  return (
    <>
      <LegalHero />
      <LegalBody />
    </>
  )
}
