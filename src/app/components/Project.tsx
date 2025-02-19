import React from "react";

interface ProjectProps {
  title: string;
  desc: string;
  imgPath: string;
}
const Project = ({ title, desc, imgPath }: ProjectProps) => {
  return (
    <div className="border-2 rounded-md p-4 w-full">
      <p className="font-Rubik font-bold">{title}</p>
      <p className="font-KodeMono text-grey">[ {desc} ]</p>
    </div>
  );
};

export default Project;
