export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  metrics?: string[];
  featured: boolean;
}

export interface Skill {
  id: string;
  name: string;
  category: 'mobile' | 'frontend' | 'backend' | 'cloud' | 'ai';
  experience: number; // years
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  projects?: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startYear: number;
  endYear: number;
  gpa?: string;
  coursework?: string[];
  honors?: string[];
}

export interface AnimationConfig {
  duration: number;
  delay?: number;
  easing?: string;
  repeat?: number;
  yoyo?: boolean;
}
