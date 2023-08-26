import WorkList from '@components/WorkList';
import style from './page.module.scss';
import { client } from '@libs/client';
import type { Works, Settings } from '../types';
import TopScroll from '@components/TopScroll';
import BottomMenu from '@components/BottomMenu';
import HeaderMeta from '@components/HeaderMeta';

export default function Home({
  works,
  settings,
}: {
  works: Works[];
  settings: Settings;
}) {
  return (
    <>
      <HeaderMeta />
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
