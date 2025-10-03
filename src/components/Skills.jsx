import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import { 
  Code2, 
  FileJson, 
  Layers, 
  FileCode, 
  PaintBucket, 
  LayoutGrid, 
  Palette, 
  BookOpen, 
  PanelTop,
  FileType2,
  Code,  
  GitBranch,
  FileEdit,
  Leaf, 
  FileCode2,
  Database,
  SendHorizontal,
  Cloud,
  Server,
  Globe,
  HardDrive
} from 'lucide-react';

const SkillIcon = ({ icon, name, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center justify-center p-4 bg-gray-800/40 rounded-lg backdrop-blur-sm border border-gray-700 hover:border-cyan-400 transition-all duration-300 w-full h-full hover:bg-gray-800/60 group"
    >
      <div className="text-cyan-400 mb-3 text-3xl group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <p className="text-gray-300 text-center text-sm font-medium group-hover:text-cyan-300 transition-colors duration-300">{name}</p>
    </motion.div>
  );
};

const Skills = () => {
  const frontendSkills = [
    { name: "React.js", icon: <Code2 size={24} /> },
    { name: "JavaScript", icon: <FileJson size={24} /> },
    { name: "Redux", icon: <Layers size={24} /> },
    { name: "HTML5", icon: <FileCode size={24} /> },
    { name: "CSS3", icon: <PaintBucket size={24} /> },
    { name: "Bootstrap", icon: <LayoutGrid size={24} /> },
    { name: "Tailwind CSS", icon: <Palette size={24} /> },
    { name: "Material UI", icon: <BookOpen size={24} /> },
    { name: "Node.js", icon: <Leaf size={24} /> },        
    { name: "Express.js", icon: <FileCode2 size={24} /> }, 
    { name: "MongoDB", icon: <Database size={24} /> } 
  ];

  const toolsSkills = [
    { name: "VS Code", icon: <Code size={24} /> },
    { name: "Git", icon: <GitBranch size={24} /> },
    { name: "Sublime Text", icon: <FileEdit size={24} /> },
    { name: "Postman", icon: <SendHorizontal size={24} /> },
  ];

  const hostingSkills = [
    { name: "Vercel", icon: <Cloud size={24} /> },
    { name: "Netlify", icon: <Globe size={24} /> },
    { name: "GitHub Pages", icon: <GitBranch size={24} /> },
    { name: "Hostinger", icon: <Server size={24} /> },
    { name: "Filezilla", icon: <HardDrive size={24} /> },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <AnimatedText 
          text="Skills & Technologies" 
          className="text-3xl md:text-4xl font-bold mb-2"
          variant="default"
        />
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
      </div>
      
      {/* Skills sections */}
      <div className="space-y-16">
        {/* Frontend Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center text-cyan-400">Technologies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 justify-items-center">
            {frontendSkills.map((skill, index) => (
              <SkillIcon key={skill.name} icon={skill.icon} name={skill.name} index={index} />
            ))}
          </div>
        </div>
        
        {/* Tools Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center text-cyan-400">Development Tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center max-w-2xl mx-auto">
            {toolsSkills.map((skill, index) => (
              <SkillIcon key={skill.name} icon={skill.icon} name={skill.name} index={index} />
            ))}
          </div>
        </div>

        {/* Hosting Tools Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center text-cyan-400">Hosting & Deployment</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center max-w-3xl mx-auto">
            {hostingSkills.map((skill, index) => (
              <SkillIcon key={skill.name} icon={skill.icon} name={skill.name} index={index} />
            ))}
          </div>
        </div>
        
        {/* Progress bars */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-cyan-400">Technical Proficiency</h3>
          <div className="grid gap-6 max-w-4xl mx-auto">
            {[
              { name: "React.js", percentage: 95 },
              { name: "JavaScript", percentage: 95 },
              { name: "Redux", percentage: 80 },
              { name: "HTML & CSS", percentage: 95 },
              { name: "Tailwind CSS", percentage: 90 },
              { name: "Bootstrap", percentage: 90 },
              { name: "Node.js", percentage: 90 },
              { name: "Express.js", percentage: 90 },
              { name: "MongoDB", percentage: 90 },
              { name: "Vercel Deployment", percentage: 95 },
              { name: "Netlify Deployment", percentage: 80 },
              { name: "Hostinger", percentage: 95 },
              { name: "Filezilla", percentage: 95 },
            ].map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-cyan-400 font-semibold">{skill.percentage}%</span>
                </div>
                <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden shadow-inner">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Additional Skills Visualization */}
      <div className="mt-24">
        <h3 className="text-2xl font-semibold mb-8 text-center text-cyan-400">Skills Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Technical Skills */}
          <motion.div 
            className="bg-gray-800/40 p-6 rounded-lg backdrop-blur-sm border border-gray-700 hover:border-cyan-400 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-xl font-medium mb-6 text-cyan-400 flex items-center gap-2">
              <Code2 size={20} />
              Technical Skills
            </h4>
            <div className="space-y-5">
              {[
                { name: "Frontend Development", percentage: 95 },
                { name: "Backend Development", percentage: 85 },
                { name: "Responsive Design", percentage: 95 },
                { name: "UI/UX Implementation", percentage: 90 },
                { name: "Deployment & Hosting", percentage: 90 },
              ].map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-cyan-400 text-sm font-semibold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden shadow-inner">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Soft Skills */}
          <motion.div 
            className="bg-gray-800/40 p-6 rounded-lg backdrop-blur-sm border border-gray-700 hover:border-cyan-400 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xl font-medium mb-6 text-cyan-400 flex items-center gap-2">
              <GitBranch size={20} />
              Soft Skills
            </h4>
            <div className="space-y-5">
              {[
                { name: "Problem Solving", percentage: 85 },
                { name: "Team Collaboration", percentage: 90 },
                { name: "Communication", percentage: 90 },
                { name: "Time Management", percentage: 95 },
                { name: "Adaptability", percentage: 95 },
              ].map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-cyan-400 text-sm font-semibold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden shadow-inner">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;