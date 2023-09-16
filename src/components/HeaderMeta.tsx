import Head from 'next/head';

type HeaderMetaProps = {
  pageTitle?: string;
  pageDescription?: string;
  pageImage?: string;
  pageUrl?: string;
  pageType?: string;
};

const HeaderMeta = ({
  pageTitle = 'Atsushi Yamakawa 山川敦史',
  pageDescription = 'official website of Atsushi Yamakawa 山川敦史のサイト',
  pageImage = '/images/og-images/default-image.jpg',
  pageUrl = '',
  pageType = 'website',
}: HeaderMetaProps) => {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />

      {/* OGP */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta
        property="og:url"
        content={'https://atsushi-yamakawa.com' + pageUrl}
      />
      <meta property="og:type" content={pageType} />
    </Head>
  );
};

export default HeaderMeta;
