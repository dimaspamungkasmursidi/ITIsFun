import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const [container, containerInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.footer
      ref={container}
      initial={{ opacity: 0 }}
      animate={containerInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1.8 }}
      className="gradientFooter py-4 mt-8"
    >
      <div className="flex flex-col justify-center items-center pt-2 sm:py-0 px-4 sm:px-12">
        
        <div className="flex flex-col justify-center items-center">
          <Link to="/">
          <img src="darklogo.png" alt="Logo" className="w-20 h-10" />
          </Link>
          <p className="text-center text-dark">
            &copy; 2024 IT Is Fun Studio. All Rights Reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
