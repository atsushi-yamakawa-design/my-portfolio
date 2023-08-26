import Head from 'next/head';

type HeaderMetaProps = {
  pageTitle?: string;
  pageDescription?: string;
  pageImage?: string;
  pageUrl?: string;
};

const HeaderMeta = ({
  pageTitle = 'Atsushi Yamakawa',
  pageDescription = 'official website of Atsushi Yamakawa',
  pageImage = '/images/og-images/default-image.jpg',
  pageUrl = 'https://atsushi-yamakawa.com',
}: HeaderMetaProps) => {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />

      {/* OGP */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="website" />
    </Head>
  );
};

export default HeaderMeta;
