"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

import HomePage from "@/pages/home";
import AboutPage from "@/pages/about";
import ProductPage from "@/pages/product";
import Testimonial from "@/pages/testimonial";
import ContactPage from "@/pages/contact";
import Navbar from "../navbar";

export default function SwiperComp() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="relative">
      <Swiper
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1400}
        allowTouchMove
        modules={[Navigation, EffectFade]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="mySwiper"
      >
        <SwiperSlide>
          <HomePage isActive={activeIndex === 0} />
        </SwiperSlide>

        <SwiperSlide>
          <AboutPage isActive={activeIndex === 1} />
        </SwiperSlide>

        <SwiperSlide>
          <ProductPage isActive={activeIndex === 2} />
        </SwiperSlide>

        <SwiperSlide>
          <Testimonial isActive={activeIndex === 3} />
        </SwiperSlide>

        <SwiperSlide>
          <ContactPage isActive={activeIndex === 4} />
        </SwiperSlide>
      </Swiper>

      {/* Floating Navbar */}
      <Navbar swiperRef={swiperRef} activeIndex={activeIndex} price="$249" />
    </div>
  );
}
