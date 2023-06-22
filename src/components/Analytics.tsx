import Script from 'next/script';
const NEXT_PUBLIC_GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

const Analytics = () => (
  <>
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GTM_ID}`}
    />
    <Script
      id=''
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${NEXT_PUBLIC_GTM_ID}', {
              page_path: window.location.pathname,
            });
          `
      }}
    />
  </>
);

export default Analytics;