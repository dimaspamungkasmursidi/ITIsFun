import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const DomainPricing = () => {
  const domainData = [
    {
      id: 1,
      domain: ".my.id",
      price: "Gratis",
      renewal: "Rp.25.000",
    },
    {
      id: 2,
      domain: ".com",
      price: "Rp.90.000",
      renewal: "Rp.200.000",
    },
    {
      id: 3,
      domain: ".web.id",
      price: "Rp.50.000",
      renewal: "Rp.60.000",
    },
    {
      id: 4,
      domain: ".id",
      price: "Rp.200.000",
      renewal: "Rp.250.000",
    },
    {
      id: 5,
      domain: ".me",
      price: "Rp.120.000",
      renewal: "Rp.310.000",
    },
    {
      id: 6,
      domain: ".pro",
      price: "Rp.40.000",
      renewal: "Rp.390.000",
    },
    {
      id: 7,
      domain: ".business",
      price: "Rp.100.000",
      renewal: "Rp.200.000",
    },
    {
      id: 8,
      domain: ".company",
      price: "Rp.70.000",
      renewal: "Rp.140.000",
    },
    {
      id: 9,
      domain: ".agency",
      price: "Rp.100.000",
      renewal: "Rp.295.000",
    },
    {
      id: 10,
      domain: ".marketing",
      price: "Rp.100.000",
      renewal: "Rp.470.000",
    },
    {
      id: 11,
      domain: ".group",
      price: "Rp.150.000",
      renewal: "Rp.170.000",
    },
    {
      id: 12,
      domain: ".org",
      price: "Rp.120.000",
      renewal: "Rp.250.000",
    },
    {
      id: 13,
      domain: ".studio",
      price: "Rp.230.000",
      renewal: "Rp.390.000",
    },
    {
      id: 14,
      domain: ".digital",
      price: "Rp.40.000",
      renewal: "Rp.435.000",
    },
    {
      id: 15,
      domain: ".support",
      price: "Rp.90.000",
      renewal: "Rp.340.000",
    },
    {
      id: 16,
      domain: ".ac.id",
      price: "Rp.50.000",
      renewal: "Rp.60.000",
    },
    {
      id: 17,
      domain: ".co.id",
      price: "Rp.290.000",
      renewal: "Rp.300.000",
    },
    {
      id: 18,
      domain: ".school",
      price: "Rp.120.000",
      renewal: "Rp.510.000",
    },
    {
      id: 19,
      domain: ".education",
      price: "Rp.310.000",
      renewal: "Rp.470.000",
    },
    {
      id: 20,
      domain: ".academy",
      price: "Rp.230.000",
      renewal: "Rp.470.000",
    },
    {
      id: 21,
      domain: ".blog",
      price: "Rp.30.000",
      renewal: "Rp.470.000",
    },
    {
      id: 22,
      domain: ".xyz",
      price: "Rp.30.000",
      renewal: "Rp.210.000",
    },
    {
      id: 23,
      domain: ".cloude",
      price: "Rp.30.000",
      renewal: "Rp.190.000",
    },
    {
      id: 24,
      domain: ".world",
      price: "Rp.50.000",
      renewal: "Rp.420.000",
    },
    {
      id: 25,
      domain: ".or.id",
      price: "Rp.60.000",
      renewal: "Rp.60.000",
    },
    {
      id: 26,
      domain: ".website",
      price: "Gratis",
      renewal: "Rp.400.000",
    },
    {
      id: 27,
      domain: ".site",
      price: "Gratis",
      renewal: "Rp.510.000",
    },
    {
      id: 28,
      domain: ".store",
      price: "Gratis",
      renewal: "Rp.810.000",
    },
    {
      id: 29,
      domain: ".shop",
      price: "Gratis",
      renewal: "Rp.540.000",
    },
    {
      id: 30,
      domain: ".online",
      price: "Gratis",
      renewal: "Rp.540.000",
    },
    {
      id: 31,
      domain: ".space",
      price: "Gratis",
      renewal: "Rp.330.000",
    },
    {
      id: 32,
      domain: ".fun",
      price: "Gratis",
      renewal: "Rp.510.000",
    },
    {
      id: 33,
      domain: ".icu",
      price: "Gratis",
      renewal: "Rp.210.000",
    },
    {
      id: 34,
      domain: ".cyou",
      price: "Gratis",
      renewal: "Rp.220.000",
    },
    {
      id: 35,
      domain: ".sbs",
      price: "Gratis",
      renewal: "Rp.220.000",
    },
  ];

  const itemsPerPage = 5;
  const totalPages = Math.ceil(domainData.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(() => {
    const savedPage = localStorage.getItem('currentPage');
    return savedPage ? parseInt(savedPage) : 1;
  });

  useEffect(() => {
    localStorage.setItem('currentPage', currentPage.toString());
  }, [currentPage]);

  const currentData = domainData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const tableVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Fungsi untuk menghasilkan tombol pagination
  const renderPaginationButtons = () => {
    const buttons = [];
    const maxVisibleButtons = 5; // Jumlah maksimum tombol yang ditampilkan

    let startPage = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);

    if (endPage - startPage + 1 < maxVisibleButtons) {
      startPage = Math.max(1, endPage - maxVisibleButtons + 1);
    }

    if (startPage > 1) {
      buttons.push(
        <button key="first" onClick={() => handlePageChange(1)} className="mx-1 px-3 py-1 rounded bg-white text-gray-800 border border-secondary">
          1
        </button>
      );
      if (startPage > 2) {
        buttons.push(<span key="ellipsis1" className="mx-1">...</span>);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`mx-1 px-3 py-1 rounded ${
            currentPage === i
              ? "bg-secondary text-white"
              : "bg-white text-gray-800 border border-secondary"
          }`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        buttons.push(<span key="ellipsis2" className="mx-1">...</span>);
      }
      buttons.push(
        <button key="last" onClick={() => handlePageChange(totalPages)} className="mx-1 px-3 py-1 rounded bg-white text-gray-800 border border-secondary">
          {totalPages}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="mx-auto py-12 px-6">
      {/* TITLE */}
      <div className="w-full flex flex-col justify-center items-center mb-6">
        <motion.h1
          ref={textRef}
          initial={{ opacity: 0, y: -50 }}
          animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold londrina-black textShadow-title text-nowrap"
        >
          Daftar Harga Domain
        </motion.h1>
        <motion.p
          ref={textRef}
          initial={{ opacity: 0, x: -50 }}
          animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="titillium-semibold max-w-3xl text-justify sm:text-center"
        >
          Pilih dan dapatkan domain yang populer untuk memperkuat identitas
          online. Setiap domain yang Anda pilih hadir dengan harga spesial untuk
          tahun pertama dan opsi perpanjangan yang terjangkau.
        </motion.p>
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={tableVariants}
        className="overflow-x-auto"
      >
        <table className="w-full overflow-hidden rounded-lg bg-glass-light backdrop-blur-sm shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
          <thead className="bg-secondary">
            <tr>
              <th className="px-6 py-3 text-left text-md londrina-regular font-medium text-white tracking-wider text-nowrap">
                No.
              </th>
              <th className="px-6 py-3 text-left text-md londrina-regular font-medium text-white tracking-wider text-nowrap">
                Domain
              </th>
              <th className="px-6 py-3 text-left text-md londrina-regular font-medium text-white tracking-wider text-nowrap">
                Harga Pertama
              </th>
              <th className="px-6 py-3 text-left text-md londrina-regular font-medium text-white tracking-wider text-nowrap">
                Perpanjangan
              </th>
              <th className="px-6 py-3 text-left text-md londrina-regular font-medium text-white tracking-wider text-nowrap">
                Durasi
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {currentData.map((item, index) => (
              <motion.tr
                key={item.id}
                whileHover={{ backgroundColor: "#DFDCF3", color: "black" }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {index + 1 + (currentPage - 1) * itemsPerPage}.
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-800">
                  {item.domain}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {item.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {item.renewal}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  1 Tahun
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Pagination Buttons */}
      <div className="flex justify-center mt-6">
        {renderPaginationButtons()}
      </div>
    </div>
  );
};

export default DomainPricing;
