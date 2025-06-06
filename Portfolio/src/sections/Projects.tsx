import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'react', name: 'React' },
    { id: 'node', name: 'Node.js' },
    { id: 'firebase', name: 'Firebase' },
    { id: 'mongodb', name: 'MongoDB' },
  ];
  
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.technologies.some(tech => 
        tech.toLowerCase().includes(filter.toLowerCase())
      ));

  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <SectionTitle 
          subtitle="My Work" 
          title="Recent Projects" 
        />
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                  filter === category.id
                    ? 'bg-primary-600 text-white dark:bg-primary-500'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;