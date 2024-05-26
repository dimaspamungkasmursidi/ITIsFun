import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Button = (props) => {
  const { children, color = "bg-secondary text-white hover:bg-tertiary hover:text-dark", onClick = () => {}, type = "submit", disabled } = props;
  
  const [animateRef, animateInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.button
      ref={animateRef}
      animate={animateInView ? { opacity: 1 } : { opacity: 0 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`flex items-center justify-between px-6 py-2 transition-all rounded ${color} shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] transition duration-300 ease-in-out`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
