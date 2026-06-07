import { AboutSection } from '@/types';

export const aboutData: AboutSection = {
  personnelProfile: {
    id: 'jordan-bhar-001',
    name: 'JORDAN_BHAR',
    designation: 'ENGINEER',
    clearanceLevel: 'LEVEL_5',
    status: 'ACTIVE',
  },

  missionProfile: {
    summary:
      'Computer Science graduate with a passion for building scalable software solutions and innovative cloud-based systems. Experience spans mobile development, full-stack engineering, and modern cloud infrastructure.',

    specializations: [
      'iOS Development',
      'Cloud Native Architecture',
      'Full Stack Engineering',
      'AI/ML Infrastructure',
      'Cloud Infrastructure',
    ],

    objectives: [
      {
        title: 'Architect',
        description: 'innovative cloud solutions',
      },
      {
        title: 'Expand',
        description: 'AI/ML infrastructure expertise',
      },
      {
        title: 'Contribute',
        description: 'mission-critical systems',
      },
    ],

    engineeringFocus: [
      'Scalable Backend Systems',
      'Cloud Infrastructure',
      'Real-Time Applications',
      'ML Model Deployment',
      'Mobile-First Design',
    ],
  },

  systemMetrics: [
    {
      id: 'projects-deployed',
      label: 'Projects Deployed',
      value: '15+',
      accentClass: 'teal',
      progress: 75,
    },
    {
      id: 'cloud-systems',
      label: 'Cloud Systems Online',
      value: '2',
      accentClass: 'cyan',
      progress: 100,
    },
    {
      id: 'technologies',
      label: 'Technologies Mastered',
      value: '20+',
      accentClass: 'light-cyan',
      progress: 85,
    },
    {
      id: 'mission-status',
      label: 'Mission Status',
      value: 'ACTIVE',
      accentClass: 'cyan',
      progress: 100,
    },
  ],

  careerTimeline: [
    {
      year: '2020',
      title: 'Computer Science Student',
      description: 'Began academic journey in software engineering and systems design',
      icon: '▸',
    },
    {
      year: '2022',
      title: 'Mobile Developer',
      description: 'Specialized in iOS development and mobile application architecture',
      icon: '◆',
    },
    {
      year: '2023',
      title: 'Sheridan Graduate',
      description: 'Graduated with expertise in modern software development practices',
      icon: '✦',
    },
    {
      year: '2024',
      title: 'Cloud Engineer',
      description: 'Architected scalable cloud infrastructure and deployment pipelines',
      icon: '★',
    },
    {
      year: '2025',
      title: 'AI/ML Infrastructure',
      description: 'Expanding expertise in machine learning systems and AI deployment',
      icon: '◈',
    },
  ],
};
