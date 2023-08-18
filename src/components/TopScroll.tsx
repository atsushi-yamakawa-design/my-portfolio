import React from 'react';
import Image from 'next/image';
// import { client } from '@libs/client';
import SwiperCore, { Autoplay, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Settings } from '../types';
import styles from './TopScroll.module.scss';
import 'swiper/swiper.min.css';
import Link from 'next/link';

SwiperCore.use([Autoplay, Mousewheel]);

const TopScroll = ({ settings }: { settings: Settings }) => {
  return (
    <Swiper
      className={styles.slider}
      loop={true}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      speed={700}
      spaceBetween={0}
      slidesPerView={'auto'}
      direction={'vertical'}
      mousewheel={true}
      modules={[Autoplay, Mousewheel]}
    >
      {settings.topSlider.map((item) => {
        return (
          <SwiperSlide key={item.fieldId} className={styles.slide}>
            <Image
              src={item.slideImg.url}
              width={640}
              height={400}
              alt={item.title}
              className={styles.slideImg}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TopScroll;

// export const getStaticProps = async () => {
//   const settings = await client.get({ endpoint: 'settings' });
//   return {
//     props: {
//       settings: settings,
//     },
//   };
// };
