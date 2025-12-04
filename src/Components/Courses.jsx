import React from 'react';
import { COURSES } from '../constants';
import { Clock } from 'lucide-react';

const Courses = ({ onCourseSelect }) => {
  return (
    <div className="courses-page bg-light">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Our Courses</h2>
          <p className="section-subtitle">
            Choose from our diverse range of programs designed to elevate your career.
          </p>
        </div>

        <div className="courses-grid">
          {COURSES.map((course) => (
            <div key={course.id} className="course-card">
              <img 
                className="course-img" 
                src={course.imageUrl} 
                alt={course.title} 
                onClick={() => onCourseSelect(course.id)}
                style={{ cursor: 'pointer' }}
              />
              <div className="course-content">
                <p className="course-level">{course.level}</p>
                <h3 
                  className="course-title"
                  onClick={() => onCourseSelect(course.id)}
                  style={{ cursor: 'pointer' }}
                >
                  {course.title}
                </h3>
                <p className="course-desc">{course.description}</p>
                
                <div className="course-meta">
                  <div className="course-meta-item">
                    <Clock size={18} />
                    <span>{course.duration}</span>
                  </div>
                   <div className="course-price">
                    {course.price}
                  </div>
                </div>
                 <button 
                    className="course-btn"
                    onClick={() => onCourseSelect(course.id)}
                 >
                    View Details
                 </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;