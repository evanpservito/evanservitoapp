import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="p-8 h-full max-lg:space-y-64">
      <div className="h-fit lg:h-full flex items-center max-lg:pt-32">
        <Hero />
      </div>
      <div id="projects" className="h-fit lg:h-full flex items-center">
        <Projects />
      </div>
      <div id="experience" className="h-fit lg:h-full flex items-center">
        <Experience />
      </div>
      <div
        id="contact"
        className="h-fit lg:h-full flex items-center max-lg:pb-32"
      >
        <Contact />
      </div>
    </div>
  );
}
