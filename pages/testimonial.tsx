import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { Quote, Star } from "lucide-react";

type TestimonialCard = {
  name: string;
  feedback: string;
  image: string;
  rating: number;
};

function Testimonial({ isActive }: { isActive: boolean }) {
  const cardData: TestimonialCard[] = [
    {
      image: "/Images/users/2.webp",
      name: "Monica McCarty",
      rating: 5,
      feedback:
        "This smartwatch has completely transformed the way I manage my day. The sleek design and intuitive features make it a must-have accessory!",
    },
    {
      image: "/Images/users/3.webp",
      name: "Roger Marks",
      rating: 4,
      feedback:
        "This smartwatch has completely transformed the way I manage my day. The sleek design and intuitive features make it a must-have accessory!",
    },
    {
      image: "/Images/users/4.webp",
      name: "Louisa Greer",
      rating: 5,
      feedback:
        "This smartwatch has completely transformed the way I manage my day. The sleek design and intuitive features make it a must-have accessory!",
    },
    {
      image: "/Images/users/7.webp",
      name: "Jasper Mathis",
      rating: 3,
      feedback:
        "This smartwatch has completely transformed the way I manage my day. The sleek design and intuitive features make it a must-have accessory!",
    },
    {
      image: "/Images/users/1.webp",
      name: "Daisy Torres",
      rating: 5,
      feedback:
        "This smartwatch has completely transformed the way I manage my day. The sleek design and intuitive features make it a must-have accessory!",
    },
    {
      image: "/Images/users/6.webp",
      name: "Amir Reyes",
      rating: 4,
      feedback:
        "This smartwatch has completely transformed the way I manage my day. The sleek design and intuitive features make it a must-have accessory!",
    },
  ];

  return (
    <section className="overflow-hidden bg-[linear-gradient(145deg,rgba(39,39,39,0.7)_50%,rgba(217,70,96,0.94)_50%)]">
      <div className="container mx-auto px-4">
        {/* content-warpper */}
        <div className="w-full h-screen flex flex-col gap-10 justify-center">
          {/* heading */}
          <motion.div
            initial={{ scale: 0, opacity: 0, x: -500 }}
            animate={
              isActive
                ? { scale: 1, x: 0, opacity: 1 }
                : { scale: 0, x: -500, opacity: 0 }
            }
            transition={{ duration: 1.1 }}
            className="border-l-8 border-white h-auto ps-7 bg-[linear-gradient(90deg,rgba(217,70,96,0.14)_0%,rgba(217,70,96,0)_50%)] py-2"
          >
            <h1 className="text-[58px] text-white font-oswald font-medium leading-tight uppercase">
              Love from Our Community
            </h1>
            <h3 className="text-red text-[30px] text-normal font-oswald uppercase">
              Stories from the amazing people using our product.
            </h3>
          </motion.div>

          {/* testimonial-card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {cardData.map((card, index) => (
              <motion.div
                key={index}
                initial={{ y: 100, opacity: 0 }}
                animate={
                  isActive ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
                }
                transition={{ duration: 0.9, delay: index * 0.15 }}
                className="relative bg-white rounded-2xl p-8 shadow-main "
              >
                {/* Quote Icon */}
                <Quote
                  strokeWidth={1.25}
                  fill=""
                  className="absolute -top-2.5 right-6 text-white text-6xl size-10 transform rotate-180"
                />

                {/* User */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-red/50 shadow-sm">
                    <Image
                      src={card.image}
                      alt={card.name}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-oswald text-xl font-semibold uppercase">
                      {card.name}
                    </h4>

                    {/* Rating */}
                    <div className="flex gap-1 mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={
                            i < card.rating
                              ? "fill-red text-red"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Feedback */}
                <p className="text-gray-600 font-sans leading-tight italic">
                  {card.feedback}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
