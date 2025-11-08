import React from 'react';
import { NAV_ITEMS } from '../../utils/constants';
import { useScrollPosition } from '../../hooks/useScrollPosition';

export const Navbar = ({ activeSection, onNavigate }) => {
  const { isScrolled } = useScrollPosition();

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            DevOps Engineer
          </div>
          <div className="hidden md:flex gap-8">
            {NAV_ITEMS.map(section => (
              <button
                key={section}
                onClick={() => onNavigate(section)}
                className={`capitalize transition-colors ${
                  activeSection === section ? 'text-blue-400' : 'hover:text-blue-400'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};