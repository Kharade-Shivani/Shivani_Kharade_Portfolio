import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ text, className = "", variant = "default" }) => {
  // Animation variants
  const animations = {
    default: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    },
    letter: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    },
    highlightedWord: {
      hidden: { opacity: 0, y: 20 },
      visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.1
        }
      })
    }
  };

  // For single text element
  if (variant === 'default') {
    return (
      <motion.div
        className={`${className}`}
        initial="hidden"
        animate="visible"
        variants={animations.default}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {text}
      </motion.div>
    );
  }

  // For letter by letter animation
  if (variant === 'letter') {
    return (
      <div className={`${className} inline-block`}>
        {Array.from(text).map((letter, index) => (
          <motion.span
            key={index}
            initial="hidden"
            animate="visible"
            variants={animations.letter}
            custom={index * 0.05}
            transition={{ 
              duration: 0.3, 
              ease: "easeInOut",
              delay: index * 0.05
            }}
            className="inline-block"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </div>
    );
  }

  // For word by word animation
  if (variant === 'word') {
    return (
      <div className={`${className} inline-block`}>
        {text.split(" ").map((word, index) => (
          <motion.span
            key={index}
            initial="hidden"
            animate="visible"
            variants={animations.highlightedWord}
            custom={index}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ))}
      </div>
    );
  }

  return <div className={className}>{text}</div>;
};

export default AnimatedText;