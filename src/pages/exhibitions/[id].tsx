import Image from 'next/image';
import Link from 'next/link';
import { client } from '@libs/client';
import type { Exhibitions } from '../../types';
import { GetStaticPropsContext } from 'next';
import style from './exPage.module.scss';
import BottomMenu from '@components/BottomMenu';

export default function ExPage({ ex }: { ex: Exhibitions }) {
  return (
    <>
      <main>
        <div className={style.wrapper}>
          <div className={style.textWrapper}>
            <span className={style.exTitle}>{ex.title}</span>
            <p className={style.exYear}>{ex.period}</p>
            <div className={style.exDscrBlock}>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${ex.content}`,
                }}
                className={style.dscr}
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: `${ex.contentEn}`,
                }}
                className={` ${style.dscr} ${style.dscrEn}`}
              />
            </div>
          </div>
          <div className={style.exImgs}>
            <ul className={style.exImgsList}>
              {ex.exImgs.map((img) => (
                <li
                  key={img.fieldId}
                  className={style[img.width == 'Full' ? 'fullImg' : 'halfImg']}
                >
                  <Image
                    src={img.img.url}
                    layout="responsive"
                    width={640}
                    height={400}
                    alt=""
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <BottomMenu showSNS={false} />
      </main>
    </>
  );
}

export const getStaticPaths = async () => {
  const exhibitions = await client.get({ endpoint: 'exhibitions' });

  const paths = exhibitions.contents.map((ex: { id: string }) => ({
    params: { id: ex.id },
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
  const data = await client.get({ endpoint: 'exhibitions', contentId: id });

  return {
    props: {
      ex: data,
    },
  };
};
