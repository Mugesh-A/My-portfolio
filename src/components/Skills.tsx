
import React from 'react';
import { Code, Server, Database, Terminal, Github } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code className="h-6 w-6 text-blue-600" />,
      skills: ['Java', 'Python', 'Data Structures and Algorithms', 'HTML/CSS'],
    },
    {
      title: 'AWS Services',
      icon: <Server className="h-6 w-6 text-blue-600" />,
      skills: ['EC2', 'S3', 'VPC', 'Security Groups', 'Load Balancing', 'Auto Scaling'],
    },
    {
      title: 'Tools',
      icon: <Github className="h-6 w-6 text-blue-600" />,
      skills: ['VS Code', 'Eclipse', 'Git', 'GitHub', 'GitLab', 'Docker'],
    },
    {
      title: 'Systems',
      icon: <Terminal className="h-6 w-6 text-blue-600" />,
      skills: ['Linux', 'AWS Console'],
    },
  ];

  const areasOfInterest = [
    'Cloud Architecture and Solutions',
    'DevOps Practices and Implementation',
    'Infrastructure as Code',
    'Containerization and Orchestration',
    'Cybersecurity in Cloud Environments',
    'Networking and Network Security',
    'Automation and CI/CD Pipelines',
    'Serverless Computing'
  ];

  return (
    <section id="skills" className="section bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            Core competencies and technologies I work with
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title} 
              className="glass-card p-6 card-hover animate-fade-in opacity-0"
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg">
                  {category.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div 
                    key={skill} 
                    className="px-4 py-2 bg-blue-50 border border-blue-100 rounded-lg text-blue-800 shadow-sm transition-all hover:bg-blue-100"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 glass-card p-8 animate-fade-in opacity-0 [animation-delay:1000ms]">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Areas of Interest</h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {areasOfInterest.map((interest, index) => (
              <div 
                key={index}
                className="px-5 py-3 bg-blue-50 border border-blue-100 rounded-lg text-blue-800 shadow-sm transition-all hover:bg-blue-100"
              >
                {interest}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
