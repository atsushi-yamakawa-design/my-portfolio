import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import SwiperCore, { Autoplay, Mousewheel, Parallax } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Settings } from '../types';
import styles from './TopScroll.module.scss';
import 'swiper/swiper.min.css';
import Link from 'next/link';

SwiperCore.use([Autoplay, Mousewheel, Parallax]);

const TopScroll = ({ settings }: { settings: Settings }) => {
  const [swiperDirection, setSwiperDirection] = useState<
    'vertical' | 'horizontal'
  >('vertical'); // デフォルトの方向

  useEffect(() => {
    // ウィンドウの幅に基づいて方向を切り替える
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setSwiperDirection('horizontal'); // スマホサイズ
      } else {
        setSwiperDirection('vertical'); // PCサイズ
      }
    };

    // イベントリスナーを追加
    window.addEventListener('resize', handleResize);
    handleResize(); // 初回描画時にも実行

    // コンポーネントのアンマウント時にイベントリスナーを削除
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const sliderConfig = {
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    speed: 300,
    spaceBetween: 0,
    parallax: true,
    direction: swiperDirection,
    mousewheel: true,
    modules: [Autoplay, Mousewheel, Parallax],
  };

  //次はパララックスから

  return (
    <Swiper className={styles.slider} {...sliderConfig}>
      {settings.topSlider.map((item, index) => {
        return (
          <SwiperSlide key={index} className={styles.slide}>
            <Link href={`/exhibitions`} className={styles.slideLink}>
              <Image
                src={item.slideImg.url}
                width={640}
                height={400}
                alt={item.title}
                className={styles.slideImg}
              />
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TopScroll;
