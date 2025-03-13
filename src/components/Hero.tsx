import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const descriptions = [
    "I manage code versioning and collaboration using Git.",
    "I automate CI/CD workflows with GitHub Actions.",
    // ... (other descriptions remain the same)
  ];

  const [currentDescription, setCurrentDescription] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isCursorVisible, setIsCursorVisible] = useState(true);

  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const deletingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const cursorBlinkTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const typeText = (text: string, index: number = 0) => {
      if (index < text.length) {
        setCurrentText((prev) => prev + text[index]);
        typingTimeoutRef.current = setTimeout(() => typeText(text, index + 1), 100);
      } else {
        deletingTimeoutRef.current = setTimeout(deleteText, 2000);
      }
    };

    const deleteText = () => {
      if (currentText.length > 0) {
        setCurrentText((prev) => prev.slice(0, -1));
        deletingTimeoutRef.current = setTimeout(deleteText, 50);
      } else {
        setTimeout(() => {
          setCurrentDescription((prev) => (prev + 1) % descriptions.length);
        }, 500);
      }
    };

    const startTyping = () => {
      setCurrentText("");
      typeText(descriptions[currentDescription]);
    };

    const blinkCursor = () => {
      cursorBlinkTimeoutRef.current = setInterval(() => {
        setIsCursorVisible((prev) => !prev);
      }, 500);
    };

    startTyping();
    blinkCursor();

    return () => {
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
      if (deletingTimeoutRef.current) clearTimeout(deletingTimeoutRef.current);
      if (cursorBlinkTimeoutRef.current) clearInterval(cursorBlinkTimeoutRef.current);
    };
  }, [currentDescription]);

  return (
    <div className="h-screen flex items-center justify-center bg-deep-blue relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-deep-blue to-deep-blue" />
      
      <motion.div 
        className="text-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.p className="text-accent mb-4 font-mono">
          Hi, my name is
        </motion.p>

        <motion.h1 className="text-5xl md:text-7xl font-bold mb-4 text-light-slate">
          Manam Bhatt
        </motion.h1>

        <motion.p className="text-xl md:text-2xl mb-4 text-slate">
          Senior DevOps Engineer | Cloud & Automation Specialist
        </motion.p>

        <motion.p className="text-xl md:text-2xl mb-8 text-slate flex items-center justify-center">
          <span className="animate-typing" style={{ whiteSpace: 'pre' }}>{currentText}</span>
          <span className={`cursor-blink ${isCursorVisible ? 'visible' : 'invisible'}`}>|</span>
        </motion.p>

        <motion.button className="btn-primary">
          View My Work
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
