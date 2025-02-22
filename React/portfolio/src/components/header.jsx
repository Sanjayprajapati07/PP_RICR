import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-blue-500 to-purple-700 shadow-lg flex items-center justify-center py-4 md:py-6 lg:py-8">
      <motion.h1
        className="text-white text-lg sm:text-xl md:text-3xl lg:text-4xl font-extrabold tracking-wide text-center px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🚀 I am a Full-Stack Developer
      </motion.h1>
    </header>
  );
};

export default Header;
