import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Button from "../../atoms/Button";

const websiteTemplates = [
  {
    title: "IT Is Fun Website",
    image: "images/webimage/itisfun.png",
    description: "Website Oficial IT Is Fun Studio .",
    link: "https://itisfun.my.id/",
    category: ["Website", "Company Profile"],
  },
  {
    title: "Catering Website",
    image: "images/webimage/catering.png",
    description: "Contoh website catering.",
    link: "https://sarasa.id/",
    category: ["Website", "UMKM Website"],
  },
  {
    title: "Warung Seblak",
    image: "images/webimage/seblak.png",
    description: "Template website UMKM.",
    link: "https://warungseblak.netlify.app/",
    category: ["Website", "UMKM Website"],
  },
  {
    title: "Trhifting Website",
    image: "images/webimage/thrifting.png",
    description: "Template Landing Page bisnis Thrifting.",
    link: "https://thrifting.netlify.app/",
    category: "Landing Page",
  },
  {
    title: "SkinCare Website",
    image: "images/webimage/skincareman.png",
    description: "Template Landing Page bisnis Skin Care.",
    link: "https://manskincare.netlify.app/",
    category: "Landing Page",
  },
  {
    title: "Furniture Store",
    image: "images/webimage/furniture.png",
    description: "Template Website Furniture Store.",
    link: "https://itisfunfurniture.netlify.app/",
    category: ["Website", "UMKM Website", "Company Profile"],
  },
  {
    title: "Villa",
    image: "images/webimage/villa.png",
    description: "Template Website Booking Villa Puncak.",
    link: "https://villarent.netlify.app/",
    category: ["Website", "Company Profile"],
  },
  {
    title: "Rental Mobil",
    image: "images/webimage/rentalmobil.png",
    description: "Template Landing Page Rental Mobil.",
    link: "https://rentalmobil24.netlify.app/",
    category: "Landing Page",
  },
  {
    title: "Sewa Motor Bali",
    image: "images/webimage/motor.png",
    description: "Template Landing Page Rental Motor.",
    link: "https://sewamotorbali.netlify.app/",
    category: "Landing Page",
  },
  {
    title: "Toko Sepeda",
    image: "images/webimage/sepeda.png",
    description: "Template Landing Page Toko Sepeda.",
    link: "https://tokosepedaa.netlify.app/",
    category: "Landing Page",
  },
  {
    title: "Madu Gurah Fit",
    image: "images/webimage/madu.png",
    description: "Template Landing Page jual Madu.",
    link: "https://sehatpernafasan.com/madu-gurah-fit-efektif-atasi-radang-tenggorokan-meta/?fbclid=IwZXh0bgNhZW0BMAABHWsYxOlTKVLYljVlxD3A8miradCqbYQVQFuq05nBBQ0DLV5d2TZF9ID4uA_aem_oMbDyaQxgtphoTO7g5rBUw",
    category: "Landing Page",
  },
  {
    title: "Racun Tikus",
    image: "images/webimage/tikus.png",
    description: "Template Landing Page jual Racun Tikus.",
    link: "https://www.berkahdanamanah.my.id/",
    category: "Landing Page",
  },
  {
    title: "Logistic Website",
    image: "images/webimage/logistic.png",
    description: "Template Landing Page logistic.",
    link: "https://logisticare.netlify.app/",
    category: "Landing Page",
  },
  {
    title: "Perumahan Website",
    image: "images/webimage/kavling.png",
    description: "Template website Sales Perumahan.",
    link: "https://colleaguemarketing.netlify.app/",
    category: ["Website", "Company Profile"],
  },
  {
    title: "Dealer Mobil",
    image: "images/webimage/dealer.png",
    description: "Template Landing Page Dealer Mobil.",
    link: "https://carsdealers.netlify.app/",
    category: ["Website", "Company Profile"],
  },
  {
    title: "Sewa Sealer Cup",
    image: "images/webimage/sealer.png",
    description: "Template Landing Page Sewa SealerCup.",
    link: "https://sealerrent.netlify.app/",
    category: "Landing Page",
  },
  {
    title: "Hotel Website",
    image: "images/webimage/hotel.png",
    description: "Template Landing Page Hotel.",
    link: "https://baliresort.my.canva.site",
    category: "Landing Page",
  },
  {
    title: "Iklan Product",
    image: "images/webimage/product.png",
    description: "Template Landing Page Iklan Product.",
    link: "https://ptoduct.netlify.app/",
    category: "Landing Page",
  },
  {
    title: "Real Estate",
    image: "images/webimage/realestate.png",
    description: "Template website Real Estate.",
    link: "https://baliresort.my.canva.site/realestate",
    category: "Company Profile",
  },
];

const categories = [
  "Semua Kategori",
  "Landing Page",
  "Website",
  "Company Profile",
  "UMKM Website",
];

const Contoh = () => {
  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [selectedCategory, setSelectedCategory] = useState("Semua Kategori");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

//   UNTUK MEMFILTER YANG MEMILIKI 1 CATEGORY
//   const filteredTemplates = websiteTemplates.filter(
//     (template) =>
//       (selectedCategory === "Semua Kategori" ||
//         template.category === selectedCategory) &&
//       (template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         template.description.toLowerCase().includes(searchTerm.toLowerCase()))
//   );

//   UNTUK MEMFILTER YANG MEMILIKI 2 CATEGORY
  const filteredTemplates = websiteTemplates.filter(
    (template) =>
      (selectedCategory === "Semua Kategori" ||
        (Array.isArray(template.category)
          ? template.category.includes(selectedCategory)
          : template.category === selectedCategory)) &&
      (template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        template.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  

  return (
    <section className="gap-6 p-6 pt-10 sm:pt-14">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        {/* TITLE */}
        <div className="w-full flex flex-col justify-center items-center">
          <motion.h1
            ref={textRef}
            initial={{ opacity: 0, y: -50 }}
            animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            className="text-4xl text-center font-bold londrina-black textShadow-title"
          >
            Template & Contoh Desain Website
          </motion.h1>
          <motion.p
            ref={textRef}
            initial={{ opacity: 0, x: -50 }}
            animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="titillium-semibold w-full sm:w-3/4 text-justify sm:text-center"
          >
            IT Is Fun Studio menawarkan template dan contoh desain website yang memukau
            dengan desain modern dan responsif. Kami menyediakan solusi kreatif
            yang disesuaikan dengan kebutuhan, memastikan tampilan profesional
            dan fungsionalitas optimal. Nikmati dukungan teknis 24/7, menjadikan
            kami mitra ideal dalam menciptakan pengalaman web yang mengesankan.
            Mulailah perjalanan kesuksesan digital Anda dengan IT Is Fun Studio.
          </motion.p>
        </div>
        <div>
          <motion.div
            ref={textRef}
            initial={{ opacity: 0, y: 50 }}
            animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-xl font-bold londrina-black textShadow-title mt-6 mb-2 text-center">
              Cari template atau contoh desain website :
            </p>
          </motion.div>
        </div>
        {/* SEARCH */}
        <div className="w-full flex flex-col items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Cari template..."
            className="appearance-none w-full md:w-3/5 p-2 pl-4 mb-4 mt-1 text-secondary bg-glass-light backdrop-blur-md rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition duration-300 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] placeholder:text-gray-200"
          />
        </div>
        <div className="w-full relative overflow-x-auto categories-filter">
          {/* FILTER BUTTONS */}
          <div className="flex items-center sm:justify-center gap-4 py-1 pb-4 pl-0.5 pr-4 overflow-x-scroll categories-filter">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryChange(category)}
                className={`text-center px-4 py-2 border rounded-md whitespace-nowrap shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] ${
                  selectedCategory === category
                    ? "bg-secondary text-white border-secondary"
                    : ""
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="absolute sm:hidden right-0 top-0 bottom-2 w-8 bg-gradient-to-l from-gray-100/70 to-transparent pointer-events-none"></div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 sm:px-8">
          {filteredTemplates.map((template, index) => (
            <motion.div
              key={index}
              className="pb-2 bg-glass-light rounded-md border backdrop-blur-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.img
                src={template.image}
                alt={template.title}
                className="w-full h-40 object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              />
              <div className="flex flex-col justify-between p-4">
                <div>
                  <h2 className="text-2xl font-bold text-white londrina-regular textShadow-title">
                    {template.title}
                  </h2>
                  <p className="mb-4 text-white line-clamp-3">
                    {template.description}
                  </p>
                </div>
                <div>
                <Button onClick={() => (window.location.href = template.link)}>
                  Kunjungi Website
                </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contoh;
