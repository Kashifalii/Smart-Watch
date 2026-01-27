"use client";

import { RefObject } from "react";
import {
  Home,
  User,
  Package,
  MessageSquare,
  Phone,
  ShoppingCart,
} from "lucide-react";
import type { Swiper as SwiperType } from "swiper";

interface NavbarProps {
  swiperRef: RefObject<SwiperType | null>;
  activeIndex: number;
  price?: string;
}

interface NavItem {
  label: string;
  icon: React.ElementType;
  slideIndex: number;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", icon: Home, slideIndex: 0 },
  { label: "About", icon: User, slideIndex: 1 },
  { label: "Product", icon: Package, slideIndex: 2 },
  { label: "Testimonials", icon: MessageSquare, slideIndex: 3 },
  { label: "Contact", icon: Phone, slideIndex: 4 },
];

export default function Navbar({
  swiperRef,
  activeIndex,
  price = "$199",
}: NavbarProps) {
  const handleNavigation = (index: number) => {
    swiperRef.current?.slideTo(index);
  };

  return (
    <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-2 rounded-full bg-black px-4 py-2 backdrop-blur-md shadow-center shadow-red ">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeIndex === item.slideIndex;

          return (
            <button
              key={item.label}
              onClick={() => handleNavigation(item.slideIndex)}
              className={`group flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ease-out
                ${
                  isActive
                    ? "bg-red text-black"
                    : "text-white hover:bg-white/10"
                }
              `}
            >
              <Icon
                size={18}
                className={`transition-colors duration-300 ${
                  isActive ? "text-black" : "text-white"
                }`}
              />
              <span
                className={`whitespace-nowrap transition-opacity duration-300 ${
                  isActive
                    ? "opacity-100"
                    : "opacity-80 group-hover:opacity-100"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}

        {/* Divider */}
        <span className="mx-2 h-6 w-px bg-white/20" />

        {/* Cart */}
        <button className="group flex items-center gap-2 rounded-full px-4 py-2 transition-all duration-300 hover:bg-white/10">
          <ShoppingCart
            size={18}
            className="text-white transition-colors duration-300 group-hover:text-red"
          />
          <span className="text-sm font-semibold text-white transition-colors duration-300 group-hover:text-red">
            {price}
          </span>
        </button>
      </div>
    </nav>
  );
}
