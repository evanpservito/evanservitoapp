"use client";
import { motion } from "motion/react";
import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="flex flex-col lg:flex-row xl:pl-36 w-full h-full items-center">
      <motion.div
        className="flex flex-col justify-start space-y-4 lg:w-4/5 lg:h-1/2 h-fit w-full max-lg:pb-8"
        initial={{ scale: 0.75, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-4xl lg:text-6xl font-DMSans font-bold pb-8">
          Contact
        </p>
        <form
          action="https://getform.io/f/4fa4d537-adaa-4d5c-9e64-88ec463d1310"
          method="POST"
          className="font-Rubik flex flex-col items-center justify-center w-full"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="font-KodeMono p-2 bg-transparent border-2 rounded-lg focus:outline-none w-full"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="font-KodeMono my-2 p-2 bg-transparent border-2 rounded-lg focus:outline-none w-full"
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={6}
            className="font-KodeMono p-2 mb-4 bg-transparent border-2 rounded-lg focus:outline-none w-full"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className={`font-KodeMono w-full transition  text-left inline-block px-2 py-3 2-max text-base font-medium rounded-lg bg-purple ${
              name === "" || email === "" || message === ""
                ? "cursor-not-allowed opacity-50"
                : "hover:scale-110 hover:duration-250 hover:text-purple hover:bg-white hover:shadow-xl"
            }`}
            disabled={name === "" || email === "" || message === ""}
          >
            Contact Me
          </button>
        </form>
      </motion.div>
      <motion.div
        className="hidden w-1/2 h-full lg:flex items-center justify-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-1/2 border-r-2 flex flex-col items-end justify-center space-y-8 p-8 h-fit">
          <a
            href="https://www.linkedin.com/in/evan-servito/"
            target="_blank"
            className="transition hover:scale-110 hover:duration-250 hover:text-purple"
          >
            <FaLinkedin size={48} />
          </a>
          <a
            href="https://github.com/evanpservito"
            target="_blank"
            className="transition hover:scale-110 hover:duration-250 hover:text-purple"
          >
            <FaGithub size={48} />
          </a>
        </div>
      </motion.div>

      <div className="flex flex-row justify-center lg:hidden w-full space-x-4">
        <a
          href="https://www.linkedin.com/in/evan-servito/"
          target="_blank"
          className="transition hover:scale-110 hover:duration-250 hover:text-purple"
        >
          <FaLinkedin size={60} />
        </a>
        <a
          href="https://github.com/evanpservito"
          target="_blank"
          className="transition hover:scale-110 hover:duration-250 hover:text-purple"
        >
          <FaGithub size={60} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
