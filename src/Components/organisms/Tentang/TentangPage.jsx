import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TentangPage = () => {
  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <section className="flex flex-col justify-center items-center p-6 gap-6 pt-10 sm:pt-14">
      {/* TITLE */}
      <div className="w-full flex flex-col justify-center items-center">
        <motion.h1
          ref={textRef}
          initial={{ opacity: 0, y: -50 }}
          animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold londrina-black textShadow-title"
        >
          Tentang IT Is Fun
        </motion.h1>
        <motion.p
          ref={textRef}
          initial={{ opacity: 0, x: -50 }}
          animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="titillium-semibold w-full sm:w-3/4 text-justify sm:text-center"
        >
          IT Is Fun Studio adalah penyedia layanan jasa pembuatan website yang
          mengutamakan kualitas dan kepuasan pelanggan. Kami mengkhususkan diri
          dalam merancang dan mengembangkan website yang responsif, modern, dan
          fungsional, memastikan pengalaman pengguna yang optimal di semua
          perangkat. Dengan tim profesional yang berpengalaman, kami siap
          membantu Anda membangun kehadiran online yang kuat dan menarik.
        </motion.p>
      </div>

      {/* CARDS */}
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <motion.h1
          ref={textRef}
          initial={{ opacity: 0, y: -50 }}
          animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold londrina-black textShadow-title"
        >
          Developers
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-glass-light rounded-md backdrop-blur-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/No-photo-m.png" alt="tim kami" className="w-full rounded-t-md" />

          <p className="londrina-black textShadow-title text-2xl pt-4 text-center">
            Dimas Pamungkas
          </p>
          <p className="titillium-regular text-center pb-4">
            Fullstack Developer
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TentangPage;
