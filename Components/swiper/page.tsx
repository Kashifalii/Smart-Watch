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
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

export default function SwiperComp() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className="relative">
      {/* Custom Navigation */}{" "}
      <button ref={prevRef} className="absolute right-68 bottom-10 z-50 ">
        {" "}
        <CircleChevronLeft
          strokeWidth={1.2}
          size={48}
          className="text-white cursor-pointer font-light"
        />{" "}
      </button>{" "}
      <button ref={nextRef} className="absolute right-50 bottom-10 z-50 ">
        {" "}
        <CircleChevronRight
          strokeWidth={1.2}
          size={48}
          className="text-white cursor-pointer font-light"
        />{" "}
      </button>
      <Swiper
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1400}
        allowTouchMove={false}
        modules={[Navigation, EffectFade]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onBeforeInit={(swiper) => {
          (swiper.params.navigation as any).prevEl = prevRef.current;
          (swiper.params.navigation as any).nextEl = nextRef.current;
        }}
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
