import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
// import ContactPage from './components/Contact'; // Import the Contact component
// import Footer from './components/Footer'; // Import the Footer component

import { motion, useAnimation } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>
      
      <section id="about" className="py-20">
        <About />
      </section>
      
      <section id="experience" className="py-20 bg-gray-900/50">
        <Experience />
      </section>
      
      <section id="skills" className="py-20">
        <Skills />
      </section>
      
      <section id="projects" className="py-20 bg-gray-900/50">
        <Projects />
      </section>
      
      <section id="education" className="py-20">
        <Education />
      </section>
      
      {/* Add Contact section to the home page */}
      {/* <section id="contact" className="py-20 bg-gray-900/50">
        <ContactPage />
      </section> */}
    </main>
  );
}

function App() {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          {/* Add Contact route */}
          {/* <Route path="/contact" element={<ContactPage />} /> */}
        </Routes>
        {/* Add Footer component */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;