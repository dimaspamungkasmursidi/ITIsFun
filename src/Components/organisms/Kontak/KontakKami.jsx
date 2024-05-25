import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../../atoms/Button";

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

      {/* CARD */}
      <div className="flex flex-col justify-center items-center w-full">
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 50 }}
          animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-2xl p-6 bg-glass-light rounded-md backdrop-blur-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
        >
          <form action="">
            <div>
              <label
                className="londrina-reguler font-semibold text-white"
                htmlFor="Name"
              >
                Nama kamu :
              </label>
              <input
                type="text"
                name="Name"
                id="Name"
                placeholder="Masukkan nama kamu"
                className="w-full p-1.5 mb-4 mt-1 bg-glass-light dark:bg-glass-dark backdrop-blur-md rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition duration-300 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
              />
            </div>
            <div>
              <label
                className="londrina-reguler font-semibold text-white"
                htmlFor="Email"
              >
                Email kamu :
              </label>
              <input
                type="email"
                name="Email"
                id="Email"
                placeholder="Masukkan email kamu"
                className="w-full p-1.5 mb-4 mt-1 bg-glass-light dark:bg-glass-dark backdrop-blur-md rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition duration-300 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
              />
            </div>
            <div>
              <label
                className="londrina-reguler font-semibold text-white"
                htmlFor="Message"
              >
                Pesan :
              </label>
              <textarea
                name="Message"
                id="Message"
                cols="30"
                rows="4"
                placeholder="Masukkan pesan yang mau kamu tanyakan"
                className="w-full p-1.5 mb-4 mt-1 bg-glass-light dark:bg-glass-dark backdrop-blur-md rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition duration-300 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
              ></textarea>
            </div>
          </form>
          <Button>Kirim</Button>
        </motion.div>
      </div>

      {/* IMAGE */}
      <div className="absolute hidden sm:block left-10 top-10">
        <motion.img
          ref={imageRef}
          initial={{ opacity: 0, x: 50 }}
          animate={imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="sm:w-72"
          src="/images/send1.png"
          alt="Image"
        />
      </div>
      <div className="absolute hidden sm:block right-8 top-8">
        <motion.img
          ref={imageRef}
          initial={{ opacity: 0, y: 50 }}
          animate={imageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="sm:w-72"
          src="/images/send2.png"
          alt="Image"
        />
      </div>
    </section>
  );
};

export default KontakKami;
