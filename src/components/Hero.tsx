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

        {/* Line 4: Current Description */}
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-slate"
          variants={itemVariants}
        >
          {descriptions[currentDescription]}
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
