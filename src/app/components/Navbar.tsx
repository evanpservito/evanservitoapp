"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const pathname = usePathname();
  const navLinks = [
    { title: "Projects", path: "/#projects" },
    { title: "Experience", path: "/#experience" },
    { title: "Contact", path: "/#contact" },
  ];
  return (
    <motion.div
      className=""
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hidden md:flex flex-row justify-between fixed top-8 right-8 left-8">
        <Link href={"/"}>
          <p className="font-DMSans font-bold text-purple transition hover:scale-110 hover:duration-250 hover:text-white">
            {pathname === "/" ? "[ Evan Servito ]" : "[ Return Home ]"}
          </p>
        </Link>
        <div className="flex flex-row space-x-8 font-KodeMono">
          {navLinks.map((link) => (
            <Link key={link.title} href={link.path}>
              <p className="transition hover:scale-110 hover:duration-250 hover:text-purple">
                [ {link.title} ]
              </p>
            </Link>
          ))}
        </div>
      </div>

      <div className="md:hidden flex flex-row justify-between fixed top-8 right-8 left-8">
        <Link href={"/"}>
          <p className="font-DMSans font-bold text-purple transition hover:scale-110 hover:duration-250 hover:text-white">
            {pathname === "/" ? "[ ES ]" : "[ Return Home ]"}
          </p>
        </Link>
        {/* <RxHamburgerMenu size={21} /> */}
      </div>
    </motion.div>
  );
};

export default Navbar;
