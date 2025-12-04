import React from 'react';
import { BookOpen, Users, Award } from 'lucide-react';
import { PageView } from '../types';

const Hero = ({ onNavigate }) => {
  return (
    <div className="hero">
      <div className="hero-wrapper">
        <div className="hero-content">
          <h1 className="hero-title">
            Refine your skills at <br/>
            <span>Crystal Field Academy</span>
          </h1>
          <p className="hero-description">
            Unlock your potential with our world-class courses. We provide a crystal-clear path to career success through practical learning and expert mentorship.
          </p>
          <div className="hero-actions">
            <button
              onClick={() => onNavigate(PageView.COURSES)}
              className="btn btn-primary"
            >
              Explore Courses
            </button>
            <button
              onClick={() => onNavigate(PageView.ABOUT)}
              className="btn btn-secondary"
            >
              About Us
            </button>
          </div>
        </div>
        
        <div className="hero-image-container">
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
            alt="Students collaborating"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="features">
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">
              <BookOpen size={24} />
            </div>
            <h3 className="feature-title">Expert Curriculum</h3>
            <p className="feature-desc">
              Our courses are designed by industry leaders to provide relevant and up-to-date knowledge.
            </p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <Users size={24} />
            </div>
            <h3 className="feature-title">Community Focus</h3>
            <p className="feature-desc">
              Join a vibrant community of learners and mentors supporting each other's growth.
            </p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <Award size={24} />
            </div>
            <h3 className="feature-title">Certified Excellence</h3>
            <p className="feature-desc">
              Earn recognized certificates that validate your skills and boost your professional profile.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;