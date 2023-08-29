import Image from 'next/image';
import Link from 'next/link';
import style from './exhibitions.module.scss';
import { client } from '@libs/client';
import type { Exhibitions } from '../../types';
import BottomMenu from '@components/BottomMenu';
import PageHeading from '@components/PageHeading';
import HeaderMeta from '@components/HeaderMeta';

export default function Ex({ exhibitions }: { exhibitions: Exhibitions[] }) {
  return (
    <>
      <HeaderMeta pageUrl="/exhibitions" pageType="exhibitions" />
      <main className={style.main}>
        <div className={'loadScreen'}></div>
        <PageHeading heading="Exhibitions" />
        <ul className={style.exList}>
          {exhibitions.map((exhibition) => (
            <li key={exhibition.id}>
              <Link
                href={`/exhibitions/${exhibition.id}`}
                className={`${style.exItem} hover-change`}
              >
                <Image
                  src={exhibition.thumb.url + '?fit=clip&w=1000&h=1000'}
                  layout="responsive"
                  width={640}
                  height={400}
                  alt="test_image"
                  className={style.exThumb}
                />
                <div>
                  <p className={style.exTitle}>{exhibition.title}</p>
                  <p className={style.exPreiod}>{exhibition.period}</p>
                  <p className={`${style.exVenue} textPale`}>
                    {exhibition.venue}
                  </p>
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
