
import React from 'react';
import { GraduationCap, MapPin, Award, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="animate-fade-in [animation-delay:200ms] opacity-0">
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            I'm a passionate Cloud Computing and DevOps engineer with a strong foundation in Electronics and Communication Engineering. I focus on leveraging technical expertise to develop innovative solutions in dynamic environments, contributing to the success of organizations while enhancing my skills in cloud computing, networking, and DevOps.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="glass-card p-6 card-hover">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">Education</h3>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center mb-1">
                    <h4 className="font-medium text-gray-900">B.E. Electronics and Communication Engineering</h4>
                  </div>
                  <p className="text-gray-700">Karpagam Institute of Technology, Coimbatore</p>
                  <div className="flex items-center mt-1 text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Nov 2022 - Present</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">CGPA: 8.15/10</p>
                </div>
                
                <div>
                  <div className="flex items-center mb-1">
                    <h4 className="font-medium text-gray-900">High School - State Board</h4>
                  </div>
                  <p className="text-gray-700">Karpagam Matric Hr. Sec. School, Namakkal</p>
                  <div className="flex items-center mt-1 text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Mar 2019 - May 2022</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">HSC: 78%, SSLC: 88%</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 card-hover">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">Personal Details</h3>
                </div>
              </div>
              
              <ul className="space-y-3">
                <li className="flex">
                  <span className="font-medium w-24 text-gray-900">Name:</span>
                  <span className="text-gray-700">Mugesh Anbazhagan</span>
                </li>
                <li className="flex">
                  <span className="font-medium w-24 text-gray-900">Location:</span>
                  <span className="text-gray-700">Coimbatore, Tamil Nadu, India - 641021</span>
                </li>
                <li className="flex">
                  <span className="font-medium w-24 text-gray-900">Email:</span>
                  <a href="mailto:anbazhaganmugesh@gmail.com" className="text-blue-600 hover:underline">
                    anbazhaganmugesh@gmail.com
                  </a>
                </li>
                <li className="flex">
                  <span className="font-medium w-24 text-gray-900">Phone:</span>
                  <span className="text-gray-700">+91 8110877913</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium w-24 text-gray-900">Interests:</span>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm">Cloud Computing</span>
                    <span className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm">Networking</span>
                    <span className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm">DevOps</span>
                    <span className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm">Linux</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
