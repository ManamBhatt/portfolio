import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const descriptions = [
  "Manage code versioning and collaboration using Git.",
  "Deploy and manage containerized applications with Kubernetes.",
  "Automate infrastructure provisioning with Terraform.",
  "Create and collaborate on documentation using Confluence.",
  "Automate the build and deployment process with Jenkins."
];

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % descriptions.length);
    }, 3000); // Change description every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-center text-white px-4">
      <p className="text-accent mb-4 font-mono">Hi, my name is</p>
      <h1 className="text-5xl font-bold mb-2">Manam Bhatt</h1>
      <p className="text-xl text-slate-300">Senior DevOps Engineer | Cloud & Automation Specialist</p>
      <div className="h-8 mt-4 relative flex justify-center items-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            className="text-lg text-slate-300 absolute"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            {descriptions[index]}
          </motion.p>
        </AnimatePresence>
      </div>
      <motion.button 
        className="btn-primary mt-6"
        whileHover={{ scale: 1.05 }}
      >
        View My Work
      </motion.button>
    </div>
  );
};

export default Hero;
