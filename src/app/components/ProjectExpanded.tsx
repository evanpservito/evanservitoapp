"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { software } from "../software";
import { hardware } from "../hardware";
import Image from "next/image";
import { motion } from "motion/react";

const ProjectExpanded = () => {
  const pathname = usePathname();
  const currentProject =
    pathname.split("/")[1] === "software"
      ? software[
          software.indexOf(
            software.filter(
              (project) => pathname.split("/")[2] === project.link
            )[0]
          )
        ]
      : hardware[
          hardware.indexOf(
            hardware.filter(
              (project) => pathname.split("/")[2] === project.link
            )[0]
          )
        ];

  return (
    <div className="flex items-center justify-center h-svh">
      <motion.div
        className="p-16 max-w-7xl hidden lg:flex flex-row"
        initial={{ scale: 0.75, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col space-y-4 w-1/2">
          <p className="text-6xl font-Rubik font-bold">
            {currentProject.title}
          </p>
          <p className="font-KodeMono">[ {currentProject.time} ]</p>
          <ul className="text-grey font-Rubik list-disc pl-4 justify-center py-16">
            {currentProject.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className="flex flex-row space-x-2 font-KodeMono">
            {currentProject.technologies.map((technology, index) => (
              <div className="flex flex-row space-x-2" key={index}>
                <p>{index != 0 && "•"}</p>
                <p key={index}> [ {technology} ]</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-1/2 flex items-center justify-end">
          <Image
            src={currentProject.imgPath}
            width={400}
            height={400}
            alt={currentProject.title}
          />
        </div>
      </motion.div>

      <motion.div
        className="w-full flex flex-col lg:hidden justify-center items-center"
        initial={{ scale: 0.75, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full flex items-center justify-center py-8">
          <Image
            src={currentProject.imgPath}
            width={200}
            height={200}
            alt={currentProject.title}
          />
        </div>

        <div className="flex flex-col w-full items-center justify-center">
          <p className="text-4xl lg:text-6xl font-Rubik font-bold">
            {currentProject.title}
          </p>
          <p className="text-sm lg:text-md font-KodeMono pt-2">
            [ {currentProject.time} ]
          </p>
          <ul className="text-sm lg:text-md text-grey font-Rubik list-disc lg:pl-4 justify-center py-8 w-4/5">
            {currentProject.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className="flex flex-row lg:space-x-2 font-KodeMono">
            {currentProject.technologies.map((technology, index) => (
              <div className="flex flex-row lg:space-x-2" key={index}>
                <p className="text-[10px] lg:text-md">{index != 0 && "•"}</p>
                <p className="text-[10px] lg:text-md " key={index}>
                  {" "}
                  [ {technology} ]
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectExpanded;
