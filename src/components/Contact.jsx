import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Title from "./Title";

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleTransform = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  const opacityTransform = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleTransform, opacity: opacityTransform }}
      name="contact"
      className="p-4 md:flex flex-col mb-10 mx-auto pt-16 animate-fadeup"
    >
      <div className="flex flex-col justify-center items-center">
        <Title>Contact</Title>
        <form
          action="https://getform.io/f/4fa4d537-adaa-4d5c-9e64-88ec463d1310"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="8"
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <button
            type="submit"
            className="transition duration-300 hover:scale-110 hover:shadow-xl text-center inline-block px-8 py-3 2-max text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-400 to-purple-400 drop-shadow-sm hover:stroke-white"
          >
            Contact Me
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
