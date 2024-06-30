import additional from "../data/additional";
import {
  BsLinkedin,
  BsGithub,
  BsFillFileEarmarkPersonFill,
  BsDownload,
} from "react-icons/bs";

const Introduction = () => {
  return (
    <div
      name="about"
      className="flex items-center justify-center flex-col text-center pt-20 pb-8 animate-fadeup"
    >
      <h1 className="flex flex-row text-4xl md:text-6xl mb-1 md:mb-3 font-bold pb-8">
        <p>Hello, I'm Evan</p>
        <p className="animate-pulse">.</p>
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center p-8 ">
        <div className="w-96 h-auto mt-8 md:mr-8 z-10">
          <p className="text-sm md:text-base font-regular">
            I am a rising senior studying Computer Science & Engineering at the
            University of California, Irvine. I am interested in exploring
            different software and hardware technologies, from web development
            to microcontrollers and PCB design, striving to create a positive
            impact through my work! Currently, I am a lead and developer for the
            UCI ZotBins web & mobile team ♻️!
          </p>
        </div>
        <div className="relative w-96 mt-8 md:ml-8 flex items-center justify-center ">
          <div className="absolute bottom-0 -left-2 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
          <div className="absolute top-2 -right-4 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-3000"></div>
          <div className="absolute top-4 left-10 w-64 h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-5000"></div>
          <img
            src={additional.profile}
            alt="profile-img"
            className="w-64 h-auto rounded-full border-2 border-stone-500 z-10"
          />
        </div>
      </div>
      <div className="flex flex-row gap-4 p-12 md:p-8">
        <a href="https://www.linkedin.com/in/evan-servito/" target="_blank">
          <button className="flex flex-row items-center justify-center gap-2 transition duration-300 hover:scale-110 hover:shadow-xl font-bold py-2 px-4 rounded border-2 border-stone-900">
            <BsLinkedin />
            LinkedIn
          </button>
        </a>
        <a href="https://github.com/evanpservito" target="_blank">
          <button className="flex flex-row items-center justify-center gap-2 transition duration-300 hover:scale-110 hover:shadow-xl font-bold py-2 px-4 rounded border-2 border-stone-900">
            <BsGithub /> Github
          </button>
        </a>
        <a href={additional.resume} download="Evan Servito - Resume">
          <button className="flex flex-row items-center justify-center gap-2 transition duration-300 hover:scale-110 hover:shadow-xl font-bold py-2 px-4 rounded border-2 border-stone-900">
            <BsFillFileEarmarkPersonFill />
            Resume <BsDownload />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Introduction;
