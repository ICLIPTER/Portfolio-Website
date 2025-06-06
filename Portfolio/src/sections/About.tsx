import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { Code, Server, Database, Globe } from 'lucide-react';

const About: React.FC = () => {
  const services = [
    {
      title: 'Frontend Development',
      description: 'Creating responsive, interactive user interfaces with modern JavaScript frameworks.',
      icon: <Code size={24} />,
      delay: 0.1,
    },
    {
      title: 'Backend Development',
      description: 'Building robust server-side applications and APIs that power web applications.',
      icon: <Server size={24} />,
      delay: 0.2,
    },
    {
      title: 'Database Design',
      description: 'Designing efficient database schemas and implementing data storage solutions.',
      icon: <Database size={24} />,
      delay: 0.3,
    },
    {
      title: 'Web Performance',
      description: 'Optimizing web applications for speed, accessibility, and search engine visibility.',
      icon: <Globe size={24} />,
      delay: 0.4,
    },
  ];

  return (
    <section id="about" className="section bg-white dark:bg-gray-900">
      <div className="container">
        <SectionTitle subtitle="About Me" title="Get to know me better" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="relative">
              <div className="w-full h-[400px] rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Developer at work"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3">
                    <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">5+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                  </div>
                  <div className="p-3">
                    <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">50+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Passionate Fullstack Developer with a focus on creating exceptional web experiences
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              With over 5 years of experience in web development, I've helped businesses and startups bring their ideas to life through clean code and thoughtful design. I specialize in building full-stack applications using modern JavaScript frameworks and libraries.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              My approach combines technical expertise with a deep understanding of user experience principles. I'm passionate about creating applications that are not only functionally robust but also intuitive and enjoyable to use.
            </p>
            
            <a href="#contact" className="btn btn-primary">
              Let's Work Together
            </a>
          </motion.div>
        </div>
        
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Services I Offer
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: service.delay }}
                viewport={{ once: true, margin: '-100px' }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg mb-4">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;