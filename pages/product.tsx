import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import clock from "@/public/Images/c3.png";

function ProductPage({ isActive }: { isActive: boolean }) {
  return (
    <section className="overflow-hidden">
      <div className="relative h-screen bg-linear-to-br from-zinc-900 via-zinc-800 to-black overflow-hidden">
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={
            isActive ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
          }
          transition={{ duration: 1.2 }}
          className="absolute bg-red/20 w-30 h-100 left-0 top-1/2 transform -translate-y-1/2"
        ></motion.span>
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={
            isActive ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
          }
          transition={{ duration: 1.2 }}
          className="absolute bg-red/20 w-30 h-100 right-0 top-1/2 transform -translate-y-1/2"
        ></motion.span>
        <div className="absolute inset-0 backdrop-blur-3xl bg-white/5" />
        <div className="absolute inset-0 bg-noise opacity-[0.1] animate-noise" />

        <div className="relative z-10">
          {" "}
          <div className="container mx-auto px-4">
            {/* main-wrapper */}
            <div className="flex items-center justify-center w-full h-screen ">
              <motion.div className="w-auto h-fit relative">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={
                    isActive
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0, opacity: 0 }
                  }
                  transition={{ duration: 1.2 }}
                >
                  <Image
                    src={clock}
                    alt="clock image"
                    className="w-119.5 h-208.75 object-cover"
                  ></Image>
                </motion.div>

                {/* headings */}
                <motion.h3
                  initial={{ x: -900, opacity: 0 }}
                  animate={
                    isActive ? { x: 0, opacity: 1 } : { x: -900, opacity: 0 }
                  }
                  transition={{ duration: 1.2 }}
                  className="text-red font-oswald font-medium text-[33px] uppercase absolute -left-[260px] top-[200px] "
                >
                  Precision quartz movementt
                </motion.h3>
                <motion.h3
                  initial={{ x: -900, opacity: 0 }}
                  animate={
                    isActive ? { x: 0, opacity: 1 } : { x: -900, opacity: 0 }
                  }
                  transition={{ duration: 1.2 }}
                  className="text-red font-oswald font-medium text-[33px] uppercase absolute -left-[265px] bottom-[275px]"
                >
                  Premium materials
                </motion.h3>
                <motion.h3
                  initial={{ x: 900, opacity: 0 }}
                  animate={
                    isActive ? { x: 0, opacity: 1 } : { x: 900, opacity: 0 }
                  }
                  transition={{ duration: 1.2 }}
                  className="text-red font-oswald font-medium text-[33px] uppercase absolute -right-[330px] top-[200px]"
                >
                  Sapphire crystal glass
                </motion.h3>
                <motion.h3
                  initial={{ x: 900, opacity: 0 }}
                  animate={
                    isActive ? { x: 0, opacity: 1 } : { x: 900, opacity: 0 }
                  }
                  transition={{ duration: 1.2 }}
                  className="text-red font-oswald font-medium text-[33px] uppercase absolute -right-[185px] bottom-[275px]"
                >
                  Water-resistant design
                </motion.h3>

                {/* paragraphs */}
                <motion.p
                  initial={{ x: -900, opacity: 0 }}
                  animate={
                    isActive ? { x: 0, opacity: 1 } : { x: -900, opacity: 0 }
                  }
                  transition={{ duration: 1.2, delay: 0.1 }}
                  className="text-base font-light text-white font-sans w-full max-w-[310px] text-end absolute -left-[330px] top-[255px] "
                >
                  Crafted with sapphire crystal glass to deliver exceptional
                  clarity and superior scratch resistance, keeping your watch
                  face pristine over time.
                </motion.p>
                <motion.p
                  initial={{ x: -900, opacity: 0 }}
                  animate={
                    isActive ? { x: 0, opacity: 1 } : { x: -900, opacity: 0 }
                  }
                  transition={{ duration: 1.2, delay: 0.1 }}
                  className="text-base font-light text-white font-sans w-full max-w-[310px] text-end absolute -left-[330px] bottom-[330px] "
                >
                  Designed to withstand everyday splashes and unexpected
                  exposure, offering reliable protection without compromising
                  style.
                </motion.p>
                <motion.p
                  initial={{ x: 900, opacity: 0 }}
                  animate={
                    isActive ? { x: 0, opacity: 1 } : { x: 900, opacity: 0 }
                  }
                  transition={{ duration: 1.2, delay: 0.1 }}
                  className="text-base font-light text-white font-sans w-full max-w-[310px] text-start absolute -right-[330px] top-[255px] "
                >
                  Crafted with sapphire crystal glass to deliver exceptional
                  clarity and superior scratch resistance, keeping your watch
                  face pristine over time.
                </motion.p>
                <motion.p
                  initial={{ x: 900, opacity: 0 }}
                  animate={
                    isActive ? { x: 0, opacity: 1 } : { x: 900, opacity: 0 }
                  }
                  transition={{ duration: 1.2, delay: 0.1 }}
                  className="text-base font-light text-white font-sans w-full max-w-[310px] text-start absolute -right-[330px] bottom-[330px] "
                >
                  Designed to withstand everyday splashes and unexpected
                  exposure, offering reliable protection without compromising
                  style.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductPage;
