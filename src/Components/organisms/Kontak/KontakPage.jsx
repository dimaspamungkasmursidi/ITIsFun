import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Form from "./Form";
import { CiLinkedin, CiInstagram, CiMail } from "react-icons/ci";
import { AiOutlineWhatsApp } from "react-icons/ai";

const KontakPage = () => {
  const [textRef, textInView] = useInView({
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
          initial={{ opacity: 0, y: 50 }}
          animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="titillium-semibold max-w-3xl text-justify sm:text-center"
        >
          Beri kami masukan terhadap website IT Is Fun Studio ini untuk
          meningkatkan kualitas layanan kami dan memastikan bahwa kami dapat
          memenuhi kebutuhan Anda dengan lebih baik. Kami menghargai setiap
          umpan balik yang Anda berikan, karena hal ini membantu kami untuk
          terus berinovasi dan memberikan pengalaman pengguna yang optimal.
          Terima kasih atas partisipasi Anda!
        </motion.p>
      </div>

      {/* SOCIAL MEDIA */}
      <div className="flex flex-col justify-center items-center">
        <motion.h1
          ref={textRef}
          initial={{ opacity: 0, y: -50 }}
          animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold londrina-black textShadow-title"
        >
          Sosial Media
        </motion.h1>
        <div className="flex flex-row justify-center items-center gap-6">
        <a href="https://www.instagram.com/dmspamungkass/">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <button disabled>
              <CiInstagram size={60} />
            </button>
          </motion.div>
        </a>
        <a href="https://www.linkedin.com/in/dimas-pamungkas-mursidi-7511b9262/">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <button disabled>
              <CiLinkedin size={60} />
            </button>
          </motion.div>
        </a>
        <a href="mailto:dmspmksmrsdi@gmail.com">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <button disabled>
              <CiMail size={60} />
            </button>
          </motion.div>
        </a>
        <a href="https://api.whatsapp.com/send?phone=6288297894942">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <button disabled>
              <AiOutlineWhatsApp size={54} />
            </button>
          </motion.div>
        </a>
        </div>
      </div>
      {/* FORM */}
        <div>
      <motion.p
          ref={textRef}
          initial={{ opacity: 0, y: -50 }}
          animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="titillium-semibold max-w-3xl text-justify sm:text-center"
        >
          Jika ada yang ingin kamu tanyakan juga jangan sungkan ya, silahkan hubungi
          kami.
        </motion.p>
        </div>
      <Form />
    </section>
  );
};

export default KontakPage;
