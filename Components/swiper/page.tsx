"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import HomePage from "../../pages/home";

export default function SwiperComp() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      navigation
      modules={[Navigation]}
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      className="mySwiper"
    >
      <SwiperSlide>
        <HomePage isActive={activeIndex === 0} />
      </SwiperSlide>

      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
    </Swiper>
  );
}
