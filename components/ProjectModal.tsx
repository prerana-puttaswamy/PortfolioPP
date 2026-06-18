'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-3xl bg-surface border border-border rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
          >
            {/* Header / Gradient */}
            <div className={`h-24 sm:h-32 bg-gradient-to-r ${project.gradient} relative flex-shrink-0`}>
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white">{project.title}</h2>
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-background border border-border rounded-lg text-white hover:border-accent transition-colors w-full md:w-fit"
                  >
                    <Github size={16} />
                    <span className="text-sm font-medium">View Code</span>
                  </a>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-background border border-border text-xs text-accent font-mono">
                    {t}
                  </span>
                ))}
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xs sm:text-sm uppercase tracking-wider text-secondary font-semibold mb-3">Overview</h3>
                  <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                    {project.fullDescription}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xs sm:text-sm uppercase tracking-wider text-secondary font-semibold mb-3">Key Features</h3>
                    <ul className="space-y-3">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-400">
                          <CheckCircle2 size={16} className="text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-6">
                     {project.approach && (
                       <div>
                         <h3 className="text-xs sm:text-sm uppercase tracking-wider text-secondary font-semibold mb-2">Technical Approach</h3>
                         <p className="text-sm text-gray-400 leading-relaxed">{project.approach}</p>
                       </div>
                     )}
                     {project.impact && (
                       <div>
                         <h3 className="text-xs sm:text-sm uppercase tracking-wider text-secondary font-semibold mb-2">Impact</h3>
                         <p className="text-sm text-gray-400 leading-relaxed">{project.impact}</p>
                       </div>
                     )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;