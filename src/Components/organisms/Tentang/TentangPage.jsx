import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const TentangPage = () => {
  const animationConfig = {
    initial: { opacity: 0, y: 50 },
    transition: { duration: 0.8 },
  };

  const [visiRef, visiInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [misiRef, misiInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [kenapaRef, kenapaInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [devRef, devInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="flex flex-col justify-center items-center p-6 gap-12 pt-10 sm:pt-14">
      {/* BAGIAN ATAS - Langsung Muncul */}
      <div className="w-full flex flex-col justify-center items-center text-center gap-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold londrina-black textShadow-title"
        >
          Tentang IT Is Fun
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="titillium-regular w-full sm:w-3/4 text-justify sm:text-center"
        >
          IT Is Fun Studio adalah penyedia jasa pembuatan website yang fokus
          pada kualitas, efisiensi, dan desain modern. Kami memastikan
          pengalaman pengguna yang optimal dan siap mendampingi bisnis atau
          portofolio Anda tampil profesional di dunia digital.
        </motion.p>
      </div>

      {/* VISI & MISI */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        <motion.div
          ref={visiRef}
          {...animationConfig}
          animate={visiInView ? { opacity: 1, y: 0 } : {}}
          className="bg-glass-light p-6 rounded-lg shadow-md backdrop-blur-sm border"
        >
          <h2 className="text-2xl font-bold text-secondary mb-2">Visi Kami</h2>
          <p className="titillium-regular text-justify">
            Menjadi studio teknologi kreatif terpercaya di Indonesia yang
            membantu UMKM, individu, dan organisasi tumbuh secara digital.
          </p>
        </motion.div>

        <motion.div
          ref={misiRef}
          {...animationConfig}
          animate={misiInView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...animationConfig.transition, delay: 0.2 }}
          className="bg-glass-light p-6 rounded-lg shadow-md backdrop-blur-sm border"
        >
          <h2 className="text-2xl font-bold text-secondary mb-2">Misi Kami</h2>
          <ul className="list-disc list-inside titillium-regular space-y-1">
            <li>
              Menyediakan layanan web development berkualitas & terjangkau
            </li>
            <li>Memberikan solusi teknologi yang efisien dan tepat sasaran</li>
            <li>
              Membantu UMKM, organisasi, dan individu tumbuh secara digital
            </li>
          </ul>
        </motion.div>
      </div>

      {/* KENAPA MEMILIH KAMI */}
      <motion.div
        ref={kenapaRef}
        {...animationConfig}
        animate={kenapaInView ? { opacity: 1, y: 0 } : {}}
        transition={{ ...animationConfig.transition, delay: 0.3 }}
        className="w-full max-w-4xl bg-white/20 backdrop-blur-md rounded-lg p-6 shadow-md border"
      >
        <h2 className="text-2xl font-bold text-secondary mb-4 text-center">
          Kenapa Memilih Kami?
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 titillium-regular">
          <li>✅ Desain Custom, Responsif, & Modern</li>
          <li>✅ Gratis Domain & Hosting</li>
          <li>✅ Revisi Gratis</li>
          <li>✅ SEO Friendly dan Cepat Diakses</li>
          <li>✅ Dukungan Pelanggan 24/7</li>
          <li>✅ Tim Berpengalaman di Bidangnya</li>
          <li>✅ Harga Terjangkau</li>
          <li>✅ Garansi Uang Kembali</li>
          <li>✅ Proses Cepat dan Efisien</li>
          <li>✅ Pembayaran Mudah dan Aman</li>
          <li>✅ Pembayaran diakhir proyek</li>
          <li>✅ Dan banyak lagi..</li>
        </ul>
      </motion.div>

      {/* DEVELOPER CARD */}
      {/* <div className="w-full flex flex-col justify-center items-center gap-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-4xl font-bold londrina-black textShadow-title"
        >
          Developers
        </motion.h1>

        <motion.div
          ref={devRef}
          {...animationConfig}
          animate={devInView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...animationConfig.transition, delay: 0.4 }}
          className="bg-glass-light rounded-md backdrop-blur-md border shadow-md p-4 w-72 text-center hover:scale-105 transition duration-300"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/No-photo-m.png"
            alt="tim kami"
            className="w-full h-60 object-cover rounded-t-md"
          />
          <p className="londrina-black textShadow-title text-2xl pt-4">
            Dimas Pamungkas
          </p>
          <p className="titillium-regular mb-2">Fullstack Developer</p>
          <div className="flex justify-center gap-4 text-secondary text-xl">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:someone@example.com">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
      </div> */}
    </section>
  );
};

export default TentangPage;
