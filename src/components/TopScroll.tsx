import React from 'react';
import Image from 'next/image';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';
import styles from './TopScroll.module.scss';
import 'swiper/swiper.min.css';
import Link from 'next/link';

SwiperCore.use([Autoplay]);

const images = [
  'https://images.microcms-assets.io/assets/efdfa1b4e1d04c8eb6446e4cc08e316b/a9621f398c254d9da29c58274973b3ac/a-1-5.jpg',
  'https://images.microcms-assets.io/assets/efdfa1b4e1d04c8eb6446e4cc08e316b/45d75195cc0b47029491492544fb6ede/a-1-h.jpg',
  'https://images.microcms-assets.io/assets/efdfa1b4e1d04c8eb6446e4cc08e316b/a9621f398c254d9da29c58274973b3ac/a-1-5.jpg',
];

const TopScroll = () => {
  return (
    <ul className={styles.slider}>
      {images.map((src: string, index: number) => {
        return (
          <li key={`${index}`} className={styles.slide}>
            <Image
              src={src}
              width={640}
              height={400}
              alt="test_image"
              className={styles.slideImg}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TopScroll;
