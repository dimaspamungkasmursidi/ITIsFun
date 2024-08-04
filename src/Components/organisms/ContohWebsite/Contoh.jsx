import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const websiteTemplates = [
  {
    title: "IT Is Fun Website",
    image: "https://itisfun.my.id/",
    description: "Template elegan untuk bisnis profesional.",
  },
  {
    title: "Catering Website",
    image: "https://sarasa.id/",
    description: "Template elegan untuk bisnis profesional.",
  },
  {
    title: "Warung Seblak",
    image: "https://warungseblak.netlify.app/",
    description: "Desain modern untuk startup teknologi.",
  },
  {
    title: "Trhifting Website",
    image: "https://thrifting.netlify.app/",
    description: "Showcase karya kreatif Anda dengan gaya.",
  },
  {
    title: "SkinCare Website",
    image: "https://manskincare.netlify.app/",
    description: "Solusi lengkap untuk toko online Anda.",
  },
  {
    title: "Rental Mobil",
    image: "https://rentalmobil24.netlify.app/",
    description: "Solusi lengkap untuk toko online Anda.",
  },
  {
    title: "Sewa Motor Bali",
    image: "https://sewamotorbali.netlify.app/",
    description: "Tampilkan menu dan suasana restoran Anda.",
  },
  {
    title: "Toko Sepeda",
    image: "https://tokosepedaa.netlify.app/",
    description: "Desain modern untuk startup teknologi.",
  },
  {
    title: "Hotel Website",
    image: "https://example.com/tech-startup.jpg",
    description: "Desain modern untuk startup teknologi.",
  },
  {
    title: "Racun Tikus",
    image: "https://www.berkahdanamanah.my.id/",
    description: "Desain modern untuk startup teknologi.",
  },
  {
    title: "Logistic Website",
    image: "https://logisticare.netlify.app/",
    description: "Platform sempurna untuk blogger.",
  },
  {
    title: "Perumahan Website",
    image: "https://colleaguemarketing.netlify.app/",
    description: "Desain modern untuk startup teknologi.",
  },
];

const Contoh = () => {
  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="gap-6 pt-10 sm:pt-14">
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
            className="text-4xl font-bold londrina-black textShadow-title"
          >
            Template & Contoh Website
          </motion.h1>
          <motion.p
            ref={textRef}
            initial={{ opacity: 0, x: -50 }}
            animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="titillium-semibold w-3/4 text-justify sm:text-center"
          >
            IT Is Fun Studio menawarkan template dan contoh website yang memukau
            dengan desain modern dan fitur canggih, dirancang untuk
            menginspirasi dan memikat pengunjung. Kami menyediakan solusi
            kreatif yang disesuaikan dengan kebutuhan bisnis Anda, memastikan
            tampilan profesional dan fungsionalitas optimal. Dengan desain
            responsif dan opsi penyesuaian yang fleksibel, setiap halaman dapat
            diberi sentuhan pribadi. Nikmati dukungan teknis 24/7, menjadikan kami 
            mitra ideal dalam menciptakan pengalaman web yang mengesankan. 
            Mulailah perjalanan kesuksesan digital Anda dengan IT Is Fun Studio.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {websiteTemplates.map((template) => (
            <motion.div
              key={template.index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.img
                src={template.image}
                alt={template.title}
                className="w-full h-48 object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {template.title}
                </h2>
                <p className="text-gray-600">{template.description}</p>
                <motion.button
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Lihat Detail
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contoh;
