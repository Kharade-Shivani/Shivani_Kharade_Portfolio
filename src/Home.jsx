import { useState, useEffect } from 'react';
import { 
  Home, 
  User, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter,
  MenuIcon,
  X
} from 'lucide-react';

// Animation helper
const FadeIn = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {children}
    </div>
  );
};

// Main App Component
export default function PortfolioApp() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const sections = ['home', 'about', 'experience', 'education', 'contact'];
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-50">
        <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            John Doe
          </h1>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`capitalize font-medium hover:text-blue-500 transition-colors ${
                  activeSection === section ? 'text-blue-500' : ''
                }`}
              >
                {section}
              </button>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden px-4 py-2 pb-4 bg-white dark:bg-gray-800 border-t dark:border-gray-700">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => {
                  setActiveSection(section); 
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 capitalize font-medium hover:text-blue-500 transition-colors ${
                  activeSection === section ? 'text-blue-500' : ''
                }`}
              >
                {section}
              </button>
            ))}
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-6 pt-24 pb-16">
        {/* Home Section */}
        {activeSection === 'home' && (
          <section className="min-h-screen flex flex-col justify-center">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                Hi, I'm <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">John Doe</span>
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <h3 className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-400 mb-6">
                Frontend Developer
              </h3>
            </FadeIn>
            <FadeIn delay={400}>
              <p className="text-lg max-w-2xl mb-8">
                I create beautiful, responsive, and user-friendly websites using 
                modern technologies like React, Tailwind CSS, and more.
              </p>
            </FadeIn>
            <FadeIn delay={600}>
              <div className="flex space-x-4">
                <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors font-medium">
                  Download Resume
                </button>
                <button 
                  onClick={() => setActiveSection('contact')}
                  className="px-6 py-3 border border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors font-medium"
                >
                  Contact Me
                </button>
              </div>
            </FadeIn>
            <FadeIn delay={800}>
              <div className="mt-12 flex space-x-4">
                <a href="#" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:text-blue-500 transition-colors">
                  <Github size={24} />
                </a>
                <a href="#" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:text-blue-500 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:text-blue-500 transition-colors">
                  <Twitter size={24} />
                </a>
              </div>
            </FadeIn>
          </section>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <section className="min-h-screen flex flex-col justify-center">
            <FadeIn>
              <div className="flex items-center mb-8">
                <User className="mr-3 text-blue-500" size={28} />
                <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
              </div>
            </FadeIn>
            
            <div className="grid md:grid-cols-2 gap-12">
              <FadeIn delay={200}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">Professional Profile</h3>
                  <p className="mb-4">
                    I'm a passionate frontend developer with 5+ years of experience, specializing in 
                    creating modern and responsive web applications using React, TypeScript, and Tailwind CSS.
                  </p>
                  <p>
                    With a strong focus on user experience and performance optimization, I strive to build
                    interfaces that are not only beautiful but also accessible and lightning-fast.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn delay={400}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">Skills</h3>
                  <div className="space-y-3">
                    {[
                      { name: 'React.js', level: 90 },
                      { name: 'JavaScript/TypeScript', level: 85 },
                      { name: 'HTML/CSS', level: 95 },
                      { name: 'Tailwind CSS', level: 90 },
                      { name: 'Node.js', level: 75 },
                    ].map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>
        )}

        {/* Experience Section */}
        {activeSection === 'experience' && (
          <section className="min-h-screen flex flex-col justify-center">
            <FadeIn>
              <div className="flex items-center mb-8">
                <Briefcase className="mr-3 text-blue-500" size={28} />
                <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
              </div>
            </FadeIn>
            
            <div className="space-y-8">
              {[
                {
                  title: 'Senior Frontend Developer',
                  company: 'Tech Innovations Inc.',
                  period: '2020 - Present',
                  description: 'Lead the development of modern web applications using React, TypeScript, and Tailwind CSS. Improved page load times by 40% through code optimization and lazy loading techniques.',
                  delay: 200
                },
                {
                  title: 'Frontend Developer',
                  company: 'Digital Solutions Co.',
                  period: '2018 - 2020',
                  description: 'Developed responsive websites and web applications. Collaborated with designers and backend developers to implement user interfaces and functionality.',
                  delay: 400
                },
                {
                  title: 'Junior Web Developer',
                  company: 'WebCraft Agency',
                  period: '2016 - 2018',
                  description: 'Created and maintained websites for clients. Implemented responsive designs and ensured cross-browser compatibility.',
                  delay: 600
                }
              ].map((job, index) => (
                <FadeIn key={index} delay={job.delay}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-lg text-blue-500 mb-3">{job.company}</p>
                    <p>{job.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>
        )}

        {/* Education Section */}
        {activeSection === 'education' && (
          <section className="min-h-screen flex flex-col justify-center">
            <FadeIn>
              <div className="flex items-center mb-8">
                <GraduationCap className="mr-3 text-blue-500" size={28} />
                <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
              </div>
            </FadeIn>
            
            <div className="space-y-8">
              {[
                {
                  degree: 'Master of Computer Science',
                  institution: 'Tech University',
                  period: '2014 - 2016',
                  description: 'Specialized in Web Technologies and Human-Computer Interaction. Graduated with honors.',
                  delay: 200
                },
                {
                  degree: 'Bachelor of Computer Science',
                  institution: 'State University',
                  period: '2010 - 2014',
                  description: 'Focused on Software Engineering and Web Development. Participated in various hackathons and coding competitions.',
                  delay: 400
                }
              ].map((edu, index) => (
                <FadeIn key={index} delay={edu.delay}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-lg text-blue-500 mb-3">{edu.institution}</p>
                    <p>{edu.description}</p>
                  </div>
                </FadeIn>
              ))}
              
              <FadeIn delay={600}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">Certifications</h3>
                  <ul className="space-y-2">
                    {[
                      'Advanced React Development - React Academy',
                      'Modern JavaScript - Frontend Masters',
                      'UI/UX Design Fundamentals - Design School',
                      'Web Accessibility - A11Y Certification'
                    ].map((cert, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-2 h-2 mt-2 mr-2 bg-blue-500 rounded-full" />
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section className="min-h-screen flex flex-col justify-center">
            <FadeIn>
              <div className="flex items-center mb-8">
                <Mail className="mr-3 text-blue-500" size={28} />
                <h2 className="text-3xl md:text-4xl font-bold">Contact Me</h2>
              </div>
            </FadeIn>
            
            <div className="grid md:grid-cols-2 gap-8">
              <FadeIn delay={200}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-6">Send me a message</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block mb-2 text-sm font-medium">Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your email"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium">Message</label>
                      <textarea 
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-32"
                        placeholder="Your message"
                      />
                    </div>
                    <button 
                      type="submit"
                      className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors font-medium"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </FadeIn>
              
              <FadeIn delay={400}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                      <p className="font-medium">john.doe@example.com</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                      <p className="font-medium">+1 (555) 123-4567</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                      <p className="font-medium">San Francisco, CA</p>
                    </div>
                    
                    <div className="pt-4">
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Social Media</p>
                      <div className="flex space-x-4">
                        <a href="#" className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:text-blue-500 transition-colors">
                          <Github size={20} />
                        </a>
                        <a href="#" className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:text-blue-500 transition-colors">
                          <Linkedin size={20} />
                        </a>
                        <a href="#" className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:text-blue-500 transition-colors">
                          <Twitter size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 py-6 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}