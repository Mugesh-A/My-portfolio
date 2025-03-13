
import React from 'react';
import { Server, GitBranch, Cloud } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="section bg-cloud">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            Showcasing my technical implementations and solutions
          </p>
        </div>
        
        <div className="space-y-12">
          {/* Project 1 */}
          <div className="glass-card p-6 md:p-8 animate-fade-in opacity-0 [animation-delay:200ms]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4 flex items-center justify-center">
                <div className="p-4 bg-blue-100/50 rounded-full w-48 h-48 flex items-center justify-center">
                  <Server className="h-24 w-24 text-blue-600" />
                </div>
              </div>
              
              <div className="lg:col-span-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  VPC Architecture with Public and Private Subnets – AWS
                </h3>
                
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <p className="text-gray-700">
                      Designed and implemented a VPC with public and private subnets across two Availability Zones.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <p className="text-gray-700">
                      Each public subnet contains a NAT gateway and a load balancer node.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <p className="text-gray-700">
                      Servers are deployed in private subnets, managed by an Auto Scaling group, and receive traffic from the load balancer.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <p className="text-gray-700">
                      Ensured high availability and fault tolerance by distributing resources across multiple Availability Zones.
                    </p>
                  </li>
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">AWS</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">EC2</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">VPC</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Load Balancing</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Auto Scaling</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Project 2 */}
          <div className="glass-card p-6 md:p-8 animate-fade-in opacity-0 [animation-delay:400ms]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4 flex items-center justify-center">
                <div className="p-4 bg-blue-100/50 rounded-full w-48 h-48 flex items-center justify-center">
                  <GitBranch className="h-24 w-24 text-blue-600" />
                </div>
              </div>
              
              <div className="lg:col-span-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  CI/CD Pipeline Implementation with AWS S3, GitLab, and Docker
                </h3>
                
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <p className="text-gray-700">
                      Designed and implemented a CI/CD pipeline using GitLab for automated building, testing, and deployment.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <p className="text-gray-700">
                      Integrated AWS S3 for storing build artifacts and configurations, ensuring smooth transfer between stages.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <p className="text-gray-700">
                      Deployed applications with AWS Elastic Beanstalk and Docker containers for consistent environments.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <p className="text-gray-700">
                      Managed GitLab branches with a main branch for production and sub-branches for testing and staging.
                    </p>
                  </li>
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">AWS S3</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">GitLab</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Docker</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">CI/CD</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Elastic Beanstalk</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
