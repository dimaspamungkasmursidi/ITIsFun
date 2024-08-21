import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../../atoms/Button";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const items = [
  {
    title: "Landing Page Reguler",
    desc1:
      "Landing Page Website untuk apapun, bisa untuk personal website, memperkenalkan produk, ataupun profil website bisnis. Cocok untuk semua kebutuhan.",
    desc2:
      "Maximal 5 section\n Desain Template/Custom Simple\n Responsif di semua perangkat\n SEO friendly\n Free Hosting\n Free Domain .my.id (1 Tahun)\n Gratis revisi 2X",
    price: "Rp.170.000",
    animation: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
    },
    image: "/images/1st.png",
  },
  {
    title: "Profile Company Premium",
    desc1:
      "Website profil perusahaan untuk mengenalkan produk, layanan, ataupun bisnis Anda. Cocok untuk UMKM, Bisnis, Sekolah, dan lain-lain.",
    desc2:
      "Maximal 5 Halaman\n Desain Custom\n Responsif di semua perangkat\n SEO friendly\n Free Hosting \n Free Domain .my.id (1 Tahun)\n Gratis revisi 2X",
    price: "Rp.270.000",
    animation: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
    },
    image: "/images/2nd.png",
  },
  {
    title: "Website Custom",
    desc1:
      "Website Profesional dengan Desain dan Fitur bebas request sesuai keinginan, Cocok untuk semua kebutuhan.",
    desc2:
      "Desain Custom\n Request Fitur\n Bebas Pilih Domain\n Responsif di semua perangkat\n SEO friendly\n Dan Lain-lain",
    price: "Rp.-",
    animation: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
    },
    image: "/images/3rd.png",
  },
];

const generateWhatsAppLink = (itemName) => {
  const phoneNumber = "6288297894942";
  const message = `Halo min, saya ingin bertanya tentang produk *${itemName}*.`;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};

const PaketBeranda = () => {
  const [animateRef, animateInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };

  return (
    <>
      <section className="flex flex-col justify-center items-center p-6 sm:px-8 gap-6 pt-16 sm:pt-20">
        {/* TEXT */}
        <div className="flex flex-col justify-center items-center">
          <motion.h1
            ref={animateRef}
            className="text-4xl font-bold londrina-black textShadow-title"
            initial={{ opacity: 0, y: -50 }}
            animate={
              animateInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.8 }}
          >
            Paket Populer
          </motion.h1>
        </div>

        {/* CARD */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => {
            const [cardRef, cardInView] = useInView({
              triggerOnce: true,
              threshold: 0.2,
            });

            return (
              <motion.div
                ref={cardRef}
                key={index}
                className="reltive max-w-sm mx-auto p-6 bg-white/20 backdrop-blur-md rounded-md border shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                initial={item.animation.initial}
                animate={
                  cardInView ? item.animation.animate : item.animation.initial
                }
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <h2 className="text-2xl font-bold text-white mb-2 londrina-regular textShadow-title">
                  {item.title}
                </h2>
                <p className="text-white line-clamp-3 mb-2">{item.desc1}</p>
                <p className="text-secondary font-bold mb-4 animate-pulse line-clamp-3">
                  {item.price}
                </p>
                <Button onClick={() => openModal(item)}>Selengkapnya</Button>
                <div className="absolute -top-4 -right-4 md:-top-8 md:-right-4">
                  <img
                    src={item.image}
                    alt="Top Paket"
                    className="w-auto h-16 md:w-auto md:h-20 animate-waving-hand"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="flex gap-2 sm:gap-6 mt-4">
          <Link to="/paket">
            <Button>Paket Lainnya</Button>
          </Link>
          <Link to="/contohwebsite">
            <Button color="bg-dark text-white hover:bg-tertiary hover:text-dark">Pilihan Desain</Button>
          </Link>
        </div>
      </section>

      {/* MODAL */}
      {modalVisible && selectedItem && (
        <section
          className="fixed inset-0 p-4 flex items-center justify-center bg-black/50 backdrop-blur-md z-50"
          onClick={closeModal}
        >
          <motion.div
            className="relative max-w-4xl bg-tertiary p-6 rounded-lg shadow-lg text-dark"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="londrina-regular text-2xl font-bold mb-4 text-black">
              {selectedItem.title}
            </h2>
            <motion.button
              onClick={closeModal}
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 1 }}
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
              className="w-6 text-2xl text-secondary hover:text-gray-700 absolute top-2 right-4"
            >
              ✖
            </motion.button>
            <p className="text-dark font-semibold">Deskripsi :</p>
            <p className="text-dark text-justify indent-5 sm:indent-0 mb-2">
              {selectedItem.desc1}
            </p>
            <p className="text-dark font-semibold">Spesifikasi :</p>
            <p className="text-dark text-justify indent-2 mb-4">
              <ul className="list-disc list-inside">
                {selectedItem.desc2.split("\n").map((item, index) => (
                  <li className="text-dark" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </p>
            <p className="text-[18px] font-bold text-secondary animate-pulse">
              Untuk melihat paket lainnya{" "}
              <Link to="/paket" className="text-primary">
                (Klik Disini)
              </Link>
            </p>
            <p className="mt-2 mb-4 text-[18px] font-bold text-dark">
              {selectedItem.price}
            </p>
            <a
              href={generateWhatsAppLink(selectedItem.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-40 px-6 py-2 rounded bg-secondary text-white hover:bg-primary hover:text-dark shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] transition duration-300 ease-in-out"
            >
              <FaWhatsapp className="mr-2 text-green-500 hover:text-white" />
              Lebih Lanjut
            </a>
          </motion.div>
        </section>
      )}
    </>
  );
};

export default PaketBeranda;
