import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const descriptions = [
    "I manage code versioning and collaboration using Git.",
    "I automate CI/CD workflows with GitHub Actions.",
    "I set up GitLab pipelines for continuous integration and deployment.",
    "I build and automate CI/CD pipelines with AWS CodePipeline.",
    "I create and manage CI/CD pipelines using Azure DevOps.",
    "I automate software builds and deployments with Jenkins.",
    "I provision and manage cloud infrastructure using Terraform.",
    "I automate configuration management with Ansible.",
    "I containerize applications with Docker.",
    "I deploy and manage containerized applications with Kubernetes.",
    "I automate the build and dependency management process with Maven.",
    "I manage JavaScript dependencies and scripts with NPM.",
    "I monitor and analyze logs and machine data with Splunk.",
    "I monitor and alert on system metrics with Prometheus.",
    "I visualize and analyze data with Grafana dashboards.",
    "I perform static code analysis to improve code quality with SonarQube.",
    "I identify and manage open-source vulnerabilities with Blackduck.",
    "I conduct security vulnerability scanning using Fortify.",
    "I manage and control access to AWS resources using AWS IAM.",
    "I ensure the security of Azure environments with Azure Security Center.",
    "I track and manage project tasks and bugs with JIRA.",
    "I create and collaborate on documentation and knowledge bases using Confluence.",
    "I manage and track work items with Azure Boards.",
    "I manage IT service workflows and incidents with ServiceNow.",
    "I define configuration files and data structures with YAML.",
    "I write shell scripts for automation using BASH.",
    "I automate tasks and write scripts using Python.",
    "I structure data and configurations with JSON.",
    "I provision and manage cloud resources on Microsoft Azure.",
    "I manage cloud infrastructure on Amazon Web Services (AWS).",
    "I provision and manage resources on Google Cloud Platform (GCP).",
    "I manage and deliver projects using Agile methodologies.",
    "I implement Scrum frameworks for efficient project management and delivery."
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

  const handleWorkScroll = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

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

        <motion.button 
          className="btn-primary"
          onClick={handleWorkScroll}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="View my work"
        >
          View My Work
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
