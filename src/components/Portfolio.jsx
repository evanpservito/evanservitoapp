import { useState } from "react";
import software from "../data/software";
import hardware from "../data/hardware";
import ProjectLeft from "./ProjectLeft";
import ProjectRight from "./ProjectRight";
import Title from "./Title";

const Portfolio = () => {
  const [softwareActive, setSoftwareActive] = useState(true);
  const [hardwareActive, setHardwareActive] = useState(false);

  const handleSoftwareClick = () => {
    if (softwareActive == false) {
      setSoftwareActive(true);
      setHardwareActive(false);
    }
  };

  const handleHardwareClick = () => {
    if (hardwareActive == false) {
      setSoftwareActive(false);
      setHardwareActive(true);
    }
  };
  return (
    <div
      name="projects"
      className="flex flex-col items-center justify-center animate-fadeup"
    >
      <Title>Projects</Title>
      <div className=" w-full flex flex-row justify-center gap-4">
        <button
          onClick={handleSoftwareClick}
          className={
            softwareActive
              ? "scale-110 font-bold py-2 px-4 rounded border-2 border-stone-900 shadow-xl"
              : "transition duration-300 hover:scale-110 hover:shadow-xl font-bold py-2 px-4 rounded border-2 border-stone-900 opacity-50"
          }
        >
          Software
        </button>
        <button
          onClick={handleHardwareClick}
          className={
            hardwareActive
              ? "scale-110 font-bold py-2 px-4 rounded border-2 border-stone-900 shadow-xl"
              : "transition duration-300 hover:scale-110 hover:shadow-xl font-bold py-2 px-4 rounded border-2 border-stone-900 opacity-50"
          }
        >
          Hardware
        </button>
      </div>
      {softwareActive && (
        <div className="grid grid-cols-1 gap-24 px-1 py-24 lg:p-24 w-auto">
          {software?.map((project, index) =>
            index % 2 ? (
              <ProjectRight
                key={project.title}
                imgUrl={project.imgUrl}
                layerUrl={project.layerUrl}
                title={project.title}
                stack={project.stack}
                description={project.description}
                type={"software"}
              />
            ) : (
              <ProjectLeft
                key={project.title}
                imgUrl={project.imgUrl}
                layerUrl={project.layerUrl}
                title={project.title}
                stack={project.stack}
                description={project.description}
                type={"software"}
              />
            )
          )}
        </div>
      )}
      {hardwareActive && (
        <div className="grid grid-cols-1 gap-24 p-16 w-auto">
          {hardware?.map((project, index) =>
            index % 2 ? (
              <ProjectRight
                key={project.title}
                imgUrl={project.imgUrl}
                title={project.title}
                stack={project.stack}
                description={project.description}
                type={"hardware"}
              />
            ) : (
              <ProjectLeft
                key={project.title}
                imgUrl={project.imgUrl}
                title={project.title}
                stack={project.stack}
                description={project.description}
                type={"hardware"}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Portfolio;
