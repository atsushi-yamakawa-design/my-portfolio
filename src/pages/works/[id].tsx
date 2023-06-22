import Image from 'next/image';
import Link from 'next/link';
import WorkList from '@components/WorkList';
import { client } from '@libs/client';
import type { Works, Settings } from '../../types';
import { GetStaticPropsContext } from 'next';

export default function Home({ work }: { work: Works }) {
  return (
    <>
      <main>
        <p>{work.title}</p>
        <Image
          src={work.thumb?.url}
          layout="responsive"
          width={640}
          height={400}
          alt="test_image"
        />
      </main>
    </>
  );
}

export const getStaticPaths = async () => {
  const works = await client.get({ endpoint: 'works' });

  const paths = works.contents.map((work: { id: string }) => ({
    params: { id: work.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  if (typeof context.params?.id !== 'string') {
    return {
      notFound: true,
    };
  }

  const id = context.params.id;
  const data = await client.get({ endpoint: 'works', contentId: id });

  return {
    props: {
      work: data,
    },
  };
};
