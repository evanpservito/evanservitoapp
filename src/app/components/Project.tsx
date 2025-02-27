import { motion } from "motion/react";
import React from "react";

interface ProjectProps {
  title: string;
  desc: string;
  imgPath: string;
}
const Project = ({ title, desc, imgPath }: ProjectProps) => {
  return (
    <div className="border-2  p-4 w-full transition hover:scale-110 hover:border-purple hover:duration-250 rounded-xl">
      <p className="font-Rubik font-bold">{title}</p>
      <p className="font-KodeMono text-grey">[ {desc} ]</p>
    </div>
  );
};

export default Project;
