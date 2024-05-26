//  CARD AWAL

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import Button from "../../atoms/Button";
// import { FaWhatsapp } from "react-icons/fa";

// const items = [
//     // LANDING PAGE
//     {
//       title: "Landing Page Simpel",
//       desc1:
//         "Landing Page Website untuk apapun, bisa untuk personal website, memperkenalkan maupun profil website bisnis anda. Cocok untuk semua kebutuhan anda.",
//       desc2:
//         "1 halaman 3 section, Hosting gratis di vercel.app (hanya bisa diakses melalui link), Desain dari template yang sudah tersedia.",
//       price: "Rp.50.000",
//       animation: {
//         initial: { opacity: 0, scale: 0.8 },
//         animate: { opacity: 1, scale: 1 },
//       },
//       category: "Landing Page",
//     },
//     {
//       title: "Landing Page Reguler",
//       desc1:
//         "Landing Page Website untuk apapun, bisa untuk personal website, memperkenalkan maupun profil website bisnis anda. Cocok untuk semua kebutuhan anda.",
//       desc2:
//         "1 Halaman maksimal 5 section, Hosting gratis di vercel.app (hanya bisa diakses melalui link), Desain custom.",
//       price: "Rp.70.000",
//       keterangan: "Dapat Source Code",
//       animation: {
//         initial: { opacity: 0, x: 50 },
//         animate: { opacity: 1, x: 0 },
//       },
//       category: "Landing Page",
//     },
//     {
//       title: "Landing Page Premium",
//       desc1:
//         "Landing Page Website untuk apapun, bisa untuk personal website, memperkenalkan maupun profil website bisnis anda. Cocok untuk semua kebutuhan anda.",
//       desc2:
//         "1 Halaman maksimal 10 section, Hosting gratis di vercel.app (hanya bisa diakses melalui link), Desain custom + dapat Source Code.",
//       keterangan: "Dapat Source Code",
//       price: "Rp.150.000",
//       animation: {
//         initial: { opacity: 0, x: -50 },
//         animate: { opacity: 1, x: 0 },
//       },
//       category: "Landing Page",
//     },
//     //   PROFILE COMPANY
//     {
//       title: "Profile Company Reguler",
//       desc1:
//         "Website profil perusahaan untuk mengenalkan produk, layanan, ataupun bisnis Anda. Cocok untuk UMKM, Bisnis, Sekolah, dan lain-lain.",
//       desc2:
//         "2 Halaman, Hosting gratis di vercel.app (hanya bisa diakses melalui link), Desain dari template yang sudah tersedia.",
//       price: "Rp.150.000",
//       animation: {
//         initial: { opacity: 0, y: 50 },
//         animate: { opacity: 1, y: 0 },
//       },
//       category: "Profile Company",
//     },
//     {
//       title: "Profile Company Premium",
//       desc1:
//         "Website profil perusahaan untuk mengenalkan produk, layanan, ataupun bisnis Anda. Cocok untuk UMKM, Bisnis, Sekolah, dan lain-lain.",
//       desc2:
//         "3 Halaman, Hosting gratis di vercel.app (hanya bisa diakses melalui link), Desain custom, Harga 200K.",
//       keterangan:
//         "Jika untuk website profesional silahkan tanyakan/diskusi harga dengan tim IT Is Fun Studio",
//       price: "Rp.200.000 - Rp.650.000",
//       animation: {
//         initial: { opacity: 0, scale: 0.8 },
//         animate: { opacity: 1, scale: 1 },
//       },
//       category: "Profile Company",
//     },
//     {
//       title: "Profile Company Profesional",
//       desc1:
//         "Website profil perusahaan untuk mengenalkan produk, layanan, ataupun bisnis Anda. Cocok untuk UMKM, Bisnis, Sekolah, dan lain-lain.",
//       desc2:
//         "3-4 Halaman, gratis hosting profesional, Domain custom menggunakan .my.id/.com, Gratis Email, Gratis sertifikat SSL, Desain custom, Dan lain-lain.",
//       price: "Rp.500.000-Rp.1.400.000",
//       keterangan:
//         "Masa aktif Website 3 bulah - 1 tahun. Harga tergantung dari spesifikasi website, silahkan tanyakan/diskusi dengan tim IT Is Fun Studio",
//       animation: {
//         initial: { opacity: 0, y: -50 },
//         animate: { opacity: 1, y: 0 },
//       },
//       category: "Profile Company",
//     },
//     //   PERSONAL WEBSITE
//     {
//       title: "Personal Website Reguler",
//       desc1:
//         "Personal Website untuk dijadikan website portofolio ataupun memperkenalkan diri. Cocok untuk memperlihatkan project yang telah anda buat atau untuk dijadikan portofolio, dan lain-lain.",
//       desc2:
//         "3 Halaman, Hosting gratis di vercel.app (hanya bisa diakses melalui link), Desain dari template yang sudah tersedia.",
//       price: "Rp.120.000",
//       animation: {
//         initial: { opacity: 0, x: 50 },
//         animate: { opacity: 1, x: 0 },
//       },
//       category: "Personal Website",
//     },
//     {
//       title: "Personal Website Premium",
//       desc1:
//         "Personal Website untuk dijadikan website portofolio ataupun memperkenalkan diri. Cocok untuk memperlihatkan project yang telah anda buat atau untuk dijadikan portofolio, dan lain-lain.",
//       desc2:
//         "4-5 Halaman, Hosting gratis di vercel.app (hanya bisa diakses melalui link), Desain custom + dapat Source Code.",
//       keterangan: "Dapat Source Code",
//       price: "Rp.200.000",
//       animation: {
//         initial: { opacity: 0, x: -50 },
//         animate: { opacity: 1, x: 0 },
//       },
//       category: "Personal Website",
//     },
//     {
//       title: "Personal Website Profesional",
//       desc1:
//         "Personal Website untuk dijadikan website portofolio ataupun memperkenalkan diri. Cocok untuk memperlihatkan project yang telah anda buat atau untuk dijadikan portofolio, dan lain-lain.",
//       desc2:
//         "Harga tergantung dari pemilihan desain custom atau bukan, jumlah halaman website tersebut, serta biaya hosting berbayar atau gratis.",
//       keterangan: "Masa aktif Website 1 tahun + Dapat Source Code",
//       price: "Rp.650.000",
//       animation: {
//         initial: { opacity: 0, y: 50 },
//         animate: { opacity: 1, y: 0 },
//       },
//       category: "Personal Website",
//     },
//     //   WEBSITE CUSTOM
//     {
//       title: "Website Custom",
//       desc1: "Website custom sesuai kebutuhan. Cocok untuk semua kebutuhan anda.",
//       desc2: "Custom.",
//       keterangan:
//         "Spesifikasi website silahkan diskusikan dengan tim IT Is Fun Studio. Harga tergantung dari spesifikasi website.",
//       price: "Rp.-",
//       animation: {
//         initial: { scale: 0.8, opacity: 0 },
//         animate: { scale: 1, opacity: 1 },
//       },
//       category: "Website Custom",
//     },
//     //   Pembuatan CV
//     {
//       title: "CV ATS",
//       desc1:
//         "CV ATS cocok untuk melamar pekerjaan di industri yang lebih formal dan perusahaan besar yang menggunakan ATS untuk menyaring aplikasi. Gunakan ini untuk memastikan CV Anda melewati penyaringan awal dan sampai ke perekrut manusia.",
//       keterangan: "Dapat Surat Lamaran Pekerjaan",
//       price: "Rp.20.000",
//       animation: {
//         initial: { opacity: 0, y: -50 },
//         animate: { opacity: 1, y: 0 },
//       },
//       category: "Pembuatan CV",
//     },
//     {
//       title: "CV Kreatif",
//       desc1:
//         "CV Kreatif cocok untuk melamar pekerjaan di industri menengah ke bawah dan industri kreatif dan peran yang menuntut kreativitas serta inovasi. Gunakan ini saat Anda tahu perekrut akan menghargai desain visual dan ketika Anda mengirimkan CV langsung ke email atau orang yang akan membaca CV tersebut.",
//       keterangan: "Dapat Surat Lamaran Pekerjaan",
//       price: "Rp.20.000",
//       animation: {
//         initial: { opacity: 0, x: 50 },
//         animate: { opacity: 1, x: 0 },
//       },
//       category: "Pembuatan CV",
//     },
//   ];
  

// const generateWhatsAppLink = (shopName) => {
//   const phoneNumber = "6288297894942"; // Ganti dengan nomor WhatsApp Anda
//   const message = `Halo min, saya ingin bertanya tentang produk *${shopName}*.`;
//   return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
// };

// const Paket = () => {
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
//       <section className="flex flex-col justify-center items-center p-6 gap-6 pt-10 sm:pt-20">
//         {/* TEXT */}
//         <div className="flex flex-col justify-center items-center">
//           <motion.h1
//             ref={textRef}
//             className="text-4xl font-bold londrina-black textShadow-title"
//             initial={{ opacity: 0, y: -50 }}
//             animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
//             transition={{ duration: 0.8 }}
//           >
//             PAKET
//           </motion.h1>
//           <motion.p
//             ref={textRef}
//             className="titillium-semibold max-w-3xl text-justify sm:text-center textShadow-desc1"
//             initial={{ opacity: 0, x: -50 }}
//             animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             It's Fun Studio menyediakan berbagai paket pembuatan website sesuai
//             dengan kebutuhan Anda. Mulai dari hanya Rp 50.000, Anda sudah bisa
//             memiliki website untuk bisnis atau keperluan pribadi Anda.
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
//               <p className="text-white line-clamp-3 mb-2">{item.desc1}</p>
//               <p className="text-secondary font-bold mb-4 animate-pulse line-clamp-3">
//                 {item.price}
//               </p>
//               <Button onClick={() => openModal(item)}>Selengkapnya</Button>
//             </motion.div>
//           ))}
//           {/* BUTTON TO PAKET */}
//         </div>
//           <div className="mt-2">
//             <Button>Paket Lainnya</Button>
//           </div>
//       </section>

//       {/* MODAL */}
//       {modalVisible && selectedItem && (
//         <section className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <motion.div
//             className="relative bg-white p-6 rounded-lg shadow-lg text-dark"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.3 }}
//           >
//             <h2 className="londrina-regular text-2xl font-bold mb-4 text-black">
//               {selectedItem.title}
//             </h2>
//             <button
//               onClick={closeModal}
//               className="w-6 text-2xl text-gray-500 hover:text-gray-700 absolute top-2 right-4"
//             >
//               ✖
//             </button>
//             <p className="text-dark font-semibold">Deskripsi :</p>
//             <p className="text-dark text-justify indent-5 sm:indent-0">
//               {selectedItem.desc1}
//             </p>
//             <p className="mb-4 text-dark text-justify indent-5 sm:indent-0">
//               {selectedItem.desc2}
//             </p>
//             <p className="mb-4 font-bold text-dark">{selectedItem.price}</p>
//             <a
//               href={generateWhatsAppLink(selectedItem.title)}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center justify-center w-40 px-6 py-2 rounded bg-secondary text-white hover:bg-primary hover:text-dark shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] transition duration-300 ease-in-out"
//             >
//               <FaWhatsapp className="mr-2 text-green-500 hover:text-white" />
//               Lebih Lanjut
//             </a>
//             {/* <Button className="text-center"><FaWhatsapp className="mr-2" />Lebih Lanjut</Button> */}
//             {/* <button onClick={closeModal}>Close</button> */}
//           </motion.div>
//         </section>
//       )}
//     </>
//   );
// };

// export default Paket;
