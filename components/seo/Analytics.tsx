// TODO: REPLACE PLACEHOLDER IDS BEFORE GOING LIVE.
// Collect real identifiers from the client and paste below:
//   - GA_ID         e.g. "G-XXXXXXXXXX" (Google Analytics 4)
//   - GTM_ID        e.g. "GTM-XXXXXXX"  (Google Tag Manager)
//   - META_PIXEL_ID e.g. "XXXXXXXXXXXXXXX" (Meta / Facebook Pixel)
//   - CLARITY_ID    e.g. "abcdef1234"    (Microsoft Clarity)

import Script from 'next/script'

const GA_ID = 'G-XXXXXXXXXX'
const GTM_ID = 'GTM-XXXXXXX'
const META_PIXEL_ID = 'XXXXXXXXXXXXXXX'
const CLARITY_ID = 'whwj033jd3'

const isPlaceholder = (id: string) => id.includes('XXXXX')

export default function Analytics() {
  if (
    isPlaceholder(GA_ID) &&
    isPlaceholder(GTM_ID) &&
    isPlaceholder(META_PIXEL_ID) &&
    isPlaceholder(CLARITY_ID)
  ) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(
        '[Analytics] All tracking IDs are placeholders. Update components/seo/Analytics.tsx before launch.',
      )
    }
    return null
  }

  return (
    <>
      {!isPlaceholder(GTM_ID) && (
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
      )}

      {!isPlaceholder(GA_ID) && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4" strategy="afterInteractive">
            {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}', { page_path: window.location.pathname, anonymize_ip: true });
            `}
          </Script>
        </>
      )}

      {!isPlaceholder(META_PIXEL_ID) && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');
          `}
        </Script>
      )}

      {!isPlaceholder(CLARITY_ID) && (
        <Script id="ms-clarity" strategy="afterInteractive">
          {`
(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");
          `}
        </Script>
      )}
    </>
  )
}
