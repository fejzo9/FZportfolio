import React from 'react';
import { PROFILE } from '../utils/constants';
import { Mail, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-slate-400 text-lg mb-12 leading-relaxed">
            I'm currently open to new opportunities in Full Stack Development and IoT Engineering. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href={`mailto:${PROFILE.email}`}
              className="px-8 py-4 bg-blue-600 rounded-xl font-bold text-lg hover:bg-blue-500 transition-colors flex items-center justify-center shadow-lg shadow-blue-900/20"
            >
              <Mail className="mr-2" /> Say Hello
            </a>
            <a 
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent border border-slate-700 rounded-xl font-bold text-lg hover:bg-slate-800 transition-colors flex items-center justify-center"
            >
              <MessageSquare className="mr-2" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;