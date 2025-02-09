import Link from "next/link";

const Navbar = () => {
  const navLinks = [
    { title: "Projects", path: "#projects" },
    { title: "Experience", path: "#experience" },
    { title: "Contact", path: "#contact" },
  ];
  return (
    <div className="w-full flex flex-row justify-between sticky top-0">
      <p className="font-DMSans font-bold text-purple">[ Evan Servito ]</p>
      <div className="flex flex-row space-x-8 font-KodeMono">
        {navLinks.map((link) => (
          <Link key={link.title} href={link.path}>
            <p className="hover:text-white/50">[ {link.title} ]</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
