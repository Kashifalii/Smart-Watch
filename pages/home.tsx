import React from "react";

import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

function HomePage({ isActive }: { isActive: boolean }) {
  return (
    <section className="w-full h-screen bg-[linear-gradient(145deg,rgba(39,39,39,0.7)_50%,rgba(217,70,96,0.94)_50%)] overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.img
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={
            isActive
              ? { scale: 1, rotate: 0, opacity: 1 }
              : { scale: 0, rotate: -180, opacity: 0 }
          }
          transition={{ duration: 1.1 }}
          alt="Clock Image"
          src="/Images/c1.webp"
          className="w-187 h-187 absolute z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
        />
        <motion.img
          initial={{ scale: 0, y: 100, opacity: 0 }}
          animate={
            isActive
              ? { scale: 1, y: 0, opacity: 1 }
              : { scale: 0, y: 100, opacity: 0 }
          }
          transition={{ duration: 1.1 }}
          alt="Clock Image"
          src="/Images/Ellipse.png"
          className="w-[675px]  h-[88px] absolute z-10 left-1/2 -bottom-5 transform -translate-x-1/2 -translate-y-1/2 "
        />

        {/* text-wrapper */}
        <div className="h-screen w-full flex items-center">
          {/* left */}
          <motion.div
            initial={{ x: -500, opacity: 0 }}
            animate={isActive ? { x: 0, opacity: 1 } : { x: -500, opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="w-1/2 h-auto"
          >
            <p className="text-red uppercase font-sans font-medium text-[26px]">
              Timeless Precision- Modern Design
            </p>
            <h1 className="text-[243px] font-oswald font-semibold text-white leading-48 ps">
              SMART
            </h1>
            <h3 className="text-[85px] font-oswald font-extralight text-white">
              ChronoX - Series
            </h3>
          </motion.div>
          {/* right */}
          <motion.div
            initial={{ x: 500, opacity: 0 }}
            animate={isActive ? { x: 0, opacity: 1 } : { x: 500, opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="w-1/2 h-auto flex flex-col items-end translate-y-12"
          >
            <h1 className="text-[243px] font-oswald font-semibold text-black leading-48 ps">
              WATCH
            </h1>
            <p className="max-w-112.75 w-full text-xl font-sans font-light text-white mt-8 text-end">
              Discover watches crafted for those who value elegance,
              performance, and lasting quality. Designed to elevate every
              moment.
            </p>
            <a
              href={"#"}
              className="text-[42px] font-oswald font-semibold text-white"
            >
              Order Now <MoveRight className="inline size-10" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
