import Image from 'next/image';
import Link from 'next/link';
import WorkList from '@components/WorkList';
import style from './page.module.scss';
import { client } from '@libs/client';
import type { Works, Settings } from '../types';
import TopSlider from '@components/TopSlider';
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
        {/* <ul>
          {settings.topSlider.map((slide) => (
            <li key={slide.fieldId} className={style.slideImg}>
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
        </ul> */}
        {/* <Slider items={items} /> */}
        {/* <p className="text-pale">薄いテキスト</p> */}
        <WorkList list={works}></WorkList>
        <BottomMenu showTop={false} />
        <TopSlider />
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
