"use client";
import React, { useState } from "react";
import Project from "./Project";
import Link from "next/link";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("software");
  const software = [
    {
      title: "Monarch",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgPath: "",
      link: "monarch",
    },
    {
      title: "ZotBins",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgPath: "",
      link: "zotbins",
    },
    {
      title: "Mailbi",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgPath: "",
      link: "mailbi",
    },
    {
      title: "Cell Dogs",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgPath: "",
      link: "celldogs",
    },
  ];
  const hardware = [
    {
      title: "Micromouse",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgPath: "",
      link: "micromouse",
    },
    {
      title: "Remote-Controlled Rover",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgPath: "",
      link: "rcrover",
    },
    {
      title: "Weather Station",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgPath: "",
      link: "weatherstation",
    },
    {
      title: "x",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgPath: "",
      link: "x",
    },
  ];
  return (
    <div className="flex flex-row pl-36 w-full h-full">
      <div className="flex flex-col justify-center space-y-4 w-1/2 ">
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
            <Link href={`software/${project.link}`} key={project.title}>
              <Project
                title={project.title}
                desc={project.desc}
                imgPath={project.imgPath}
              />
            </Link>
          ))}
      </div>
      <div className="w-1/2 h-full flex items-center justify-end">
        <div className="border-r-2 flex flex-col items-end justify-center space-y-8 p-8 h-fit">
          <button
            className={`${
              activeCategory === "software" ? "text-4xl" : "text-2xl text-grey"
            } text-4xl font-DMSans font-bold`}
            onClick={() => setActiveCategory("software")}
          >
            Software
          </button>

          <button
            className={`${
              activeCategory === "hardware" ? "text-4xl" : "text-2xl text-grey"
            } text-4xl font-DMSans font-bold`}
            onClick={() => setActiveCategory("hardware")}
          >
            Hardware
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
