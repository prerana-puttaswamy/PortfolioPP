'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import ProjectModal from './ProjectModal';
import { ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16 sm:py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-white"
          >
            Featured Projects
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-secondary text-sm sm:text-base"
          >
            A selection of technical endeavors
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-surface rounded-2xl border border-border overflow-hidden relative hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Thumbnail Area - Abstract Gradient */}
              <div className={`h-40 sm:h-48 w-full bg-gradient-to-br ${project.gradient} opacity-90 sm:opacity-80 group-hover:opacity-100 transition-opacity duration-300 relative`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-md p-2 rounded-full opacity-100 sm:opacity-0 group-hover:opacity-100 transform sm:translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight size={18} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-secondary text-xs sm:text-sm mb-6 line-clamp-2">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] sm:text-xs font-mono text-gray-400 bg-background px-2 py-1 rounded border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-[10px] sm:text-xs font-mono text-gray-500 py-1 px-1">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;