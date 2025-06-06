import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../components/SectionTitle';
import SkillBar from '../components/SkillBar';
import { 
  frontendSkills, 
  backendSkills, 
  databaseSkills, 
  devopsSkills, 
  otherSkills
} from '../data/skills';

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  
  const tabs = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'devops', label: 'DevOps' },
    { id: 'other', label: 'Other' },
  ];
  
  const getSkillsByTab = () => {
    switch(activeTab) {
      case 'frontend':
        return frontendSkills;
      case 'backend':
        return backendSkills;
      case 'database':
        return databaseSkills;
      case 'devops':
        return devopsSkills;
      case 'other':
        return otherSkills;
      default:
        return frontendSkills;
    }
  };

  return (
    <section id="skills" className="section bg-white dark:bg-gray-900">
      <div className="container" ref={ref}>
        <SectionTitle 
          subtitle="My Skills" 
          title="Technical Proficiency" 
        />
        
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/3"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Skills &amp; Experience
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I've spent the last 5 years working across the full stack, building everything from small business websites to complex web applications. My expertise spans frontend and backend technologies, with a focus on creating responsive, accessible, and performant applications.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                  <span className="text-xl font-bold">5+</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Years of Experience</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Full Stack Development</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-secondary-100 dark:bg-secondary-900/30 flex items-center justify-center text-secondary-600 dark:text-secondary-400 mr-4">
                  <span className="text-xl font-bold">50+</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Completed Projects</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Across Various Industries</p>
                </div>
              </div>
            </div>
            
            <a 
              href="/resume.pdf" 
              target="_blank" 
              className="btn btn-outline"
            >
              Download Resume
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-2/3"
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <div className="flex flex-wrap gap-2 mb-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                      activeTab === tab.id
                        ? 'bg-primary-600 text-white dark:bg-primary-500'
                        : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              
              <div className="space-y-2">
                {getSkillsByTab().map((skill, index) => (
                  <SkillBar key={skill.id} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;