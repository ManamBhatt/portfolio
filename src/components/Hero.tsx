import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sentences = [
  "I can manage code versioning and collaboration using Git.",
  "I can automate CI/CD workflows using GitHub Actions.",
  "I can set up GitLab pipelines for continuous integration and deployment.",
  "I can build and automate CI/CD pipelines using AWS CodePipeline.",
  "I can create and manage CI/CD pipelines using Azure DevOps.",
  "I can automate software builds and deployments with Jenkins.",
  "I can provision and manage cloud infrastructure using Terraform.",
  "I can automate configuration management using Ansible.",
  "I can containerize applications using Docker.",
  "I can deploy and manage containerized applications with Kubernetes.",
];

const TypingEffect = ({ text, speed, onComplete }: { text: string; speed: number; onComplete?: () => void }) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let charIndex = 0;

    const typeText = () => {
      if (charIndex < text.length) {
        setDisplayText((prev) => prev + text[charIndex]);
        charIndex++;
        setTimeout(typeText, speed);
      } else {
        setIsTyping(false);
        if (onComplete) setTimeout(onComplete, 1000);
      }
    };

    setDisplayText("");
    setIsTyping(true);
    typeText();
  }, [text]);

  return <span>{displayText}</span>;
};

const Hero = () => {
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [showSentence, setShowSentence] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowSentence(true), 4000); // Wait for intro to finish typing
    const interval = setInterval(() => {
      setShowSentence(false);
      setTimeout(() => {
        setSentenceIndex((prev) => (prev + 1) % sentences.length);
        setShowSentence(true);
      }, 500); // Short delay before next sentence starts typing
    }, 5000); // Full cycle (typing + delay + deletion)

    return () => clearInterval(interval);
  }, []);

  const scrollToWork = () => {
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-deep-blue relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-deep-blue to-deep-blue" />

      <motion.div
        className="z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Permanent Typing Animation for Name & Title */}
        <p className="text-accent mb-2 font-mono text-lg">
          <TypingEffect text="Hi, my name is" speed={100} />
        </p>
        <p className="text-5xl md:text-7xl font-bold text-white mb-6">
          <TypingEffect text="Manam Bhatt" speed={100} />
        </p>
        <p className="text-xl md:text-2xl text-slate mb-6">
          <TypingEffect text="Senior DevOps Engineer | Cloud & Automation Specialist" speed={100} />
        </p>

        {/* Rotating "I can" Sentences */}
        <div className="text-xl md:text-2xl text-slate h-8">
          {showSentence && <TypingEffect text={sentences[sentenceIndex]} speed={50} />}
        </div>

        <motion.button
          className="mt-6 px-6 py-3 bg-transparent border border-accent text-accent rounded-lg hover:bg-accent/10 transition-all duration-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6 }}
          onClick={scrollToWork}
        >
          View My Work
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
