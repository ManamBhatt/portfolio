import React from 'react';

const certifications = [
  {
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'Dec 2023',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
  },
  {
    name: 'Microsoft Azure Solutions Architect',
    issuer: 'Microsoft',
    date: 'Oct 2023',
    image: 'https://images.unsplash.com/photo-1484557985045-edf25e08da73?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
  },
  {
    name: 'Google Cloud Professional Architect',
    issuer: 'Google Cloud',
    date: 'Aug 2023',
    image: 'https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
  }
];

const Certifications = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
        <div className="flex overflow-x-auto pb-8 space-x-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="flex-none w-80 bg-gray-50 rounded-lg overflow-hidden shadow-lg"
            >
              <img 
                src={cert.image}
                alt={cert.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                <p className="text-gray-600">{cert.issuer}</p>
                <p className="text-gray-500 text-sm">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;