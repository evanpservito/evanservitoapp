"use client";
import { motion } from "motion/react";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="p-8 h-full">
      <div className="h-full flex items-center">
        <Hero />
      </div>
      <div id="projects" className="h-full flex items-center">
        <Projects />
      </div>
      <div id="experience" className="h-full flex items-center">
        <Experience />
      </div>
      <div id="contact" className="h-full flex items-center">
        <Contact />
      </div>
    </div>
  );
}
