import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 }
};

function App() {
  return (
    <motion.div 
      className="min-h-screen bg-deep-blue text-slate"
      initial="initial"
      animate="animate"
      variants={fadeIn}
    >
      <nav className="fixed w-full bg-navy/80 backdrop-blur-sm z-50 border-b border-accent/10">
        <div className="section-container">
          <div className="flex justify-between h-16 items-center">
            <span className="text-xl font-bold text-accent">Manam Bhatt</span>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="nav-link">About</a>
              <a href="#experience" className="nav-link">Experience</a>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#work" className="nav-link">Work</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Portfolio />
        <Certifications />
        <Contact />
      </main>

      <footer className="bg-navy py-8 border-t border-accent/10">
        <div className="section-container">
          <div className="flex justify-between items-center">
            <p className="text-slate">© 2024 ManamBhatt. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="https://github.com/yourusername" className="text-slate hover:text-accent transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/yourusername" className="text-slate hover:text-accent transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:your.email@example.com" className="text-slate hover:text-accent transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}

export default App;