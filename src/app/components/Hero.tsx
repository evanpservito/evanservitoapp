"use client";
import { motion } from "motion/react";
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex flex-row pl-36 w-full h-full">
      <motion.div
        className="w-1/2 flex flex-col justify-center"
        initial={{ scale: 0.75, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-xl font-KodeMono text-purple">Hello!</p>
        <p className="text-8xl font-DMSans font-bold">I'm Evan Servito.</p>
        <p className="text-grey font-Rubik">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>

        <div className="flex flex-row space-x-4 pt-4 ">
          <button className="border-purple border-2 rounded-md py-4 px-8 font-KodeMono text-purple transition hover:scale-110 hover:duration-250 hover:text-white hover:border-white">
            <Link href="#projects">See what I'm up to</Link>
          </button>
          <button className="font-kodeMono py-4 px-8 rounded-md font-KodeMono bg-white text-black transition hover:scale-110 hover:duration-250 hover:bg-purple hover:text-white">
            Resume
          </button>
        </div>
      </motion.div>

      <div className="w-1/2 h-full flex items-center justify-end">
        <motion.div
          className="w-1/2 border-r-2 flex flex-col items-end justify-center space-y-8 p-8 h-fit"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <a
            href="https://www.linkedin.com/in/evan-servito/"
            target="_blank"
            className="transition hover:scale-110 hover:duration-250 hover:text-purple"
          >
            <FaLinkedin size={48} />
          </a>
          <a
            href="https://github.com/evanpservito"
            target="_blank"
            className="transition hover:scale-110 hover:duration-250 hover:text-purple"
          >
            <FaGithub size={48} />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
