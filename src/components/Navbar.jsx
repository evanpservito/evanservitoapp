import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuClick = () => setOpenMenu(!openMenu);

  return (
    <div className="fixed w-full h-[80px] flex justify-center items-center px-4 py-4 font-semibold z-20 animate-fadedown">
      {/* Desktop view */}
      <ul className="hidden md:flex rounded-full h-full flex justify-center items-center shadow-xl bg-zinc-50">
        <li>
          <Link
            className="px-4 py-2 rounded-full transition duration-300 hover:bg-zinc-200 active:bg-zinc-400"
            to="about"
            activeClass="bg-zinc-200"
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="px-4 py-2 rounded-full transition duration-300 hover:bg-zinc-200 active:bg-zinc-400"
            to="projects"
            activeClass="bg-zinc-200"
            spy={true}
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="px-4 py-2 rounded-full transition duration-300 hover:bg-zinc-200 active:bg-zinc-400"
            to="contact"
            activeClass="bg-zinc-200"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      <div
        className="md:hidden hover:cursor-pointer shadow-xl h-full flex justify-center items-center px-4 py-4 bg-zinc-50 rounded-full z-20"
        onClick={handleMenuClick}
      >
        {!openMenu ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile/small view */}
      <ul
        className={
          !openMenu
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-white"
        }
      >
        <li className="py-4 text-3xl">
          <Link
            className="px-8 py-2 rounded-full transition duration-300 hover:scale-200 hover:bg-zinc-200 active:bg-zinc-400"
            onClick={handleMenuClick}
            to="about"
            spy={true}
            smooth={true}
            duration={750}
          >
            About
          </Link>
        </li>
        <li className="py-4 text-3xl">
          <Link
            className="px-8 py-2 rounded-full transition duration-300 hover:scale-200 hover:bg-zinc-200 active:bg-zinc-400"
            onClick={handleMenuClick}
            to="projects"
            smooth={true}
            duration={750}
          >
            Projects
          </Link>
        </li>
        <li className="py-4 text-3xl">
          <Link
            className="px-8 py-2 rounded-full transition duration-300 hover:scale-200 hover:bg-zinc-200 active:bg-zinc-400"
            onClick={handleMenuClick}
            to="contact"
            smooth={true}
            duration={750}
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
