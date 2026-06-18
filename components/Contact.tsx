import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Download } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="py-16 sm:py-24 px-6 relative border-t border-border/50">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Let's Connect</h2>
          <p className="text-secondary text-base sm:text-lg mb-8">
            Open to PM and SDE opportunities. Let's build something great together.
          </p>

          {/* Desktop: email • phone • LinkedIn in one row | Mobile: email + phone stacked */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
             <a
               href="mailto:prerana22002@gmail.com"
               className="flex items-center gap-2 text-white hover:text-accent transition-colors text-sm sm:text-base"
             >
               <Mail size={18} />
               <span>prerana22002@gmail.com</span>
             </a>
             <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-border" />
             <a
               href="tel:+15628325577"
               className="flex items-center gap-2 text-white hover:text-accent transition-colors text-sm sm:text-base"
             >
               <Phone size={18} />
               <span>+1 (562) 832-5577</span>
             </a>
             {/* LinkedIn icon — desktop only in this row */}
             <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-border" />
             <a
               href="https://www.linkedin.com/in/prerana-puttaswamy-a07836224/"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="LinkedIn"
               className="hidden sm:flex p-3 rounded-full bg-surface border border-border text-secondary hover:text-white hover:border-accent hover:-translate-y-1 transition-all"
             >
               <Linkedin size={20} />
             </a>
          </div>

          {/* Mobile: LinkedIn icon + Download Resume on same line | Desktop: Download Resume only */}
          <div className="flex items-center justify-center gap-4">
            {/* LinkedIn icon — mobile only */}
            <a
              href="https://www.linkedin.com/in/prerana-puttaswamy-a07836224/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="sm:hidden p-3 rounded-full bg-surface border border-border text-secondary hover:text-white hover:border-accent hover:-translate-y-1 transition-all"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-secondary hover:text-white hover:border-white transition-colors text-sm sm:text-base"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </a>
          </div>
        </motion.div>

        <div className="border-t border-border pt-8 text-center text-secondary text-xs sm:text-sm">
          <p>© 2025 Prerana Puttaswamy • Built with React & Tailwind</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;