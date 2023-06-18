import Image from 'next/image';
import Link from 'next/link';
import WorkList from '@components/WorkList';
import styles from './page.module.scss';
import { client } from '@libs/client';
import type { Works, Settings } from '../types';

export default function Home({
  works,
  settings,
}: {
  works: Works[];
  settings: Settings;
}) {
  return (
    <>
      <main className={styles.main}>
        <ul>
          {settings.topSlider.map((slide) => (
            <li key={slide.fieldId} className={styles.slideImg}>
              <Link href={slide.slideLink} rel="">
                <Image
                  src={slide.slideImg.url + '?w=1000'}
                  alt={slide.title}
                  width={1000}
                  height={700}
                />
              </Link>
            </li>
          ))}
        </ul>
        <WorkList list={works}></WorkList>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const works = await client.get({ endpoint: 'works' });
  const settings = await client.get({ endpoint: 'settings' });
  return {
    props: {
      works: works.contents,
      settings: settings,
    },
  };
};
