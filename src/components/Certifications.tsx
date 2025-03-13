
import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Python Basics Certification',
      issuer: 'HackerRank',
      date: 'June 2024',
      link: 'https://www.hackerrank.com/certificates/87bea328bdda',
      logo: 'HackerRank',
      color: 'green',
    },
    {
      title: 'Data Structures and Algorithms Using Java',
      issuer: 'NPTEL',
      date: 'OCT 2024',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7266673361169059840/',
      logo: 'NPTEL',
      color: 'blue',
    },
    {
      title: 'AWS Academy Cloud Foundations',
      issuer: 'AWS',
      date: 'October 2024',
      link: 'https://www.credly.com/badges/845a8af4-e6e9-447b-bfaa-95241a2b1331/public_url',
      logo: 'AWS',
      color: 'orange',
    },
    {
      title: 'Certified Python Developer',
      issuer: 'Skillrack',
      date: 'Mar-2023',
      link: 'https://www.skillrack.com/faces/free/certificate.xhtml?t=cert&id=431102&key=LRH',
      logo: 'Skillrack',
      color: 'purple',
    },
  ];

  return (
    <section id="certifications" className="section bg-cloud">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            Professional certifications and achievements
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((certification, index) => (
            <div 
              key={certification.title}
              className="glass-card p-6 card-hover animate-fade-in opacity-0 transition-all duration-300"
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{certification.title}</h3>
                  <p className="text-gray-600 mb-2">
                    {certification.issuer} • {certification.date}
                  </p>
                  <a 
                    href={certification.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm"
                  >
                    View Certificate <ExternalLink className="ml-1 h-3 w-3" />
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

export default Certifications;
