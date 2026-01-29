"use client";

import * as React from "react";
import { useState } from "react";
import { Star, ChevronDown, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProductOrderPage() {
  const router = useRouter();

  const [selectedColor, setSelectedColor] = useState<string>("black");
  const [selectedSize, setSelectedSize] = useState<string>("Size");
  const [showSizeDropdown, setShowSizeDropdown] = useState<boolean>(false);
  const [isWaitlisted, setIsWaitlisted] = useState<boolean>(false);

  const colors: Array<{ name: string; bgClass: string; borderClass: string }> =
    [
      { name: "white", bgClass: "bg-white", borderClass: "border-gray-300" },
      { name: "red", bgClass: "bg-red", borderClass: "border-red" },
      { name: "gray", bgClass: "bg-gray-400", borderClass: "border-gray-400" },
      { name: "black", bgClass: "bg-black", borderClass: "border-black" },
      {
        name: "yellow",
        bgClass: "bg-yellow-400",
        borderClass: "border-yellow-400",
      },
    ];

  const sizes: Array<string> = ["Small", "Medium", "Large", "Extra Large"];

  const reviews: Array<{
    name: string;
    rating: number;
    date: string;
    comment: string;
  }> = [
    {
      name: "MONICA MCCARTY",
      rating: 5,
      date: "February 1, 2026",
      comment:
        "I use Random.org to generate a random order for multiple stimuli used in human testing. It's a welcome improvement over the book of random number tables I used in my youth, long ago.",
    },
    {
      name: "MARK ADAMS",
      rating: 4,
      date: "February 1, 2026",
      comment:
        "I use Random.org to generate a random order for multiple stimuli used in human testing. It's a welcome improvement over the book of random number tables I used in my youth, long ago.",
    },
  ];

  const handleOrderNow = (): void => {
    if (selectedSize === "Size") {
      alert("Please select a size before ordering");
      return;
    }
    router.push("/complete-order");
  };

  const handleWaitlist = (): void => {
    setIsWaitlisted(true);
    setTimeout(() => {
      alert("Added to waitlist successfully!");
      setIsWaitlisted(false);
    }, 500);
  };

  const renderStars = (rating: number): React.JSX.Element => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-3 h-3 ${
              star <= rating
                ? "fill-red text-red"
                : "fill-gray-600 text-gray-600"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#2a2a2a] text-white">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column - Product Image */}
          <div className="w-full">
            <div className="bg-linear-to-br from-red-400 via-red to-red-600 rounded-3xl p-8 lg:p-16 aspect-square flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-tr from-red/50 to-transparent"></div>
              <div className="relative z-10 flex items-center justify-center gap-8">
                {/* Main Watch */}
                <div className="relative">
                  <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full bg-black border-8 border-gray-800 flex items-center justify-center relative shadow-2xl">
                    <div className="absolute inset-0 rounded-full border-4 border-red"></div>
                    <div className="w-40 h-40 lg:w-56 lg:h-56 rounded-full bg-linear-to-br from-gray-900 to-black flex items-center justify-center relative">
                      {/* Clock Face */}
                      <div className="absolute top-4 text-white font-bold text-lg">
                        12
                      </div>
                      <div className="absolute bottom-4 text-white font-bold text-lg">
                        6
                      </div>
                      <div className="absolute left-4 text-white font-bold text-lg">
                        9
                      </div>
                      <div className="absolute right-4 text-white font-bold text-lg">
                        3
                      </div>

                      {/* Hour Hand */}
                      <div
                        className="absolute w-1 h-12 bg-white rounded-full origin-bottom transform -rotate-45"
                        style={{ bottom: "50%" }}
                      ></div>
                      {/* Minute Hand */}
                      <div
                        className="absolute w-1 h-16 bg-white rounded-full origin-bottom transform rotate-90"
                        style={{ bottom: "50%" }}
                      ></div>
                      {/* Second Hand */}
                      <div
                        className="absolute w-0.5 h-20 bg-red rounded-full origin-bottom transform rotate-180"
                        style={{ bottom: "50%" }}
                      ></div>

                      {/* Center Dot */}
                      <div className="absolute w-3 h-3 bg-red rounded-full"></div>
                    </div>
                  </div>
                  {/* Watch Strap Top */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-20 h-16 bg-gray-800 rounded-t-3xl"></div>
                  {/* Watch Strap Bottom */}
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-20 h-16 bg-gray-800 rounded-b-3xl"></div>
                </div>

                {/* Small Watch */}
                <div className="relative -ml-4">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-linear-to-br from-gray-700 to-gray-900 border-4 border-gray-600 flex items-center justify-center relative shadow-xl">
                    <div className="absolute inset-2 rounded-full border-2 border-red"></div>
                    <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-black flex items-center justify-center relative">
                      {/* Small Clock Numbers */}
                      <div className="absolute top-2 text-white text-xs font-bold">
                        12
                      </div>
                      <div className="absolute bottom-2 text-white text-xs font-bold">
                        6
                      </div>
                      <div className="absolute left-2 text-white text-xs font-bold">
                        9
                      </div>
                      <div className="absolute right-2 text-white text-xs font-bold">
                        3
                      </div>

                      {/* Small Hands */}
                      <div
                        className="absolute w-0.5 h-6 bg-white rounded-full origin-bottom transform -rotate-45"
                        style={{ bottom: "50%" }}
                      ></div>
                      <div
                        className="absolute w-0.5 h-8 bg-white rounded-full origin-bottom transform rotate-90"
                        style={{ bottom: "50%" }}
                      ></div>
                      <div className="absolute w-2 h-2 bg-red rounded-full"></div>
                    </div>
                    {/* Side Button */}
                    <div className="absolute right-0 top-1/2 transform translate-x-2 -translate-y-1/2 w-4 h-8 bg-gray-600 rounded-r-lg"></div>
                  </div>
                  {/* Small Watch Strap */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gray-700 rounded-b-3xl"></div>
                </div>
              </div>
            </div>

            {/* Reviews Section - Desktop */}
            <div className="hidden lg:block mt-8">
              <h3 className="text-xl font-bold mb-6">Reviews</h3>
              <div className="space-y-6">
                {reviews.map((review, index) => (
                  <div key={index} className="border-b border-gray-700 pb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-sm tracking-wider">
                        {review.name}
                      </h4>
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-gray-400 text-xs mb-2">{review.date}</p>
                    <p className="text-gray-300 text-sm italic leading-relaxed">
                      {review.comment}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className="w-full">
            <div className="mb-4">
              <p className="text-gray-400 text-sm mb-2">
                Product Code: #233455
              </p>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="text-red">SMART WATCH CHRONOX</span>
                <span className="text-white"> — BLACK SILVER</span>
              </h1>
            </div>

            <p className="text-gray-300 mb-8 leading-relaxed">
              <span className="font-bold text-white">ChronoX</span>, we believe
              a watch is more than a timepiece—it's a statement. Each design
              blends precision engineering with refined aesthetics to deliver.
            </p>

            <div className="border-t border-gray-700 pt-6 mb-8">
              <h3 className="text-sm font-bold mb-4">Colors Available</h3>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${color.bgClass} ${
                      selectedColor === color.name
                        ? "ring-2 ring-white ring-offset-2 ring-offset-gray-800 scale-110"
                        : "hover:scale-105"
                    } ${color.name === "white" ? "border-gray-400" : color.borderClass}`}
                    aria-label={`Select ${color.name} color`}
                  />
                ))}
              </div>
            </div>

            <div className="border-t border-gray-700 pt-6 mb-8">
              <h3 className="text-sm font-bold mb-4">Choose Size</h3>
              <div className="flex items-center gap-4">
                <div className="relative flex-1 max-w-xs">
                  <button
                    onClick={() => setShowSizeDropdown(!showSizeDropdown)}
                    className="w-full px-4 py-3 bg-transparent border-2 border-gray-600 rounded-lg flex items-center justify-between hover:border-gray-500 transition-colors"
                  >
                    <span
                      className={
                        selectedSize === "Size" ? "text-gray-400" : "text-white"
                      }
                    >
                      {selectedSize}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${showSizeDropdown ? "rotate-180" : ""}`}
                    />
                  </button>

                  {showSizeDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border-2 border-gray-600 rounded-lg overflow-hidden z-10 shadow-xl">
                      {sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => {
                            setSelectedSize(size);
                            setShowSizeDropdown(false);
                          }}
                          className="w-full px-4 py-3 text-left hover:bg-gray-700 transition-colors border-b border-gray-700 last:border-b-0"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <button className="px-6 py-3 text-sm font-semibold hover:text-red transition-colors whitespace-nowrap">
                  Size Guides
                </button>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-6 mb-8">
              <div className="mb-6">
                <p className="text-red text-3xl font-bold mb-2">
                  $100/Pkr 28,000
                </p>
                <p className="text-gray-500 line-through text-lg">
                  $120/Pkr 35,200
                </p>
              </div>

              <div className="flex gap-4 mb-6">
                <button
                  onClick={handleOrderNow}
                  className="flex-1 bg-red hover:bg-red-500 text-white font-bold py-4 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl"
                >
                  Order Now
                </button>
                <button
                  onClick={handleWaitlist}
                  disabled={isWaitlisted}
                  className="flex-1 bg-white hover:bg-gray-100 text-black font-bold py-4 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl disabled:opacity-50"
                >
                  {isWaitlisted ? "Added!" : "Waitlist"}
                </button>
              </div>
            </div>
          </div>

          {/* Reviews Section - Mobile */}
          <div className="lg:hidden col-span-1">
            <h3 className="text-xl font-bold mb-6">Reviews</h3>
            <div className="space-y-6">
              {reviews.map((review, index) => (
                <div key={index} className="border-b border-gray-700 pb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-sm tracking-wider">
                      {review.name}
                    </h4>
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-gray-400 text-xs mb-2">{review.date}</p>
                  <p className="text-gray-300 text-sm italic leading-relaxed">
                    {review.comment}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Back Button - Mobile */}
      <button className="lg:hidden fixed bottom-8 right-8 w-14 h-14 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center shadow-lg transition-colors">
        <ArrowLeft className="w-6 h-6" />
      </button>
    </div>
  );
}
