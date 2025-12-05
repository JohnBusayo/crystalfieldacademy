import React from 'react';
import { GraduationCap } from 'lucide-react';
import { PageView } from '../types';

const Footer = ({ onNavigate }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-brand">
               <GraduationCap size={32} style={{marginRight: '0.5rem', color: '#818cf8'}} />
               <span>Crystal Field</span>
            </div>
            <p className="footer-desc">
              Empowering the next generation of leaders with crystal clear education and guidance.
            </p>
          </div>
          
          <div>
            <h3 className="footer-heading">Academy</h3>
            <ul className="footer-links">
              <li><button onClick={() => onNavigate(PageView.ABOUT)} className="footer-link">About Us</button></li>
              <li><button onClick={() => onNavigate(PageView.COURSES)} className="footer-link">Courses</button></li>
              <li><button onClick={() => onNavigate(PageView.CONTACT)} className="footer-link">Admissions</button></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Support</h3>
            <ul className="footer-links">
              <li className="footer-link">FAQ</li>
              <li className="footer-link">Student Portal</li>
              <li><button onClick={() => onNavigate(PageView.CONTACT)} className="footer-link">Contact Support</button></li>
            </ul>
          </div>

          <div>
             <h3 className="footer-heading">Legal</h3>
            <ul className="footer-links">
              <li className="footer-link">Privacy Policy</li>
              <li className="footer-link">Terms of Service</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Crystal Field Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
