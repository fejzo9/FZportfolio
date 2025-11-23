import React from 'react';
import { EDUCATIONS } from '../utils/constants';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center mb-12">
            <GraduationCap size={40} className="text-slate-900 mr-4" />
            <h2 className="text-3xl font-bold text-slate-900">Education</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {EDUCATIONS.map((edu) => (
                <div key={edu.id} className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-blue-500 hover:translate-y-[-4px] transition-transform">
                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                        {edu.period}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{edu.institution}</h3>
                    <p className="text-slate-600 font-medium">{edu.degree}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Education;