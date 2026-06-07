import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'cobrasthenics',
    title: 'CobraSthenics',
    description:
      'AI-powered fitness application enabling users to track 50+ exercises with real-time form analysis using computer vision. Built with SwiftUI and integrated with Supabase for real-time database sync.',
    image: '/assets/images/projects/cobrasthenics.jpg',
    technologies: ['Swift', 'SwiftUI', 'Supabase', 'Computer Vision', 'iOS'],
    github: 'https://github.com/yourusername/cobrasthenics',
    demo: 'https://apps.apple.com/app/id...',
    metrics: ['50+ Exercises', 'Real-time AI Analysis', '1000+ Users'],
    featured: true,
  },
  {
    id: 'refraction',
    title: 'Refraction Co-Pilot Platform',
    description:
      'Enterprise SaaS platform for optical practice management. Features education hub, patient management, CRM, and comprehensive administration dashboard built with React and ASP.NET Core.',
    image: '/assets/images/projects/refraction.jpg',
    technologies: ['React', 'TypeScript', 'ASP.NET Core', 'AWS', 'Azure'],
    github: 'https://github.com/yourusername/refraction',
    demo: 'https://refraction-demo.example.com',
    metrics: ['1000+ Users', 'Real-time Sync', 'HIPAA Compliant'],
    featured: true,
  },
  {
    id: 'ml-analytics',
    title: 'Machine Learning Analytics Platform',
    description:
      'Predictive analytics dashboard leveraging Azure ML for real-time insights. Processes 100+ datasets with custom model deployments and comprehensive REST APIs.',
    image: '/assets/images/projects/ml-analytics.jpg',
    technologies: ['Azure ML', 'Python', 'REST APIs', 'Data Pipelines', 'ML'],
    github: 'https://github.com/yourusername/ml-analytics',
    demo: 'https://ml-analytics-demo.example.com',
    metrics: ['100+ Datasets', '95% Accuracy', 'Real-time Processing'],
    featured: true,
  },
];
