import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ date, title, company, description, isLeft = true, index }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center relative ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Timeline line */}
      <div className="absolute top-0 bottom-0 left-1/2 md:left-1/2 w-1 bg-gradient-to-b from-cyan-500 to-blue-600 transform -translate-x-1/2"></div>
      
      {/* Date section */}
      <motion.div 
        className={`md:w-1/2 p-6 ${isLeft ? 'md:text-right' : 'md:text-left'}`}
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      > 
        <div className="bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm inline-block">
          <p className="text-cyan-400 font-medium">{date}</p>
        </div>
      </motion.div>
      
      {/* Circle dot */}
      <div className="z-10 flex items-center justify-center">
        <motion.div 
          className="w-5 h-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 relative"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
        >
          <motion.div 
            className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 blur-sm"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          ></motion.div>
        </motion.div>
      </div>
      
      {/* Content section */}
      <motion.div 
        className={`md:w-1/2 p-6 ${isLeft ? 'md:text-left' : 'md:text-right'}`}
        initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm shadow-lg">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <h4 className="text-cyan-400 mb-4">{company}</h4>
          <p className="text-gray-300">{description}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default TimelineItem;