import React from 'react'
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
          className="titillium-semibold max-w-3xl text-justify sm:text-center"
        >
          IT Is Fun Studio adalah penyedia layanan jasa pembuatan website yang
          berkualitas. Bukan hanya itu, IT Is Fun juga menyediakan layanan
          pembuatan CV profesional.
        </motion.p>
      </div>
    </section>
  )
}

export default TentangPage
