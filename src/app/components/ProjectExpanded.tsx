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
    <div className="flex items-center justify-center h-svh ">
      <div className="absolute left-6">
        <Link href={"/#projects"}>
          <p className="[writing-mode:sideways-lr] text-xl px-8 font-KodeMono transition hover:scale-110 hover:duration-250 hover:text-purple">
            [ Return ]
          </p>
        </Link>
      </div>

      <div className="border-2 rounded-md p-16 border-purple max-w-7xl flex flex-row">
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
      </div>
    </div>
  );
};

export default ProjectExpanded;
