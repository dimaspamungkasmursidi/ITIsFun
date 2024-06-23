import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const container = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.header
      variants={container}
      initial="hidden"
      animate="visible"
      layout
      className="flex justify-between bg-opacity-50 backdrop-blur-lg gradientNav sm:items-center border-none bg-tertiary py-4 sm:py-0 px-6 sm:px-12"
    >
      {/* LOGO */}
      <div>
        <figure>
          <Link to="/">
            <img
              src="/darklogo.png"
              alt="logo"
              width="100"
              height="40"
            />
          </Link>
        </figure>
      </div>

      {/* MOBILE MENU TOGGLE */}
      <div className="relative">
        <div className="sm:hidden">
          <button
            onClick={toggleOpen}
            className="focus:outline-none transition-all duration-300"
          >
            {isOpen ? (
              <div className="w-6 h-14">
                <svg
                  className="w-8 h-8 absolute right-0 top-1 cursor-pointer"
                  fill="none"
                  stroke="black"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </div>
            ) : (
              <svg
                className="w-8 h-8 absolute right-0 top-1"
                fill="none"
                stroke="black"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* NAV */}
        <div className="pr-6 sm:pr-0">
          <nav
            className={`${
              isOpen ? "block" : "hidden"
            } sm:flex sm:items-center sm:space-x-6 transition-all duration-300`}
          >
            <ul className="group flex flex-col pb-6 text-lg sm:pt-4 sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              {["Beranda", "Paket", "Kontak", "Tentang"].map((text, index) => (
                <motion.li
                  key={index}
                  variants={item}
                  whileHover={{ scale: 1.1, color: "#FC4A1A" }}
                  className="cursor-pointer font-bold text-dark"
                >
                  <Link to={`/${text.toLowerCase()}`}>{text}</Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}

export default Navigation;
