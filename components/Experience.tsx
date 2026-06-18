import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-white mb-10"
        >
          Experience
        </motion.h2>

        <div className="space-y-6">
          {EXPERIENCE.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface border border-border rounded-2xl p-6 sm:p-8 hover:shadow-lg hover:shadow-accent/5 hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-accent transition-colors">
                    {exp.role}
                  </h3>
                  <h4 className="text-base sm:text-lg text-secondary font-medium mt-1">
                    {exp.company}
                  </h4>
                </div>
                <div className="text-left md:text-right mt-2 md:mt-0">
                  <span className="inline-block py-1 px-3 rounded-full bg-background border border-border text-xs font-mono text-secondary">
                    {exp.duration}
                  </span>
                  <p className="text-xs text-secondary mt-2 flex items-center md:justify-end gap-1">
                    {exp.location}
                  </p>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-secondary/90 text-sm sm:text-base">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-background rounded text-xs font-mono text-secondary border border-border/50 group-hover:border-accent/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;