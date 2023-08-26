import Image from 'next/image';
import Link from 'next/link';
import { client } from '@libs/client';
import type { Works } from '../../types';
import { GetStaticPropsContext } from 'next';
import style from './workpage.module.scss';
import BottomMenu from '@components/BottomMenu';
import YouTubePlayer from '@components/YouTubePlayer';
import HeaderMeta from '@components/HeaderMeta';

export default function WorkPage({ work }: { work: Works }) {
  return (
    <>
      <HeaderMeta pageTitle={work.title} pageImage={work.header.url} />
      <main>
        <div className={style.wrapper}>
          <div className={style.headerImg}>
            <Image
              src={work.header.url}
              layout="responsive"
              width={640}
              height={400}
              alt="test_image"
            />
          </div>
          <div className={style.textWrapper}>
            <p className={style.workTitle}>{work.title}</p>
            <p className={style.workYear}>{work.year}</p>
            <div className={style.DscrBlock}>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${work.content}`,
                }}
                className={style.dscr}
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: `${work.contentEn}`,
                }}
                className={` ${style.dscr} ${style.dscrEn}`}
              />
            </div>
            {work.credit ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: `${work.credit}`,
                }}
                className={`textPale ${style.credit}`}
              />
            ) : null}
          </div>
          <div className={style.workImgs}>
            {work.movie ? (
              <YouTubePlayer videoId={work.movie} thumb={work.movieThumb.url} />
            ) : null}
            <ul className={style.workImgsList}>
              {work.workImgs.map((img, index) => (
                <li
                  key={index}
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
