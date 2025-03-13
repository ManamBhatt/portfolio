import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const descriptions = [
    "manage code versioning and collaboration using Git.",
    "automate CI/CD workflows using GitHub Actions.",
    "set up GitLab pipelines for continuous integration and deployment.",
  ];

  const [currentDescription, setCurrentDescription] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isCursorVisible, setIsCursorVisible] = useState(true);

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout;
    let deletingTimeout: NodeJS.Timeout;
    let cursorBlinkTimeout: NodeJS.Timeout;

    const typeText = (text: string) => {
      let index = 0;
      setCurrentText(""); // Reset before typing starts
      setIsTyping(true);

      typingTimeout = setInterval(() => {
        setCurrentText((prev) => {
          if (index >= text.length) {
            clearInterval(typingTimeout);
            setTimeout(() => deleteText(text), 2000); // Wait 2s before deleting
            return prev;
          }
          index++;
          return text.substring(0, index);
        });
      }, 100);
    };

    const deleteText = (text: string) => {
      let index = text.length;
      setIsTyping(false);

      deletingTimeout = setInterval(() => {
        setCurrentText((prev) => {
          if (index <= 0) {
            clearInterval(deletingTimeout);
            setTimeout(() => {
              setCurrentDescription((prev) => (prev + 1) % descriptions.length);
            }, 500);
            return "";
          }
          index--;
          return text.substring(0, index);
        });
      }, 50);
    };

    const startTyping = () => {
      typeText(descriptions[currentDescription]);
    };

    const blinkCursor = () => {
      cursorBlinkTimeout = setInterval(() => {
        setIsCursorVisible((prev) => !prev);
      }, 500);
    };

    startTyping();
    blinkCursor();

    return () => {
      clearInterval(typingTimeout);
      clearInterval(deletingTimeout);
      clearInterval(cursorBlinkTimeout);
    };
  }, [currentDescription]);

  return (
    <div className="h-screen flex items-center justify-center bg-deep-blue relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-deep-blue to-deep-blue" />
      
      <motion.div 
        className="text-center z-10"
        initial="hidden"
        animate="visible"
      >
        <motion.p className="text-accent mb-4 font-mono">
          Hi, my name is
        </motion.p>

        <motion.h1 className="text-5xl md:text-7xl font-bold mb-4 text-light-slate">
          Manam Bhatt
        </motion.h1>

        <motion.p className="text-xl md:text-2xl mb-4 text-white">
          <span className="mr-2">I can</span>
          <span>{currentText}</span>
          <span className={`cursor-blink ${isCursorVisible ? 'visible' : 'invisible' }} "">|</span>
        </motion.p>

        <motion.button
          className="px-6 py-3 bg-accent text-dark font-bold rounded-xl hover:bg-opacity-80"
        >
          See My Work
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
