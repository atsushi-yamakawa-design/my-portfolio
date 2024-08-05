import '@styles/globals.scss';
import '@styles/variables.scss';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-044VXLLS6Z"
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-044VXLLS6Z');
            `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
