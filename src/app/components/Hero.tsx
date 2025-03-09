"use client";
import { motion } from "motion/react";
import Link from "next/link";
import React from "react";
import { BsDownload } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="lg:flex lg:flex-row xl:pl-36 w-full h-full">
      <motion.div
        className="lg:w-1/2 flex flex-col justify-center"
        initial={{ scale: 0.75, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-lg lg:text-xl font-KodeMono text-purple animate-bounce">
          Hello!
        </p>
        <p className="text-4xl md:text-5xl lg:text-8xl font-DMSans font-bold">
          I'm Evan Servito.
        </p>
        <p className="text-sm lg:text-lg text-grey font-Rubik">
          I am a senior studying Computer Science & Engineering at the
          University of California, Irvine. I am interested in exploring
          different software and hardware technologies, from full-stack web
          development to microcontrollers, striving to create a positive impact
          through my work!
        </p>

        <div className="lg:flex flex-row lg:space-x-4 pt-4 max-lg:space-y-4">
          <button className="border-purple border-2 rounded-lg py-4 w-full lg:px-8 font-KodeMono text-purple transition hover:scale-110 hover:duration-250 hover:text-white hover:border-white">
            <Link href="#projects">See what I'm up to</Link>
          </button>
          <a
            href="./downloads/Evan Servito - Resume.pdf"
            download="Evan Servito - Resume"
            className="w-full h-full flex"
          >
            <button className="hidden lg:flex font-kodeMono py-4 px-14 justify-center items-center gap-2 lg:px-8 rounded-lg font-KodeMono bg-white text-black transition hover:scale-110 hover:duration-250 hover:bg-purple hover:text-white">
              Resume <BsDownload />
            </button>
          </a>
          <div className="flex flex-row justify-between lg:hidden space-x-4 w-full">
            <a
              href="./downloads/Evan Servito - Resume.pdf"
              download="Evan Servito - Resume"
              className="w-full flex"
            >
              <button className="font-kodeMono py-4 flex flex-row justify-center items-center gap-2 w-full rounded-lg font-KodeMono bg-white text-black transition hover:scale-110 hover:duration-250 hover:bg-purple hover:text-white">
                Resume <BsDownload />
              </button>
            </a>

            <a
              href="https://www.linkedin.com/in/evan-servito/"
              target="_blank"
              className="transition hover:scale-110 hover:duration-250 hover:text-purple"
            >
              <FaLinkedin size={60} />
            </a>
            <a
              href="https://github.com/evanpservito"
              target="_blank"
              className="transition hover:scale-110 hover:duration-250 hover:text-purple"
            >
              <FaGithub size={60} />
            </a>
          </div>
        </div>
      </motion.div>

      <div className="hidden w-1/2 h-full lg:flex items-center justify-end">
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
