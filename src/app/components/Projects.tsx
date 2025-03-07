"use client";
import React, { useState } from "react";
import Project from "./Project";
import Link from "next/link";
import { software } from "../software";
import { hardware } from "../hardware";
import { motion } from "motion/react";
import {
  HiOutlineArrowCircleLeft,
  HiOutlineArrowCircleRight,
} from "react-icons/hi";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("software");

  return (
    <div className="flex flex-row xl:pl-36 w-full h-full items-center">
      <motion.div
        className="flex flex-col justify-start space-y-4 w-full lg:w-4/5 lg:h-1/2"
        initial={{ scale: 0.75, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-4xl lg:text-6xl font-DMSans font-bold pb-8">
          Projects
        </p>

        <motion.div
          className="w-full h-full lg:hidden items-center justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-row h-fit space-x-4 items-center text-center">
            <button
              className={`${
                activeCategory === "software"
                  ? "text-3xl"
                  : " text-grey transition hover:scale-110 hover:duration-250 hover:text-white"
              } text-xl font-DMSans font-bold`}
              onClick={() => setActiveCategory("software")}
            >
              Software
            </button>
            {activeCategory === "software" ? (
              <HiOutlineArrowCircleLeft size={28} />
            ) : (
              <HiOutlineArrowCircleRight size={28} />
            )}

            <button
              className={`${
                activeCategory === "hardware"
                  ? "text-3xl"
                  : " text-grey transition hover:scale-110 hover:duration-250 hover:text-white"
              } text-xl font-DMSans font-bold`}
              onClick={() => setActiveCategory("hardware")}
            >
              Hardware
            </button>
          </div>
        </motion.div>

        {activeCategory === "software" &&
          software.map((project) => (
            <Link href={`software/${project.link}`} key={project.title}>
              <Project
                title={project.title}
                desc={project.desc}
                imgPath={project.imgPath}
              />
            </Link>
          ))}
        {activeCategory === "hardware" &&
          hardware.map((project) => (
            <Link href={`hardware/${project.link}`} key={project.title}>
              <Project
                title={project.title}
                desc={project.desc}
                imgPath={project.imgPath}
              />
            </Link>
          ))}
      </motion.div>

      <motion.div
        className="hidden w-1/5 h-full lg:flex items-center justify-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="border-r-2 flex flex-col items-end justify-center space-y-8 p-8 h-fit">
          <button
            className={`${
              activeCategory === "software"
                ? "text-4xl"
                : " text-grey transition hover:scale-110 hover:duration-250 hover:text-white"
            } text-2xl font-DMSans font-bold`}
            onClick={() => setActiveCategory("software")}
          >
            Software
          </button>

          <button
            className={`${
              activeCategory === "hardware"
                ? "text-4xl"
                : " text-grey transition hover:scale-110 hover:duration-250 hover:text-white"
            } text-2xl font-DMSans font-bold`}
            onClick={() => setActiveCategory("hardware")}
          >
            Hardware
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
