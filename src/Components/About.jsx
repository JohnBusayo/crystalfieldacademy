import React from 'react';
import { TEAM } from '../constants';
import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Mission Section */}
      <div className="about-section">
        <div className="container">
            <h2 className="section-title">About Crystal Field Academy</h2>
            <p className="section-subtitle">
            Founded in 2010, Crystal Field Academy was born from a simple idea: that education should be clear, accessible, and transformative.
            </p>
            
            <div className="mission-grid">
                <div>
                    <div className="mission-icon">
                        <Target size={24} />
                    </div>
                    <h3 className="mission-title">Our Mission</h3>
                    <p className="text-muted">To empower individuals with the skills they need to thrive in a rapidly evolving digital world.</p>
                </div>
                <div>
                    <div className="mission-icon">
                        <Eye size={24} />
                    </div>
                    <h3 className="mission-title">Our Vision</h3>
                    <p className="text-muted">A world where quality education is the cornerstone of personal and professional success for everyone.</p>
                </div>
                <div>
                    <div className="mission-icon">
                        <Heart size={24} />
                    </div>
                    <h3 className="mission-title">Our Values</h3>
                    <p className="text-muted">Integrity, Excellence, Innovation, and Community are at the heart of everything we do.</p>
                </div>
            </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <div className="container">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
            Our dedicated professionals are here to guide you every step of the way.
            </p>
            
            <div className="team-grid">
              {TEAM.map((person) => (
                <div key={person.id} className="team-card">
                  <img className="team-img" src={person.imageUrl} alt={person.name} />
                  <div className="team-info">
                      <h3 className="team-name">{person.name}</h3>
                      <p className="team-role">{person.role}</p>
                      <p className="team-bio">{person.bio}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;