import React from 'react';
import { Github, Linkedin, Mail, Download, Server, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';
import { PERSONAL_INFO, TECH_BADGES } from '../../utils/constants';

export const Hero = ({ onNavigate }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl text-center">
        <div className="mb-6">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <Server size={64} />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          {PERSONAL_INFO.title}
        </h1>
        
        <p className="text-2xl md:text-3xl text-gray-300 mb-4">
          {PERSONAL_INFO.experience}
        </p>
        
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          {PERSONAL_INFO.tagline}
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {TECH_BADGES.map(badge => (
            <span 
              key={badge.name}
              className={`px-4 py-2 bg-${badge.color}-500/20 rounded-full border border-${badge.color}-500/50`}
            >
              {badge.name}
            </span>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Button onClick={() => onNavigate('projects')}>
            View Projects
          </Button>
          <Button variant="secondary" icon={Download}>
            Download Resume
          </Button>
        </div>
        
        <div className="flex gap-6 justify-center mt-8">
          <a href={PERSONAL_INFO.github} className="hover:text-blue-400 transition-colors">
            <Github size={24} />
          </a>
          <a href={PERSONAL_INFO.linkedin} className="hover:text-blue-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-blue-400 transition-colors">
            <Mail size={24} />
          </a>
        </div>
        
        <div className="mt-16 animate-bounce">
          <ChevronDown size={32} className="mx-auto text-gray-400" />
        </div>
      </div>
    </section>
  );
};