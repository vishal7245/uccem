import { motion } from "framer-motion";
import "./imppa.scss";

const Imppa = () => {
  return (
    <div className="imppa" id="imppa">
      <motion.h1 
        className="heading"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        IMPPA Membership
      </motion.h1>
      <div className="imageContainer">
        <img src="/Imppa_Logo.jpg" alt="IMPPA Logo" />
        <motion.div 
          className="imageWrapper"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/imppa.png" alt="IMPPA Membership" />
        </motion.div>
      </div>
    </div>
  );
};

export default Imppa;
