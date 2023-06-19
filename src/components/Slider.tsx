import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import Link from 'next/link';
import slider from './Slider.module.scss';
import type { Works } from '../types';

type SlideItem = {
  id: number;
  content: string;
};

type SliderProps = {
  items: SlideItem[];
};

const Slider = ({ items }: SliderProps) => {
  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <div className={slider.slide}>{item.content}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
