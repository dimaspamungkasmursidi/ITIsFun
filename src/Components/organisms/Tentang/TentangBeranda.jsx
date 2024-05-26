import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BsLaptop, BsPerson } from "react-icons/bs";

const items = [
  {
    Image: BsLaptop,
    title: "Penbuatan Website",
    desc: "Kami merancang dan mengembangkan website yang responsif, modern, dan fungsional.",
  },
  {
    Image: BsPerson,
    title: "Pembuatan CV",
    desc: "Selain website, kami juga menyediakan layanan pembuatan CV profesional.",
  },
];

const TentangBeranda = () => {
  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [cardRefs, setCardRefs] = React.useState([]);

  React.useEffect(() => {
    setCardRefs((elRefs) =>
      Array(items.length)
        .fill()
        .map((_, i) => elRefs[i] || React.createRef())
    );
  }, []);

  return (
    <section className="flex flex-col justify-center items-center p-6 gap-6 pt-10 sm:pt-14">
      {/* TITLE */}
      <div className="w-full flex flex-col justify-center items-center">
        <motion.h1
          ref={textRef}
          initial={{ opacity: 0, y: -50 }}
          animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold londrina-black textShadow-title"
        >
          Tentang IT Is Fun
        </motion.h1>
        <motion.p
          ref={textRef}
          initial={{ opacity: 0, x: -50 }}
          animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="titillium-semibold max-w-3xl text-justify sm:text-center"
        >
          IT Is Fun Studio adalah penyedia layanan jasa pembuatan website yang
          berkualitas. Bukan hanya itu, IT Is Fun juga menyediakan layanan
          pembuatan CV profesional.
        </motion.p>
      </div>

      {/* CARDS */}
      <div className="flex flex-wrap justify-center gap-6">
        {items.map((item, index) => {
          const [cardRef, cardInView] = useInView({
            triggerOnce: true,
            threshold: 0.2,
          });

          return (
            <motion.div
              key={index}
              ref={cardRef}
              initial={{ opacity: 0, y: 50 }}
              animate={
                cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.8, delay: 0.3 * index }}
              className="w-[20rem] h-[15rem] p-6 flex flex-col justify-center items-center border-2 border-secondary rounded-md"
            >
              <div className="mb-4 text-7xl">
                <item.Image />
              </div>
              <div>
                <h2 className="text-2xl londrina-regular">{item.title}</h2>
                <p className="line-clamp-3">{item.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TentangBeranda;
