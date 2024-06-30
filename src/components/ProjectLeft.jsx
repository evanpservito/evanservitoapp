import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import languages from "../data/languages";

const ProjectLeft = ({ title, imgUrl, layerUrl, stack, description, type }) => {
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
      className="flex flex-col gap-8 md:flex-row justify-center"
    >
      <div className="relative align-middle w-96">
        <img
          src={imgUrl}
          alt="project"
          className="z-0 border-2 border-stone-500 rounded-md overflow-hidden object-cover w-[300px] h-[190px]"
        />
        {type === "software" && (
          <img
            src={layerUrl}
            alt="project-layer"
            className="transition duration-300 hover:scale-110 absolute z-10 w-auto h-56 -top-4 left-[11.6rem]"
          />
        )}
      </div>
      <div className="w-96">
        <div className="md:w-80 inline-block float-right text-left">
          <h3 className="text-lg md:text-xl mb-1 md:mb-3 font-semibold">
            {title}
          </h3>
          <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
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
          <h2 className="pt-3 inline-block float-right text-left">
            {description}
          </h2>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectLeft;
