import Image from 'next/image';
import Link from 'next/link';
import WorkList from '@components/WorkList';
import style from './page.module.scss';
import { client } from '@libs/client';
import type { Works, Settings } from '../types';
import TopSlider from '@components/TopSlider';
import TopScroll from '@components/TopScroll';
import BottomMenu from '@components/BottomMenu';

// const items = [
//   { id: 1, content: 'Slide 1' },
//   { id: 2, content: 'Slide 2' },
//   { id: 3, content: 'Slide 3' },
// ];

export default function Home({
  works,
  settings,
}: {
  works: Works[];
  settings: Settings;
}) {
  return (
    <>
      <main className={style.main}>
        <div className={'loadScreen'}></div>
        <WorkList list={works}></WorkList>
        <BottomMenu showTop={false} />
        <TopScroll settings={settings} />
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
