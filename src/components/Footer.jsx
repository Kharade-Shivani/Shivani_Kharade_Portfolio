import { Github, Linkedin, Send } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Shivani Kharade</h3>
            <p className="text-gray-300 mb-4">
              A passionate developer focused on creating beautiful and functional web experiences.
            </p>

            <div className="flex space-x-4">
              <a href="https://github.com/Kharade-Shivani" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/kharade-shivani-2a7a26247/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition">Home</a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition">About</a>
              </li>
              <li>
                <a href="/projects" className="text-gray-300 hover:text-white transition">Projects</a>
              </li>
              <li>
                <a href="/experience" className="text-gray-300 hover:text-white transition">Experience</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter Signup */}
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to my newsletter for the latest updates, articles, and resources.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-900"
              />
              <button
                className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-r-md flex items-center justify-center"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© {currentYear} Shivani Kharade. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-white text-sm transition">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;