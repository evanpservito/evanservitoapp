import { motion } from "motion/react";
import React from "react";
import Image from "next/image";

interface ProjectProps {
  title: string;
  desc: string;
  imgPath: string;
}
const Project = ({ title, desc, imgPath }: ProjectProps) => {
  return (
    <div className="relative border-2 px-4 py-12 lg:py-8 w-full transition hover:scale-110 hover:border-purple hover:duration-250 rounded-xl flex flex-row overflow-hidden">
      <div>
        <p className="font-Rubik font-bold text-xl lg:text-lg">{title}</p>
        <p className="hidden lg:flex font-KodeMono text-grey ">[ {desc} ]</p>
      </div>
      <Image
        src={imgPath}
        width={200}
        height={200}
        alt={title}
        className="opacity-50 absolute right-4 -top-8 "
      />
    </div>
  );
};

export default Project;
