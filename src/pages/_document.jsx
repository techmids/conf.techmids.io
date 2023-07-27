import { Head, Html, Main, NextScript } from 'next/document'
import {Meta} from "next/dist/lib/metadata/generate/meta";
import Script from "next/script";

export default function Document() {
  return (
      <Html className="bg-white antialiased" lang="en">
          <Head>
              <Meta name="google-site-verification" content="GdmzzVKmmOb3Y48Uze04WSJZStzlLo28q2RRd_lyZvI" />
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link
                  rel="preconnect"
                  href="https://fonts.gstatic.com"
                  crossOrigin="anonymous"
              />
              <link
                  rel="stylesheet"
                  href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=DM+Sans:wght@400;500;700&display=swap"
              />
              <!-- Google Tag Manager -->
              <Script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5C7RQDHK');</Script>
              <!-- End Google Tag Manager -->
          </Head>
          <body>
          <Main />
          <NextScript />
          </body>
      </Html>
  )
}
