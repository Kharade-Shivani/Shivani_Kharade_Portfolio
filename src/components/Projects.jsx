import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedText  from './AnimatedText';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: "Unity Ortho and Eye Hospital",
      description: "Developed a responsive and informative healthcare website for a multi-speciality hospital specializing in orthopedic and eye care. Included sections for doctor profiles, specialties, testimonials, and a contact map. Focused on accessibility, clean UI, and mobile-first design.",
      technologies: ["React.js", "Tailwind CSS", "Framer Motion", "Map Integration"],
      category: "healthcare",
      link: "https://unityorthoandeyehospital.com/" 
    },
    {
      title: "Prahlad Flours",
      description: "Built a brand-focused website for a flour production company, highlighting their product range, certifications, and commitment to quality. Ensured fast performance, SEO optimization, and an intuitive layout for both desktop and mobile users.",
      technologies: ["React.js", "CSS", "JavaScript", "Responsive Design"],
      category: "business",
      link: "https://pralhadflours.com/" 
    },
     {
      title: "Arthagam Pathsanstha Website",
      description: "A financial service platform that provides various banking and loan-related solutions with five types of financial calculators: Pigmi, Gold EMI, FD, RD, and Loan EMI calculators, helping users make informed financial decisions.",
      technologies: ["React.js", "Redux", "CSS", "API Integration"],
      category: "finance",
      link: "http://website.arthagam.com/" 

    },
    
    {
      title: "Scoopen JobPortal",
      description: "Built a job portal that scrapes live job postings, stores them in a database, and provides search, filter, save, and apply features with a responsive UI and REST API integration.",
      technologies: ["React.js", "Redux", "Tailwind CSS", "API Integration"],
      category: "web",
      link: "http://scoopenjobportal.com/login"
    },
    // {
    //   title: "MeghaIndusry Project",
    //   description: "Developed a responsive and user-friendly UI for showcasing protective fabrics, vermi beds, and biofloc fish farming tanks. Ensured cross-browser compatibility and optimized website performance for fast loading times.",
    //   technologies: ["React.js", "JavaScript", "Material UI", "API Integration"],
    //   category: "web",
    //   link: "https://meghindustry.com"
    // },
   
    
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 pt-16">
        <AnimatedText 
          text="Projects" 
          className="text-3xl md:text-4xl font-bold mb-2"
          variant="default"
        />
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
      </div>
      
      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {['all', 'web', 'finance'].map((filter) => (
          <motion.button
            key={filter}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeFilter === filter 
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium' 
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
            }`}
            onClick={() => setActiveFilter(filter)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </motion.button>
        ))}
      </div>
      
      {/* Projects grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        layout
      >
        {filteredProjects.map((project, index) => (
          <ProjectCard 
  key={project.title}
  title={project.title}
  description={project.description}
  technologies={project.technologies}
  image={project.image}
  index={index}
  link={project.link}
/>

        ))}
      </motion.div>
      
      {/* Call to action */}
      <motion.div 
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* <p className="text-gray-300 mb-6">Interested in seeing more of my work?</p> */}
        {/* <a 
          href="https://github.com/Akankshajagtap13" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-md text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
        >
          View GitHub Repository
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </a> */}
      </motion.div>
    </div>
  );
};

export default Projects;