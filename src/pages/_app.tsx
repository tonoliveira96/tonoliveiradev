
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { globalStyles } from '../../styles/global';
import Analytics from '../components/Analytics';
import * as gtag from "../lib/gtag";

globalStyles();

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default App;
