import React from 'react';
import AnimatedText  from './AnimatedText';
import TimelineItem from './TimelineItem';

const Experience = () => {
  const experiences = [
    {
      date: "January 2025 - Present",
      title: "Software Developer",
      company: "Zplus Cyber Secure Technologies Pvt.Ltd, Pune",
      description: "Designed and developed full-stack web applications using React.js for the frontend and Node.js with Express.js for the backend. Implemented RESTful APIs and integrated them with MongoDB for efficient data storage and retrieval. Built responsive and dynamic user interfaces using Tailwind CSS and Material-UI. Ensured high performance and scalability by optimizing code and resolving bugs. Collaborated with cross-functional teams via GitHub and followed Agile development methodologies."
    },
    {
      date: "August 2024 - December 2024",
      title: "Software Developer",
      company: "Aspire Technologies Pvt.Ltd, Baramati",
      description: "Developed and maintained scalable full-stack web applications using React.js on the frontend and Node.js with Express.js on the backend. Designed RESTful APIs and connected them to MongoDB for robust data management. Created clean, responsive UI components with Tailwind CSS and Material-UI, enhancing user engagement. Troubleshot and resolved issues to improve functionality and user experience. Worked closely with cross-functional teams using GitHub for version control and followed Agile practices to ensure timely delivery."
    }
    
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 pt-16">
        <AnimatedText 
          text="Experience" 
          className="text-3xl md:text-4xl font-bold mb-2"
          variant="default"
        />
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
      </div>
      
      <div className="relative py-8">
        {/* Timeline Container */}
        <div className="relative">
          {experiences.map((exp, index) => (
            <TimelineItem 
              key={index}
              index={index}
              date={exp.date}
              title={exp.title}
              company={exp.company}
              description={exp.description}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;