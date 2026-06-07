import { Skill } from '@/types';

export interface CategoryMetadata {
  id: string;
  displayName: string;
  emoji: string;
  color?: string; // Will be auto-generated if not provided
}

export const categories: CategoryMetadata[] = [
  { id: 'mobile', displayName: 'Mobile Development', emoji: '📱' },
  { id: 'frontend', displayName: 'Frontend', emoji: '💻' },
  { id: 'backend', displayName: 'Backend', emoji: '⚙️' },
  { id: 'cloud', displayName: 'Cloud & DevOps', emoji: '☁️' },
  { id: 'ai', displayName: 'AI & ML', emoji: '🤖' },
];

export const skills: Skill[] = [
  // Mobile
  {
    id: 'swift',
    name: 'Swift',
    category: 'mobile',
    experience: 2,
    proficiency: 'expert',
  },
  {
    id: 'swiftui',
    name: 'SwiftUI',
    category: 'mobile',
    experience: 2,
    proficiency: 'advanced',
  },
  {
    id: 'ios',
    name: 'iOS Development',
    category: 'mobile',
    experience: 2,
    proficiency: 'advanced',
  },

  // Frontend
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    experience: 3,
    proficiency: 'expert',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    experience: 3,
    proficiency: 'advanced',
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'frontend',
    experience: 2,
    proficiency: 'advanced',
  },
  // Backend
  {
    id: 'aspnet',
    name: 'ASP.NET Core',
    category: 'backend',
    experience: 2,
    proficiency: 'advanced',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    experience: 2,
    proficiency: 'intermediate',
  },
  // Cloud
  {
    id: 'aws',
    name: 'AWS',
    category: 'cloud',
    experience: 2,
    proficiency: 'advanced',
  },
  {
    id: 'azure',
    name: 'Azure',
    category: 'cloud',
    experience: 2,
    proficiency: 'advanced',
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'cloud',
    experience: 2,
    proficiency: 'intermediate',
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    category: 'cloud',
    experience: 1,
    proficiency: 'intermediate',
  },
  // AI
  {
    id: 'azureml',
    name: 'Azure ML',
    category: 'ai',
    experience: 1,
    proficiency: 'intermediate',
  },
  {
    id: 'openai',
    name: 'OpenAI APIs',
    category: 'ai',
    experience: 1,
    proficiency: 'intermediate',
  },
];

export const getCategoryMetadata = (categoryId: string): CategoryMetadata | undefined =>
  categories.find((cat) => cat.id === categoryId);

export const skillsByCategory = (category: Skill['category']) =>
  skills.filter((skill) => skill.category === category);
