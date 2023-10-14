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
  "Merhaba",
  "ஹலோ",
  "Xin chào",
  "Ciao",
];

const CHANGE_DURATION = 200;

function Title() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentGreeting, setCurrentGreeting] = useState(GREETINGS[0]);

  const changeBezier = cubicBezier(0.15, 0.32, 0.82, -0.05);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (currentIndex + 1) % GREETINGS.length;
      setCurrentIndex(newIndex);
      setCurrentGreeting(GREETINGS[newIndex]);
    }, CHANGE_DURATION);
    if (currentIndex === GREETINGS.length - 1) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex gap-2"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4.15, ease: changeBezier }}
        className="text-8xl font-bold text-red-500"
      >
        {currentGreeting}
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
          delay: 4.5, // change duration * greetings duration
        }}
        className="text-8xl"
      >
        👋🏼
      </motion.span>
    </motion.div>
  );
}

export default Title;
