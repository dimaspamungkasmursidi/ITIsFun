import { motion } from "framer-motion";

const Button = (props) => {
  const { children, onClick = () => {}, type = "submit" } = props;

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      type={type}
      onClick={onClick}
      className="flex items-center justify-between px-6 py-2 rounded bg-secondary text-white hover:bg-tertiary hover:text-dark shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] transition duration-300 ease-in-out"
    >
      {children}
    </motion.button>
  );
};

export default Button;
