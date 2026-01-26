import {
  Earth,
  Headset,
  Mails,
  MapPinHouse,
  SendHorizontal,
} from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

function ContactPage({ isActive }: { isActive: boolean }) {
  return (
    <section className="w-full h-screen bg-[linear-gradient(-154deg,rgba(39,39,39,0.7)_50%,rgba(217,70,96,0.08)_50%)]">
      <div className="container mx-auto px-4">
        {/* content wrapper */}
        <div className="flex items-center h-screen w-full">
          {/* form */}
          <motion.div
            initial={{ x: -500, opacity: 0 }}
            animate={isActive ? { x: 0, opacity: 1 } : { x: -500, opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="h-175 w-[60%] bg-white rounded-ss-xl rounded-es-xl"
          >
            <form action="#" className="w-full max-w-162.5 h-ful p-10">
              <div className="mb-7">
                <h1 className="text-black text-[46px] font-oswald font-semibold leading-11.25">
                  LET’S <span className="text-red">CONNECT</span>
                </h1>
                <h4 className="text-base text-black font-sans font-medium mb-1">
                  Have a question? We’re here to help.
                </h4>
                <p className="text-sm text-gray-600 font-sans font-normal w-full max-w-150">
                  Whether you’re looking for product details, order support, or
                  general inquiries, our team is ready to assist you. Reach out
                  to us and we’ll get back to you as soon as possible.
                </p>
              </div>
              {/* inputs-wrapper */}
              <div className="flex flex-col gap-3 w-full">
                {/* name-input */}
                <div className="flex items-center justify-between w-full">
                  {/* first-name */}
                  <div className="w-[48%]">
                    <label
                      htmlFor="firstName"
                      className="block mb-1 text-sm font-medium text-black font-sans"
                    >
                      First Name*
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      id="firstName"
                      className="border-2 border-gray-200 focus:outline-red/50 font-sans text-sm text-black rounded-md w-full px-2 py-3"
                    />
                  </div>
                  {/* last-name */}
                  <div className="w-[48%]">
                    <label
                      htmlFor="lastName"
                      className="block mb-1 text-sm font-medium text-black font-sans"
                    >
                      Last Name*
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      id="lastName"
                      className="border-2 border-gray-200 focus:outline-red/50 font-sans text-sm text-black rounded-md w-full px-2 py-3"
                    />
                  </div>
                </div>
                {/* email */}
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block mb-1 text-sm font-medium text-black font-sans"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    id="email"
                    className="border-2 border-gray-200 focus:outline-red/50 font-sans text-sm text-black rounded-md w-full px-2 py-3"
                  />
                </div>
                {/* phone number */}
                <div className="w-full">
                  <label className="block mb-1 text-sm font-medium text-black font-sans">
                    Phone number
                  </label>
                  <div className="relative mt-2 text-black font-sans">
                    <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r-2 border-gray-200 focus:outline-red/50 font-sans text-sm text-black pr-2">
                      <select className="text-sm outline-none rounded-lg h-full">
                        <option>US</option>
                        <option>ES</option>
                        <option>MR</option>
                      </select>
                    </div>
                    <input
                      type="number"
                      placeholder="+1 (555) 000-000"
                      className="w-full pl-18 pr-3 py-2  border-2 border-gray-200 focus:outline-red/50 font-sans text-sm text-black rounded-md"
                    />
                  </div>
                </div>
                {/* message */}
                <div className="w-full">
                  <label
                    htmlFor="message"
                    className="block mb-1 text-sm font-medium text-black font-sans"
                  >
                    How can we help?
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="A brief summary of what you need help with, expected, timelines, preferred communication method etc.  "
                    rows={4}
                    className="border-2 border-gray-200 focus:outline-red/50  text-sm text-black rounded-md w-full px-2 py-3 resize-none font-sans placeholder:text-sm placeholder:text-gray-para"
                  />
                </div>
                {/* send btn */}

                <button
                  type="submit"
                  className="cursor-pointer transition-all bg-red hover:bg-red/95 text-base font-semibold text-white font-sans w-fit ms-auto px-8 py-3 rounded-md flex items-center gap-1 hover:shadow-center"
                >
                  Send <SendHorizontal strokeWidth={2} size={16} />
                </button>
              </div>
            </form>
          </motion.div>

          {/* image & details */}
          <motion.div
            initial={{ x: 500, opacity: 0 }}
            animate={isActive ? { x: 0, opacity: 1 } : { x: 500, opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="h-175 w-[40%] rounded-e-xl rounded-be-xl bg-[url('/Images/form-bg.png')] flex items-end"
          >
            {/* contact-details */}
            <div className="w-full h-auto p-7 bg-[url('/Images/form-overlay.png')] bg-[#05050571] backdrop-blur-sm">
              <h3 className="text-white text-[30px] font-oswald font-medium uppercase">
                Contact <span className="text-red">&</span> Inquiries
              </h3>
              <p className="text-[#e2e2e2] text-sm font-sans mb-10 ">
                Reach out with your inquiries and we’ll respond shortly.
              </p>
              {/* details */}
              <div className="flex  justify-between gap-y-7 flex-wrap w-full h-auto">
                {/* Phone */}
                <div className="w-[48%] flex gap-2">
                  <Headset strokeWidth={1.5} className="text-white" size={38} />
                  <div>
                    <h3 className="text-red text-xl font-oswald font-semibold mb-0.5">
                      Customer Support
                    </h3>
                    <p className="text-sm text-white font-sans font-light">
                      +1 (555) 256-5545
                    </p>
                  </div>
                </div>
                {/* Location */}
                <div className="w-[48%] flex gap-2">
                  <MapPinHouse
                    strokeWidth={1.5}
                    className="text-white"
                    size={38}
                  />
                  <div>
                    <h3 className="text-red text-xl font-oswald font-semibold mb-0.5">
                      Headquaters Location
                    </h3>
                    <p className="text-sm text-white font-sans font-light">
                      Salt Lake City, USA
                    </p>
                  </div>
                </div>

                {/* Emails */}
                <div className="w-[48%] flex gap-2">
                  <Mails strokeWidth={1.5} className="text-white" size={38} />
                  <div>
                    <h3 className="text-red text-xl font-oswald font-semibold mb-0.5">
                      Company Email
                    </h3>
                    <a
                      href="#"
                      className="text-sm text-white font-sans font-light block hover:text-[#ff8383] transition"
                    >
                      smartwatch@gmail.com
                    </a>
                  </div>
                </div>
                {/* Websites */}
                <div className="w-[48%] flex gap-2">
                  <Earth strokeWidth={1.5} className="text-white" size={38} />
                  <div>
                    <h3 className="text-red text-xl font-oswald font-semibold mb-0.5">
                      Website Links
                    </h3>
                    <a
                      href="#"
                      className="text-sm text-white font-sans font-light block hover:text-[#ff8383] transition"
                    >
                      Https://SmartWatch.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
