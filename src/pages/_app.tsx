
import { PrismicPreview } from '@prismicio/next';
import { PrismicProvider } from '@prismicio/react';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import { globalStyles } from '../../styles/global';

import { repositoryName } from '../services/prismicio';

globalStyles();

function App({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  );
}

export default App;
