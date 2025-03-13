import React from 'react';
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

  return (
    <div className="h-screen flex items-center justify-center bg-deep-blue relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-deep-blue to-deep-blue" />
      
      <motion.div 
        className="text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p 
          className="text-accent mb-4 font-mono"
          variants={itemVariants}
        >
          Hi, my name is
        </motion.p>

        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4 text-light-slate typing-name" 
          variants={itemVariants}
        >
          Manam Bhatt
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl mb-8 text-slate typing-description" 
          variants={itemVariants}
        >
          Senior DevOps Engineer | Cloud & Automation Specialist
        </motion.p>

        <motion.p 
          className="text-xl md:text-2xl mb-8 text-slate typing-description" 
          variants={itemVariants}
        >
          I can manage code versioning and collaboration using Git.<br />
          I can automate CI/CD workflows using GitHub Actions.<br />
          I can set up GitLab pipelines for continuous integration and deployment.<br />
          I can build and automate CI/CD pipelines using AWS CodePipeline.<br />
          I can create and manage CI/CD pipelines using Azure DevOps.<br />
          I can automate software builds and deployments with Jenkins.<br />
          I can provision and manage cloud infrastructure using Terraform.<br />
          I can automate configuration management using Ansible.<br />
          I can containerize applications using Docker.<br />
          I can deploy and manage containerized applications with Kubernetes.<br />
          I can automate the build and dependency management process using Maven.<br />
          I can manage JavaScript dependencies and scripts with NPM.<br />
          I can monitor and analyze logs and machine data with Splunk.<br />
          I can monitor and alert on system metrics using Prometheus.<br />
          I can visualize and analyze data using Grafana dashboards.<br />
          I can perform static code analysis and improve code quality with SonarQube.<br />
          I can identify and manage open-source vulnerabilities with Blackduck.<br />
          I can conduct security vulnerability scanning using Fortify.<br />
          I can manage and control access to AWS resources with AWS IAM.<br />
          I can ensure the security of Azure environments using Azure Security Center.<br />
          I can track and manage project tasks and bugs using JIRA.<br />
          I can create and collaborate on documentation and knowledge bases using Confluence.<br />
          I can manage and track work items with Azure Boards.<br />
          I can manage IT service workflows and incidents with ServiceNow.<br />
          I can define configuration files and data structures using YAML.<br />
          I can write shell scripts for automation using BASH.<br />
          I can automate tasks and write scripts using Python.<br />
          I can structure data and configurations using JSON.<br />
          I can provision and manage cloud resources on Microsoft Azure.<br />
          I can manage cloud infrastructure on Amazon Web Services (AWS).<br />
          I can provision and manage resources on Google Cloud Platform (GCP).<br />
          I can manage and deliver projects using Agile methodologies.<br />
          I can implement Scrum framework for efficient project management and delivery.<br />
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
