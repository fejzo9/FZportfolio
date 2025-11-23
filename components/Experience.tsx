import React from 'react';
import { EXPERIENCES } from '../utils/constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Experience</h2>
        
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-slate-200"></div>

          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} className={`relative flex items-center justify-between md:justify-normal mb-12 w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Spacer for desktop alternate layout */}
              <div className="hidden md:block w-5/12"></div>

              {/* Center Point */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-4 border-blue-500 rounded-full z-10 flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
              </div>

              {/* Content Box */}
              <div className="w-full pl-10 md:pl-0 md:w-5/12">
                <div className={`bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <span className="text-sm font-semibold text-blue-600 mb-1 block">{exp.period}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{exp.role}</h3>
                  <div className={`flex items-center text-slate-500 mb-3 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                    <Briefcase size={14} className="mr-1.5" />
                    <span className="font-medium text-sm">{exp.company}</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;