import Image from 'next/image';
import style from './about.module.scss';
import { client } from '@libs/client';
import type { Settings } from '../../types';
import BottomMenu from '@components/BottomMenu';

export default function About({ settings }: { settings: Settings }) {
  return (
    <>
      <main className={style.main}>
        <div className={'loadScreen'}></div>
        <div className={style.contentsWrapper}>
          <div className={style.profilePhoto}>
            <Image
              src={settings.profilePhoto.url}
              layout="responsive"
              width={640}
              height={400}
              alt=""
            />
            <p className={`caption ${style.imgCaption}`}>
              photo by Nanami Saito
            </p>
          </div>
          <div className={style.nameWrapper}>
            <p>山川 敦史</p>
            <p>Atsushi Yamakawa</p>
          </div>
          <div className={style.aboutText}>
            <p>{settings.aboutText}</p>
          </div>
          <div className={` ${style.aboutText} ${style.aboutTextEn}`}>
            <p>{settings.aboutTextEn}</p>
          </div>
          <div className={style.careerSection}>
            <h3>Awards</h3>
            <ul>
              {settings.awards.map((item) => (
                <li key={item.fieldId} className={style.careerItem}>
                  <p className={style.year}>{item.year}</p>
                  <p className={style.value}>{item.value}</p>
                </li>
              ))}
            </ul>
            <ul>
              {settings.awards.map((item) => (
                <li key={item.fieldId} className={style.careerItem}>
                  <p className={style.year}>{item.year}</p>
                  <p className={style.value}>{item.valueEn}</p>
                </li>
              ))}
            </ul>
            <h3>Exhibitions</h3>
            <ul>
              {settings.exhibitions.map((item) => (
                <li key={item.fieldId} className={style.careerItem}>
                  <p className={style.year}>{item.year}</p>
                  <p className={style.value}>{item.value}</p>
                </li>
              ))}
            </ul>
            <ul>
              {settings.exhibitions.map((item) => (
                <li key={item.fieldId} className={style.careerItem}>
                  <p className={style.year}>{item.year}</p>
                  <p className={style.value}>{item.valueEn}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <BottomMenu showAbout={false} />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const settings = await client.get({ endpoint: 'settings' });
  return {
    props: {
      settings: settings,
    },
  };
};
