"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {
  ChevronRight,
  CircleArrowRight,
  CircleChevronLeft,
  CircleChevronRight,
} from "lucide-react";

import "swiper/css";

import HomePage from "../../pages/home";

export default function SwiperComp() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative">
      {/* Custom Navigation */}
      <button ref={prevRef} className="absolute right-68 bottom-10 z-50 ">
        <CircleChevronLeft
          strokeWidth={1.2}
          size={48}
          className="text-white cursor-pointer font-light"
        />
      </button>

      <button ref={nextRef} className="absolute  right-50 bottom-10 z-50 ">
        <CircleChevronRight
          strokeWidth={1.2}
          size={48}
          className="text-white cursor-pointer font-light"
        />
      </button>

      <Swiper
        speed={1000}
        modules={[Navigation]}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          (swiper.params.navigation as any).prevEl = prevRef.current;
          (swiper.params.navigation as any).nextEl = nextRef.current;
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <HomePage isActive={activeIndex === 0} />
        </SwiperSlide>

        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </div>
  );
}
