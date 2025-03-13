import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// List of "I can" sentences
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
  "I can automate the build and dependency management process using Maven.",
  "I can manage JavaScript dependencies and scripts with NPM.",
  "I can monitor and analyze logs and machine data with Splunk.",
  "I can monitor and alert on system metrics using Prometheus.",
  "I can visualize and analyze data using Grafana dashboards.",
  "I can perform static code analysis and improve code quality with SonarQube.",
  "I can identify and manage open-source vulnerabilities with Blackduck.",
  "I can conduct security vulnerability scanning using Fortify.",
  "I can manage and control access to AWS resources with AWS IAM.",
  "I can ensure the security of Azure environments using Azure Security Center.",
  "I can track and manage project tasks and bugs using JIRA.",
  "I can create and collaborate on documentation and knowledge bases using Confluence.",
  "I can manage and track work items with Azure Boards.",
  "I can manage IT service workflows and incidents with ServiceNow.",
  "I can define configuration files and data structures using YAML.",
  "I can write shell scripts for automation using BASH.",
  "I can automate tasks and write scripts using Python.",
  "I can structure data and configurations using JSON.",
  "I can provision and manage cloud resources on Microsoft Azure.",
  "I can manage cloud infrastructure on Amazon Web Services (AWS).",
  "I can provision and manage resources on Google Cloud Platform (GCP).",
  "I can manage and deliver projects using Agile methodologies.",
  "I can implement Scrum framework for efficient project management and delivery."
];

const TypingEffect = ({ text, speed, onComplete }: { text: string; speed: number; onComplete?: () => void }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let charIndex = 0;

    const typeText = () => {
      if (charIndex < text.length) {
        setDisplayText((prev) => prev + text[charIndex]);
        charIndex++;
        setTimeout(typeText, speed);
      } else if (onComplete) {
        setTimeout(onComplete, 1000);
      }
    };

    setDisplayText(""); // Reset text before starting typing effect
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
      }, 500);
    }, 5000); // Typing + Delay + Deletion Cycle

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
        {/* Static Typing Animation for Name & Title */}
        <p className="text-accent mb-2 font-mono text-lg">
          <TypingEffect text="Hi, my name is" speed={100} />
        </p>
        <p className="text-5xl md:text-7xl font-bold text-white mb-6">
          <TypingEffect text="Black myth wuknog" speed={100} />
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
