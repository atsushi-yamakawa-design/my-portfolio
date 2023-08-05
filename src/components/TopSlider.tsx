import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';
import styles from './TopSlider.module.scss';
import 'swiper/swiper.min.css';
import Link from 'next/link';

SwiperCore.use([Autoplay]);

const images = [
  'https://images.microcms-assets.io/assets/efdfa1b4e1d04c8eb6446e4cc08e316b/a9621f398c254d9da29c58274973b3ac/a-1-5.jpg',
  'https://images.microcms-assets.io/assets/efdfa1b4e1d04c8eb6446e4cc08e316b/45d75195cc0b47029491492544fb6ede/a-1-h.jpg',
  'https://images.microcms-assets.io/assets/efdfa1b4e1d04c8eb6446e4cc08e316b/a9621f398c254d9da29c58274973b3ac/a-1-5.jpg',
  // 'https://placehold.jp/150x150.png',
];

const TopSlider = () => {
  return (
    <Swiper
      direction="vertical"
      slidesPerView={2} //一度に表示するスライドの数
      loop={true}
      autoplay={{
        delay: 3000, // 自動スライドの間隔（ミリ秒）
        disableOnInteraction: false, // ユーザーの操作後も自動スライドを続ける
      }}
      speed={1000}
      // freeMode={{ enabled: true, momentum: false }}
      // on={{
      //   touchEnd: (swiper) => {
      //     if (swiper && swiper.activeIndex != null) {
      //       swiper.slideTo(swiper.activeIndex + 1);
      //     }
      //   },
      // }}
      //クラス付与
      className={styles.slider}
    >
      {images.map((src: string, index: number) => {
        return (
          <SwiperSlide key={`${index}`} className={styles.slide}>
            <Image
              src={src}
              layout="responsive"
              width={640}
              height={400}
              alt="test_image"
              className={styles.slideImg}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TopSlider;
