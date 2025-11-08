import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';

const CONTACT_INFO = {
  email: 'chandrukumaravel007@gmail.com',
  linkedin: 'https://www.linkedin.com/in/chandru-k-cloud-20-conqueror03/',
  github: 'https://github.com/Chandruthelinesmasher',
};

const SOCIAL_LINKS = [
  {
    icon: Mail,
    href: `mailto:${CONTACT_INFO.email}`,
    label: 'Send Email',
  },
  {
    icon: Github,
    href: CONTACT_INFO.github,
    label: 'GitHub Profile',
  },
  {
    icon: Linkedin,
    href: CONTACT_INFO.linkedin,
    label: 'LinkedIn Profile',
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-black/20">
      <div className="max-w-4xl mx-auto text-center">
        <SectionTitle>Let's Connect</SectionTitle>

        {/* Social Icons */}
        <div className="flex gap-6 justify-center mt-8">
          {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
              aria-label={label}
            >
              <Icon size={28} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
