import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../data/skills';

interface SkillBarProps {
  skill: Skill;
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, index }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {skill.name}
        </span>
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
          {skill.level}%
        </span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, var(--tw-gradient-stops))`,
            '--tw-gradient-from': 'rgb(59, 130, 246)',
            '--tw-gradient-to': 'rgb(139, 92, 246)',
            '--tw-gradient-stops': 'var(--tw-gradient-from), rgb(20, 184, 166), var(--tw-gradient-to)',
          } as React.CSSProperties}
        ></motion.div>
      </div>
    </div>
  );
};

export default SkillBar;