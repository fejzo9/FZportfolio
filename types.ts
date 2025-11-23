export interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  description?: string;
}

export interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  period: string;
}

export interface Skill {
  name: string;
  category: 'tech' | 'tools' | 'soft' | 'cert';
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  link: string;
}