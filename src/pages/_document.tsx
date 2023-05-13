import { Head, Html, Main, NextScript } from 'next/document';
import { getCssText } from '../../styles';

const NEXT_PUBLIC_GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name='description' content='Olá, eu sou Everton Oliveira, desenvolvedor web.' />
        <meta name="keywords" content="desenvolvedor web, desenvolvedor frontend, desenvolver um aplicativo" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Everton Oliveira - Desenvolvedor Web" />
        <meta property="og:description" content="Olá, eu sou Everton Oliveira, desenvolvedor web." />
        <meta property="og:image" content="https://github.com/tonoliveira96.png" />
        <meta property="og:url" content="https://tonoliveiradev.com.br" />

        <link rel="canonical" href="https://tonoliveiradev.com.br" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />

        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </Head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${NEXT_PUBLIC_GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};;;;;