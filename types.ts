import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tech: string[];
  gradient: string;
  features: string[];
  githubUrl?: string;
  approach?: string;
  impact?: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  bullets: string[];
  tech: string[];
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
}