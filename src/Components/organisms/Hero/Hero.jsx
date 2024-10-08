import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../../atoms/Button";

const generateWhatsAppLink = () => {
  const phoneNumber = "6288297894942"; // Ganti dengan nomor WhatsApp Anda
  const message = `Halo min, saya ingin bertanya tentang paket website.`;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};

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
    <section className="flex flex-col items-center">
      <section className="flex justify-center mb-[4rem] sm:mb-4 sm:py-10 lg:flex-nowrap xl:justify-between items-center flex-wrap-reverse sm:px-8">
        {/* Left */}
        <div className="flex flex-col gap-6 md:max-w-xl mt-6 px-4">
          <div>
            <motion.h1
              className="text-5xl font-bold londrina-black textShadow-title mb-2"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              IT Is Fun Studio
            </motion.h1>
            <motion.p
              className="titillium-semibold text-justify textShadow-desc opacity-5 transform-none"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Kami menyediakan jasa pembuatan website profesional yang sesuai
              dengan kebutuhan. dengan tampilan yang responsif memastikan
              pengalaman pengguna yang optimal di semua perangkat.
              <span className="hidden sm:block">
                Dengan desain modern dan fungsionalitas yang tinggi, kami
                membantu Anda membangun kehadiran online yang kuat dan menarik.
              </span>
            </motion.p>
          </div>
          <div className="flex gap-4">
            <Link to="/paket">
              <Button>Layanan</Button>
            </Link>
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button color="bg-dark text-white hover:bg-tertiary hover:text-dark">
                Konsultasi Gratis
              </Button>
            </a>
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
            <img
              src="/images/hero.webp"
              alt="Hero.webp"
              className="w-auto h-auto"
            />
          </figure>
        </motion.div>
      </section>
    </section>
  );
};

export default Hero;
