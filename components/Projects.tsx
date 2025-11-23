import React from 'react';
import { PROJECTS } from '../utils/constants';
import { Github, FolderGit2, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Projects</h2>
                <p className="text-slate-500">Highlighting my work in Full Stack & IoT.</p>
            </div>
            <a href="https://github.com/fejzo9" target="_blank" rel="noreferrer" className="hidden md:flex items-center text-blue-600 font-semibold hover:text-blue-700">
                View all on GitHub <ArrowRight size={16} className="ml-2" />
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="h-48 bg-slate-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors relative overflow-hidden">
                 <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
                 <FolderGit2 size={48} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-6 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-2.5 border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-blue-600 hover:border-blue-200 transition-all font-medium text-sm"
                >
                  <Github size={16} className="mr-2" /> View Source
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden text-center">
             <a href="https://github.com/fejzo9" target="_blank" rel="noreferrer" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
                View all on GitHub <ArrowRight size={16} className="ml-2" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;