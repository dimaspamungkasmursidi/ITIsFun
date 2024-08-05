import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../../atoms/Button";
import Form from "./Form";

const KontakKami = () => {
  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="relative flex flex-col justify-center items-center p-6 gap-6 pt-10 sm:pt-14">
      {/* TITLE */}
      <div className="w-full flex flex-col justify-center items-center">
        <motion.h1
          ref={textRef}
          initial={{ opacity: 0, y: -50 }}
          animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold londrina-black textShadow-title"
        >
          Kontak Kami
        </motion.h1>
        <motion.p
          ref={textRef}
          initial={{ opacity: 0, x: -50 }}
          animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="titillium-semibold max-w-3xl text-justify sm:text-center"
        >
          Jika ada yang ingin kamu tanyakan, jangan sungkan ya, silahkan hubungi kami.
        </motion.p>
      </div>

      {/* FORM */}
      <Form />
    </section>
  );
};

export default KontakKami;
