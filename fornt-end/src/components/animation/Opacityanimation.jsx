import React from "react";
import { motion } from "framer-motion";
const Opacityanimation = ({children}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: "2", ease: "easeIn" }}
    >
      {children}
    </motion.div>
  );
};

export default Opacityanimation;
