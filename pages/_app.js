import Head from 'next/head';
import { StoreProvider } from '../utils/Store';

import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Clothing</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/workflow.svg" />
      </Head>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </>
  );
}

export default MyApp;
