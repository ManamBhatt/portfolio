import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Enterprise CI/CD Pipeline',
    description: 'Automated deployment pipeline using Jenkins, Docker, and Kubernetes',
    image: 'portfolio/Untitled.jpg',
    github: 'https://github.com/ManamBhatt',
    demo: 'https://your-demo-url.com'
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Multi-cloud infrastructure setup using Terraform and Ansible',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
    github: 'https://github.com/yourusername/cloud-infra',
    demo: 'https://your-demo-url.com'
  },
  {
    title: 'Security Implementation',
    description: 'Enterprise security framework with automated compliance checks',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
    github: 'https://github.com/yourusername/security-framework',
    demo: 'https://your-demo-url.com'
  }
];

const Portfolio = () => {
  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Work</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </a>
                  <a 
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
