import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, Download, Code, Server, Cloud, Activity, ChevronDown, ExternalLink, Award, Briefcase, GraduationCap } from 'lucide-react';

export default function DevOpsPortfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    'CI/CD': ['Jenkins', 'GitLab CI', 'GitHub Actions', 'ArgoCD', 'CircleCI'],
    'Cloud': ['AWS', 'Azure', 'GCP', 'Digital Ocean'],
    'Containers': ['Docker', 'Kubernetes', 'Helm', 'Podman'],
    'IaC': ['Terraform', 'Ansible', 'CloudFormation', 'Pulumi'],
    'Monitoring': ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog', 'New Relic'],
    'Scripting': ['Python', 'Bash', 'PowerShell', 'Go']
  };

  const projects = [
    {
      title: 'Multi-Cloud CI/CD Pipeline',
      description: 'Implemented end-to-end CI/CD pipeline for microservices deployment across AWS and Azure',
      tech: ['Jenkins', 'Docker', 'Kubernetes', 'Terraform', 'AWS', 'Azure'],
      metrics: ['70% faster deployments', '99.9% uptime', '40% cost reduction'],
      github: '#'
    },
    {
      title: 'Kubernetes Auto-Scaling Infrastructure',
      description: 'Built automated scaling solution handling 10K+ concurrent users with zero downtime',
      tech: ['Kubernetes', 'Helm', 'Prometheus', 'HPA', 'AWS EKS'],
      metrics: ['10K+ users handled', 'Zero downtime', '50% cost optimization'],
      github: '#'
    },
    {
      title: 'Infrastructure Monitoring Dashboard',
      description: 'Created comprehensive monitoring solution with real-time alerts and visualization',
      tech: ['Grafana', 'Prometheus', 'ELK Stack', 'Python', 'Alertmanager'],
      metrics: ['95% faster incident detection', '24/7 monitoring', '100+ metrics tracked'],
      github: '#'
    },
    {
      title: 'Infrastructure as Code Automation',
      description: 'Automated infrastructure provisioning reducing manual effort by 80%',
      tech: ['Terraform', 'Ansible', 'Python', 'AWS', 'GitOps'],
      metrics: ['80% time saved', 'Fully automated', 'Zero config drift'],
      github: '#'
    }
  ];

  const experience = [
    {
      role: 'Senior DevOps Engineer',
      company: 'Tech Company',
      period: '2023 - Present',
      achievements: [
        'Led infrastructure migration to Kubernetes saving ₹5L annually',
        'Implemented GitOps workflows improving deployment speed by 60%',
        'Mentored 3 junior engineers on DevOps best practices'
      ]
    },
    {
      role: 'DevOps Engineer',
      company: 'Previous Company',
      period: '2022 - 2023',
      achievements: [
        'Built CI/CD pipelines for 15+ microservices',
        'Reduced deployment failures by 75% through automated testing',
        'Managed AWS infrastructure serving 100K+ daily users'
      ]
    }
  ];

  const certifications = [
    'AWS Certified Solutions Architect',
    'Certified Kubernetes Administrator (CKA)',
    'HashiCorp Certified: Terraform Associate',
    'Docker Certified Associate'
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              DevOps Engineer
            </div>
            <div className="hidden md:flex gap-8">
              {['home', 'skills', 'projects', 'experience', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="capitalize hover:text-blue-400 transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl text-center">
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              <Server size={64} />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            DevOps Engineer
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-4">
            3+ Years Experience
          </p>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Building Scalable Infrastructure | Automating Deployments | Cloud Architecture
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <span className="px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/50">AWS</span>
            <span className="px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/50">Kubernetes</span>
            <span className="px-4 py-2 bg-green-500/20 rounded-full border border-green-500/50">CI/CD</span>
            <span className="px-4 py-2 bg-orange-500/20 rounded-full border border-orange-500/50">Terraform</span>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              View Projects
            </button>
            <button className="px-8 py-3 bg-white/10 backdrop-blur-sm rounded-lg font-semibold hover:bg-white/20 transition-all flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
          </div>
          <div className="flex gap-6 justify-center mt-8">
            <a href="#" className="hover:text-blue-400 transition-colors"><Github size={24} /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin size={24} /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><Mail size={24} /></a>
          </div>
          <div className="mt-16 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-gray-400" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                    {category === 'CI/CD' && <Code size={20} />}
                    {category === 'Cloud' && <Cloud size={20} />}
                    {category === 'Containers' && <Server size={20} />}
                    {category === 'IaC' && <Activity size={20} />}
                    {category === 'Monitoring' && <Activity size={20} />}
                    {category === 'Scripting' && <Code size={20} />}
                  </div>
                  <h3 className="text-xl font-semibold">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all group">
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-blue-500/20 rounded text-xs border border-blue-500/50">
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
                <a href={project.github} className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                  <Github size={16} />
                  View on GitHub
                  <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Work Experience</h2>
          <div className="space-y-8">
            {experience.map((job, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                    <Briefcase size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold">{job.role}</h3>
                    <p className="text-purple-400">{job.company}</p>
                    <p className="text-gray-400 text-sm">{job.period}</p>
                  </div>
                </div>
                <ul className="space-y-2 ml-16">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <span className="text-green-400 mt-1">▸</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg">
                <Award size={24} />
              </div>
              <h3 className="text-2xl font-semibold">Certifications</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-center gap-2 text-gray-300">
                  <GraduationCap size={18} className="text-yellow-400" />
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-gray-400 mb-8">
            Open to opportunities in Bangalore | Target: 15 LPA
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a href="mailto:your.email@example.com" className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all">
              <Mail size={20} />
              your.email@example.com
            </a>
            <a href="tel:+919876543210" className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all">
              <Phone size={20} />
              +91 98765 43210
            </a>
          </div>
          <div className="flex gap-6 justify-center mt-8">
            <a href="#" className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all">
              <Github size={24} />
            </a>
            <a href="#" className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2025 DevOps Engineer Portfolio. Built with React & Tailwind CSS</p>
          <p className="text-sm mt-2">Deployed on AWS | Monitored with CloudWatch</p>
        </div>
      </footer>
    </div>
  );
}