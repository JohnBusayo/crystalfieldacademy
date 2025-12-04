import React, { useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { PageView } from '../types';

const Navbar = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', value: PageView.HOME },
    { label: 'Courses', value: PageView.COURSES },
    { label: 'About Us', value: PageView.ABOUT },
    { label: 'Contact', value: PageView.CONTACT },
  ];

  const handleNavClick = (value) => {
    onNavigate(value);
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="nav-brand" onClick={() => handleNavClick(PageView.HOME)}>
          <GraduationCap size={32} />
          <span>Crystal Field Academy</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="nav-links">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => handleNavClick(item.value)}
              className={`nav-link ${currentPage === item.value ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => handleNavClick(PageView.COURSES)}
            className="nav-cta"
          >
            Enroll Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-toggle">
          <button
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="mobile-menu">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`mobile-nav-link ${currentPage === item.value ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;