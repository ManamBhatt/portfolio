import React from 'react';
import { 
  Github, 
  Server, 
  Cloud, 
  Shield, 
  Terminal
} from 'lucide-react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'DevOps Tools',
    icon: <Server className="w-8 h-8" />,
    skills: [
      { name: 'GitHub', level: 'Expert' },
      { name: 'Jenkins', level: 'Expert' },
      { name: 'Terraform', level: 'Expert' },
      { name: 'Kubernetes', level: 'Proficient' }
    ]
  },
  {
    title: 'Cloud',
    icon: <Cloud className="w-8 h-8" />,
    skills: [
      { name: 'AWS', level: 'Expert' },
      { name: 'Azure', level: 'Proficient' },
      { name: 'GCP', level: 'Proficient' }
    ]
  },
  {
    title: 'Security',
    icon: <Shield className="w-8 h-8" />,
    skills: [
      { name: 'SonarQube', level: 'Expert' },
      { name: 'Fortify', level: 'Proficient' },
      { name: 'IAM', level: 'Expert' }
    ]
  },
  {
    title: 'Scripting',
    icon: <Terminal className="w-8 h-8" />,
    skills: [
      { name: 'Bash', level: 'Expert' },
      { name: 'Python', level: 'Proficient' },
      { name: 'YAML', level: 'Expert' }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-navy">
      <div className="section-container">
        <h2 className="section-heading">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="glass-card p-6 hover:border-accent/30 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-6 text-accent">
                  {category.icon}
                  <h3 className="text-xl font-bold text-light-slate">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="bg-deep-blue/50 p-4 rounded border border-accent/10">
                      <div className="flex justify-between items-center">
                        <span className="text-slate">{skill.name}</span>
                        <span className="text-sm text-accent">{skill.level}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;