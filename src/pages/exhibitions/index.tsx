import Image from 'next/image';
import Link from 'next/link';
import style from './exhibitions.module.scss';
import { client } from '@libs/client';
import type { Exhibitions } from '../../types';
import BottomMenu from '@components/BottomMenu';
import PageHeading from '@components/PageHeading';

export default function Home({ exhibitions }: { exhibitions: Exhibitions[] }) {
  return (
    <>
      <main className={style.main}>
        <PageHeading heading="Exhibitions" />
        <ul className={style.exList}>
          {exhibitions.map((exhibition) => (
            <li key={exhibition.id}>
              <Link
                href={`/exhibitions/${exhibition.id}`}
                className={style.exItem}
              >
                <Image
                  src={exhibition.thumb.url}
                  layout="responsive"
                  width={640}
                  height={400}
                  alt="test_image"
                  className={style.exThumb}
                />
                <div>
                  <p className={style.exTitle}>{exhibition.title}</p>
                  <p className={style.exPreiod}>{exhibition.period}</p>
                  <p className={style.exVenue}>{exhibition.venue}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <BottomMenu showEx={false} showSNS={false} />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const ex = await client.get({ endpoint: 'exhibitions' });
  return {
    props: {
      exhibitions: ex.contents,
    },
  };
};
