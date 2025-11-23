import React from 'react';
import { PROFILE } from '../utils/constants';
import { MapPin, Mail } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          <div className="w-full md:w-1/3">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 relative inline-block">
              About Me
              <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-200 -z-10 opacity-60"></span>
            </h2>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center text-slate-600">
                  <MapPin size={20} className="mr-3 text-blue-600" />
                  <span>{PROFILE.location}</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <Mail size={20} className="mr-3 text-blue-600" />
                  <span>{PROFILE.email}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <p className="text-lg text-slate-600 leading-loose mb-6">
              {PROFILE.about}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="p-4 bg-blue-50 rounded-xl text-center">
                <span className="block text-3xl font-bold text-blue-600 mb-1">3+</span>
                <span className="text-sm text-slate-600 font-medium uppercase tracking-wider">Years Exp</span>
              </div>
              <div className="p-4 bg-purple-50 rounded-xl text-center">
                <span className="block text-3xl font-bold text-purple-600 mb-1">10+</span>
                <span className="text-sm text-slate-600 font-medium uppercase tracking-wider">Projects</span>
              </div>
              <div className="p-4 bg-emerald-50 rounded-xl text-center">
                <span className="block text-3xl font-bold text-emerald-600 mb-1">BS</span>
                <span className="text-sm text-slate-600 font-medium uppercase tracking-wider">Degree</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;