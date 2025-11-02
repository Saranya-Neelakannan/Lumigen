import { motion } from "framer-motion";
import { slideUp } from "../utils/motionPresets";

const Footer = () => {
  return (
    <motion.footer
      variants={slideUp}
      initial="hidden"
      animate="visible"
      className="bg-white/80 backdrop-blur-md py-6 text-center border-t border-gray-200 text-sm text-gray-600"
    >
      <p>
        © {new Date().getFullYear()} Lumigen Labs — India’s First Research &
        Applied AI Organization
      </p>
    </motion.footer>
  );
};

export default Footer;
