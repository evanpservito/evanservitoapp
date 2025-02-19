import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-row pl-36 w-full h-full items-center">
      <div className="flex flex-col justify-start space-y-4 w-4/5 h-1/2">
        <p className="text-6xl font-DMSans font-bold pb-8">Contact</p>
        <form
          action="https://getform.io/f/4fa4d537-adaa-4d5c-9e64-88ec463d1310"
          method="POST"
          className="flex flex-col items-center justify-center w-full"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none w-full"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none w-full"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={6}
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none w-full"
          />
          <button
            type="submit"
            className="w-full transition duration-300 hover:scale-110 hover:shadow-xl text-center inline-block px-8 py-3 2-max text-base font-medium rounded-md bg-purple"
          >
            Contact Me
          </button>
        </form>
      </div>
      <div className="w-1/2 h-full flex items-center justify-end">
        <div className="w-1/2 border-r-2 flex flex-col items-end justify-center space-y-8 p-8 h-fit">
          <FaLinkedin size={48} />
          <FaGithub size={48} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
