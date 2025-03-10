import React, { useState } from "react";
import { RiCloseFill, RiMenuFill } from "@remixicon/react";
import { motion } from "framer-motion";
import { LINKS } from "../data";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-5 left-0 w-full z-50 px-4">
      {/* NAVBAR */}
      <div className="flex justify-between items-center max-w-6xl mx-2 md:mx-auto my-4 bg-stone-950/30 py-4 px-6 rounded-xl backdrop-blur-lg">
        {/* LOGO */}
        <div className="text-white font-semibold text-lg md:text-xl uppercase">
          <a
            href=""
            className="hover:text-yellow-400 transition-all duration-500"
          >
            ANDRE
            <span className="bg-gradient-to-l from-blue-500 to-pink-500 bg-clip-text text-transparent font-bold">
              FSB
            </span>{" "}
            |
          </a>
        </div>

        {/* DESKTOP/TABLET MENU */}
        <div className="hidden md:flex space-x-8">
          {LINKS.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="text-white text-lg hover:text-stone-400 transition duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* MOBILE NAVBAR */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <RiCloseFill className="w-6 h-6" />
            ) : (
              <RiMenuFill className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:hidden text-lg mx-2 p-6 bg-stone-950/30 backdrop-blur-lg rounded-xl flex flex-col space-y-8 max-w-6xl"
        >
          {LINKS.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="text-white hover:text-stone-400 transition duration-300"
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
