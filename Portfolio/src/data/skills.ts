export interface Skill {
  id: number;
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'other';
}

export const skills: Skill[] = [
  // Frontend
  {
    id: 1,
    name: 'React',
    level: 95,
    category: 'frontend',
  },
  {
    id: 2,
    name: 'TypeScript',
    level: 90,
    category: 'frontend',
  },
  {
    id: 3,
    name: 'Next.js',
    level: 85,
    category: 'frontend',
  },
  {
    id: 4,
    name: 'CSS/SCSS',
    level: 90,
    category: 'frontend',
  },
  {
    id: 5,
    name: 'Tailwind CSS',
    level: 95,
    category: 'frontend',
  },
  {
    id: 6,
    name: 'Framer Motion',
    level: 80,
    category: 'frontend',
  },
  {
    id: 7,
    name: 'Redux',
    level: 85,
    category: 'frontend',
  },
  
  // Backend
  {
    id: 8,
    name: 'Node.js',
    level: 90,
    category: 'backend',
  },
  {
    id: 9,
    name: 'Express.js',
    level: 88,
    category: 'backend',
  },
  {
    id: 10,
    name: 'GraphQL',
    level: 75,
    category: 'backend',
  },
  {
    id: 11,
    name: 'RESTful APIs',
    level: 92,
    category: 'backend',
  },
  
  // Database
  {
    id: 12,
    name: 'MongoDB',
    level: 85,
    category: 'database',
  },
  {
    id: 13,
    name: 'PostgreSQL',
    level: 80,
    category: 'database',
  },
  {
    id: 14,
    name: 'Firebase',
    level: 85,
    category: 'database',
  },
  
  // DevOps
  {
    id: 15,
    name: 'Docker',
    level: 70,
    category: 'devops',
  },
  {
    id: 16,
    name: 'AWS',
    level: 75,
    category: 'devops',
  },
  {
    id: 17,
    name: 'CI/CD',
    level: 80,
    category: 'devops',
  },
  
  // Other
  {
    id: 18,
    name: 'Git/GitHub',
    level: 95,
    category: 'other',
  },
  {
    id: 19,
    name: 'Jest/Testing',
    level: 85,
    category: 'other',
  },
  {
    id: 20,
    name: 'UI/UX Design',
    level: 80,
    category: 'other',
  },
];

export const frontendSkills = skills.filter(skill => skill.category === 'frontend');
export const backendSkills = skills.filter(skill => skill.category === 'backend');
export const databaseSkills = skills.filter(skill => skill.category === 'database');
export const devopsSkills = skills.filter(skill => skill.category === 'devops');
export const otherSkills = skills.filter(skill => skill.category === 'other');