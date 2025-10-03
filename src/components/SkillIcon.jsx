import React from 'react';
import { motion } from 'framer-motion';

const SkillIcon = ({ icon, name, index }) => {
  return (
    <motion.div
      className="flex flex-col items-center gap-3"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-800/70 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm group overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <motion.div
          className="text-3xl md:text-4xl text-cyan-400 z-10"
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {icon}
        </motion.div>
      </div>
      <p className="text-sm md:text-base text-gray-300 font-medium">{name}</p>
    </motion.div>
  );
};

export default SkillIcon;