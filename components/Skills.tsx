import React from 'react';
import { SKILLS } from '../utils/constants';
import { Code2, Database, Cpu, Award, Wrench } from 'lucide-react';

const Skills: React.FC = () => {
  const categories = [
    { id: 'tech', label: 'Technologies', icon: Code2, color: 'text-blue-600' },
    { id: 'tools', label: 'Tools & Platforms', icon: Wrench, color: 'text-purple-600' },
    { id: 'cert', label: 'Certifications', icon: Award, color: 'text-emerald-600' },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Technical Arsenal</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            A collection of technologies and tools I've worked with to build robust solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div key={cat.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <cat.icon className={`w-8 h-8 ${cat.color} mr-3`} />
                <h3 className="text-xl font-bold text-slate-800">{cat.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {SKILLS.filter(s => s.category === cat.id).map((skill) => (
                  <span 
                    key={skill.name}
                    className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium border border-slate-200"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;