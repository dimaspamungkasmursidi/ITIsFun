import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Button from "../../atoms/Button";

const items = [
  {
    title: "Profile Company Website",
    desc: "Website profil perusahaan untuk mengenalkan produk, layanan, ataupun bisnis Anda. Cocok untuk UMKM, Bisnis, Sekolah, dan lain-lain.",
    price: "Rp. 1.000.000",
  },
  {
    title: "Profile Company Website",
    desc: "Website profil perusahaan untuk mengenalkan produk, layanan, ataupun bisnis Anda. Cocok untuk UMKM, Bisnis, Sekolah, dan lain-lain.",
    price: "Rp. 1.000.000",
  },
  {
    title: "Profile Company Website",
    desc: "Website profil perusahaan untuk mengenalkan produk, layanan, ataupun bisnis Anda. Cocok untuk UMKM, Bisnis, Sekolah, dan lain-lain.",
    price: "Rp. 1.000.000",
  },
  {
    title: "Profile Company Website",
    desc: "Website profil perusahaan untuk mengenalkan produk, layanan, ataupun bisnis Anda. Cocok untuk UMKM, Bisnis, Sekolah, dan lain-lain.",
    price: "Rp. 1.000.000",
  },
];

const Paket = () => {
  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [selectedItem, setSelectedItem] = useState(null); // Nama harus dimulai dengan huruf kapital

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const generateWhatsAppLink = (itemTitle) => {
    const phoneNumber = "6288297894942";
    const message = `Halo min, saya ingin membeli produk *${itemTitle}*. Pembayaran melalui *isi*.`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <>
      <section className="flex flex-col justify-center items-center p-6 sm:pt-14">
        <div className="text-center">
          <motion.h1
            ref={textRef}
            className="text-4xl font-bold londrina-black textShadow-title"
            initial={{ opacity: 0, y: -50 }}
            animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            PAKET
          </motion.h1>
          <motion.p
            ref={textRef}
            className="titillium-semibold text-justify textShadow-desc"
            initial={{ opacity: 0, x: -50 }}
            animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
            optio illum numquam placeat.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="max-w-sm mx-auto p-6 bg-glass-light dark:bg-glass-dark rounded-md backdrop-blur-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-2 londrina-regular">
                {item.title}
              </h2>
              <p className="text-white mb-4">{item.desc}</p>
              <Button onClick={() => openModal(item)}>Selengkapnya</Button>
            </motion.div>
          ))}
        </div>

        {selectedItem && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">{selectedItem.title}</h2>
                <button
                  onClick={closeModal}
                  className="w-6 text-2xl text-gray-500 hover:text-gray-700"
                >
                  ✖
                </button>
              </div>
              <p className="text-primary font-semibold">Deskripsi :</p>
              <p className="text-gray-700 mb-2">{selectedItem.desc}</p>
              <p className="text-primary font-semibold">Harga :</p>
              <p className="text-gray-700 mb-2">{selectedItem.price}</p>
              <br />
              <a
                href={generateWhatsAppLink(selectedItem.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-primary transition"
              >
                Beli
              </a>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Paket;








// CARD BAGUS BISA DI PAKAI JANGASN DI HAPUS!!!



// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import Button from "../../atoms/Button";

// const items = [
//   {
//     title: "Profile Company Website",
//     desc: "Website profil perusahaan untuk mengenalkan produk, layanan, ataupun bisnis Anda. Cocok untuk UMKM, Bisnis, Sekolah, dan lain-lain.",
//     price: "Rp. 1.000.000",
//   },
//   {
//     title: "Profile Company Website",
//     desc: "Website profil perusahaan untuk mengenalkan produk, layanan, ataupun bisnis Anda. Cocok untuk UMKM, Bisnis, Sekolah, dan lain-lain.",
//     price: "Rp. 1.000.000",
//   },
//   {
//     title: "Profile Company Website",
//     desc: "Website profil perusahaan untuk mengenalkan produk, layanan, ataupun bisnis Anda. Cocok untuk UMKM, Bisnis, Sekolah, dan lain-lain.",
//     price: "Rp. 1.000.000",
//   },
// ];

// const Test = () => {
//   const [textRef, textInView] = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });
//   const [cardRef, cardInView] = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });
  
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);

//   const openModal = (item) => {
//     setSelectedItem(item);
//     setModalVisible(true);
//   };

//   const closeModal = () => {
//     setModalVisible(false);
//     setSelectedItem(null);
//   };

//   return (
//     <>
//       <section className="flex flex-col justify-center items-center p-6 sm:pt-14">
//         {/* TEXT */}
//         <div className="text-center">
//           <motion.h1
//             ref={textRef}
//             className="text-4xl font-bold londrina-black textShadow-title"
//             initial={{ opacity: 0, y: -50 }}
//             animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
//             transition={{ duration: 0.8 }}
//           >
//             TEST
//           </motion.h1>
//           <motion.p
//             ref={textRef}
//             className="titillium-semibold text-justify textShadow-desc"
//             initial={{ opacity: 0, x: -50 }}
//             animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
//             optio illum numquam placeat.
//           </motion.p>
//         </div>

//         {/* CARD */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {items.map((item, index) => (
//             <motion.div
//               ref={cardRef}
//               key={index}
//               className="max-w-sm mx-auto p-6 bg-glass-light dark:bg-glass-dark rounded-md backdrop-blur-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
//               initial={{ opacity: 0, y: 50 }}
//               animate={
//                 cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
//               }
//               transition={{ duration: 0.8 }}
//             >
//               <h2 className="text-2xl font-bold text-white mb-2 londrina-regular">
//                 {item.title}
//               </h2>
//               <p className="text-white mb-4">{item.desc}</p>
//               <Button onClick={() => openModal(item)}>Selengkapnya</Button>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* MODAL */}
//       {modalVisible && selectedItem && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <motion.div
//             className="relative bg-white p-6 rounded-lg shadow-lg text-dark"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.3 }}
//           >
//             <h2 className="text-2xl font-bold mb-2 text-dark">{selectedItem.title}</h2>
//               <button
//                 onClick={closeModal}
//                 className="w-6 text-2xl text-gray-500 hover:text-gray-700 absolute top-2 right-4"
//               >
//                 ✖
//               </button>
//             <p className="mb-4 text-dark">{selectedItem.desc}</p>
//             <p className="mb-4 text-dark">{selectedItem.price}</p>
//             <button onClick={closeModal}>Close</button>
//           </motion.div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Test;
