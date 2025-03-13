
import React from 'react';
import { ArrowRight, Mail, Linkedin, Github } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white"></div>
        <div className="absolute top-0 left-0 right-0 h-64 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-blue-50 to-transparent opacity-60"></div>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-right [animation-delay:200ms]">
            <p className="text-blue-600 font-medium mb-3">Cloud Computing & DevOps Engineer</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Hi, I'm <span className="highlight-container"><span className="highlight">Lokesh Anbhazhagan</span></span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg leading-relaxed">
              I leverage my technical expertise to develop innovative solutions in cloud computing, networking, and DevOps.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 text-white font-medium transition-all hover:bg-blue-700 shadow-sm hover:shadow-md"
              >
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="#projects" 
                className="inline-flex items-center px-6 py-3 rounded-full bg-white text-blue-600 font-medium border border-blue-200 transition-all hover:bg-blue-50 shadow-sm hover:shadow-md"
              >
                View Projects
              </a>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="mailto:anbhazhaganlokeashm@gmail.com" 
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="relative animate-fade-in-left [animation-delay:400ms]">
            <div className="glass-card p-6 md:p-8 lg:p-10 relative">
              <div className="absolute -top-2 -left-2 w-16 h-16 bg-blue-100 rounded-full opacity-60 animate-float [animation-delay:1000ms]"></div>
              <div className="absolute bottom-10 right-4 w-20 h-20 bg-blue-200 rounded-full opacity-60 animate-float [animation-delay:1500ms]"></div>
              
              <div className="relative">
                <h2 className="font-mono text-sm text-blue-600 mb-4">// introduction.js</h2>
                <pre className="text-sm md:text-base font-mono bg-gray-50 p-4 rounded-lg shadow-sm overflow-auto">
                  <code className="language-javascript">
{`const developer = {
  name: 'Lokesh Anbhazhagan',
  location: 'Coimbatore, Tamil Nadu',
  education: 'B.E. Electronics and Communication',
  expertise: [
    'AWS Cloud Solutions',
    'DevOps Implementation',
    'Linux Administration',
    'Networking'
  ],
  languages: ['Java', 'Python'],
  goal: 'Developing innovative solutions'
};`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
