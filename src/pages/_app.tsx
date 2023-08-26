import '@styles/globals.scss';
import '@styles/variables.scss';
import Head from 'next/head';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Atsushi Yamakawa</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
