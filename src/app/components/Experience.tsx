import React from "react";

const Experience = () => {
  return (
    <div className="flex flex-row pl-36 w-full h-full">
      <div className="flex flex-col justify-center space-y-4 w-1/2 ">
        <p className="text-6xl font-DMSans font-bold pb-8">Experience</p>
        <div className="flex flex-row space-x-8">
          <p className="text-4xl font-Rubik font-semibold">Position Title</p>
          <p className="text-4xl">•</p>
          <p className="text-4xl font-Rubik">Company</p>
        </div>
        <p className="text-md font-KodeMono">[ Mon. 202X - Mon. 202X ]</p>

        <ul className="list-disc pl-4 text-grey">
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </li>
          <li>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat
          </li>
          <li>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur
          </li>
        </ul>
      </div>
      <div className="w-1/2 h-full flex items-center justify-end">
        <div className="border-r-2 flex flex-col items-end justify-center space-y-8 p-8 h-fit font-DMSans font-bold text-4xl">
          <button>Experience #1</button>
          <button>Experience #2</button>
          <button>Experience #3</button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
