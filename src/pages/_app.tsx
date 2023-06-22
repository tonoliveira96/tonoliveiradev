
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { globalStyles } from '../../styles/global';
import Analytics from '../components/Analytics';

const NEXT_PUBLIC_GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

globalStyles();

function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${NEXT_PUBLIC_GTM_ID}')
      `}
      </Script>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default App;
