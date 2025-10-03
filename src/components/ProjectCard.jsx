import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, technologies, index, link }) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl overflow-hidden shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all duration-300 flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-white mb-3 flex items-center">
          {title}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              aria-label={`Visit ${title} project`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          )}
        </h3>
        <p className="text-gray-300 mb-4 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-700/60 text-cyan-300 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {link && (
        <div className="px-6 py-4 border-t border-gray-700">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between text-cyan-400 hover:text-white transition-colors"
          >
            <span className="font-medium">View Live Project</span>
            <motion.span
              whileHover={{ x: 5 }}
              className="group-hover:translate-x-1 transition-transform"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </motion.span>
          </a>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;