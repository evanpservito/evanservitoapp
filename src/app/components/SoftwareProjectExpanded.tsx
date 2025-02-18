import Link from "next/link";
import React from "react";

const SoftwareProjectExpanded = () => {
  return (
    <div className="flex items-center justify-center h-svh ">
      <div className="absolute left-6">
        <Link href={"/#projects"}>
          <p className="[writing-mode:sideways-lr] text-xl px-8 font-KodeMono ">
            [ Return ]
          </p>
        </Link>
      </div>
      <div className="border-2 mx-36">
        <p className="text-6xl font-Rubik font-bold">Monarch</p>
        <p className="text-grey font-Rubik">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
    </div>
  );
};

export default SoftwareProjectExpanded;
