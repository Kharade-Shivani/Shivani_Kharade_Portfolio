import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, BookOpen, GraduationCap, Award } from 'lucide-react';

// Simple AnimatedText component since it's not defined
const AnimatedText = ({ text, className, variant }) => (
  <h2 className={className}>{text}</h2>
);

const ContactEducationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset submission message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  const education = [
    {
      degree: "Bachelor of Computer Engineering (BE)",
      institution: "S.B.Patil college of Engineering, Indapur",
      duration: "2022 - 2025",
      percentage: "82.20%",
      details: "Completed a Bachelor of Engineering with a concentration in computer engineering, mastering core concepts such as data structures, algorithms, operating systems, and software design. Applied this knowledge through multiple capstone and team‑based projects, translating theory into real‑world solutions across web and system‑level development."
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Government Polytechnic Pune, Pune",
      duration: "2019 - 2022",
      percentage: "82%",
      details: "Completed Diploma in Computer Engineering with a strong foundation in computer science fundamentals, programming languages, and software development. Gained hands-on experience through academic and practical projects involving web development, networking, and database management. Applied theoretical concepts to real-world problem-solving and technical implementations."
    }
  ];

  const certifications = [
    {
      title: "Full Stack MERN Development",
      issuer: "IStepUp Training & Placement, Baramati",
      year: "2024",
      details: "Skilled in building dynamic, responsive web applications using MongoDB, Express.js, React.js, and Node.js. Experienced in developing RESTful APIs, managing databases, and creating intuitive front-end interfaces. Focused on delivering scalable, high-performance solutions with clean and maintainable code."
    },
    // {
    //   title: "React.js Certification",
    //   issuer: "BrainWave Matrix Solution",
    //   year: "2024",
    //   details: "Professional certification in React.js development focusing on modern web application architecture and best practices."
    // }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Education & Certifications Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <AnimatedText 
            text="Education & Certifications" 
            className="text-3xl md:text-4xl font-bold mb-2"
            variant="default"
          />
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Section */}
          <div className="bg-gray-800/50 rounded-xl p-6 shadow-lg border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <GraduationCap className="mr-2 text-cyan-400" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-cyan-500 pl-4">
                  <h4 className="text-xl font-semibold text-cyan-400">{edu.degree}</h4>
                  <p className="text-gray-300">{edu.institution}</p>
                  <div className="flex justify-between mt-2">
                    <span className="text-gray-400">{edu.duration}</span>
                    <span className="text-cyan-500 font-medium">{edu.percentage}</span>
                  </div>
                  <p className="mt-3 text-gray-400 text-sm leading-relaxed">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="bg-gray-800/50 rounded-xl p-6 shadow-lg border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Award className="mr-2 text-cyan-400" />
              Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="border-l-2 border-cyan-500 pl-4">
                  <h4 className="text-lg font-semibold text-cyan-400">{cert.title}</h4>
                  <p className="text-gray-300">{cert.issuer}</p>
                  <span className="inline-block bg-blue-900/40 text-blue-300 text-sm px-2 py-1 rounded mt-1">
                    {cert.year}
                  </span>
                  <p className="mt-2 text-gray-400 text-sm">{cert.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Gained Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center">
            <BookOpen className="mr-2 text-cyan-400" />
            Skills Gained
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["JavaScript", "React.js", "HTML5", "CSS3", "Tailwind CSS", "Git", "Node.js", "Express.js", "REST APIs", "Bootstrap", "MongoDB", "Responsive Design"].map((skill, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-cyan-800/40 to-blue-800/40 px-4 py-2 rounded-full text-cyan-200 border border-cyan-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <AnimatedText 
              text="Get In Touch" 
              className="text-3xl md:text-4xl font-bold mb-2"
              variant="default"
            />
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or want to discuss educational opportunities? Feel free to reach out using the contact information below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="bg-gray-900/80 p-6 rounded-lg shadow-md md:col-span-1 border border-gray-700">
              <h2 className="text-2xl font-semibold mb-6 text-cyan-400">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-cyan-500" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-400">Email</p>
                    <a href="mailto:akankshajagtap13@gmail.com" className="text-base text-gray-100 hover:text-cyan-400 transition">
                      shivanikharade18@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-cyan-500" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-400">Phone</p>
                    <a href="tel:+919022157620" className="text-base text-gray-100 hover:text-cyan-400 transition">
                      +91 7249269652
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-cyan-500" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-400">Location</p>
                    <p className="text-base text-gray-100">
                      Pune, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-lg font-medium text-gray-100 mb-4">Connect with me</h3>
                <div className="flex space-x-4">
                  <a href="https://github.com/" target="_blank" rel="noreferrer" className="bg-gray-800 hover:bg-cyan-900 text-gray-300 hover:text-cyan-400 p-3 rounded-full transition border border-gray-700">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="bg-gray-800 hover:bg-cyan-900 text-gray-300 hover:text-cyan-400 p-3 rounded-full transition border border-gray-700">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  {/* <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="bg-gray-800 hover:bg-cyan-900 text-gray-300 hover:text-cyan-400 p-3 rounded-full transition border border-gray-700">
                    <Twitter className="h-5 w-5" />
                  </a> */}
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gray-900/80 p-6 rounded-lg shadow-md md:col-span-2 border border-gray-700">
              <h2 className="text-2xl font-semibold mb-6 text-cyan-400">Send a Message</h2>
              
              {isSubmitted ? (
                <div className="bg-green-900/50 border border-green-600 text-green-400 p-4 rounded-md mb-6">
                  Thank you for your message! I'll get back to you soon.
                </div>
              ) : null}
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md focus:ring-cyan-500 focus:border-cyan-500 text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md focus:ring-cyan-500 focus:border-cyan-500 text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md focus:ring-cyan-500 focus:border-cyan-500 text-white"
                    placeholder="What is this regarding?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md focus:ring-cyan-500 focus:border-cyan-500 text-white"
                    placeholder="Your message here..."
                  />
                </div>
                
                <div>
                  <button
                    onClick={handleSubmit}
                    className="w-full sm:w-auto flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Shivani Kharade</h3>
              <p className="text-gray-300 mb-4">
                A passionate developer focused on creating beautiful and functional web experiences.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/Kharade-Shivani" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-400 transition">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/kharade-shivani-2a7a26247/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-400 transition">
                  <Linkedin className="h-5 w-5" />
                </a>
                {/* <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-400 transition">
                  <Twitter className="h-5 w-5" />
                </a> */}
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-300 hover:text-cyan-400 transition">Home</a>
                </li>
                <li>
                  <a href="/about" className="text-gray-300 hover:text-cyan-400 transition">About</a>
                </li>
                <li>
                  <a href="/projects" className="text-gray-300 hover:text-cyan-400 transition">Projects</a>
                </li>
                <li>
                  <a href="/education" className="text-gray-300 hover:text-cyan-400 transition">Education</a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-300 hover:text-cyan-400 transition">Contact</a>
                </li>
              </ul>
            </div>
            
            {/* Newsletter Signup */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Stay Updated</h3>
              <p className="text-gray-300 mb-4">
                Subscribe to my newsletter for the latest updates, articles, and resources.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 w-full rounded-l-md focus:outline-none bg-gray-800 text-white border-y border-l border-gray-700"
                />
                <button
                  className="bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 px-4 py-2 rounded-r-md flex items-center justify-center"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Shivani Kharade. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a href="/privacy" className="text-gray-400 hover:text-cyan-400 text-sm transition">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms" className="text-gray-400 hover:text-cyan-400 text-sm transition">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactEducationPage;