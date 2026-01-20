import Image from "next/image";
import React from "react";

import clock from "@/public/Images/c1.webp";

function HomePage() {
  return (
    <section className="w-full h-screen ">
      <div className="container mx-auto px-4">
        <Image
          alt="Clock Image"
          src={clock}
          className="w-187 h-187 absolute z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
        ></Image>
        {/* text-wrapper */}
        <div className="h-screen w-full flex items-center">
          {/* left */}
          <div className="w-1/2 h-auto">
            <p className="text-red uppercase font-sans font-medium text-[26px]">
              Timeless Precision- Modern Design
            </p>
            <h1 className="text-[243px] font-oswald font-semibold text-white leading-48 ps">
              SMART
            </h1>
            <h3 className="text-[85px] font-oswald font-extralight text-white">
              ChronoX - Series
            </h3>
          </div>
          {/* right */}
          <div className="w-1/2 h-auto flex flex-col items-end">
            <h1 className="text-[243px] font-oswald font-semibold text-white leading-48 ps">
              WATCH
            </h1>
            <p className="max-w-[451px] w-full text-xl font-sans font-light text-white mt-8 text-end">
              Discover watches crafted for those who value elegance,
              performance, and lasting quality. Designed to elevate every
              moment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
