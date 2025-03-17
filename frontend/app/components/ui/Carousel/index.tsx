"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

interface Props {
  children: React.ReactNode;
}

const Carousel: React.FC<Props> = ({ children }) => (
  <Swiper
    modules={[Autoplay, Pagination]}
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    pagination={{ clickable: true }}
    speed={500}
    loop={true}
    slidesPerView={1}
  >
    {React.Children.map(children, (child, index) => (
      <SwiperSlide key={index}>{child}</SwiperSlide>
    ))}
  </Swiper>
);

export default Carousel;
