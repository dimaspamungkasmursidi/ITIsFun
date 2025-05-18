import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("/");

  useEffect(() => {
    setActiveItem(window.location.pathname);
  }, []);

  const menuItems = [
    { title: "Beranda", href: "/" },
    { title: "Paket", href: "/paket" },
    { title: "Pilihan Design", href: "/contohwebsite" },
    // { title: "Portofolio", href: "/portofolio" },
    { title: "Tentang", href: "/tentang" },
    { title: "Kontak", href: "/kontak" },
  ];

  const menuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    // <nav className="backdrop-blur-lg gradientNav p-4 sticky top-0 z-50">
    <nav className="backdrop-blur-lg gradientNav p-4">
      <div className="mx-auto md:px-6">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/">
              <motion.img
                src="darklogo.png"
                alt="Logo"
                className="h-10 w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
            </Link>
          </motion.div>

          <div className="hidden md:flex space-x-6">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover="hover"
              >
                <Link
                  to={item.href}
                  className={`transition duration-300 py-2 ${
                    activeItem === item.href ? "font-bold text-secondary" : ""
                  }`}
                  onClick={() => setActiveItem(item.href)}
                >
                  <motion.span
                    className="text-dark px-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.title}
                  </motion.span>
                  <motion.span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-secondary origin-left ${
                      activeItem === item.href ? "scale-x-100" : "scale-x-0"
                    }`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: activeItem === item.href ? 1 : 0 }}
                    variants={{
                      hover: {
                        scaleX: 1,
                        transition: {
                          duration: 0.3,
                          ease: "easeInOut",
                        },
                      },
                    }}
                  />
                </Link>
                <motion.span
                  className="absolute top-0 left-0 w-full h-full bg-secondary -z-10"
                  initial={{ opacity: 0 }}
                  variants={{
                    hover: {
                      opacity: 0.1,
                      transition: {
                        duration: 0.3,
                      },
                    },
                  }}
                />
              </motion.div>
            ))}
          </div>

          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-dark p-2 rounded-md hover:bg-tertiary transition duration-300"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6 cursor-pointer"
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
              ) : (
                <svg
                  className="w-6 h-6 cursor-pointer"
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
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden mt-6 border-b pb-4"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
            >
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className={`block py-2 px-4 hover:bg-tertiary rounded-md transition duration-300 ${
                    activeItem === item.href
                      ? "bg-tertiary font-bold text-white"
                      : ""
                  }`}
                  onClick={() => {
                    setActiveItem(item.href);
                    setIsOpen(false);
                  }}
                >
                  <motion.span
                    className="text-dark"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.title}
                  </motion.span>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
