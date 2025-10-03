import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import Typed from 'typed.js';
import { Phone, Mail, Github, Linkedin, ArrowDown, Copy } from 'lucide-react';

const Hero = () => {
  const typedRef = useRef(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  
  // Replace with your actual phone number
  const phoneNumber = "+91 7249269652";
  const email = "shivanikharade18@gmail.com";
  
  useEffect(() => {
    const options = {
      strings: ['Software Developer', 'React.js Developer', 'MERN Stack Developer', 'UI Developer'],
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
    };
    
    // Initialize Typed
    const typed = new Typed(typedRef.current, options);
    
    return () => {
      // Destroy Typed instance on unmounting
      typed.destroy();
    };
  }, []);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced animated background with more elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black to-purple-900/30 z-0">
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10 blur-3xl"
              animate={{
                x: [Math.random() * 100, Math.random() * 100],
                y: [Math.random() * 100, Math.random() * 100],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                width: `${Math.random() * 400 + 100}px`,
                height: `${Math.random() * 400 + 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <p className="text-lg md:text-xl text-cyan-400 font-medium">
            
            </p>
          </motion.div>
          
          <AnimatedText 
            text="Shivani Kharade" 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400" 
            variant="letter"
          />
          
          <div className="text-xl md:text-2xl lg:text-3xl text-gray-300 mt-6 h-12">
            <span>I'm a </span>
            <span ref={typedRef} className="text-cyan-400 font-semibold"></span>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 max-w-2xl mx-auto text-gray-300 text-lg"
          >
          Full-stack developer passionate about building responsive, user-friendly web applications using modern frontend frameworks and robust backend technologies.
          </motion.p>
          
          {/* Contact information with copy functionality */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <button 
              onClick={() => copyToClipboard(phoneNumber, 'phone')}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-900/30 hover:bg-blue-900/50 border border-cyan-500/30 transition-all duration-300"
            >
              <Phone size={18} className="text-cyan-400" />
              <span className="text-gray-200">{phoneNumber}</span>
              <Copy size={16} className="text-gray-400" />
              {copiedPhone && (
                <span className="text-xs text-green-400 ml-1">Copied!</span>
              )}
            </button>
            
            <button 
              onClick={() => copyToClipboard(email, 'email')}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-900/30 hover:bg-blue-900/50 border border-cyan-500/30 transition-all duration-300"
            >
              <Mail size={18} className="text-cyan-400" />
              <span className="text-gray-200">{email}</span>
              <Copy size={16} className="text-gray-400" />
              {copiedEmail && (
                <span className="text-xs text-green-400 ml-1">Copied!</span>
              )}
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
            >
              View Projects
              <ArrowDown size={16} className="animate-bounce" />
            </a>
            <a 
              href="/contact" 
              className="px-8 py-3 rounded-full border-2 border-cyan-500 text-white font-medium hover:bg-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              Contact Me
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
            className="mt-12"
          >
            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/Kharade-Shivani" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/kharade-shivani-2a7a26247/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href={`mailto:${email}`} 
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <Mail size={24} />
              </a>
              <a 
                href={`tel:${phoneNumber.replace(/\s/g, '')}`} 
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <Phone size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      
    </div>
  );
};

export default Hero;