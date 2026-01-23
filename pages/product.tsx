import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import clock from "@/public/Images/c3.png";

function ProductPage({ isActive }: { isActive: boolean }) {
  return (
    <section>
      <div className="container mx-auto px-4">
        {/* main-wrapper */}
        <div className="flex items-center justify-between w-full h-screen relative">
          <motion.div
            className="w-fit h-fit"
            initial={{ scale: 0, opacity: 0 }}
            animate={
              isActive ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
            }
            transition={{ duration: 1.1 }}
          >
            <h2>sdscc</h2>
          </motion.div>
          <Image
            src={clock}
            alt="clock image"
            className="w-full h-auto object-cover"
          ></Image>
        </div>
      </div>
    </section>
  );
}

export default ProductPage;
