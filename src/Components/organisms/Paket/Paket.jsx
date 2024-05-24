import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../../atoms/Button";

const Paket = () => {
  const [textRef, textInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [cardRef, cardInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <>
      <section className="flex flex-col justify-center items-center p-6 sm:pt-14">
        {/* TEXT */}
        <div className="text-center">
          <motion.h1
            ref={textRef}
            className="text-4xl font-bold londrina-black textShadow-title"
            initial={{ opacity: 0, y: -50 }}
            animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            PAKET
          </motion.h1>
          <motion.p
            ref={textRef}
            className="titillium-semibold text-justify textShadow-desc"
            initial={{ opacity: 0, x: -50 }}
            animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
            optio illum numquam placeat.
          </motion.p>
        </div>

        {/* CARD */}
        <motion.div
          ref={cardRef}
          className="max-w-sm mx-auto p-6 bg-glass-light dark:bg-glass-dark rounded-md backdrop-blur-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
          initial={{ opacity: 0, y: 50 }}
          animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-white mb-2 londrina-regular">
            Profile Company Website
          </h2>
          <p className="text-white mb-4">
            Website profil perusahaan untuk mengenalkan produk, layanan, ataupun
            bisnis Anda. Cocok untuk UMKM, Bisnis, Sekolah, dan lain-lain.
          </p>
          <Button>Selengkapnya</Button>
        </motion.div>
      </section>
    </>
  );
};

export default Paket;
