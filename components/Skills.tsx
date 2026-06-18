import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 sm:py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-white mb-10"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SKILL_CATEGORIES.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-surface border border-border p-5 sm:p-6 rounded-2xl hover:border-accent/50 transition-colors duration-300 group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-lg bg-background text-accent group-hover:scale-110 transition-transform duration-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1.5 bg-background border border-border rounded-lg text-xs sm:text-sm text-secondary font-medium group-hover:text-white group-hover:border-accent/30 transition-all duration-300 hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;