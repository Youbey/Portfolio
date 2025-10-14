export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  honors?: string;
}

export interface Project {
  title: string;
  date: string;
  description: string;
  details?: string[];
}

export interface Certificate {
  name: string;
  status?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}
