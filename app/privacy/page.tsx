import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Sure West Roofing',
  description:
    'How Sure West Roofing collects, uses, and protects your personal information under PIPEDA, Alberta PIPA, and CASL.',
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
  { id: 'who-we-are', title: '1. Who We Are' },
  { id: 'information-we-collect', title: '2. Information We Collect' },
  { id: 'how-we-use', title: '3. How We Use Your Information' },
  { id: 'sms', title: '4. SMS / Text Message Communications' },
  { id: 'legal-basis', title: '5. Legal Basis for Collection' },
  { id: 'cookies', title: '6. Cookies and Tracking Technologies' },
  { id: 'sharing', title: '7. How We Share Your Information' },
  { id: 'storage', title: '8. Data Storage and International Transfers' },
  { id: 'retention', title: '9. Data Retention' },
  { id: 'security', title: '10. Data Security' },
  { id: 'rights', title: '11. Your Rights Under Canadian Privacy Law' },
  { id: 'children', title: '12. Children\u2019s Privacy' },
  { id: 'third-party', title: '13. Third-Party Websites' },
  { id: 'changes', title: '14. Changes to This Privacy Policy' },
  { id: 'contact', title: '15. Contact Us / Complaints' },
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
              Privacy Policy
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
          Privacy Policy
        </h1>

        <p
          className="mt-5 text-brand-slate leading-[1.65] max-w-[600px]"
          style={{
            fontSize: '16px',
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
            fontWeight: 400,
          }}
        >
          How Sure West Roofing Ltd. collects, uses, and protects your personal information.
          Written to comply with Canada&apos;s PIPEDA, Alberta&apos;s PIPA, and CASL.
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
          className="prose-legal text-brand-navy"
          style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif', fontSize: '16px', lineHeight: 1.75 }}
        >
          <p className="mb-8 text-brand-slate">
            Sure West Roofing Ltd. (&ldquo;Sure West,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to
            protecting the privacy of visitors to our website and customers of our services. This
            Privacy Policy explains what information we collect, how we use it, and the choices you
            have regarding your information.
          </p>
          <p className="mb-10 text-brand-slate">
            This Privacy Policy is written to comply with Canada&apos;s Personal Information
            Protection and Electronic Documents Act (PIPEDA), Alberta&apos;s Personal Information
            Protection Act (PIPA), and Canada&apos;s Anti-Spam Legislation (CASL).
          </p>

          <H2 id="who-we-are">1. Who We Are</H2>
          <P>
            Sure West Roofing Ltd. is a roofing contractor based in Cochrane, Alberta, serving
            Cochrane, Calgary, Canmore, and surrounding communities.
          </P>
          <P>Contact information:</P>
          <address className="not-italic mb-6 text-brand-slate">
            Sure West Roofing Ltd.<br />
            Unit 9, 225 Railway St E<br />
            Cochrane, Alberta T4C 2C3<br />
            Phone: <a href="tel:+14039907210" className="text-brand-navy hover:text-brand-gold underline underline-offset-2">(403) 990-7210</a><br />
            Email: <a href="mailto:mike@surewestroofing.ca" className="text-brand-navy hover:text-brand-gold underline underline-offset-2">mike@surewestroofing.ca</a>
          </address>

          <H2 id="information-we-collect">2. Information We Collect</H2>
          <P>We collect the following categories of personal information:</P>

          <H3>2.1 Information You Provide Directly</H3>
          <P>
            When you request a free estimate, contact us, submit a form on our website, or
            communicate with us by phone, text, or email, you may provide:
          </P>
          <UL>
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Home or property address</li>
            <li>Details about your roofing project or service request</li>
            <li>Photos or documents you choose to share</li>
            <li>Insurance claim information (if applicable)</li>
            <li>Any other information you voluntarily submit in form fields, messages, or uploads</li>
          </UL>

          <H3>2.2 Information Collected Automatically</H3>
          <P>
            When you visit our website, we automatically collect certain technical information
            through cookies and similar technologies:
          </P>
          <UL>
            <li>IP address and approximate location</li>
            <li>Browser type and version</li>
            <li>Device type and operating system</li>
            <li>Pages viewed, time spent, and navigation paths</li>
            <li>Referring URL or search terms</li>
            <li>Interactions with forms and buttons</li>
          </UL>

          <H3>2.3 Information from Third Parties</H3>
          <P>We may receive information about you from:</P>
          <UL>
            <li>Google (when you find us through search or Google Ads)</li>
            <li>Meta / Facebook (when you interact with our Facebook or Instagram ads)</li>
            <li>
              Insurance adjusters or contractors (when you authorize them to share information with
              us for a claim)
            </li>
          </UL>

          <H2 id="how-we-use">3. How We Use Your Information</H2>
          <P>We use the personal information we collect for the following purposes:</P>
          <UL>
            <li>To respond to your enquiries and provide free roof estimates</li>
            <li>To schedule inspections, quotes, and roofing work</li>
            <li>To communicate with you about your project, including by phone, email, and SMS text message</li>
            <li>To send appointment reminders, quote confirmations, and service updates</li>
            <li>To process insurance claim documentation on your behalf (when authorized)</li>
            <li>To invoice you and process payments</li>
            <li>To send marketing communications with your consent (newsletters, seasonal reminders, promotions)</li>
            <li>To improve our website, services, and customer experience</li>
            <li>To comply with legal and regulatory obligations</li>
            <li>To protect the security of our website and prevent fraud</li>
          </UL>

          <H2 id="sms">4. SMS / Text Message Communications</H2>
          <P>
            When you submit a form on our website or provide us with your phone number, you may
            receive SMS text messages from Sure West Roofing. These messages may include:
          </P>
          <UL>
            <li>Responses to your enquiry</li>
            <li>Appointment confirmations and reminders</li>
            <li>Estimate and quote updates</li>
            <li>Follow-up communications regarding your roofing project</li>
          </UL>
          <P>
            By submitting your phone number through our website forms, you expressly consent to
            receive SMS messages from Sure West Roofing related to your enquiry.
          </P>
          <P>
            You may opt out of SMS communications at any time by replying STOP to any message you
            receive. Once you reply STOP, you will not receive further SMS messages from us unless
            you opt back in.
          </P>
          <P>
            Standard message and data rates may apply depending on your mobile carrier plan. Message
            frequency varies. Sure West Roofing is not responsible for any charges your carrier may
            apply.
          </P>
          <P>
            For help, reply HELP to any message or contact us at{' '}
            <a href="tel:+14039907210" className="text-brand-navy hover:text-brand-gold underline underline-offset-2">
              (403) 990-7210
            </a>.
          </P>

          <H2 id="legal-basis">5. Legal Basis for Collection (PIPEDA / PIPA Consent)</H2>
          <P>
            Under Canadian privacy law, we collect and use personal information based on your
            consent. By submitting a form, providing your contact information, or engaging our
            services, you consent to the collection, use, and disclosure of your personal
            information as described in this Privacy Policy.
          </P>
          <P>
            You may withdraw consent at any time, subject to legal or contractual restrictions and
            reasonable notice, by contacting us at{' '}
            <a href="mailto:mike@surewestroofing.ca" className="text-brand-navy hover:text-brand-gold underline underline-offset-2">
              mike@surewestroofing.ca
            </a>
            . Withdrawing consent may affect our ability to provide certain services to you.
          </P>

          <H2 id="cookies">6. Cookies and Tracking Technologies</H2>
          <P>
            Our website uses cookies and similar technologies to improve functionality, analyze
            traffic, and deliver relevant marketing. Specifically, we use:
          </P>

          <H3>6.1 Google Analytics 4</H3>
          <P>
            We use Google Analytics 4 to understand how visitors interact with our website. Google
            Analytics collects anonymized data including pages visited, time on site, device type,
            and approximate location. IP addresses are anonymized where supported.
          </P>
          <P>
            Learn more:{' '}
            <ExtLink href="https://policies.google.com/privacy">policies.google.com/privacy</ExtLink>
            <br />
            Opt out:{' '}
            <ExtLink href="https://tools.google.com/dlpage/gaoptout">tools.google.com/dlpage/gaoptout</ExtLink>
          </P>

          <H3>6.2 Google Ads and Conversion Tracking</H3>
          <P>
            We use Google Ads to advertise our services and track which ads lead to website
            conversions (such as form submissions). This helps us measure ad performance and
            optimize campaigns.
          </P>
          <P>
            Learn more:{' '}
            <ExtLink href="https://policies.google.com/privacy">policies.google.com/privacy</ExtLink>
            <br />
            Opt out:{' '}
            <ExtLink href="https://adssettings.google.com">adssettings.google.com</ExtLink>
          </P>

          <H3>6.3 Google Search Console</H3>
          <P>
            We use Google Search Console to monitor how our website performs in Google search
            results. This tool does not collect personal information about individual visitors.
          </P>

          <H3>6.4 Meta / Facebook Pixel</H3>
          <P>
            We use the Meta Pixel (Facebook Pixel) to measure the effectiveness of our advertising
            on Facebook and Instagram. The Pixel may collect information such as pages visited,
            actions taken, and device information, and may match this data to your Facebook or
            Instagram account if you are logged in.
          </P>
          <P>
            Learn more:{' '}
            <ExtLink href="https://www.facebook.com/privacy/policy">facebook.com/privacy/policy</ExtLink>
            <br />
            Opt out:{' '}
            <ExtLink href="https://www.facebook.com/ads/preferences">facebook.com/ads/preferences</ExtLink>
          </P>

          <H3>6.5 Managing Cookies</H3>
          <P>
            Most browsers allow you to refuse or delete cookies through browser settings. Please
            note that disabling cookies may affect the functionality of our website.
          </P>
          <P>
            You will see a cookie consent banner the first time you visit our website. You may
            accept or decline non-essential cookies through that banner. Essential cookies required
            for the website to function cannot be disabled.
          </P>

          <H2 id="sharing">7. How We Share Your Information</H2>
          <P>
            We do not sell, rent, or trade your personal information. We may share your information
            in the following limited circumstances:
          </P>

          <H3>7.1 Service Providers</H3>
          <P>
            We use trusted third-party service providers to operate our business. These providers
            only access the information they need to perform their services and are contractually
            required to protect your data. Service providers we use include:
          </P>
          <UL>
            <li>Website hosting (Vercel)</li>
            <li>Email services</li>
            <li>Customer relationship management (CRM) software</li>
            <li>SMS messaging platforms</li>
            <li>Analytics and advertising platforms (Google, Meta)</li>
            <li>Payment processing platforms (if applicable)</li>
          </UL>

          <H3>7.2 Insurance and Roofing Partners</H3>
          <P>
            If your roofing project involves an insurance claim, we may share relevant information
            with your insurance adjuster or their representatives with your authorization.
          </P>

          <H3>7.3 Legal Requirements</H3>
          <P>
            We may disclose your information if required by law, court order, or government
            authority, or if we reasonably believe disclosure is necessary to protect our rights,
            property, or safety, or the rights, property, or safety of others.
          </P>

          <H3>7.4 Business Transfers</H3>
          <P>
            If Sure West Roofing is involved in a merger, acquisition, or sale of assets, your
            information may be transferred as part of that transaction. We will notify you of any
            such change through our website.
          </P>

          <H2 id="storage">8. Data Storage and International Transfers</H2>
          <P>
            Your personal information is stored on servers that may be located in Canada or the
            United States. Our service providers (including Vercel, Google, and Meta) may store or
            process data outside of Canada. When personal information is transferred outside of
            Canada, it may be subject to the laws of the country where it is stored, including
            lawful access requests by foreign government authorities.
          </P>
          <P>
            We take reasonable steps to ensure that any service provider handling your information
            maintains comparable levels of protection.
          </P>

          <H2 id="retention">9. Data Retention</H2>
          <P>
            We retain your personal information only as long as necessary to fulfil the purposes for
            which it was collected, including to:
          </P>
          <UL>
            <li>Respond to your enquiries and provide services</li>
            <li>Maintain records for tax, accounting, and legal compliance</li>
            <li>Resolve disputes and enforce agreements</li>
          </UL>
          <P>Typical retention periods:</P>
          <UL>
            <li>Enquiry and form submissions: 3 years from last contact</li>
            <li>
              Customer project files: 7 years from project completion (aligns with Canada Revenue
              Agency record-keeping requirements)
            </li>
            <li>Marketing contact data: until consent is withdrawn</li>
            <li>SMS opt-out records: maintained indefinitely to honour your opt-out preference</li>
          </UL>

          <H2 id="security">10. Data Security</H2>
          <P>
            We use reasonable administrative, technical, and physical safeguards to protect your
            personal information against unauthorized access, loss, misuse, or disclosure. These
            include:
          </P>
          <UL>
            <li>SSL/TLS encryption on all website traffic</li>
            <li>Restricted access to personal information on a need-to-know basis</li>
            <li>Secure third-party service providers</li>
            <li>Regular security reviews</li>
          </UL>
          <P>
            No method of transmission or storage is 100% secure. While we strive to protect your
            information, we cannot guarantee absolute security.
          </P>

          <H2 id="rights">11. Your Rights Under Canadian Privacy Law</H2>
          <P>Under PIPEDA and Alberta&apos;s PIPA, you have the right to:</P>
          <UL>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>
              Withdraw your consent to our collection, use, or disclosure of your information
              (subject to legal or contractual limitations)
            </li>
            <li>Request information about how your data has been used and shared</li>
            <li>
              File a complaint with the Office of the Privacy Commissioner of Canada or the Office
              of the Information and Privacy Commissioner of Alberta
            </li>
          </UL>
          <P>
            To exercise any of these rights, contact us at{' '}
            <a href="mailto:mike@surewestroofing.ca" className="text-brand-navy hover:text-brand-gold underline underline-offset-2">
              mike@surewestroofing.ca
            </a>
            . We will respond to verified requests within 30 days, as required by law.
          </P>

          <H2 id="children">12. Children&apos;s Privacy</H2>
          <P>
            Our services are intended for adults. We do not knowingly collect personal information
            from individuals under 18 years of age. If you believe a minor has provided us with
            personal information, contact us and we will remove it.
          </P>

          <H2 id="third-party">13. Third-Party Websites</H2>
          <P>
            Our website may contain links to third-party websites. We are not responsible for the
            privacy practices or content of those websites. We encourage you to review the privacy
            policies of any third-party sites you visit.
          </P>

          <H2 id="changes">14. Changes to This Privacy Policy</H2>
          <P>
            We may update this Privacy Policy from time to time to reflect changes in our practices
            or legal requirements. We will post the updated policy on our website with a new
            &ldquo;Last Updated&rdquo; date. Significant changes will be communicated through our
            website or by email where appropriate.
          </P>

          <H2 id="contact">15. Contact Us / Complaints</H2>
          <P>
            Questions, requests, or complaints about this Privacy Policy or our handling of your
            personal information should be directed to:
          </P>
          <address className="not-italic mb-6 text-brand-slate">
            Sure West Roofing Ltd.<br />
            Attn: Privacy Officer<br />
            Unit 9, 225 Railway St E<br />
            Cochrane, Alberta T4C 2C3<br />
            Email: <a href="mailto:mike@surewestroofing.ca" className="text-brand-navy hover:text-brand-gold underline underline-offset-2">mike@surewestroofing.ca</a><br />
            Phone: <a href="tel:+14039907210" className="text-brand-navy hover:text-brand-gold underline underline-offset-2">(403) 990-7210</a>
          </address>
          <P>If you are not satisfied with our response, you may contact:</P>
          <div className="mb-6 text-brand-slate">
            <p className="font-semibold text-brand-navy mb-1">Office of the Privacy Commissioner of Canada</p>
            30 Victoria Street, Gatineau, Quebec K1A 1H3<br />
            1-800-282-1376<br />
            <ExtLink href="https://www.priv.gc.ca">priv.gc.ca</ExtLink>
          </div>
          <div className="text-brand-slate">
            <p className="font-semibold text-brand-navy mb-1">
              Office of the Information and Privacy Commissioner of Alberta
            </p>
            410, 9925 - 109 Street NW<br />
            Edmonton, Alberta T5K 2J8<br />
            1-888-878-4044<br />
            <ExtLink href="https://www.oipc.ab.ca">oipc.ab.ca</ExtLink>
          </div>
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

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="font-display font-semibold text-brand-navy mt-8 mb-3"
      style={{ fontSize: '18px', letterSpacing: '-0.005em', lineHeight: 1.3 }}
    >
      {children}
    </h3>
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

function ExtLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-brand-navy hover:text-brand-gold underline underline-offset-2 break-words"
    >
      {children}
    </a>
  )
}

export default function PrivacyPolicy() {
  return (
    <>
      <LegalHero />
      <LegalBody />
    </>
  )
}
