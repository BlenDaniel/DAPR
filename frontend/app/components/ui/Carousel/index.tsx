"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Props {
  children: React.ReactNode;
}

const Carousel: React.FC<Props> = ({ children }) => (
  <Swiper
    modules={[Autoplay, Pagination, Navigation]}
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
      dynamicBullets: true,
    }}
    navigation={true}
    speed={800}
    loop={true}
    slidesPerView={1}
    spaceBetween={30}
    breakpoints={{
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }}
  >
    {React.Children.map(children, (child, index) => (
      <SwiperSlide key={index}>{child}</SwiperSlide>
    ))}
  </Swiper>
);

export default Carousel;
