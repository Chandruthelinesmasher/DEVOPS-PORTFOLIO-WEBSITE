import React from 'react';
import { NAV_ITEMS } from '../../utils/constants';
import { useScrollPosition } from '../../hooks/useScrollPosition';

export const Navbar = ({ activeSection, onNavigate }) => {
  const { isScrolled } = useScrollPosition();

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      {/* Full width container instead of max-w-6xl */}
      <div className="w-full px-6 py-4">
        <div className="flex items-center justify-between w-full">

          {/* Left Corner */}
          <div className="flex flex-col leading-tight text-left">
            <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Chandru K
            </span>
            <span className="text-sm text-gray-400 tracking-wide">
              DevOps Engineer | AWS • Azure • Docker • Kubernetes • CI/CD
            </span>
          </div>

          {/* Right Corner */}
          <div className="hidden md:flex gap-8">
            {NAV_ITEMS.map((section) => (
              <button
                key={section}
                onClick={() => onNavigate(section)}
                className={`capitalize font-semibold transition-colors ${
                  activeSection === section
                    ? 'text-blue-400'
                    : 'hover:text-blue-400 text-gray-300'
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
