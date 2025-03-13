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

  const descriptions = [
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
    "implement Scrum framework for efficient project management and delivery."
  ];

  const [currentDescription, setCurrentDescription] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDescription(prev => (prev + 1) % descriptions.length);
    }, 15000); // Change sentence every 15 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

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

        {/* Line 4: Static "I can" + Typing effect for the rest of the sentence */}
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-slate flex items-center justify-center"
          variants={itemVariants}
        >
          <span className="mr-2">I can</span> 
          <span className="animate-typing cursor-blink">{descriptions[currentDescription]}</span>
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
