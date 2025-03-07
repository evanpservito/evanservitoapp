"use client";
import React, { useState } from "react";
import { experiences } from "../experience";
import { motion } from "motion/react";

const Experience = () => {
  const [currentExperience, setCurrentExperience] = useState(0);

  return (
    <div className="flex flex-row xl:pl-36 w-full h-full items-center">
      <motion.div
        className="flex flex-col justify-start space-y-4 w-full 2xl:w-4/5 h-full lg:h-1/2"
        initial={{ scale: 0.75, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-4xl lg:text-6xl font-DMSans font-bold pb-8">
          Experience
        </p>

        <div className="lg:hidden">
          {experiences.map((experience, index) => (
            <div
              key={experience.positionTitle}
              className={`${index == 0 ? "" : "pt-4 border-t-2"} pb-4`}
            >
              <motion.div className="flex flex-col">
                <p className="text-sm lg:text-4xl font-Rubik font-semibold">
                  {experience.positionTitle}
                </p>

                <p className="text-sm lg:text-4xl font-Rubik">
                  {experience.organization}
                </p>
              </motion.div>
              <p className="flex text-xs font-KodeMono py-2">
                [ {experience.time} ]
              </p>

              <ul className="flex flex-col list-disc pl-4 text-grey text-sm">
                {experience.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <motion.div className="hidden lg:flex flex-row space-x-8">
          <p className="text-sm lg:text-4xl font-Rubik font-semibold">
            {experiences[currentExperience].positionTitle}
          </p>
          <p className="text-lg lg:text-4xl">•</p>
          <p className="text-sm lg:text-4xl font-Rubik">
            {experiences[currentExperience].organization}
          </p>
        </motion.div>
        <p className="hidden lg:flex text-lg font-KodeMono">
          [ {experiences[currentExperience].time} ]
        </p>

        <ul className="hidden lg:flex flex-col list-disc pl-4 text-grey">
          {experiences[currentExperience].points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className="hidden lg:w-2/5 2xl:w-1/5 h-full lg:flex items-center justify-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="border-r-2 lg:flex flex-col items-end justify-center space-y-4 p-8 h-fit font-DMSans">
          {experiences.map((experience, index) => (
            <button
              onClick={() => setCurrentExperience(index)}
              key={index}
              className={`${
                index == currentExperience
                  ? "text-2xl"
                  : "text-grey transition hover:scale-110 hover:duration-250 hover:text-white"
              } text-lg font-DMSans font-bold`}
            >
              <div className="flex flex-row text-center items-center space-x-1">
                <p className="font-KodeMono text-[8px]">
                  {experience.type === "work" ? "[work]" : "[club]"}
                </p>
                <p>{experience.organization}</p>
              </div>
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
