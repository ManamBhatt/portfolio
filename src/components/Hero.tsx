import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sentences = [
  "manage code versioning and collaboration using Git.",
  "automate CI/CD workflows using GitHub Actions.",
  "set up GitLab pipelines for continuous integration and deployment.",
  "build and automate CI/CD pipelines using AWS CodePipeline.",
  "create and manage CI/CD pipelines using Azure DevOps.",
  "automate software builds and deployments with Jenkins.",
  "provision and manage cloud infrastructure using Terraform.",
  "automate configuration management using Ansible.",
  "containerize applications using Docker.",
  "deploy and manage containerized applications with Kubernetes.",
  "automate the build and dependency management process using Maven.",
  "manage JavaScript dependencies and scripts with NPM.",
  "monitor and analyze logs and machine data with Splunk.",
  "monitor and alert on system metrics using Prometheus.",
  "visualize and analyze data using Grafana dashboards.",
  "perform static code analysis and improve code quality with SonarQube.",
  "identify and manage open-source vulnerabilities with Blackduck.",
  "conduct security vulnerability scanning using Fortify.",
  "manage and control access to AWS resources with AWS IAM.",
  "ensure the security of Azure environments using Azure Security Center.",
  "track and manage project tasks and bugs using JIRA.",
  "create and collaborate on documentation and knowledge bases using Confluence.",
  "manage and track work items with Azure Boards.",
  "manage IT service workflows and incidents with ServiceNow.",
  "define configuration files and data structures using YAML.",
  "write shell scripts for automation using BASH.",
  "automate tasks and write scripts using Python.",
  "structure data and configurations using JSON.",
  "provision and manage cloud resources on Microsoft Azure.",
  "manage cloud infrastructure on Amazon Web Services (AWS).",
  "provision and manage resources on Google Cloud Platform (GCP).",
  "manage and deliver projects using Agile methodologies.",
  "implement Scrum framework for efficient project management and delivery.",
];

const TypingEffect = ({ text, speed, onComplete }: { text: string; speed: number; onComplete?: () => void }) => {
  const [displayText, setDisplayText] = useState("");
  useEffect(() => {
    let charIndex = 0;
    const typeText = () => {
      if (charIndex <= text.length) {
        setDisplayText(text.substring(0, charIndex));
        charIndex++;
        setTimeout(typeText, speed);
      } else if (onComplete) {
        setTimeout(onComplete, 1000);
      }
    };
    setDisplayText(""); // Reset text before new sentence
    typeText();
  }, [text]);

  return <span>{displayText}</span>;
};

const Hero = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [sentenceIndex, setSentenceIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setShowIntro(true);
    }, 3000); // Delay before showing the "I can" section
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSentenceIndex((prev) => (prev + 1) % sentences.length);
    }, 3000);
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
        <p className="text-accent mb-4 font-mono">
          <TypingEffect text="Hi, my name is Manam Bhatt" speed={100} />
        </p>
        <p className="text-xl md:text-2xl text-slate mb-6">
          <TypingEffect text="Senior DevOps Engineer | Cloud & Automation Specialist" speed={100} />
        </p>

        {showIntro && (
          <div className="text-xl md:text-2xl text-slate flex justify-center items-center">
            <span className="font-semibold">I can&nbsp;</span>
            <TypingEffect text={sentences[sentenceIndex]} speed={100} />
          </div>
        )}

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
