import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Xebia',
    role: 'Senior DevOps Engineer',
    duration: '2021 - Present',
    responsibilities: [
      'Maintained CI/CD pipelines with GitHub Actions for seamless Azure & AWS infrastructure automation',
      'Provisioned and managed multi-cloud infrastructure using Terraform (IaC) for scalability and consistency',
      'Deployed and optimized cloud networking & infrastructure (VPCs, resource groups, app services, IAM)',
      'Configured firewalls, NSGs, and access controls, enforcing security policies',
      'Integrated SAST/DAST security scans into pipelines to enhance application security',
      'Managed SQL database tasks (restoration, export, deletion) ensuring data integrity',
      'Administered AWS IAM & Azure Entra ID for secure user access management',
      'Monitored cloud resources with Prometheus, Grafana, AWS CloudWatch, and Azure Monitor'
    ]
  },
  {
    company: 'Accenture',
    role: 'DevOps Engineer',
    duration: '2019 - 2021',
    responsibilities: [
      'Migrated microservices (Spring Boot, Maven) to Azure, reducing costs by 20%, improving time-to-market by 25%, and cutting operational tasks by 40%',
      'Implemented CI/CD pipeline with Azure DevOps and GitLab, boosting deployment velocity by 30%',
      'Set up Kubernetes clusters for scalability, high availability, and secure deployments',
      'Developed multi-stage Dockerfiles for faster, lightweight containers, reducing deployment time and VM overhead',
      'Integrated SonarQube and Twistlock for code quality and early vulnerability detection',
      'Used Splunk for troubleshooting container crashes and Pod issues',
      'Leveraged Azure Key Vault for secret management, improving compliance and reducing overhead',
      'Managed tasks with Azure Boards, Jira, and Confluence within Scrum framework',
      'Resolved Git merge conflicts, ensuring code consistency',
      'Led Scrum meetings and communicated with stakeholders'
    ]
  },
  {
    company: 'Wipro',
    role: 'Cloud Engineer',
    duration: '2017 - 2019',
    responsibilities: [
      'Led migration of SOA applications from On-prem to Azure and AWS Cloud (Java, Python, Angular/Node, .NET)',
      'Implemented version control with BitBucket, boosting commits by 20% over IBM RTC',
      'Managed Jenkins pipelines, increasing release frequency by 40%',
      'Used Terraform and AWS CloudFormation for cloud infrastructure, reducing human errors and deployment time by 50%',
      'Utilized Ansible playbooks to automate infrastructure provisioning, reducing manual tasks by 50% and deployment time by 40%',
      'Configured Kubernetes manifest for auto-healing, readiness/liveness probes, and Horizontal Pod Autoscaling',
      'Used Jira and Confluence for collaboration and managed Change Requests with ServiceNow',
      'Developed POC with AWS CodeDeploy to explore new technologies for product support and development'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-deep-blue">
      <div className="section-container">
        <h2 className="section-heading">Professional Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="glass-card p-6 hover:border-accent/30 transition-colors duration-300">
                <div className="flex items-start gap-8">
                  <div className="w-24 h-24 flex-shrink-0 bg-accent/10 rounded-lg flex items-center justify-center border border-accent/20">
                    <span className="text-xl font-bold text-accent">{exp.company}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-light-slate">{exp.role}</h3>
                    <p className="text-slate mb-4">{exp.duration}</p>
                    <ul className="list-disc list-inside text-slate space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
