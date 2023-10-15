"use client";

import React, { useEffect, useState } from "react";
import { cubicBezier, motion } from "framer-motion";

const GREETINGS = [
  "Hello",
  "你好",
  "Hola",
  "नमस्ते",
  "مرحبا",
  "হ্যালো",
  "Olá",
  "привет",
  "こんにちは",
  "ਹੈਲੋ",
  "Hallo",
  "Hallo",
  "你好",
  "Salut",
  "హలో",
  "हॅलो",
  "ஹலோ",
  "Ciao",
];

const CHANGE_DURATION = 200;

function Title() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentGreeting, setCurrentGreeting] = useState(GREETINGS[0]);

  const changeBezier = cubicBezier(0.15, 0.32, 0.82, -0.05);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev === GREETINGS.length - 1) {
          clearInterval(interval);
        }
        const newIndex = (prev + 1) % GREETINGS.length;
        return newIndex;
      });
    }, CHANGE_DURATION);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col gap-2 lg:flex-row"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4.15, ease: changeBezier }}
        className="text-8xl font-bold text-red-400"
      >
        {GREETINGS[currentIndex]}
      </motion.h1>
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
          duration: 3,
          delay: 4, // change duration * greetings duration
        }}
        className="text-8xl"
      >
        👋🏼
      </motion.span>
    </motion.div>
  );
}

export default Title;
