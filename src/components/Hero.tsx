import React, { useState, useEffect } from 'react';
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

  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const lines = [
    "Hi, my name is Manam Bhatt",
    "Senior DevOps Engineer | Cloud & Automation Specialist"
  ];

  // Typing effect logic
  useEffect(() => {
    let typingTimeout: NodeJS.Timeout;

    const typeText = (text: string) => {
      let index = 0;
      setIsTyping(true);
      typingTimeout = setInterval(() => {
        setCurrentText((prev) => prev + text[index]);
        index += 1;
        if (index === text.length) {
          clearInterval(typingTimeout);
          setTimeout(() => {
            setTextIndex((prev) => (prev + 1) % lines.length); // Move to the next line after typing is done
          }, 1000); // Wait 1 second before starting the next line
        }
      }, 150); // Typing speed (150ms per letter)
    };

    if (textIndex < lines.length) {
      setCurrentText(""); // Reset text for each line
      typeText(lines[textIndex]);
    }

    return () => clearInterval(typingTimeout); // Clean up timeout on component unmount
  }, [textIndex]);

  return (
    <div className="h-screen flex items-center justify-center bg-deep-blue relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-deep-blue to-deep-blue" />
      
      <motion.div 
        className="text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Typing effect for Hi, my name is Manam Bhatt */}
        <motion.p 
          className="text-accent mb-4 font-mono"
          variants={itemVariants}
        >
          {currentText}
        </motion.p>

        {/* View My Work Button */}
        <motion.button 
          className="btn-primary"
          variants={itemVariants}
          onClick={() => window.location.href = '/work'} // This will redirect the user to the "/work" page (update this URL as needed)
        >
          View My Work
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
