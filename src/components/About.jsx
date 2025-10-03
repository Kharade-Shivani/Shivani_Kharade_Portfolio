import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedText  from './AnimatedText';
import photo from "../photo.jpg";
const About = () => {
  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [timelineRef, timelineInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  

  const skills = [
    { name: 'React.js', level: 95 },
    { name: 'JavaScript', level: 85 },
    { name: 'CSS/Tailwind CSS', level: 85 },
    { name: 'Bootstrap', level: 90 },
    { name: 'Node.js', level: 75 },
    { name: 'Express.js', level: 75 },
  ];

  const experiences = [
    {
      title: 'Software Developer',
      company: 'Zplus Cyber Secure Technologies Pvt.Ltd',
      period: 'Jan 2025 - Present',
      description: 'As a Software Developer at Zplus Cyber Secure Technologies Pvt. Ltd., I build responsive web applications using React.js, JavaScript, Redux, Tailwind CSS, and Material-UI. I integrate RESTful APIs to ensure dynamic functionality and seamless data flow. My work emphasizes scalability, performance optimization, and cross-browser compatibility. I actively collaborate with teams using GitHub and follow Agile development practices. My projects span e-commerce, industrial showcases, and financial platforms, reflecting strong UI/UX and real-time data handling skills.'
    },
    
    
  ];

  const values = [
    {
      title: 'Quality',
      icon: (
        <svg className="w-12 h-12 text-cyan-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      description: 'I believe in delivering high-quality code that is maintainable, scalable, and follows best practices.'
    },
    {
      title: 'Collaboration',
      icon: (
        <svg className="w-12 h-12 text-cyan-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
      description: 'I thrive in collaborative environments and value teamwork to deliver exceptional results.'
    },
    {
      title: 'Innovation',
      icon: (
        <svg className="w-12 h-12 text-cyan-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      ),
      description: 'I continuously explore new technologies and approaches to solve complex problems efficiently.'
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <AnimatedText 
          text="About Me" 
          className="text-3xl md:text-4xl font-bold mb-2"
          variant="default"
        />
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
      </div>
      
      {/* Main Profile Section */}
      <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
        {/* Profile image with animation */}
        <motion.div 
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            {/* Placeholder for profile image */}
           <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 p-1">
  <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
    <img 
      src={photo} 
      alt="Shivani Kharade" 
      className="w-full h-full object-cover"
    />
  </div>
</div>

            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-cyan-500/20 blur-md"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-blue-500/20 blur-md"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </div>
        </motion.div>
        
        {/* About content */}
        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-xl md:text-2xl font-semibold text-cyan-400 mb-4">
            Software Developer
          </h3>
          
          <p className="text-gray-300 mb-6 leading-relaxed">
            I'm Shivani Kharade, a passionate software developer specializing in creating responsive and user-friendly web applications. With expertise in React.js, Node.js, Express.js, JavaScript, and modern technologies with MongoDB and SQL database, I focus on developing scalable and performant applications that provide an exceptional user experience.
          </p>
          
          <p className="text-gray-300 mb-8 leading-relaxed">
            Currently working at Zplus Cyber Secure Technologies Pvt.Ltd, I've designed and developed web applications using React.js, JavaScript, and Redux while ensuring optimal performance and seamless user experience. I enjoy collaborating with teams using GitHub and following Agile methodologies for efficient development.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.div 
              className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span>Software Developer</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
              <span>React.js Developer</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span>UI Developer</span>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-md text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
            >
              Contact Me
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Skills Section */}
      <div 
        ref={skillsRef}
        className="mb-24"
      >
        <div className="text-center mb-12">
          <AnimatedText 
            text="My Skills" 
            className="text-2xl md:text-3xl font-bold mb-2"
            variant="default"
          />
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-gray-800/40 p-6 rounded-lg backdrop-blur-sm border border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 className="text-lg font-medium mb-3">{skill.name}</h4>
              <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-600"
                  style={{ width: `${skillsInView ? skill.level : 0}%` }}
                  initial={{ width: '0%' }}
                  animate={skillsInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                />
              </div>
              <div className="flex justify-end mt-1">
                <span className="text-sm text-gray-400">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Experience Timeline */}
      <div 
        ref={timelineRef}
        className="mb-24"
      >
        <div className="text-center mb-12">
          <AnimatedText 
            text="My Experience" 
            className="text-2xl md:text-3xl font-bold mb-2"
            variant="default"
          />
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
        </div>
        
        <div className="relative border-l-2 border-cyan-500/30 pl-6 ml-6 md:ml-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-12 relative"
              initial={{ opacity: 0, x: -30 }}
              animate={timelineInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="absolute -left-10 mt-1.5 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"></div>
              <div className="bg-gray-800/40 p-6 rounded-lg backdrop-blur-sm border border-gray-700">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-cyan-500/20 text-cyan-400 rounded-full mb-3">
                  {exp.period}
                </span>
                <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                <h4 className="text-gray-400 mb-3">{exp.company}</h4>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Core Values */}
      <div 
        ref={valuesRef}
        className="mb-24"
      >
        <div className="text-center mb-12">
          <AnimatedText 
            text="My Values" 
            className="text-2xl md:text-3xl font-bold mb-2"
            variant="default"
          />
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/40 p-8 rounded-lg backdrop-blur-sm border border-gray-700 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              {value.icon}
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Call to action */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Let's Work <span className="text-cyan-400">Together</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          I'm always interested in new challenges and opportunities to create amazing web experiences. 
          If you have a project in mind or want to collaborate, I'd love to hear from you!
        </p>
        <a 
          href="#contact" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-md text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
        >
          Get In Touch
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </motion.div>
    </div>
  );
};

export default About;