import React from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-navy">
      <motion.div 
        className="section-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-accent/20 rounded-lg blur-md"
              animate={{
                scale: [1, 1.02, 1],
                opacity: [0.5, 0.6, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt="Profile"
              className="relative rounded-lg w-full max-w-md mx-auto glass-card"
            />
          </div>
          <div>
            <h2 className="section-heading">About Me</h2>
            <p className="text-slate mb-6">
            Certified Senior DevOps Engineer with 9 years of experience in CI/CD pipelines. <br />
  Expertise in collaborating with development teams to streamline build, release, and deployment processes. <br />
  Skilled in automating infrastructure using Terraform and Ansible. <br />
  Strong background in database management, SQL optimization, and high availability. <br />
  Experienced in containerization with Docker and Kubernetes. <br />
  Proficient in scripting with Unix, Python, and YAML for automation and integration. <br />
  Expertise in cloud computing and distributed systems across Azure, AWS, and Google Cloud. <br />
  Proven leadership in team collaboration, project delivery, and problem-solving. <br /> 
            </p>
            <button className="btn-primary flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Resume
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
