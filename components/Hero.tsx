import React from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { PROFILE } from '../utils/constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 skew-x-12 transform translate-x-20 z-0"></div>
      
      <div className="container mx-auto px-6 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-block px-3 py-1 mb-6 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wide">
              Software Engineer & Electrical Engineer
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Hi, I'm <span className="text-blue-600">{PROFILE.name.split(' ')[0]}</span>.
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
               Building bridge between hardware and software. Specializing in Full Stack Development, IoT Solutions, and FTTH Network Planning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
              >
                Contact Me <ArrowRight size={20} />
              </a>
              <a 
                href="#projects" 
                className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center"
              >
                View Projects
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start space-x-6">
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
                <Github size={28} />
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-700 transition-colors">
                <Linkedin size={28} />
              </a>
              <a href={`mailto:${PROFILE.email}`} className="text-slate-400 hover:text-red-600 transition-colors">
                <Mail size={28} />
              </a>
            </div>
          </div>

          <div className="flex-1 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px]">
              <div className="absolute inset-0 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-8 border-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://github.com/fejzo9.png" 
                  alt={PROFILE.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;