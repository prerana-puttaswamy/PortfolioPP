import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronDown, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-[100dvh] flex flex-col justify-center relative overflow-hidden px-6 pt-24 pb-12 sm:pt-0 sm:pb-0 sm:justify-center">
      {/* Background ambient glow - subdued on mobile */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 sm:w-96 sm:h-96 bg-accent/10 sm:bg-accent/20 rounded-full blur-[80px] sm:blur-[120px] animate-blob pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-[80px] sm:blur-[120px] animate-blob animation-delay-2000 pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        
        {/* Mobile: Image appears first for strong visual identity */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex justify-center lg:justify-end lg:order-2 order-1"
        >
          <div className="relative">
             {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-accent blur-[50px] opacity-20 rounded-2xl scale-90"></div>
            
            {/* Image Container - Landscape/Wide - Increased mobile width */}
            <div className="relative w-80 h-52 sm:w-96 sm:h-64 lg:w-[28rem] lg:h-[18.5rem] rounded-2xl border border-white/10 bg-surface shadow-2xl overflow-hidden ring-1 ring-white/5">
              <img
                src="/prerana_img1.jpeg"
                alt="Prerana Puttaswamy"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
              />
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8 lg:order-1 order-2"
        >
          <div className="space-y-4 w-full">
            
            {/* Role/Status Badge */}
            <div className="flex justify-center lg:justify-start">
                <span className="px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[11px] sm:text-xs font-mono tracking-wider uppercase">
                   Software Engineer & DevOps Enthusiast
                </span>
            </div>

            {/* Name - High contrast, tight tracking */}
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1]">
              Prerana <br className="hidden lg:block" />
              <span className="text-secondary/60 lg:text-secondary">Puttaswamy</span>
            </h1>

            {/* Tagline & Description */}
            <div className="space-y-4 max-w-lg mx-auto lg:mx-0">
              <p className="text-base sm:text-xl text-white font-medium">
                Software Engineer & DevOps Enthusiast
              </p>
              <p className="text-secondary text-sm sm:text-base leading-relaxed font-light">
                I love building backend systems that just work, and getting them running reliably is half the fun. Currently looking for full-time SWE roles where I can keep doing both.
              </p>
            </div>
          </div>

          {/* CTA Buttons - Professional High Contrast */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
            <a 
              href="#contact" 
              className="h-14 sm:h-12 px-8 rounded-xl bg-white text-black font-semibold text-[15px] sm:text-sm transition-all duration-300 hover:bg-gray-200 flex items-center justify-center gap-2 hover:-translate-y-0.5 shadow-lg shadow-white/5"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 sm:h-12 px-8 rounded-xl border border-white/10 bg-white/5 text-white font-medium text-[15px] sm:text-sm hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5 backdrop-blur-sm"
            >
              Resume
              <Download className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator (Hidden on Mobile) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-secondary/50"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;