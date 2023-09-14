import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import languages from "../data/languages";
import ProjectLeft from "./ProjectLeft";

const ProjectRight = ({
  title,
  imgUrl,
  layerUrl,
  stack,
  description,
  type,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleTransform = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  const opacityTransform = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleTransform, opacity: opacityTransform }}
      className="md:flex flex-col md:flex-row md:justify-between lg:justify-center"
    >
      <div className="md:hidden">
        <ProjectLeft
          imgUrl={imgUrl}
          layerUrl={layerUrl}
          title={title}
          stack={stack}
          description={description}
          type={stack.includes("C++") ? "hardware" : "software"}
        />
      </div>
      <div className="hidden md:flex">
        <div className="w-96">
          <div className="w-80 inline-block float-left text-right">
            <h3 className="text-lg md:text-xl mb-1 md:mb-3 font-semibold">
              {title}
            </h3>
            <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm float-right">
              {stack?.map((item) => (
                <span
                  key={item}
                  className={
                    "transition duration-300 hover:scale-110 hover:shadow-xl inline-block px-2 py-0 font-semibold border-2 border-stone-500 rounded-md " +
                    languages[item]
                  }
                >
                  {item}
                </span>
              ))}
            </p>
            <h2 className="pt-3 inline-block float-left text-right">
              {description}
            </h2>
          </div>
        </div>
        <div className="relative w-96">
          {type === "software" && (
            <img
              src={layerUrl}
              alt="project-layer"
              className="transition duration-300 hover:scale-110 absolute z-10 w-auto h-56 -top-4 right-[11.6rem]"
            />
          )}
          <img
            src={imgUrl}
            alt="project"
            className="z-0 border-2 border-stone-500 rounded-md overflow-hidden border-stone-500 object-cover w-[300px] h-[190px] inline-block float-right"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectRight;
