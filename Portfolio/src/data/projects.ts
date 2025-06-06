export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product listings, cart functionality, user authentication, and payment processing.',
    image: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    liveUrl: 'https://example.com/ecommerce',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity app for managing tasks, projects, and deadlines with real-time updates and team collaboration features.',
    image: 'https://images.pexels.com/photos/1226398/pexels-photo-1226398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
    githubUrl: 'https://github.com/yourusername/task-management',
    liveUrl: 'https://example.com/task-app',
    featured: true,
  },
  {
    id: 3,
    title: 'Real Estate Listings',
    description: 'A property listing platform with advanced search filters, map integration, and virtual tour capabilities.',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Google Maps API'],
    githubUrl: 'https://github.com/yourusername/real-estate',
    liveUrl: 'https://example.com/real-estate',
    featured: false,
  },
  {
    id: 4,
    title: 'Fitness Tracking App',
    description: 'An application for tracking workouts, setting fitness goals, and monitoring progress over time with data visualization.',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React Native', 'GraphQL', 'Node.js', 'Chart.js'],
    githubUrl: 'https://github.com/yourusername/fitness-tracker',
    liveUrl: 'https://example.com/fitness',
    featured: true,
  },
  {
    id: 5,
    title: 'Recipe Sharing Platform',
    description: 'A community-driven platform for sharing recipes, creating meal plans, and discovering new cooking ideas.',
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Vue.js', 'Firebase', 'Vuetify', 'AWS S3'],
    githubUrl: 'https://github.com/yourusername/recipe-platform',
    liveUrl: 'https://example.com/recipes',
    featured: false,
  },
  {
    id: 6,
    title: 'Weather Dashboard',
    description: 'An interactive weather dashboard providing current conditions, forecasts, and historical weather data visualization.',
    image: 'https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'D3.js', 'Weather API', 'Styled Components'],
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
    liveUrl: 'https://example.com/weather',
    featured: false,
  },
];

export const featuredProjects = projects.filter(project => project.featured);