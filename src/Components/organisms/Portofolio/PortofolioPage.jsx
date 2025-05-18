import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Dummy data
const portfolioItems = [
  {
    title: "Website UMKM Kopi Makmur",
    image: "https://via.placeholder.com/400x250?text=Kopi+Makmur",
    link: "https://kopimakmur.com",
    description: "Website katalog produk dan pemesanan untuk UMKM Kopi Makmur.",
  },
  {
    title: "Landing Page Personal Trainer",
    image: "https://via.placeholder.com/400x250?text=Personal+Trainer",
    link: "https://fitcoach.id",
    description: "Landing page promosi jasa pelatih kebugaran profesional.",
  },
  {
    title: "Profile Company Sekolah",
    image: "https://via.placeholder.com/400x250?text=Sekolah+XYZ",
    link: "https://sekolahxyz.sch.id",
    description: "Website profil resmi sekolah dengan fitur berita dan galeri.",
  },
];

const PortfolioCard = ({ item, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-glass-light rounded-lg overflow-hidden shadow-lg backdrop-blur-sm border"
    >
      <img src={item.image} alt={item.title} className="w-full h-52 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-secondary mb-1">{item.title}</h3>
        <p className="titillium-regular text-sm text-dark mb-3">{item.description}</p>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-secondary text-white rounded hover:bg-primary transition duration-300 text-sm"
        >
          Lihat Website
        </a>
      </div>
    </motion.div>
  );
};

const PortofolioPage = () => {
  return (
    <section className="flex flex-col items-center px-6 py-12 gap-10">
      {/* HEADER */}
      <div className="text-center max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold londrina-black textShadow-title mb-4"
        >
          Portofolio Kami
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="titillium-regular text-dark text-justify sm:text-center"
        >
          Berikut adalah beberapa website yang telah kami buat untuk klien dari berbagai latar belakang, mulai dari UMKM, institusi pendidikan, hingga profesional individu.
        </motion.p>
      </div>

      {/* PORTFOLIO GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {portfolioItems.map((item, index) => (
          <PortfolioCard key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default PortofolioPage;
