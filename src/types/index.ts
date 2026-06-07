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
  category: string;
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

export interface AboutMissionProfile {
  summary: string;
  specializations: string[];
  objectives: {
    title: string;
    description: string;
  }[];
  engineeringFocus: string[];
}

export interface AboutPersonnelProfile {
  id: string;
  name: string;
  designation: string;
  clearanceLevel: string;
  status: 'ACTIVE' | 'ONLINE' | 'OPERATIONAL';
}

export interface AboutSystemMetric {
  id: string;
  label: string;
  value: string;
  accentClass: 'teal' | 'cyan' | 'light-cyan';
  progress: number; // 0-100
}

export interface AboutCareerMilestone {
  year: string;
  title: string;
  description: string;
  icon: string;
}

export interface AboutSection {
  personnelProfile: AboutPersonnelProfile;
  missionProfile: AboutMissionProfile;
  systemMetrics: AboutSystemMetric[];
  careerTimeline: AboutCareerMilestone[];
}
