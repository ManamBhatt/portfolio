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
  "I can implement Scrum framework for efficient project management and delivery.",
];

const TypingEffect = ({ text, speed }: { text: string; speed: number }) => {
  const [displayText, setDisplayText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let charIndex = 0;
    const typeText = () => {
      if (charIndex <= text.length) {
        setDisplayText(text.substring(0, charIndex));
        charIndex++;
        setTimeout(typeText, speed);
      } else {
        setTimeout(() => deleteText(), 1000);
      }
    };

    const deleteText = () => {
      let deleteIndex = text.length;
      const erase = () => {
        if (deleteIndex >= 0) {
          setDisplayText(text.substring(0, deleteIndex));
          deleteIndex--;
          setTimeout(erase, speed / 2);
        } else {
          setTyping(false);
        }
      };
      erase();
    };

    setTyping(true);
    setDisplayText("");
    typeText();
  }, [text]);

  return <span>{displayText}</span>;
};

const Hero = () => {
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [showTyping, setShowTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setSentenceIndex((prev) => (prev + 1) % sentences.length);
      setShowTyping(true);
    }, 6000); // Ensures complete typing and erasing before switching sentences

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
        <p className="text-accent mb-2 font-mono text-lg">
          <TypingEffect text="Hi, my name is" speed={100} />
        </p>
        <p className="text-5xl md:text-7xl font-bold text-white mb-6">
          <TypingEffect text="Manam Bhatt" speed={100} />
        </p>
        <p className="text-xl md:text-2xl text-slate mb-6">
          <TypingEffect text="Senior DevOps Engineer | Cloud & Automation Specialist" speed={100} />
        </p>

        <div className="text-xl md:text-2xl text-slate">
          {showTyping && <TypingEffect text={sentences[sentenceIndex]} speed={100} />}
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
