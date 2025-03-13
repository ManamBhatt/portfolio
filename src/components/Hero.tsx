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
  const [isCursorVisible, setIsCursorVisible] = useState(true);

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout;
    let deletingTimeout: NodeJS.Timeout;
    let cursorBlinkTimeout: NodeJS.Timeout;

    const typeText = (text: string) => {
      let index = 0;
      setIsCursorVisible(true);
      typingTimeout = setInterval(() => {
        setCurrentText((prev) => prev + text[index]);
        index += 1;
        if (index === text.length) {
          clearInterval(typingTimeout);
          // Start deleting after typing is done
          setTimeout(() => deleteText(), 2000); // Wait 2 seconds before starting delete
        }
      }, 100); // Typing speed (100ms per letter)
    };

    const deleteText = () => {
      let index = currentText.length;
      deletingTimeout = setInterval(() => {
        setCurrentText((prev) => prev.slice(0, index - 1));
        index -= 1;
        if (index === 0) {
          clearInterval(deletingTimeout);
          // You can set the next text or stop here
        }
      }, 50); // Deleting speed (50ms per letter)
    };

    typeText("I manage code versioning and collaboration using Git.");

    const blinkCursor = () => {
      cursorBlinkTimeout = setInterval(() => {
        setIsCursorVisible((prev) => !prev);
      }, 500); // Cursor blinks every 500ms
    };

    blinkCursor();

    // Clean up intervals and timeouts when component unmounts
    return () => {
      clearInterval(typingTimeout);
      clearInterval(deletingTimeout);
      clearInterval(cursorBlinkTimeout);
    };
  }, [currentText]);

  return (
    <div className="h-screen flex items-center justify-center bg-deep-blue relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-deep-blue to-deep-blue" />
      
      <motion.div 
        className="text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Line 1: Hi, my name is */}
        <motion.p 
          className="text-accent mb-4 font-mono"
          variants={itemVariants}
        >
          Hi, my name is
        </motion.p>

        {/* Line 2: Manam Bhatt */}
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4 text-light-slate"
          variants={itemVariants}
        >
          Manam Bhatt
        </motion.h1>

        {/* Line 3: Senior DevOps Engineer | Cloud & Automation Specialist */}
        <motion.p 
          className="text-xl md:text-2xl mb-4 text-slate"
          variants={itemVariants}
        >
          Senior DevOps Engineer | Cloud & Automation Specialist
        </motion.p>

        {/* Typing effect */}
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-slate flex items-center justify-center"
          variants={itemVariants}
        >
          <span className="animate-typing">{currentText}</span>
          <span className={`cursor-blink ${isCursorVisible ? 'visible' : 'invisible'}`}>|</span>
        </motion.p>

        <motion.button 
          className="btn-primary"
          variants={itemVariants}
        >
          View My Work
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;

