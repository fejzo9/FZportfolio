import { ExperienceItem, EducationItem, Skill, ProjectItem } from '../types';
import { BookOpen, Cpu, Globe, Layout, Server, Award } from 'lucide-react';

export const PROFILE = {
  name: "Fejzullah Zdralovic",
  title: "Software Engineer | B.Sc. Electrical Engineering",
  email: "fejzo999@gmail.com",
  location: "Sarajevo, Bosnia and Herzegovina",
  linkedin: "https://www.linkedin.com/in/fejzullah-zdralovic-517558182",
  github: "https://github.com/fejzo9",
  about: "Bachelor of Science in Electrical Engineering specializing in Computer Science and Informatics, with experience in FTTH network design, full-stack development (Java, Spring Boot, React, PostgreSQL), and IoT/AI-powered solutions. Passionate about turning ideas into functional, high-impact projects — from smart energy systems to custom booking platforms. Driven by continuous learning, strategic thinking, and creating technology that delivers real-world value."
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 1,
    company: "Optic Line doo",
    role: "FTTH Planner",
    period: "July 2025 - Present",
    location: "Sarajevo, BiH",
    description: "Planning and design of Fiber-to-the-Home networks."
  },
  {
    id: 2,
    company: "Google Developers Group Sarajevo",
    role: "Member",
    period: "October 2024 - Present",
    location: "Sarajevo, BiH",
    description: "Active member of the developer community, participating in tech events and workshops."
  },
  {
    id: 3,
    company: "AlbarakaTech Global",
    role: "Full Stack Developer Intern",
    period: "August 2024 - October 2024",
    location: "Istanbul, Türkiye",
    description: "Developed and maintained web applications using Java Spring Boot for back-end services and React for front-end development."
  },
  {
    id: 4,
    company: "Algorithmics Global",
    role: "Teacher",
    period: "Nov 2024 - July 2025 & Jan 2024 - Aug 2024",
    location: "Sarajevo, BiH",
    description: "Taught digital literacy to students, focusing on foundational computer skills, internet safety, and creative problem-solving using digital tools."
  },
  {
    id: 5,
    company: "Hamilik Okulu Bosna",
    role: "Student",
    period: "September 2023 - August 2025",
    location: "Sarajevo, BiH",
    description: "Educational program participation."
  },
  {
    id: 6,
    company: "Ministry of Programming",
    role: "Back End Developer",
    period: "August 2022 - August 2022",
    location: "Sarajevo, BiH",
    description: "Gained initial industry experience in backend development practices."
  }
];

export const EDUCATIONS: EducationItem[] = [
  {
    id: 1,
    institution: "University of Sarajevo",
    degree: "Master's degree, Computer Science",
    period: "October 2025 - October 2027 (Expected)"
  },
  {
    id: 2,
    institution: "University of East Sarajevo",
    degree: "Engineer's degree (B.Sc.), Computer Science",
    period: "September 2018 - May 2025"
  }
];

export const SKILLS: Skill[] = [
  { name: "Java", category: "tech" },
  { name: "Spring Boot", category: "tech" },
  { name: "React", category: "tech" },
  { name: "PostgreSQL", category: "tech" },
  { name: "TypeScript", category: "tech" },
  { name: "IoT", category: "tech" },
  { name: "AutoCAD", category: "tools" },
  { name: "Cocon", category: "tools" },
  { name: "GeoStruct IMS", category: "tools" },
  { name: "Generative AI", category: "cert" },
  { name: "Responsible AI", category: "cert" },
  { name: "Large Language Models", category: "cert" }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: "IoT Energy Management System",
    description: "A smart energy system leveraging IoT sensors to monitor and optimize power consumption in real-time.",
    techStack: ["IoT", "Java", "Spring Boot", "React"],
    link: "https://github.com/fejzo9"
  },
  {
    id: 2,
    title: "Booking Platform",
    description: "A full-stack custom booking solution designed for scalability and ease of use.",
    techStack: ["React", "PostgreSQL", "Spring Boot"],
    link: "https://github.com/fejzo9"
  },
  {
    id: 3,
    title: "FTTH Network Automation",
    description: "Tools and scripts to assist in the planning and design phases of Fiber-to-the-Home networks.",
    techStack: ["Python", "AutoCAD API", "GIS"],
    link: "https://github.com/fejzo9"
  }
];

export const ICONS = {
    BookOpen, Cpu, Globe, Layout, Server, Award
};