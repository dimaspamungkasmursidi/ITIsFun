import React from "react";
import { motion } from "framer-motion";
import Button from "../../atoms/Button";

const Hero = () => {
  const container = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delayChildren: 1,
        staggerChildren: 1,
      },
    },
  };

  return (
    <section className="flex justify-center py-6 lg:flex-nowrap xl:justify-between items-center flex-wrap-reverse sm:px-10">
      {/* Left */}
      <div className="flex flex-col gap-6 md:max-w-xl mt-6 px-6">
        <div>
          <motion.h1
            className="text-5xl font-bold londrina-black textShadow-title"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            IT Is Fun Studio
          </motion.h1>
          <motion.p
            className="titillium-semibold text-justify textShadow-desc"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Kami menyediakan jasa pembuatan website yang sesuai dengan kebutuhan
            Anda, dengan tampilan yang responsif memastikan pengalaman pengguna
            yang optimal di semua perangkat.
            <span className="hidden sm:block">
              Dengan desain modern dan fungsionalitas yang tinggi, kami membantu
              Anda membangun kehadiran online yang kuat dan menarik.
            </span>
          </motion.p>
        </div>
        <div>
          <div>
            <Button>Layanan</Button>
          </div>
        </div>
      </div>

      {/* Right */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        className="mt-10 px-4"
      >
        <figure className="max-w-sm md:max-w-lg">
          <img src="/images/hero.gif" alt="Hero.gif" />
        </figure>
      </motion.div>
    </section>
  );
};

export default Hero;
