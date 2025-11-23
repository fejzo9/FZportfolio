import React from 'react';
import { PROFILE } from '../utils/constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href={PROFILE.github} className="hover:text-white transition-colors">GitHub</a>
          <a href={PROFILE.linkedin} className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;