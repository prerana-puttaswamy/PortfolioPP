import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Server, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
        >
          <div className="md:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">About Me</h2>
            <div className="text-secondary space-y-4 text-base leading-relaxed">
              <p>
                I am a software engineer driven by the challenge of building scalable backends and the creativity of designing intuitive products. My journey began with a curiosity for how data moves across the globe, which evolved into a passion for distributed systems and API design.
              </p>
              <p>
                I hold a Master's in Computer Science from <span className="text-white font-medium">CSULB</span> (Class of 2026, GPA 3.5), where I focused on advanced algorithms, distributed systems, and system architecture, building on a Bachelor of Engineering in Computer Science from Visvesvaraya Technological University in India (GPA 3.8).
              </p>
              <p>
                Along the way, I've published peer-reviewed research on real-time sign language translation using deep learning, and I bring that same rigor to building production-grade backend systems.
              </p>
              <p>
                When I'm not in front of a screen, I'm usually planning my next trip, trying out a new recipe in the kitchen, or unwinding with music. I believe the best engineering solutions come from understanding the 'why' behind the 'what'.
              </p>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8 hover:border-accent/50 transition-colors duration-300">
              <h3 className="text-white font-semibold text-lg mb-6">Quick Overview</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="p-2 bg-background rounded-lg text-accent">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">MS Computer Science</p>
                    <p className="text-secondary text-xs">CSULB · Class of 2026</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-2 bg-background rounded-lg text-accent">
                    <Briefcase size={18} />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Ex-Software Engineer Intern</p>
                    <p className="text-secondary text-xs">Hewlett Packard Enterprise</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-2 bg-background rounded-lg text-accent">
                    <Server size={18} />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Focus Areas</p>
                    <p className="text-secondary text-xs">Backend • APIs • Distributed Systems</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-2 bg-background rounded-lg text-accent">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Location</p>
                    <p className="text-secondary text-xs">Long Beach, CA</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-12">
            <p className="text-secondary text-xs uppercase tracking-wider font-medium mb-4">A few moments along the way</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl overflow-hidden border border-border aspect-square group">
                <img
                  src="/prerana_img1.jpeg"
                  alt="Prerana Puttaswamy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-border aspect-square group">
                <img
                  src="/prerana_grad1.jpeg"
                  alt="Prerana Puttaswamy throwing her cap at CSULB graduation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-border aspect-square group">
                <img
                  src="/prerana_grad2.jpeg"
                  alt="Prerana Puttaswamy celebrating her graduation at CSULB"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;