import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../../atoms/Button";
import { FaWhatsapp } from "react-icons/fa";

const items = [
  {
    title: "Landing Page",
    desc1: "Landing Page Website untuk apapun, bisa untuk personal website, memperkenalkan maupun profil website bisnis anda. Cocok untuk semua kebutuhan anda.",
    desc2: "Harga tergantung dari pemilihan desain custom atau bukan serta panjangnya website 3 - 5 section.",
    price: "Rp.50.000 - Rp.100.000",
  },
  {
    title: "Profile Company Website",
    desc1: "Website profil perusahaan untuk mengenalkan produk, layanan, ataupun bisnis Anda. Cocok untuk UMKM, Bisnis, Sekolah, dan lain-lain.",
    desc2: "Harga tergantung dari pemilihan desain custom atau bukan serta dari jumlah halaman website tersebut.",
    price: "Rp.150.000 - Rp.500.000",
  },
  {
    title: "Personal Website",
    desc1: "Website profil perusahaan untuk mengenalkan produk, layanan, ataupun bisnis Anda. Cocok untuk UMKM, Bisnis, Sekolah, dan lain-lain.",
    price: "Rp. 1.000.000",
  },
];

const generateWhatsAppLink = (shopName) => {
  const phoneNumber = "6288297894942"; // Ganti dengan nomor WhatsApp Anda
  const message = `Halo min, saya ingin bertanya tentang produk *${shopName}*.`;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};

const Paket = () => {
  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [cardRef, cardInView] = useInView({
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
      <section className="flex flex-col justify-center items-center p-6 sm:pt-14">
        {/* TEXT */}
        <div className="text-center">
          <motion.h1
            ref={textRef}
            className="text-4xl font-bold londrina-black textShadow-title"
            initial={{ opacity: 0, y: -50 }}
            animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            Paket
          </motion.h1>
          <motion.p
            ref={textRef}
            className="titillium-semibold text-justify textShadow-desc1"
            initial={{ opacity: 0, x: -50 }}
            animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
            optio illum numquam placeat.
          </motion.p>
        </div>

        {/* CARD */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              ref={cardRef}
              key={index}
              className="max-w-sm mx-auto p-6 bg-glass-light dark:bg-glass-dark rounded-md backdrop-blur-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
              initial={{ opacity: 0, y: 50 }}
              animate={
                cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-white mb-2 londrina-regular">
                {item.title}
              </h2>
              <p className="text-white line-clamp-3 mb-2">{item.desc1}</p>
              <p className="text-secondary font-bold mb-4 animate-pulse line-clamp-3">{item.price}</p>
              <Button onClick={() => openModal(item)}>Selengkapnya</Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {modalVisible && selectedItem && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <motion.div
            className="relative bg-white p-6 rounded-lg shadow-lg text-dark"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="londrina-regular text-2xl font-bold mb-4 text-black">
              {selectedItem.title}
            </h2>
            <button
              onClick={closeModal}
              className="w-6 text-2xl text-gray-500 hover:text-gray-700 absolute top-2 right-4"
            >
              ✖
            </button>
            <p className="text-dark font-semibold">Deskripsi :</p>
            <p className="text-dark text-justify indent-5 sm:indent-0">{selectedItem.desc1}</p>
            <p className="mb-4 text-dark text-justify indent-5 sm:indent-0">{selectedItem.desc2}</p>
            <p className="mb-4 font-bold text-dark">{selectedItem.price}</p>
            <a
              href={generateWhatsAppLink(selectedItem.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-40 px-6 py-2 rounded bg-secondary text-white hover:bg-primary hover:text-dark shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] transition duration-300 ease-in-out"
            >
              <FaWhatsapp className="mr-2 text-green-500 hover:text-white" />
              Lebih Lanjut
            </a>
            {/* <Button className="text-center"><FaWhatsapp className="mr-2" />Lebih Lanjut</Button> */}
            {/* <button onClick={closeModal}>Close</button> */}
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Paket;
