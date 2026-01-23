import Image from "next/image";
import React from "react";
import clock from "@/public/Images/c2.webp";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

function AboutPage({ isActive }: { isActive: boolean }) {
  return (
    <section>
      <div className="container mx-auto px-4 overflow-hidden">
        {/* main-Wrraper */}
        <div className="flex items-center w-full h-screen">
          {/* left */}
          <motion.div
            className="w-1/2 h-fit"
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={
              isActive
                ? { scale: 1, rotate: 0, opacity: 1 }
                : { scale: 0, rotate: -180, opacity: 0 }
            }
            transition={{ duration: 1.1 }}
          >
            <Image
              src={clock}
              alt="clock image"
              className="w-179 h-179 object-cover"
            ></Image>
          </motion.div>

          {/* right */}
          <div className="w-1/2 h-fit flex items-center gap-9 ps-20">
            <div className="w-1/2 h-auto">
              <motion.h1
                className="text-white font-oswald font-semibold text-[75px] leading-tight "
                initial={{ y: -200, opacity: 0 }}
                animate={
                  isActive ? { y: 0, opacity: 1 } : { y: -200, opacity: 0 }
                }
                transition={{ duration: 1.1 }}
              >
                ABOUT <span className="text-red">THE</span>
                <br />
                <span className="text-red text-[120px] leading-25">BRAND</span>
              </motion.h1>
              <motion.p
                className="text-para font-sans text-xl font-normal "
                initial={{ y: 300, opacity: 0 }}
                animate={
                  isActive ? { y: 0, opacity: 1 } : { y: 300, opacity: 0 }
                }
                transition={{ duration: 1.1 }}
              >
                At <strong>ChronoX</strong>, we believe a watch is more than a
                timepiece — it’s a statement. Each design blends precision
                engineering with refined aesthetics to deliver reliability,
                comfort, and style in every second. Discover watches crafted for
                those who value elegance, performance, and lasting quality.
                Designed to elevate every moment. Each design blends precision
                engineering with refined aesthetics to deliver reliability,
                comfort, and style in every second.
              </motion.p>
            </div>
            {/*  */}
            <motion.div
              className="w-1/2 h-auto flex flex-col gap-6 items-baseline"
              initial={{ x: 400, opacity: 0 }}
              animate={isActive ? { x: 0, opacity: 1 } : { x: 400, opacity: 0 }}
              transition={{ duration: 1.1 }}
            >
              <p className="text-para font-sans text-xl font-normal">
                Each design blends precision engineering with refined aesthetics
                to deliver reliability, comfort, and style in every
                second.Discover watches crafted for those who value elegance,
                performance, and lasting quality. Each design blends precision
                engineering with refined aesthetics to deliver reliability,
                comfort, and style in every second. Each design blends precision
                engineering with refined aesthetics to deliver reliability,
                comfort, and style in every second. Each design blends precision
                engineering with refined aesthetics.
              </p>
              <a
                href={"#"}
                className="text-[36px] font-oswald font-normal text-white"
              >
                Learn More <MoveRight className="inline size-10" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
