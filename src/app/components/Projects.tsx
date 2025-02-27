"use client";
import React, { useState } from "react";
import Project from "./Project";
import Link from "next/link";
import { software } from "../software";
import { hardware } from "../hardware";
import { motion } from "motion/react";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("software");

  return (
    <div className="flex flex-row pl-36 w-full h-full items-center">
      <motion.div
        className="flex flex-col justify-start space-y-4 w-4/5 h-1/2"
        initial={{ scale: 0.75, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-6xl font-DMSans font-bold pb-8">Projects</p>

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
        className="w-1/5 h-full flex items-center justify-end"
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
