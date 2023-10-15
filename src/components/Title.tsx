"use client";

import React from "react";
import { motion } from "framer-motion";

function Title() {
  return (
    <div className="relative z-10 flex flex-col gap-2 lg:flex-row">
      <h1 className="text-7xl font-bold text-red-400 lg:text-8xl">Ciao</h1>
      <motion.span
        initial={{ rotate: 10, scale: 1.2, opacity: 0 }}
        animate={{
          rotate: 0,
          scale: 1,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          delay: 1,
        }}
        className="text-8xl max-lg:hidden"
      >
        👋🏼
      </motion.span>
    </div>
  );
}

export default Title;
