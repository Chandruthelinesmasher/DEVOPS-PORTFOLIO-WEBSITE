import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Card } from '../ui/Card';
import { SectionTitle } from '../ui/SectionTitle';
import { projectsData } from '../../data/projectsData';

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Featured Projects</SectionTitle>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projectsData.map(project => (
            <Card key={project.id} className="group">
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(tech => (
                  <span 
                    key={tech} 
                    className="px-2 py-1 bg-blue-500/20 rounded text-xs border border-blue-500/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="space-y-2 mb-4">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-green-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    {metric}
                  </div>
                ))}
              </div>
              
              <a 
                href={project.github} 
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Github size={16} />
                View on GitHub
                <ExternalLink size={16} />
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};