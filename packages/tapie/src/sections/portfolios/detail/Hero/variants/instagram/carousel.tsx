'use client';

import { carousel, carouselItem } from './styles.css';

import { Box, Image } from '@tapie-kr/inspire-react';

import { useState } from 'react';
import { type Swiper as SwiperType } from 'swiper';
import { Controller } from 'swiper/modules';
import { Swiper, type SwiperProps, SwiperSlide } from 'swiper/react';

interface Props {
  images: string[];
}

export default function InstagramCarousel(_props: Props) {
  const { images } = _props;
  const [controlledSwiper, setControlledSwiper] = useState<SwiperType | null>(null);

  const swiperProps: SwiperProps = {
    allowTouchMove: true,
    slidesPerView:  'auto',
    centeredSlides: true,
    modules:        [Controller],
    controller:     { control: controlledSwiper },
    onSwiper:       swiper => {
      setControlledSwiper(swiper);
    },
  };

  return (
    <Box className={carousel}>
      <Swiper {...swiperProps}>
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              fullWidth
              fullHeight
              className={carouselItem}
              src={src}
              alt='placeholder'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
