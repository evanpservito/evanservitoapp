import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex flex-row pl-24">
      <div className="w-1/2">
        <p className="text-xl font-KodeMono text-purple">Hello!</p>
        <p className="text-8xl font-DMSans font-bold">I'm Evan Servito.</p>
        <p className="text-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
      <div className="w-1/2 border-r-2 flex flex-col items-end justify-center space-y-8 px-8 rounded-md">
        <FaLinkedin size={48} />
        <FaInstagram size={48} />
      </div>
    </div>
  );
};

export default Hero;
