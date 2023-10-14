import React from "react";
import { motion } from "framer-motion";

function Title() {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-8xl font-bold text-red-500"
    >
      Hello
    </motion.h1>
  );
}

export default Title;
