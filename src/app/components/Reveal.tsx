"use client";
import React, { JSX, useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
interface Props {
  children: JSX.Element;
  width?: "w-fit" | "w-full";
  delay?: number;
}
const Reveal = ({ children, width = "w-fit", delay = 0 }: Props) => {
  const [complete, setComplete] = useState("overflow-hidden");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className={`relative ${complete} ${width}`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 + delay }}
        onAnimationComplete={() => setComplete("")}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{ hidden: { right: 0 }, visible: { right: "100%" } }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn", delay: delay }}
        className="absolute bottom-0 left-0 right-0 top-0 z-40 bg-neutral-900"
      />
    </div>
  );
};

export default Reveal;
