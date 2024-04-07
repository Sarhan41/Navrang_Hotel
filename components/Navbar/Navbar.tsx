"use client";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenuAltLeft } from "react-icons/bi";
import Image from "next/image";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [toggle, settoggle] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollCheck = window.scrollY > 0;
      if (scrollCheck) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-screen flex paddingX   py-2 top-0 fixed z-20 ${
        scroll ? "bg-blue-100" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
      <div className="flex items-center">
  <Link
    scroll={false}
    href="/"
    onClick={() => {
      setActive("");
      window.scrollTo(0, 0);
    }}
    className="text-white cursor-pointer flex items-center"
  >
    <Image src="/logo.png" height={29} width={45} alt="logo" />
  </Link>
  <h3 className="font-mono font-bold text-3xl ml-3 text-white">
    <span className="text-green-400">N</span>
    <span className="text-blue-400">A</span>
    <span className="text-red-400">V</span>
    <span className="text-yellow-400">R</span>
    <span className="text-purple-400">A</span>
    <span className="text-indigo-400">N</span>
    <span className="text-gray-400">G</span>
  </h3>
</div>

        <div className="flex gap-16">
          {/* Desktop Navigation */}
          <ul
            id="desktopnav"
            className="hidden md:flex gap-10 xl:gap-16 list-none"
          >
            {NAV_LINKS.map((link) => (
              <Link
              scroll={true}
                href={link.url}
                key={link.name}
                className={`text-xl font-medium ${
                  active === link.name
                  ? "text-orange-400"
                  : "text-black"
              } hover:text-green-50`}
                onClick={() => setActive(link.name)}
              >
                <li>{link.name}</li>
              </Link>
            ))}
          </ul>
          <div className="flex gap-8">
            {/* Mobile Navigation */}
            <div id="mobilenav" className="md:hidden block">
              <div onClick={() => settoggle(!toggle)} className="cursor-pointer">
                {" "}
                {toggle ? (
                  <AiOutlineClose className="h-8 w-8" />
                ) : (
                  <BiMenuAltLeft className="h-8 w-8" />
                )}
              </div>
            </div>
          </div>

          <ul
            className={`
       ${toggle ? "flex absolute" : "hidden"}
       flex flex-col gap-2 p-6 Navmenu top-20 right-0 mx-4 my-2 min-w-[140px] z-40 rounded-xl shadow-lg list-none border border-orange-50`}
          >
            {NAV_LINKS.map((link) => (
              <Link
                href={link.url}
                key={link.key}
                className={`cursor-pointer font-medium ${
                  active === link.name
                    ? "text-orange-400"
                    : "text-black"
                } hover:text-green-100`}
                onClick={() => {
                  setActive(link.name);
                  settoggle(false);
                }}
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
