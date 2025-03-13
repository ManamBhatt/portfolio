import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-deep-blue relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-deep-blue to-deep-blue" />
      
      <motion.div 
        className="text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p 
          className="text-accent mb-4 font-mono"
          variants={itemVariants}
        >
          Hi, my name is
        </motion.p>
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4 text-light-slate"
          variants={itemVariants}
        >
          Manam Bhatt
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-slate"
          variants={itemVariants}
        >
          Senior DevOps Engineer | Cloud & Automation Specialist
        </motion.p>
        
        {/* Use an anchor tag to scroll to the work section */}
        <motion.a 
          href="#work" // Add the target section's ID here
          className="btn-primary"
          variants={itemVariants}
        >
          View My Work
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Hero;
